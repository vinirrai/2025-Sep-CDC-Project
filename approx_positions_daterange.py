#!/usr/bin/env python3
"""
approx_positions_daterange.py
Compute APPROXIMATE satellite positions for a past date range using the *latest*
TLEs from the ivanstanojevic.me API (no historical archive). Good for visuals,
NOT for precise analysis over multi-week rewind.

- Fetches the first N satellites via /api/tle/?page=...
- Propagates each to 12:00:00 UTC for every date in [--start, --end] inclusive
- Saves CSV (and optional PNG plot)

Caveat: Using today's/latest TLEs to back-propagate ~3–4 weeks can be off by
tens to hundreds of km (or worse) for some LEOs. For accurate past positions,
use historical TLEs (e.g., CelesTrak special request or Space-Track).

Refs:
- ivanstanojevic API = latest TLEs only (updated daily from CelesTrak)
- CelesTrak archives beyond some legacy sets require a special data request
"""
import argparse
import sys
import time
from datetime import datetime, date, timedelta, timezone
from typing import Any, Dict, Iterable, List, Optional
from urllib.parse import urlparse, urlunparse

import requests
import pandas as pd
from skyfield.api import wgs84, load
from skyfield.sgp4lib import EarthSatellite

# --------------------- Config ---------------------
API_BASE = "https://tle.ivanstanojevic.me"
USER_AGENT = "approx-positions-daterange/1.0 (Python requests)"
PAGE_DELAY = 0.15  # seconds between pages, be gentle

# --------------------- Helpers --------------------
def iso_noon_utc(d: date) -> datetime:
    return datetime(d.year, d.month, d.day, 12, 0, 0, tzinfo=timezone.utc)

def safe_json(resp: requests.Response) -> Any:
    resp.raise_for_status()
    try:
        return resp.json()
    except Exception as e:
        raise RuntimeError(f"Non-JSON from {resp.url}: {resp.text[:200]!r}") from e

def normalize(item: Dict[str, Any]) -> Dict[str, Any]:
    name = item.get("name") or item.get("satellite_name") or item.get("OBJECT_NAME") or ""
    norad = (item.get("id") or item.get("norad_cat_id") or item.get("NORAD_CAT_ID")
             or item.get("satelliteId") or item.get("satellite_id") or "")
    line1 = item.get("line1") or item.get("LINE1") or ""
    line2 = item.get("line2") or item.get("LINE2") or ""
    updated = item.get("date") or item.get("updated") or item.get("EPOCH") or item.get("epoch") or ""
    return {
        "name": str(name),
        "norad_id": str(norad),
        "line1": str(line1).strip(),
        "line2": str(line2).strip(),
        "provider_timestamp": str(updated),
        "fetched_at_utc": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    }

def _replace_base(full_url: str, new_base: str) -> str:
    u = urlparse(full_url)
    b = urlparse(new_base)
    return urlunparse((b.scheme, b.netloc, u.path, "", u.query, ""))

def fetch_first_n_latest(first_n: int, base: str = API_BASE, delay: float = PAGE_DELAY) -> List[Dict[str, Any]]:
    """Page /api/tle/?page=X, follow view.next, accumulate first_n normalized rows."""
    s = requests.Session()
    s.headers.update({"User-Agent": USER_AGENT, "Accept": "application/json"})

    out: List[Dict[str, Any]] = []
    next_url = f"{base.rstrip('/')}/api/tle/?page=1"
    pages = 0

    while next_url and len(out) < first_n:
        try:
            r = s.get(next_url, timeout=30)
            data = safe_json(r)
        except Exception as e:
            # Try protocol swap (https<->http) once
            fb = "http://" + base.split("://", 1)[1] if base.startswith("https://") else "https://" + base.split("://", 1)[1]
            alt = _replace_base(next_url, fb)
            sys.stderr.write(f"[INFO] Page fetch failed ({e}). Retrying via {alt}\n")
            r = s.get(alt, timeout=30)
            data = safe_json(r)
            next_url = alt  # continue on alt scheme

        pages += 1
        members = data.get("member", []) if isinstance(data, dict) else (data if isinstance(data, list) else [])
        rows = [normalize(m) for m in members if isinstance(m, dict)]
        take = min(first_n - len(out), len(rows))
        out.extend(rows[:take])
        sys.stderr.write(f"[INFO] Page {pages}: took {take} (total {len(out)}/{first_n})\n")

        # Follow view.next
        next_link = None
        if isinstance(data, dict) and isinstance(data.get("view"), dict):
            next_link = data["view"].get("next")
        if not next_link or len(out) >= first_n:
            break

        # Keep same scheme if we swapped
        base_scheme = urlparse(next_url).scheme + "://" + urlparse(next_url).netloc
        if next_link.startswith("https://") or next_link.startswith("http://"):
            next_url = _replace_base(next_link, base_scheme)
        else:
            next_url = base_scheme.rstrip("/") + next_link

        if delay:
            time.sleep(delay)

    return out

