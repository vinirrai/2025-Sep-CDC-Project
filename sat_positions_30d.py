#!/usr/bin/env python3
"""
sat_positions_30d.py
--------------------
Fetches historical TLEs for the full catalog from Space-Track.org and computes
each satellite's geodetic location (lat, lon, alt_km) at 12:00:00 UTC for the
past 30 days. Saves results to Parquet (and optionally CSV).

Why Space-Track?
- The ivanstanojevic.me TLE API only serves today's/latest TLEs. To compute
  past positions reliably, you need historical TLEs. Space-Track's GP/GP_History
  (and legacy TLE class) provide that history.

Prereqs:
- Free Space-Track account: https://www.space-track.org
- Env vars: SPACETRACK_USER, SPACETRACK_PASS
- Python packages: requests, pandas, numpy, pyarrow, skyfield, sgp4, tqdm, tenacity

Install deps:
  pip install -U requests pandas numpy pyarrow skyfield sgp4 tqdm tenacity

Usage:
  export SPACETRACK_USER="you@example.com"
  export SPACETRACK_PASS="your_password"
  python sat_positions_30d.py --parquet positions_30d.parquet --csv positions_30d.csv

Notes:
- This job is large (≈600k propagations). Runtime depends on your machine and network.
- Respect Space-Track API usage policies. Use backoff and chunk your queries.
"""
import os
import sys
import time
import argparse
from datetime import datetime, timedelta, timezone
from typing import Dict, List, Tuple, Any, Iterable

import numpy as np
import pandas as pd
import requests
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
from tqdm import tqdm

from skyfield.api import wgs84, load
from skyfield.sgp4lib import EarthSatellite

SPACETRACK_LOGIN_URL = "https://www.space-track.org/ajaxauth/login"
SPACETRACK_QUERY_BASE = "https://www.space-track.org/basicspacedata/query"

 # Base windowing (fetch in small day chunks), and conservative paging:
CHUNK_DAYS = 1
MAX_PER_PAGE = int(os.environ.get("SPACETRACK_PAGE", "2000"))
_MIN_SPLIT_WINDOW = timedelta(days=1)  # don't split smaller than 1 day

HEADERS = {"User-Agent": "sat-positions-30d/1.0 (Python requests)"}

class SpaceTrackError(RuntimeError):
    pass

def utc(dt: datetime) -> datetime:
    return dt.replace(tzinfo=timezone.utc)

def day_range(days_back: int = 30) -> Tuple[datetime, datetime]:
    today_utc = datetime(2025, 9, 10, 0, 0, 0, tzinfo=timezone.utc)  # timezone-aware, no deprecation
    end = datetime(2025, 9, 11, 0, 0, 0, tzinfo=timezone.utc) # today 00:00Z
    start = end - timedelta(days=days_back)
    return start, end

def noon_times(start: datetime, end: datetime) -> List[datetime]:
    times = []
    d = start
    while d < end:
        times.append(utc(d + timedelta(hours=12)))
        d += timedelta(days=1)
    return times

@retry(stop=stop_after_attempt(4), wait=wait_exponential(min=1, max=20),
       retry=retry_if_exception_type((requests.RequestException, SpaceTrackError)))
def spacetrack_login(sess: requests.Session, user: str, pw: str) -> None:
    # Use browser-ish headers, attach at the session level so all subsequent calls inherit them.
    sess.headers.update({
        "User-Agent": "sat-positions-30d/1.0 (Python requests)",
        "Referer": "https://www.space-track.org/",
    })

    resp = sess.post(
        SPACETRACK_LOGIN_URL,
        data={"identity": user, "password": pw},
        timeout=30,
        allow_redirects=True,
    )

    # New behavior: HTTP 200 with empty body is normal. Success is indicated by a session cookie.
    if resp.status_code != 200:
        body = resp.text[:300]
        raise SpaceTrackError(f"Login failed (HTTP {resp.status_code}). Body: {body!r}")

    # Must have the auth session cookie, or we’re not actually logged in.
    if not sess.cookies.get("chocolatechip"):
        # One gentle poke (some proxies delay cookie assignment)
        poke = sess.get(
            "https://www.space-track.org/basicspacedata/modeldef/class/tle/format/json",
            timeout=30,
            allow_redirects=True,
        )
        if not sess.cookies.get("chocolatechip"):
            body = resp.text[:300]
            raise SpaceTrackError(
                "Login returned 200 but no session cookie. "
                "Confirm credentials and accept Terms of Use in a browser. "
                f"Body: {body!r}"
            )

@retry(stop=stop_after_attempt(4), wait=wait_exponential(min=1, max=20),
       retry=retry_if_exception_type((requests.RequestException, SpaceTrackError)))
def spacetrack_get_json(sess: requests.Session, path: str, params: Dict[str, Any]) -> Any:
    url = f"{SPACETRACK_QUERY_BASE}/{path}"
    resp = sess.get(url, params=params, timeout=60, allow_redirects=True)

    if resp.status_code == 401:
        raise SpaceTrackError(
            "Query failed (401 Unauthorized). Session likely not authenticated or expired."
        )
    if resp.status_code != 200:
        raise SpaceTrackError(f"Query failed (HTTP {resp.status_code}): {resp.text[:200]}")

    try:
        return resp.json()
    except Exception as e:
        raise SpaceTrackError(f"Non-JSON response: {resp.text[:200]}") from e

