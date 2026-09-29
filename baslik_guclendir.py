#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Toplu başlık güçlendirme — son N video.

Kurallar:
1) Açık eşleme sözlüğü (BASLIK_ESLE)
2) Zayıf kalıp → güçlü şablon
"""
from __future__ import annotations

import os
import re
import json
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

TOKEN_URI = "https://oauth2.googleapis.com/token"
MAX_VIDEOS = int(os.environ.get("BASLIK_MAX", "20"))
DRY_RUN = os.environ.get("BASLIK_DRY_RUN", "0") == "1"

BASLIK_ESLE = {
    "SICAK HAVADA NEDEN ÜŞÜRSÜN? ❄️": "AVM'de klima neden bu kadar soğuk? Üşümen satışa dönüşür ❄️",
    "İLK AY BEDAVA NEDEN VAR? 🎬": "İlk ay bedava deyip kartını alıyorlar — iptal etmezsen kaybedersin 🎬",
    "KIYAFET BEDENLERİ NEDEN TUTMAZ? 👗": "Kıyafet bedeni neden tutmaz? Markalar bilerek karıştırıyor 👗",
    "NEDEN HEP SAĞA YÖNELİRSİN? ➡️": "Markette neden hep sağa yönelirsin? Tasarım seni yönlendiriyor ➡️",
    "KOKUNUN GİZLİ GÜCÜ! 👃": "Market kokusu neden seni aç bırakır? Gizli satış tuzağı 👃",
}

KURALLAR = [
    (
        re.compile(r"^(.+?)\s+NEDEN\s+(.+?)\?\s*(.*)$", re.I),
        lambda m: _kes(
            f"{m.group(1).strip()} neden {m.group(2).strip()}? Bilerek yapıyorlar {m.group(3).strip()}"
        ),
    ),
    (
        re.compile(r"^(.+?)\s+TUZAĞI!\s*$", re.I),
        lambda m: _kes(f"{m.group(1).strip()} tuzağı — paranı böyle alıyorlar"),
    ),
]


def _kes(s: str, n=100) -> str:
    s = re.sub(r"\s+", " ", s).strip()
    return s[:n].rstrip()


def _yt():
    return build(
        "youtube",
        "v3",
        credentials=Credentials(
            None,
            refresh_token=os.environ["YT_REFRESH_TOKEN"],
            client_id=os.environ["YT_CLIENT_ID"],
            client_secret=os.environ["YT_CLIENT_SECRET"],
            token_uri=TOKEN_URI,
            scopes=["https://www.googleapis.com/auth/youtube.force-ssl"],
        ),
    )


def _guclu_mu(baslik: str) -> bool:
    b = baslik.lower()
    isaretler = ("bilerek", "kaybedersin", "paranı", "satışa", "tuzağı —", "deyip", "iptal", "dönüşür")
    return any(x in b for x in isaretler)


def _oneri(baslik: str):
    if baslik in BASLIK_ESLE:
        return BASLIK_ESLE[baslik]
    if _guclu_mu(baslik):
        return None
    for rx, fn in KURALLAR:
        m = rx.match(baslik.strip())
        if m:
            yeni = fn(m)
            if yeni and yeni != baslik and len(yeni) >= 20:
                return yeni
    return None


def _son_videolar(yt, n=20):
    ch = yt.channels().list(part="contentDetails", mine=True).execute()["items"][0]
    uploads = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    ids = []
    token = None
    while len(ids) < n:
        kw = dict(part="contentDetails", playlistId=uploads, maxResults=min(50, n - len(ids)))
        if token:
            kw["pageToken"] = token
        pl = yt.playlistItems().list(**kw).execute()
        for it in pl.get("items") or []:
            ids.append(it["contentDetails"]["videoId"])
        token = pl.get("nextPageToken")
        if not token:
            break
    out = []
    for i in range(0, len(ids), 50):
        r = yt.videos().list(part="snippet,status", id=",".join(ids[i : i + 50])).execute()
        out.extend(r.get("items") or [])
    return out


def main():
    yt = _yt()
    items = _son_videolar(yt, MAX_VIDEOS)
    print(f"İncelenen video: {len(items)} (max={MAX_VIDEOS}) dry_run={DRY_RUN}")
    degisen = []
    for it in items:
        vid = it["id"]
        sn = it["snippet"]
        eski = sn.get("title") or ""
        yeni = _oneri(eski)
        if not yeni or yeni == eski:
            continue
        print(f"→ {vid}")
        print(f"  ESKİ: {eski}")
        print(f"  YENİ: {yeni}")
        if DRY_RUN:
            degisen.append({"video_id": vid, "eski": eski, "yeni": yeni, "uygulandi": False})
            continue
        body = {
            "id": vid,
            "snippet": {
                "title": yeni[:100],
                "description": sn.get("description") or "",
                "categoryId": sn.get("categoryId") or "28",
                "tags": sn.get("tags") or [],
            },
        }
        for k in ("defaultLanguage", "defaultAudioLanguage"):
            if sn.get(k):
                body["snippet"][k] = sn[k]
        try:
            yt.videos().update(part="snippet", body=body).execute()
            print("  ✓ güncellendi")
            degisen.append({"video_id": vid, "eski": eski, "yeni": yeni, "uygulandi": True})
        except Exception as e:
            print(f"  ! hata: {str(e)[:160]}")
            degisen.append({"video_id": vid, "eski": eski, "yeni": yeni, "uygulandi": False, "hata": str(e)[:160]})

    ozet = {"toplam_incelenen": len(items), "degisen_sayisi": len(degisen), "degisenler": degisen}
    with open("baslik_guclendir_rapor.json", "w", encoding="utf-8") as f:
        json.dump(ozet, f, ensure_ascii=False, indent=2)
    print(f"TAMAM ✓ değişen={len(degisen)} → baslik_guclendir_rapor.json")


if __name__ == "__main__":
    main()
