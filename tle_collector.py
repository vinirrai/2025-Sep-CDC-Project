
#!/usr/bin/env python3
"""
tle_collector.py (resilient)
---------------------------
Fetches current TLEs from the ivanstanojevic.me TLE API and appends them to a local
CSV and JSONL. This version adds:
  - Retries with exponential backoff
  - HTTPS/HTTP protocol fallback
  - Customizable base URL, timeout, retries, and backoff
  - User-Agent header to avoid some servers dropping connections
  - Clear diagnostics for common connection issues
  - Safer JSON parsing with helpful error messages

Because this API serves only the *latest* TLEs (updated daily),
you must run this script once per day to build a 30‑day history.

Usage examples:
  python tle_collector.py --norad 25544
  python tle_collector.py --search "ISS" --search "STARLINK"
  python tle_collector.py --norad 25544 --api-key YOUR_KEY
  python tle_collector.py --norad 25544 --csv ./data/tle_history.csv --jsonl ./data/tle_history.jsonl

Advanced:
  python tle_collector.py --norad 25544 --base https://tle.ivanstanojevic.me --retries 5 --backoff 1.5 --timeout 40
  python tle_collector.py --norad 25544 --base http://tle.ivanstanojevic.me   # force HTTP if HTTPS misbehaves
"""
import argparse
import csv
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple

import requests
import time
from urllib.parse import urlparse, urlunparse
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

DEFAULT_API_BASE = os.environ.get("TLE_API_BASE", "https://tle.ivanstanojevic.me")
DEFAULT_TIMEOUT = int(os.environ.get("TLE_TIMEOUT", "20"))
DEFAULT_RETRIES = int(os.environ.get("TLE_RETRIES", "3"))
DEFAULT_BACKOFF = float(os.environ.get("TLE_BACKOFF", "1.0"))

UA = os.environ.get("TLE_USER_AGENT",
                    "tle-collector/1.0 (+https://example.local; Python requests)")


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def build_session(retries: int, backoff: float, timeout: int) -> requests.Session:
    retry_cfg = Retry(
        total=retries,
        connect=retries,
        read=retries,
        status=retries,
        backoff_factor=backoff,
        allowed_methods=frozenset(["GET"]),
        status_forcelist=[429, 500, 502, 503, 504],
        raise_on_status=False,
    )
    adapter = HTTPAdapter(max_retries=retry_cfg)
    s = requests.Session()
    s.headers.update({"User-Agent": UA, "Accept": "application/json"})
    s.timeout = timeout  # not a real requests.Session attr; we pass timeout per request
    s.mount("http://", adapter)
    s.mount("https://", adapter)
    return s


def parse_base_with_fallbacks(base: str) -> Tuple[str, str]:
    """
    Returns (primary_base, fallback_base). If base already includes scheme, we flip it for fallback.
    If no scheme, default to https with http fallback.
    """
    if base.startswith("http://"):
        return base.rstrip("/"), "https://" + base[len("http://"):].rstrip("/")
    if base.startswith("https://"):
        return base.rstrip("/"), "http://" + base[len("https://"):].rstrip("/")
    # No scheme: prefer https, then http
    return "https://" + base.rstrip("/"), "http://" + base.rstrip("/")


def get(session: requests.Session, url: str, params: Optional[Dict[str, Any]] = None,
        api_key: Optional[str] = None, timeout: int = DEFAULT_TIMEOUT) -> requests.Response:
    params = dict(params or {})
    if api_key:
        params.setdefault("api_key", api_key)
    resp = session.get(url, params=params, timeout=timeout)
    resp.raise_for_status()
    return resp


def normalize_item(item: Dict[str, Any]) -> Dict[str, Any]:
    """
    Normalize various possible JSON shapes into a flat record.
    Expected keys commonly seen:
      - name (str)
      - id or norad_cat_id (int/str)
      - line1 (str)
      - line2 (str)
      - date or updated (timestamp-ish) [optional]
    """
    name = item.get("name") or item.get("satellite_name") or item.get("OBJECT_NAME") or ""
    norad = (item.get("id") or item.get("norad_cat_id") or item.get("NORAD_CAT_ID")
             or item.get("satelliteId") or item.get("satellite_id") or "")
    line1 = item.get("line1") or item.get("LINE1") or ""
    line2 = item.get("line2") or item.get("LINE2") or ""
    updated = item.get("date") or item.get("updated") or item.get("EPOCH") or item.get("epoch") or ""

    return {
        "fetched_at_utc": utc_now_iso(),
        "name": str(name),
        "norad_id": str(norad),
        "line1": str(line1).strip(),
        "line2": str(line2).strip(),
        "provider_timestamp": str(updated),
    }