def fetch_tle_history(sess: requests.Session, start: datetime, end: datetime) -> List[Dict[str, Any]]:
    """Fetch legacy TLE history (with LINE1/LINE2) for epoch range [start, end).
    Uses smaller pages and recursively splits the date window on HTTP 500 to reduce load.
    """
    rows: List[Dict[str, Any]] = []

    def fetch_window(a: datetime, b: datetime) -> None:
        path = "class/tle/"
        params = {
            "EPOCH": f">{a.strftime('%Y-%m-%d')} <{b.strftime('%Y-%m-%d')}",
            "format": "json",
            "orderby": "NORAD_CAT_ID,EPOCH",
            "limit": MAX_PER_PAGE,
            "offset": 0,
        }
        batch = 0
        while True:
            params["offset"] = batch * MAX_PER_PAGE
            try:
                data = spacetrack_get_json(sess, path, params)
            except SpaceTrackError as e:
                msg = str(e)
                # If server chokes (HTTP 500), split the window and try smaller chunks
                if "HTTP 500" in msg and (b - a) > _MIN_SPLIT_WINDOW:
                    mid = a + (b - a) / 2
                    fetch_window(a, mid)
                    fetch_window(mid, b)
                    return
                raise  # re-raise other errors

            if not data:
                break

            rows.extend(data)

            # If fewer than the page size returned, we reached the end for this window
            if len(data) < MAX_PER_PAGE:
                break

            batch += 1
            time.sleep(0.4)  # be gentle with paging
        time.sleep(0.4)      # be gentle between windows

    # Iterate in base windows to keep responses manageable
    window_start = start
    while window_start < end:
        window_end = min(window_start + timedelta(days=CHUNK_DAYS), end)
        fetch_window(window_start, window_end)
        window_start = window_end

    return rows

def pick_best_tle_per_day(rows: List[Dict[str, Any]], target_times: List[datetime]) -> Dict[Tuple[int, datetime], Dict[str, Any]]:
    by_norad: Dict[int, List[Dict[str, Any]]] = {}
    for r in rows:
        try:
            norad = int(r.get("NORAD_CAT_ID"))
            epoch = datetime.fromisoformat(r["EPOCH"].replace("Z", "+00:00"))
            r["_epoch_dt"] = epoch
        except Exception:
            continue
        by_norad.setdefault(norad, []).append(r)
    for lst in by_norad.values():
        lst.sort(key=lambda x: x["_epoch_dt"])

    out: Dict[Tuple[int, datetime], Dict[str, Any]] = {}
    for norad, lst in tqdm(by_norad.items(), desc="Selecting TLEs", unit="sat"):
        epochs = [x["_epoch_dt"] for x in lst]
        for t in target_times:
            idx = np.searchsorted(epochs, t) - 1
            cand = None
            if idx >= 0:
                cand = lst[idx]
            else:
                if epochs and (epochs[0] - t) <= timedelta(days=1):
                    cand = lst[0]
            if cand is not None:
                out[(norad, t)] = cand
    return out

def propagate_positions(picks: Dict[Tuple[int, datetime], Dict[str, Any]]) -> Iterable[Dict[str, Any]]:
    ts = load.timescale()
    for (norad, t), r in tqdm(picks.items(), desc="Propagating", unit="pos"):
        name = r.get("OBJECT_NAME", "")
        line1 = r.get("TLE_LINE1") or r.get("LINE1")
        line2 = r.get("TLE_LINE2") or r.get("LINE2")
        if not line1 or not line2:
            continue
        try:
            sat = EarthSatellite(line1.strip(), line2.strip(), name=str(name), ts=ts)
            t_sf = ts.utc(t.year, t.month, t.day, t.hour, t.minute, t.second)
            geocentric = sat.at(t_sf)
            subpoint = wgs84.subpoint(geocentric)
            yield {
                "timestamp_utc": t.isoformat(),
                "norad_id": norad,
                "name": name,
                "lat_deg": float(subpoint.latitude.degrees),
                "lon_deg": float(subpoint.longitude.degrees),
                "alt_km": float(subpoint.elevation.km),
            }
        except Exception:
            continue

def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Compute positions for all satellites at 12:00 UTC for the past 30 days.")
    ap.add_argument("--days", type=int, default=30, help="Days back (default 30).")
    ap.add_argument("--parquet", required=True, help="Output Parquet file path.")
    ap.add_argument("--csv", default=None, help="Optional CSV output path.")
    args = ap.parse_args(argv)

    user = os.environ.get("SPACETRACK_USER")
    pw = os.environ.get("SPACETRACK_PASS")
    if not user or not pw:
        print("Please set SPACETRACK_USER and SPACETRACK_PASS environment variables.", file=sys.stderr)
        return 2

    start, end = day_range(args.days)
    target_times = noon_times(start, end)
    print(f"Fetching TLE history from {start.isoformat()} to {end.isoformat()} (UTC).")

    sess = requests.Session()
    spacetrack_login(sess, user, pw)

    rows = fetch_tle_history(sess, start - timedelta(days=1), end + timedelta(days=1))
    if not rows:
        print("No TLE rows returned. Exiting.", file=sys.stderr)
        return 3

    picks = pick_best_tle_per_day(rows, target_times)
    results_iter = propagate_positions(picks)
    df = pd.DataFrame(results_iter)
    if df.empty:
        print("No propagated positions produced. Exiting.", file=sys.stderr)
        return 4

    df["lon_deg"] = ((df["lon_deg"] + 180) % 360) - 180
    df.to_parquet(args.parquet, index=False)
    print(f"Saved Parquet: {args.parquet} ({len(df):,} rows)")

    if args.csv:
        df.to_csv(args.csv, index=False)
        print(f"Saved CSV: {args.csv} ({len(df):,} rows)")

    return 0

if __name__ == "__main__":
    raise SystemExit(main())
