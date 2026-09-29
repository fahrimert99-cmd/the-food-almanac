#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Haftalık YouTube Analytics raporu → durum.json + artifact JSON.

Önce YouTube Analytics API dener (yt-analytics.readonly gerekir).
Scope yoksa veya hata olursa Data API statistics ile yedek rapor üretir.
"""
from __future__ import annotations

import json
import os
import re
from datetime import date, datetime, timedelta, timezone

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

DURUM = "durum.json"
RAPOR_DOSYA = "analytics_rapor.json"
TOKEN_URI = "https://oauth2.googleapis.com/token"
SCOPES = [
    "https://www.googleapis.com/auth/youtube.force-ssl",
    "https://www.googleapis.com/auth/yt-analytics.readonly",
]


def _creds():
    return Credentials(
        None,
        refresh_token=os.environ["YT_REFRESH_TOKEN"],
        client_id=os.environ["YT_CLIENT_ID"],
        client_secret=os.environ["YT_CLIENT_SECRET"],
        token_uri=TOKEN_URI,
        scopes=SCOPES,
    )


def _yt_data():
    return build("youtube", "v3", credentials=_creds())


def _yt_analytics():
    return build("youtubeAnalytics", "v2", credentials=_creds())


def _kanal_id(yt):
    r = yt.channels().list(part="id,snippet,statistics", mine=True).execute()
    items = r.get("items") or []
    if not items:
        raise RuntimeError("kanal bulunamadı (mine=True)")
    return items[0]


def _son_n_video(yt, n=25):
    ch = _kanal_id(yt)
    kanal_id = ch["id"]
    ch_full = yt.channels().list(part="contentDetails,statistics,snippet", id=kanal_id).execute()
    uploads = ch_full["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]
    vids = []
    token = None
    while len(vids) < n:
        kw = dict(part="snippet,contentDetails", playlistId=uploads, maxResults=min(50, n - len(vids)))
        if token:
            kw["pageToken"] = token
        pl = yt.playlistItems().list(**kw).execute()
        for it in pl.get("items") or []:
            vids.append(it["contentDetails"]["videoId"])
        token = pl.get("nextPageToken")
        if not token:
            break
    if not vids:
        return ch, []
    out = []
    for i in range(0, len(vids), 50):
        batch = vids[i : i + 50]
        r = yt.videos().list(part="snippet,statistics,contentDetails", id=",".join(batch)).execute()
        for it in r.get("items") or []:
            st = it.get("statistics") or {}
            sn = it.get("snippet") or {}
            cd = it.get("contentDetails") or {}
            out.append({
                "video_id": it["id"],
                "baslik": sn.get("title", ""),
                "yayin": (sn.get("publishedAt") or "")[:10],
                "izlenme": int(st.get("viewCount") or 0),
                "begeni": int(st.get("likeCount") or 0),
                "yorum": int(st.get("commentCount") or 0),
                "sure_iso": cd.get("duration") or "",
            })
    return ch, out


def _iso_sure_saniye(iso: str) -> int:
    if not iso or not iso.startswith("PT"):
        return 0
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", iso)
    if not m:
        return 0
    h, mi, s = (int(x) if x else 0 for x in m.groups())
    return h * 3600 + mi * 60 + s


def _analytics_kanal(ya, start: str, end: str) -> dict:
    r = ya.reports().query(
        ids="channel==MINE",
        startDate=start,
        endDate=end,
        metrics="views,estimatedMinutesWatched,averageViewDuration,subscribersGained,subscribersLost",
    ).execute()
    rows = r.get("rows") or []
    if not rows:
        return {"views": 0, "estimatedMinutesWatched": 0, "averageViewDuration": 0,
                "subscribersGained": 0, "subscribersLost": 0}
    row = rows[0]
    keys = ["views", "estimatedMinutesWatched", "averageViewDuration", "subscribersGained", "subscribersLost"]
    return {k: row[i] for i, k in enumerate(keys)}


def _analytics_top_videos(ya, start: str, end: str, limit=10) -> list:
    r = ya.reports().query(
        ids="channel==MINE",
        startDate=start,
        endDate=end,
        dimensions="video",
        metrics="views,estimatedMinutesWatched,averageViewDuration",
        sort="-views",
        maxResults=limit,
    ).execute()
    out = []
    for row in r.get("rows") or []:
        out.append({
            "video_id": row[0],
            "views": row[1],
            "estimatedMinutesWatched": row[2],
            "averageViewDuration": row[3],
        })
    return out


def main():
    end = date.today() - timedelta(days=1)
    start = end - timedelta(days=6)
    start_s, end_s = start.isoformat(), end.isoformat()

    yt = _yt_data()
    ch, videos = _son_n_video(yt, n=30)
    ch_st = ch.get("statistics") or {}
    ch_sn = ch.get("snippet") or {}

    rapor = {
        "olusturma": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "donem": {"baslangic": start_s, "bitis": end_s, "gun": 7},
        "kanal": {
            "id": ch.get("id"),
            "baslik": ch_sn.get("title"),
            "abone": int(ch_st.get("subscriberCount") or 0),
            "toplam_izlenme": int(ch_st.get("viewCount") or 0),
            "video_sayisi": int(ch_st.get("videoCount") or 0),
        },
        "kaynak": "data_api",
        "haftalik": {},
        "top_videolar_analytics": [],
        "son_videolar": [],
    }

    try:
        ya = _yt_analytics()
        hafta = _analytics_kanal(ya, start_s, end_s)
        top = _analytics_top_videos(ya, start_s, end_s, limit=10)
        id_map = {v["video_id"]: v for v in videos}
        for t in top:
            meta = id_map.get(t["video_id"]) or {}
            t["baslik"] = meta.get("baslik") or t["video_id"]
            t["averageViewDuration_sn"] = int(t.get("averageViewDuration") or 0)
        rapor["haftalik"] = {
            "izlenme": int(hafta.get("views") or 0),
            "izlenme_dakika": float(hafta.get("estimatedMinutesWatched") or 0),
            "ortalama_sure_sn": int(hafta.get("averageViewDuration") or 0),
            "abone_kazanim": int(hafta.get("subscribersGained") or 0),
            "abone_kayip": int(hafta.get("subscribersLost") or 0),
        }
        rapor["top_videolar_analytics"] = top
        rapor["kaynak"] = "youtube_analytics_api"
        print("✓ Analytics API raporu alındı")
    except Exception as e:
        print(f"! Analytics API kullanılamadı (scope/token?): {str(e)[:180]}")
        print("  → Data API statistics yedek rapor")
        haftalik_vid = [v for v in videos if v["yayin"] >= start_s]
        rapor["haftalik"] = {
            "izlenme": sum(v["izlenme"] for v in haftalik_vid),
            "izlenme_dakika": None,
            "ortalama_sure_sn": None,
            "abone_kazanim": None,
            "abone_kayip": None,
            "not": "Analytics scope yok; sadece son 7 günde yayınlanan videoların toplam izlenmesi",
        }
        rapor["top_videolar_analytics"] = sorted(videos, key=lambda x: -x["izlenme"])[:10]

    for v in videos[:15]:
        rapor["son_videolar"].append({
            "video_id": v["video_id"],
            "baslik": v["baslik"],
            "yayin": v["yayin"],
            "izlenme": v["izlenme"],
            "begeni": v["begeni"],
            "yorum": v["yorum"],
            "sure_sn": _iso_sure_saniye(v.get("sure_iso") or ""),
        })

    with open(RAPOR_DOSYA, "w", encoding="utf-8") as f:
        json.dump(rapor, f, ensure_ascii=False, indent=2)
    print(f"✓ {RAPOR_DOSYA} yazıldı")

    durum = {}
    if os.path.exists(DURUM):
        with open(DURUM, encoding="utf-8-sig") as f:
            durum = json.load(f)
    durum["analytics_ozet"] = {
        "guncelleme": rapor["olusturma"],
        "donem": rapor["donem"],
        "kaynak": rapor["kaynak"],
        "kanal_abone": rapor["kanal"]["abone"],
        "haftalik_izlenme": rapor["haftalik"].get("izlenme"),
        "haftalik_ortalama_sure_sn": rapor["haftalik"].get("ortalama_sure_sn"),
        "haftalik_abone_net": (
            None if rapor["haftalik"].get("abone_kazanim") is None
            else (rapor["haftalik"].get("abone_kazanim") or 0) - (rapor["haftalik"].get("abone_kayip") or 0)
        ),
        "top3": [{
            "baslik": (t.get("baslik") or t.get("video_id", ""))[:80],
            "izlenme": t.get("views") if "views" in t else t.get("izlenme"),
            "ortalama_sure_sn": t.get("averageViewDuration_sn") or t.get("averageViewDuration") or t.get("sure_sn"),
        } for t in (rapor["top_videolar_analytics"] or [])[:3]],
    }
    with open(DURUM, "w", encoding="utf-8") as f:
        json.dump(durum, f, ensure_ascii=False, indent=2)
    print("✓ durum.json ← analytics_ozet")

    h = rapor["haftalik"]
    print(
        f"ÖZET | abone={rapor['kanal']['abone']} | "
        f"7g izlenme={h.get('izlenme')} | "
        f"ort.süre(sn)={h.get('ortalama_sure_sn')} | kaynak={rapor['kaynak']}"
    )


if __name__ == "__main__":
    main()
