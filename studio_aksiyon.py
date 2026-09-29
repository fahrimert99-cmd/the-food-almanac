#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Bugünkü zorunlu işler: son videoya sabit yorum + (opsiyonel) başlık güçlendirme."""
import os, json, re
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

DURUM = "durum.json"
TOKEN_URI = "https://oauth2.googleapis.com/token"

SABIT_YORUM = (
    "Hangi tuzağa en çok düşüyorsun? Yorumla 👇 "
    "Yeni tuzaklar her gün 12:00 & 20:00 — abone ol, bir daha kanma."
)

BASLIK_GUCLENDIR = {
    "SICAK HAVADA NEDEN ÜŞÜRSÜN? ❄️": "AVM'de klima neden bu kadar soğuk? Üşümen satışa dönüşür ❄️",
    "İLK AY BEDAVA NEDEN VAR? 🎬": "İlk ay bedava deyip kartını alıyorlar — iptal etmezsen kaybedersin 🎬",
}


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


def main():
    if not os.path.exists(DURUM):
        print("durum.json yok"); return
    with open(DURUM, encoding="utf-8-sig") as f:
        durum = json.load(f)

    vid = durum.get("son_video_id") or ""
    baslik = durum.get("son_baslik") or ""
    if not vid:
        print("son_video_id yok"); return

    yt = _yt()
    r = yt.videos().list(part="snippet,status", id=vid).execute()
    items = r.get("items") or []
    if not items:
        print("video bulunamadı:", vid); return
    sn = items[0]["snippet"]
    st = items[0]["status"]
    print("Video:", vid, "| privacy:", st.get("privacyStatus"), "| title:", sn.get("title"))

    yeni_baslik = BASLIK_GUCLENDIR.get(baslik) or BASLIK_GUCLENDIR.get(sn.get("title", ""))
    if yeni_baslik and sn.get("title") != yeni_baslik:
        body = {
            "id": vid,
            "snippet": {
                "title": yeni_baslik[:100],
                "description": sn.get("description") or "",
                "categoryId": sn.get("categoryId") or "28",
                "tags": sn.get("tags") or [],
            },
        }
        yt.videos().update(part="snippet", body=body).execute()
        print("✓ Başlık güncellendi →", yeni_baslik)
        durum["son_baslik"] = yeni_baslik
    else:
        print("· Başlık değiştirilmedi (eşleşme yok veya zaten güçlü)")

    privacy = st.get("privacyStatus")
    if privacy == "public":
        try:
            from yorum_at import gonder
            gonder(vid, SABIT_YORUM)
            print("✓ Sabit yorum gönderildi")
        except Exception as e:
            print("! Yorum gönderilemedi:", str(e)[:160])
            durum["bekleyen_yorum"] = {
                "video_id": vid,
                "metin": SABIT_YORUM,
                "kaynak": "studio_aksiyon",
            }
    else:
        durum["bekleyen_yorum"] = {
            "video_id": vid,
            "metin": SABIT_YORUM,
            "kaynak": "studio_aksiyon",
        }
        print("· Video henüz public değil — sabit yorum bekleyen_yorum'a yazıldı")

    with open(DURUM, "w", encoding="utf-8") as f:
        json.dump(durum, f, ensure_ascii=False, indent=2)
    print("TAMAM ✓ studio_aksiyon")


if __name__ == "__main__":
    main()