def safe_json(resp: requests.Response) -> Any:
    ct = resp.headers.get("Content-Type", "")
    text = resp.text
    try:
        return resp.json()
    except Exception as e:
        snippet = text[:300].replace("\n", "\\n")
        raise RuntimeError(
            f"Expected JSON but got Content-Type={ct!r}. "
            f"First 300 chars: {snippet!r}. Error: {e}"
        )


def fetch_by_norad(session: requests.Session, base: str, norad: str,
                   api_key: Optional[str], timeout: int,
                   fallback_base: Optional[str] = None) -> Dict[str, Any]:
    # Try primary
    url = f"{base}/api/tle/{norad}"
    try:
        r = get(session, url, api_key=api_key, timeout=timeout)
        data = safe_json(r)
    except Exception as e1:
        if fallback_base:
            url_fb = f"{fallback_base}/api/tle/{norad}"
            sys.stderr.write(f"[INFO] Primary failed ({e1}). Retrying via fallback: {url_fb}\n")
            r = get(session, url_fb, api_key=api_key, timeout=timeout)
            data = safe_json(r)
        else:
            raise

    payload = data.get("tle", data) if isinstance(data, dict) else data
    if isinstance(payload, dict):
        return normalize_item(payload)
    # Unexpected shape; wrap anyway
    return normalize_item({"id": norad, "name": "", "line1": "", "line2": "", "updated": ""})


def fetch_by_search(session: requests.Session, base: str, term: str,
                    api_key: Optional[str], timeout: int,
                    fallback_base: Optional[str] = None) -> List[Dict[str, Any]]:
    url = f"{base}/api/tle"
    try:
        r = get(session, url, params={"search": term}, api_key=api_key, timeout=timeout)
        data = safe_json(r)
    except Exception as e1:
        if fallback_base:
            url_fb = f"{fallback_base}/api/tle"
            sys.stderr.write(f"[INFO] Primary failed ({e1}). Retrying via fallback: {url_fb}\n")
            r = get(session, url_fb, params={"search": term}, api_key=api_key, timeout=timeout)
            data = safe_json(r)
        else:
            raise

    if isinstance(data, dict):
        results = data.get("member")
        if isinstance(results, list):
            return [normalize_item(x) for x in results]
    if isinstance(data, list):
        return [normalize_item(x) for x in data]
    # Unexpected shape
    return []


def append_csv(path: Path, rows: List[Dict[str, Any]]) -> None:
    ensure_parent(path)
    fieldnames = ["fetched_at_utc", "name", "norad_id", "line1", "line2", "provider_timestamp"]
    file_exists = path.exists()
    with path.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        if not file_exists:
            writer.writeheader()
        for row in rows:
            writer.writerow(row)


