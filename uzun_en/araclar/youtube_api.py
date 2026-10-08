#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""YouTube Data API v3 yardımcıları (ücretsiz günlük kota): kimlik, kapak, işlenme bekleme, oynatma listesi.

Gerekli env: YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN (araclar/token_al.py ile bir kez alınır).
"""
import os
import time

from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

TOKEN_URI = "https://oauth2.googleapis.com/token"


def _kimlik():
    return Credentials(
        token=None,
        refresh_token=os.environ["YT_REFRESH_TOKEN"],
        token_uri=TOKEN_URI,
        client_id=os.environ["YT_CLIENT_ID"],
        client_secret=os.environ["YT_CLIENT_SECRET"],
        # Gerçek izinler refresh token'da saklıdır; liste bildirimseldir (token_al.py ile aynı).
        scopes=["https://www.googleapis.com/auth/youtube.force-ssl",
                "https://www.googleapis.com/auth/yt-analytics.readonly"],
    )


def _kapak_bas(yt, vid, kapak, deneme=1):
    """Kapağı basar; başarısızsa `deneme` kadar tekrar. True/False."""
    for i in range(max(1, deneme)):
        try:
            yt.thumbnails().set(videoId=vid, media_body=MediaFileUpload(kapak)).execute()
            return True
        except Exception as e:
            print(f"  ! kapak deneme {i + 1} olmadı: {str(e)[:100]}")
            time.sleep(4)
    return False


def _islem_bekle(yt, vid, azami_sn=240):
    """Video YouTube tarafında işlenene kadar bekler. İşlenme bitmeden basılan kapağı YouTube'un otomatik
    karesi ezebildiği için kapak işleme sonrası bir kez daha basılır. Zaman aşımı/hata -> False."""
    son = time.time() + azami_sn
    while time.time() < son:
        try:
            r = yt.videos().list(part="processingDetails,status", id=vid).execute()
            items = r.get("items") or []
            if items:
                pd = (items[0].get("processingDetails") or {}).get("processingStatus")
                us = (items[0].get("status") or {}).get("uploadStatus")
                if pd in ("succeeded", "terminated") or us == "processed":
                    return True
        except Exception:
            pass
        time.sleep(20)
    return False


def _oynatma_listesi_bul_veya_olustur(yt, ad, aciklama=""):
    """Verilen adda oynatma listesi varsa id'sini döner, yoksa oluşturur (herkese açık)."""
    tok = None
    while True:
        r = yt.playlists().list(part="snippet", mine=True, maxResults=50, pageToken=tok).execute()
        for it in r.get("items", []):
            if it["snippet"]["title"] == ad:
                return it["id"]
        tok = r.get("nextPageToken")
        if not tok:
            break
    r = yt.playlists().insert(part="snippet,status", body={
        "snippet": {"title": ad, "description": aciklama},
        "status": {"privacyStatus": "public"}}).execute()
    return r["id"]


def oynatma_listesine_ekle(video_id, liste_adi, liste_aciklama=""):
    """Videoyu adı verilen oynatma listesine ekler (liste yoksa oluşturur)."""
    yt = build("youtube", "v3", credentials=_kimlik(), cache_discovery=False)
    pid = _oynatma_listesi_bul_veya_olustur(yt, liste_adi, liste_aciklama)
    yt.playlistItems().insert(part="snippet", body={
        "snippet": {"playlistId": pid, "resourceId": {"kind": "youtube#video", "videoId": video_id}}}).execute()
    return pid
