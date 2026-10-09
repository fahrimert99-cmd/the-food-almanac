#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Bitmiş videoyu kanala zamanlanmış olarak yükler (private + publishAt -> slot saatinde herkese açık).

  python3 uzun_en/araclar/yukle.py --proje SLUG --slot 2026-10-13T14:00:00Z
  python3 uzun_en/araclar/yukle.py --proje SLUG --slot ... --kuru     # yüklemeden ne gönderileceğini yazdır
  python3 uzun_en/araclar/yukle.py --kota-kontrol                       # YouTube günlük kotası dolu mu? (dolu: çıkış 3)
  python3 uzun_en/araclar/yukle.py --tamamla                            # yüklenenleri denetle: silinmişse yeniden yükle,
                                                                        # eksik kapak / oynatma listesini tamamla

Girdi: cikti/video.mp4, cikti/kapak_yt.jpg, cikti/meta.json (meta.py) ve cikti/kalite.json (geçmiş olmalı).
Aynı video iki kez yüklenmez: projeler/SLUG/yayin.json ya da kanalda aynı başlıklı son yükleme varsa o kullanılır.
Gerekli: YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN (youtube.force-ssl izni).
"""
import argparse, datetime as dt, os, sys, time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402



def ayni_baslikli(yt, baslik):
    """Kanalın son 50 yüklemesinde aynı başlık var mı? (yarıda kalmış bir önceki denemeyi tekrar yüklememek için)"""
    ch = yt.channels().list(part="contentDetails", mine=True).execute()["items"][0]
    up = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    r = yt.playlistItems().list(part="snippet", playlistId=up, maxResults=50).execute()
    for it in r.get("items", []):
        if it["snippet"]["title"].strip() == baslik.strip():
            return it["snippet"]["resourceId"]["videoId"]
    return None


def kota_kontrol():
    """1 birimlik bir okuma: kota dolduysa render boşuna yapılmasın (kota her gün 07:00 UTC'de sıfırlanır)."""
    from googleapiclient.discovery import build
    import youtube_api as YY
    try:
        build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False).channels().list(part="id", mine=True).execute()
    except Exception as e:
        if "quota" in str(e).lower():
            O.log("YouTube günlük kotası dolu — kota sıfırlanınca (07:00 UTC) yeniden denenecek")
            sys.exit(3)
        raise
    O.log("YouTube kotası: uygun")


def liste_ekle(vid, m):
    if not m.get("oynatma_listesi"):
        return True
    import youtube_api as YY
    try:
        YY.oynatma_listesine_ekle(vid, m["oynatma_listesi"], m.get("oynatma_listesi_aciklama", ""))
        O.log(f"✓ oynatma listesi: {m['oynatma_listesi']}")
        return True
    except Exception as e:
        O.log(f"! oynatma listesi eklenemedi: {str(e)[:160]}")
        return False


def yenile_istegi(yt, adaylar):
    """calistir.json'daki "yenile": ["slug"] isteği: henüz yayınlanmamış (private, slotu gelmemiş) videoyu YouTube'dan
    siler. Ardından tamamla() onu 'silinmiş' görüp aynı çalıştırmada yeniden render ettirir ve yükletir.
    Herkese açık ya da yayın saati geçmiş videolara dokunulmaz. İstek bir kez kullanılır ve silinir."""
    cyol = os.path.join(O.KOK, "calistir.json")
    c = O.json_oku(cyol, {}) or {}
    istek = c.get("yenile") or []
    istek = [istek] if isinstance(istek, str) else istek
    silinen = set()
    if not istek:
        return silinen
    for slug, _, y, bekliyor in adaylar:
        if slug not in istek:
            continue
        if not bekliyor:
            O.log(f"! {slug}: yayın saati geçmiş, yenilenmez")
            continue
        try:
            it = yt.videos().list(part="status", id=y["video_id"]).execute().get("items", [])
            if not it:
                O.log(f"• {slug}: {y['video_id']} zaten kanalda yok")
            elif it[0]["status"].get("privacyStatus") != "private":
                O.log(f"! {slug}: {y['video_id']} herkese açık, silinmez")
            else:
                yt.videos().delete(id=y["video_id"]).execute()
                silinen.add(y["video_id"])
                O.log(f"• {slug}: {y['video_id']} silindi (istek üzerine yeniden render edilip yüklenecek)")
        except Exception as e:
            O.log(f"! {slug}: yenileme yapılamadı ({str(e)[:160]})")
            return silinen                                  # istek korunur, sonraki çalıştırmada tekrar denenir
    c.pop("yenile", None)
    O.json_yaz(cyol, c)
    return silinen