def append_jsonl(path: Path, rows: List[Dict[str, Any]]) -> None:
    ensure_parent(path)
    with path.open("a", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
def _replace_base(full_url: str, new_base: str) -> str:
    """
    Replace scheme+host of full_url with new_base, keep path+query.
    Example: _replace_base('https://host/api/tle/?page=2', 'http://host')
    """
    u = urlparse(full_url)
    b = urlparse(new_base)
    return urlunparse((b.scheme, b.netloc, u.path, "", u.query, ""))


def fetch_all_iter(session: requests.Session, base: str, api_key: Optional[str],
                   timeout: int, fallback_base: Optional[str],
                   start_page: int = 1, max_pages: Optional[int] = None,
                   delay: float = 0.15):
    """
    Generator yielding lists of normalized rows page-by-page for the entire catalog.
    Follows the 'view.next' link returned by /api/tle.
    """
    # Kick off at the requested page
    next_url = f"{base}/api/tle/?page={start_page}"
    pages_done = 0
    total = 0

    while next_url:
        try:
            r = get(session, next_url, api_key=api_key, timeout=timeout)
            data = safe_json(r)
        except Exception as e1:
            # Try fallback (e.g., HTTP) if provided
            if fallback_base:
                alt_url = _replace_base(next_url, fallback_base)
                sys.stderr.write(f"[INFO] Page fetch failed ({e1}). Retrying via fallback: {alt_url}\n")
                r = get(session, alt_url, api_key=api_key, timeout=timeout)
                data = safe_json(r)
                next_url = alt_url  # keep continuity on this scheme
            else:
                raise

        # Extract items from this page
        members = []
        if isinstance(data, dict):
            members = data.get("member", [])
        elif isinstance(data, list):
            members = data

        rows = [normalize_item(m) for m in members if isinstance(m, dict)]
        total += len(rows)
        pages_done += 1
        sys.stderr.write(f"[INFO] Page {pages_done}: fetched {len(rows)} rows (cumulative {total})\n")
        yield rows

        # Follow the 'next' link if present
        next_link = None
        if isinstance(data, dict) and isinstance(data.get("view"), dict):
            next_link = data["view"].get("next")

        if next_link:
            # Keep base consistent if we switched schemes
            if base.startswith("http://") and next_link.startswith("https://"):
                next_url = _replace_base(next_link, base)
            else:
                next_url = next_link
        else:
            next_url = None

        if max_pages is not None and pages_done >= max_pages:
            break

        if delay > 0:
            time.sleep(delay)


def main(argv: List[str]) -> int:
    parser = argparse.ArgumentParser(description="Fetch current TLE(s) and append to history files.")
    parser.add_argument("--norad", nargs="*", help="NORAD catalog IDs (e.g., 25544).")
    parser.add_argument("--search", action="append", default=[], help="Search term(s) for satellite names.")
    parser.add_argument("--api-key", default=os.environ.get("TLE_API_KEY"), help="Optional API key.")
    parser.add_argument("--csv", default="./tle_history.csv", help="CSV output path (appended).")
    parser.add_argument("--jsonl", default="./tle_history.jsonl", help="JSONL output path (appended).")

    parser.add_argument("--base", default=DEFAULT_API_BASE, help="API base URL (with or without scheme).")
    parser.add_argument("--timeout", type=int, default=DEFAULT_TIMEOUT, help="Per-request timeout (seconds).")
    parser.add_argument("--retries", type=int, default=DEFAULT_RETRIES, help="Total retries for transient errors.")
    parser.add_argument("--backoff", type=float, default=DEFAULT_BACKOFF, help="Exponential backoff factor.")

    parser.add_argument("--all", action="store_true",
                        help="Fetch the entire catalog by paginating /api/tle (≈20k records).")
    parser.add_argument("--start-page", type=int, default=1,
                        help="Start page index for --all (default: 1).")
    parser.add_argument("--max-pages", type=int, default=None,
                        help="Stop after this many pages in --all mode (default: no limit).")
    parser.add_argument("--delay", type=float, default=0.15,
                        help="Seconds to sleep between page requests in --all mode.")

    args = parser.parse_args(argv)


    targets: List[Dict[str, Any]] = []

    base, fb = parse_base_with_fallbacks(args.base)
    session = build_session(args.retries, args.backoff, args.timeout)

    if args.all:
        sys.stderr.write(f"[INFO] Fetching ALL TLEs by paging {base}/api/tle from page {args.start_page}...\n")
        # Stream to disk page-by-page to avoid holding everything in RAM
        csv_path = Path(args.csv)
        jsonl_path = Path(args.jsonl)
        total = 0
        for page_rows in fetch_all_iter(
            session, base, args.api_key, args.timeout, fb,
            start_page=args.start_page, max_pages=args.max_pages, delay=args.delay
        ):
            if page_rows:
                append_csv(csv_path, page_rows)
                append_jsonl(jsonl_path, page_rows)
                total += len(page_rows)

        if total == 0:
            sys.stderr.write("No results fetched in --all mode. Try --base http://... or adjust --delay.\n")
            return 2

        print(f"Appended {total} record(s) in --all mode.")
        print(f"CSV: {Path(args.csv).resolve()}")
        print(f"JSONL: {Path(args.jsonl).resolve()}")
        return 0

    # Fallback: original targeted modes (--norad / --search)
    if args.norad:
        for nid in args.norad:
            try:
                sys.stderr.write(f"[INFO] Fetching NORAD {nid} via {base} (fallback {fb})\n")
                targets.append(fetch_by_norad(session, base, nid, args.api_key, args.timeout, fallback_base=fb))
            except requests.HTTPError as e:
                sys.stderr.write(f"[WARN] NORAD {nid} failed (HTTP): {e}\n")
            except requests.exceptions.RequestException as e:
                sys.stderr.write(f"[WARN] NORAD {nid} network error: {e}\n")
            except Exception as e:
                sys.stderr.write(f"[WARN] NORAD {nid} unexpected error: {e}\n")

    for term in args.search:
        try:
            sys.stderr.write(f"[INFO] Searching '{term}' via {base} (fallback {fb})\n")
            results = fetch_by_search(session, base, term, args.api_key, args.timeout, fallback_base=fb)
            targets.extend(results)
        except requests.HTTPError as e:
            sys.stderr.write(f"[WARN] search '{term}' failed (HTTP): {e}\n")
        except requests.exceptions.RequestException as e:
            sys.stderr.write(f"[WARN] search '{term}' network error: {e}\n")
        except Exception as e:
            sys.stderr.write(f"[WARN] search '{term}' unexpected error: {e}\n")

    if not targets:
        sys.stderr.write("No results fetched. Try --all, or --base http://..., or increase --retries/--timeout.\n")
        return 2

    csv_path = Path(args.csv)
    jsonl_path = Path(args.jsonl)
    append_csv(csv_path, targets)
    append_jsonl(jsonl_path, targets)

    print(f"Appended {len(targets)} record(s).")
    print(f"CSV: {csv_path.resolve()}")
    print(f"JSONL: {jsonl_path.resolve()}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
