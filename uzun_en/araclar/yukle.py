#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Bitmiş videoyu kanala zamanlanmış olarak yükler (private + publishAt -> slot saatinde herkese açık).

  python3 uzun_en/araclar/yukle.py --proje SLUG --slot 2026-10-13T14:00:00Z
  python3 uzun_en/araclar/yukle.py --proje SLUG --slot ... --kuru     # yüklemeden ne gönderileceğini yazdır

Girdi: cikti/video.mp4, cikti/kapak_yt.jpg, cikti/meta.json (meta.py) ve cikti/kalite.json (geçmiş olmalı).
Aynı video iki kez yüklenmez: projeler/SLUG/yayin.json ya da kanalda aynı başlıklı son yükleme varsa o kullanılır.
Gerekli: YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN (youtube.force-ssl izni).
"""
import argparse, datetime as dt, os, sys, time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

sys.path.insert(0, O.REPO)


def ayni_baslikli(yt, baslik):
    """Kanalın son 50 yüklemesinde aynı başlık var mı? (yarıda kalmış bir önceki denemeyi tekrar yüklememek için)"""
    ch = yt.channels().list(part="contentDetails", mine=True).execute()["items"][0]
    up = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    r = yt.playlistItems().list(part="snippet", playlistId=up, maxResults=50).execute()
    for it in r.get("items", []):
        if it["snippet"]["title"].strip() == baslik.strip():
            return it["snippet"]["resourceId"]["videoId"]
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--slot", required=True, help="yayın zamanı (UTC, ISO)")
    ap.add_argument("--kuru", action="store_true")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    pdir = O.proje_dir(slug)
    cikti = os.path.join(pdir, "cikti")
    yayin_yol = os.path.join(pdir, "yayin.json")
    if (O.json_oku(yayin_yol, {}) or {}).get("video_id"):
        return O.log(f"zaten yüklü: {O.json_oku(yayin_yol)['video_id']}")
    kalite = O.json_oku(os.path.join(cikti, "kalite.json"), {})
    if not kalite.get("gecti"):
        raise SystemExit("kalite kontrolü geçmedi ya da yapılmadı — yüklenmiyor")
    meta = O.json_oku(os.path.join(cikti, "meta.json"))
    m = O.marka()
    slot = dt.datetime.fromisoformat(a.slot.replace("Z", "+00:00"))
    simdi = dt.datetime.now(dt.timezone.utc)
    zamanli = slot - simdi > dt.timedelta(minutes=90)
    status = {"selfDeclaredMadeForKids": False, "containsSyntheticMedia": bool(m.get("sentetik_beyan", True)),
              "embeddable": True, "license": "youtube", "publicStatsViewable": True}
    if zamanli:
        status.update(privacyStatus="private", publishAt=a.slot)
    else:
        status.update(privacyStatus="public")
    body = {"snippet": {"title": meta["baslik"], "description": meta["aciklama"], "tags": meta["etiketler"],
                        "categoryId": meta["kategori"], "defaultLanguage": meta["dil"], "defaultAudioLanguage": meta["dil"]},
            "status": status}
    O.log(f"yükleme: '{meta['baslik']}' -> " + (f"zamanlanmış {a.slot}" if zamanli else "hemen herkese açık"))
    if a.kuru:
        print(meta["aciklama"])
        return O.log(f"(kuru çalışma) etiketler: {meta['etiketler']}\nstatus: {status}")

    from googleapiclient.discovery import build
    from googleapiclient.http import MediaFileUpload
    import youtube_yukle as YY
    yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    vid = ayni_baslikli(yt, meta["baslik"])
    if vid:
        O.log(f"kanalda aynı başlıklı video var, yeniden yüklenmiyor: {vid}")
    else:
        media = MediaFileUpload(os.path.join(cikti, "video.mp4"), chunksize=16 * 1024 * 1024, resumable=True,
                                mimetype="video/mp4")
        istek = yt.videos().insert(part="snippet,status", body=body, media_body=media)
        yanit, hata = None, 0
        while yanit is None:
            try:
                durum, yanit = istek.next_chunk()
                if durum:
                    O.log(f"   %{int(durum.progress() * 100)}")
            except Exception as e:                       # geçici ağ hatası: kaldığı yerden devam
                hata += 1
                if hata > 6:
                    raise
                O.log(f"   yükleme hatası ({e}); {5 * hata} sn sonra devam")
                time.sleep(5 * hata)
        vid = yanit["id"]
        O.log(f"✓ yüklendi: https://youtu.be/{vid}")
    O.json_yaz(yayin_yol, {"video_id": vid, "url": f"https://youtu.be/{vid}", "slot": a.slot if zamanli else None,
                           "baslik": meta["baslik"], "yuklenme": simdi.strftime("%Y-%m-%dT%H:%M:%SZ")})
    kapak = os.path.join(cikti, "kapak_yt.jpg")
    if os.path.exists(kapak):
        if YY._kapak_bas(yt, vid, kapak, deneme=2):
            O.log("✓ kapak")
        if YY._islem_bekle(yt, vid, azami_sn=600) and YY._kapak_bas(yt, vid, kapak, deneme=2):
            O.log("✓ kapak işleme sonrası yeniden basıldı")
    if m.get("oynatma_listesi"):
        try:
            YY.oynatma_listesine_ekle(vid, m["oynatma_listesi"], m.get("oynatma_listesi_aciklama", ""))
            O.log(f"✓ oynatma listesi: {m['oynatma_listesi']}")
        except Exception as e:
            O.log(f"! oynatma listesi eklenemedi: {str(e)[:160]}")


if __name__ == "__main__":
    main()