def tamamla():
    """Yüklenmiş videoları denetler (plan işi her çalıştırmada, karardan ÖNCE çağırır):
    - yayın saati gelmemiş bir video kanalda yoksa (ör. Studio'dan yanlışlıkla silindiyse) proje 'render'
      aşamasına döner: aynı çalıştırmada yeniden render edilip yüklenir. Yayınlanmış videolara dokunulmaz.
    - kapağı (işleme sonrası) ya da oynatma listesi eksik kalmış videoları tamamlar."""
    import datetime as dt_, subprocess, tempfile
    from googleapiclient.discovery import build
    from googleapiclient.http import MediaFileUpload
    import youtube_api as YY
    m = O.marka()
    simdi = dt_.datetime.now(dt_.timezone.utc)
    adaylar = []
    for slug in O.durum()["videolar"]:
        yol = os.path.join(O.proje_dir(slug), "yayin.json")
        y = O.json_oku(yol, {}) or {}
        if not y.get("video_id"):
            continue
        bekliyor = bool(y.get("slot")) and dt_.datetime.fromisoformat(y["slot"].replace("Z", "+00:00")) > simdi
        if bekliyor or not (y.get("kapak_tamam") and y.get("liste_tamam")):
            adaylar.append((slug, yol, y, bekliyor))
    if not adaylar:
        return O.log("denetlenecek video yok")
    yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    silinen = yenile_istegi(yt, adaylar)
    try:
        ids = ",".join(y["video_id"] for _, _, y, b in adaylar if b)
        var = {v["id"] for v in yt.videos().list(part="id", id=ids).execute().get("items", [])} if ids else set()
        var -= silinen                  # YouTube silinen videoyu bir süre daha listeleyebiliyor
    except Exception as e:
        return O.log(f"! denetim yapılamadı ({str(e)[:120]}) — sonraki çalıştırmada tekrar")
    for slug, yol, y, bekliyor in adaylar:
        if bekliyor and y["video_id"] not in var:
            O.log(f"! {slug}: {y['video_id']} kanalda yok (silinmiş) — yeniden render edilip yüklenecek (slot {y['slot']})")
            os.remove(yol)
            d = O.durum()
            v = d["videolar"].setdefault(slug, {})
            v.update(asama="render", slot=y["slot"])
            d["aktif"] = slug
            O.durum_yaz(d)
            continue
        if y.get("kapak_tamam") and y.get("liste_tamam"):
            continue
        try:
            if not y.get("kapak_tamam"):
                kapak = os.path.join(O.proje_dir(slug), "kapak_yt.jpg")   # repoya elle konan (yenilenmiş) kapak önceliklidir
                if not os.path.exists(kapak):
                    tmp = tempfile.mkdtemp(prefix="kapak_")
                    subprocess.run(["gh", "release", "download", O.etiket(slug), "-D", tmp, "-p", "kapak_yt.jpg"], check=True)
                    kapak = os.path.join(tmp, "kapak_yt.jpg")
                yt.thumbnails().set(videoId=y["video_id"], media_body=MediaFileUpload(kapak)).execute()
                y["kapak_tamam"] = True
                O.log(f"✓ {slug}: kapak basıldı")
            if not y.get("liste_tamam"):
                y["liste_tamam"] = liste_ekle(y["video_id"], m)
        except Exception as e:
            O.log(f"! {slug}: {str(e)[:160]}")
            if "quota" in str(e).lower():
                O.json_yaz(yol, y)
                return O.log("YouTube kotası dolu — sonraki çalıştırmada tekrar denenecek")
        O.json_yaz(yol, y)
    liste_temizle(yt, m)


def liste_temizle(yt, m):
    """Oynatma listesinde silinmiş videolara ait girdileri kaldırır. YouTube silinen videoyu listede "Deleted video"
    olarak bırakıyor (ör. bir video yenilenip yeniden yüklendiğinde). Kendi gizli videolarımız sahibine listelendiği
    için korunur."""
    if not m.get("oynatma_listesi"):
        return
    import youtube_api as YY
    try:
        pid = YY._oynatma_listesi_bul_veya_olustur(yt, m["oynatma_listesi"], m.get("oynatma_listesi_aciklama", ""))
        ogeler, tok = [], None
        while True:
            r = yt.playlistItems().list(part="contentDetails", playlistId=pid, maxResults=50, pageToken=tok).execute()
            ogeler += r.get("items", [])
            tok = r.get("nextPageToken")
            if not tok:
                break
        ids = [o["contentDetails"]["videoId"] for o in ogeler]
        var = set()
        for i in range(0, len(ids), 50):
            var |= {v["id"] for v in yt.videos().list(part="id", id=",".join(ids[i:i + 50])).execute().get("items", [])}
        for o in ogeler:
            if o["contentDetails"]["videoId"] not in var:
                yt.playlistItems().delete(id=o["id"]).execute()
                O.log(f"• oynatma listesinden silinmiş video kaldırıldı ({o['contentDetails']['videoId']})")
    except Exception as e:
        O.log(f"! oynatma listesi temizlenemedi: {str(e)[:160]}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--slot", help="yayın zamanı (UTC, ISO)")
    ap.add_argument("--kuru", action="store_true")
    ap.add_argument("--kota-kontrol", action="store_true")
    ap.add_argument("--tamamla", action="store_true", help="eksik kalan kapak / oynatma listesi")
    a = ap.parse_args()
    if a.kota_kontrol:
        return kota_kontrol()
    if a.tamamla:
        return tamamla()
    if not a.slot:
        ap.error("--slot gerekli")
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
    import youtube_api as YY
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
    yayin = {"video_id": vid, "url": f"https://youtu.be/{vid}", "slot": a.slot if zamanli else None,
             "baslik": meta["baslik"], "yuklenme": simdi.strftime("%Y-%m-%dT%H:%M:%SZ")}
    O.json_yaz(yayin_yol, yayin)
    kapak = os.path.join(cikti, "kapak_yt.jpg")
    if os.path.exists(kapak):
        if YY._kapak_bas(yt, vid, kapak, deneme=2):
            O.log("✓ kapak")
        # işleme bitmeden basılan kapağı YouTube kendi karesiyle ezebiliyor: işleme sonrası ikinci basım
        if YY._islem_bekle(yt, vid, azami_sn=600) and YY._kapak_bas(yt, vid, kapak, deneme=2):
            O.log("✓ kapak işleme sonrası yeniden basıldı")
            yayin["kapak_tamam"] = True
    yayin["liste_tamam"] = liste_ekle(vid, m)
    O.json_yaz(yayin_yol, yayin)
    if not (yayin.get("kapak_tamam") and yayin["liste_tamam"]):
        O.log("! kapak/oynatma listesi eksik kaldı (kota?) — plan işi kota açılınca tamamlar (--tamamla)")

if __name__ == "__main__":
    main()