def propagate_positions(tles: List[Dict[str, Any]], days: List[date]) -> Iterable[Dict[str, Any]]:
    """Propagate each TLE to 12:00 UTC for each date (approximate back-prop)."""
    ts = load.timescale()
    for t in tles:
        line1, line2 = t["line1"], t["line2"]
        if not line1 or not line2:
            continue
        try:
            sat = EarthSatellite(line1, line2, name=t["name"], ts=ts)
        except Exception:
            continue
        for d in days:
            try:
                tt = iso_noon_utc(d)
                t_sf = ts.utc(tt.year, tt.month, tt.day, tt.hour, tt.minute, tt.second)
                sp = wgs84.subpoint(sat.at(t_sf))
                yield {
                    "date_utc": d.isoformat(),
                    "timestamp_utc": tt.isoformat(),
                    "norad_id": t["norad_id"],
                    "name": t["name"],
                    "lat_deg": float(sp.latitude.degrees),
                    "lon_deg": float((((sp.longitude.degrees + 180) % 360) - 180)),
                    "alt_km": float(sp.elevation.km),
                    "tle_provider_timestamp": t["provider_timestamp"],
                    "tle_fetched_at_utc": t["fetched_at_utc"],
                }
            except Exception:
                continue

def parse_date(s: str) -> date:
    return datetime.strptime(s, "%Y-%m-%d").date()

def main():
    ap = argparse.ArgumentParser(description="Approx positions at 12:00 UTC for a past date range using *latest* TLEs (no Space-Track).")
    ap.add_argument("--start", default="2025-08-20", help="Start date YYYY-MM-DD (inclusive)")
    ap.add_argument("--end",   default="2025-08-27", help="End date YYYY-MM-DD (inclusive)")
    ap.add_argument("--first-n", type=int, default=200, help="How many satellites to fetch from the catalog")
    ap.add_argument("--csv", default="approx_aug20_27.csv", help="Output CSV path")
    ap.add_argument("--plot", default=None, help="Optional PNG path to save a quick lon/lat plot")
    args = ap.parse_args()

    start_d = parse_date(args.start)
    end_d   = parse_date(args.end)
    if end_d < start_d:
        print("End date must be >= start date.", file=sys.stderr); sys.exit(2)
    days = [start_d + timedelta(days=i) for i in range((end_d - start_d).days + 1)]

    print(f"Fetching latest TLEs for first {args.first_n} satellites...")
    tles = fetch_first_n_latest(args.first_n)
    if not tles:
        print("No TLEs fetched.", file=sys.stderr); sys.exit(3)

    print(f"Propagating to 12:00 UTC for {len(days)} day(s): {days[0]} -> {days[-1]}")
    rows = list(propagate_positions(tles, days))
    if not rows:
        print("No positions produced.", file=sys.stderr); sys.exit(4)

    df = pd.DataFrame(rows)
    df.to_csv(args.csv, index=False)
    print(f"Saved CSV: {args.csv} ({len(df):,} rows)")

    if args.plot:
        import matplotlib.pyplot as plt
        plt.figure(figsize=(10,6))
        for sat, grp in df.groupby("norad_id"):
            g = grp.sort_values("date_utc")
            plt.plot(g["lon_deg"].values, g["lat_deg"].values, marker="o", linewidth=1, alpha=0.7)
        plt.xlabel("Longitude (deg)")
        plt.ylabel("Latitude (deg)")
        plt.title(f"Approx locations at 12:00 UTC ({args.start}→{args.end}) using latest TLEs")
        plt.grid(True)
        plt.tight_layout()
        plt.savefig(args.plot, dpi=150)
        print(f"Saved plot: {args.plot}")

if __name__ == "__main__":
    main()
