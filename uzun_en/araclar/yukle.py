#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Bitmiş videoyu kanala zamanlanmış olarak yükler (private + publishAt -> slot saatinde herkese açık).

  python3 uzun_en/araclar/yukle.py --proje SLUG --slot 2026-10-13T14:00:00Z
  python3 uzun_en/araclar/yukle.py --proje SLUG --slot ... --kuru     # yüklemeden ne gönderileceğini yazdır
  python3 uzun_en/araclar/yukle.py --kota-kontrol                       # YouTube günlük kotası dolu mu? (dolu: çıkış 3)
  python3 uzun_en/araclar/yukle.py --tamamla                            # yüklenenleri denetle: silinmişse yeniden yükle,
                                                                        # eksik kapak / oynatma listesini tamamla
  python3 uzun_en/araclar/yukle.py --proje SLUG --kisa [--no 2] [--kuru]  # Shorts'u (cikti/kisa/kisa.mp4) zamanlanmış yükle

Girdi: cikti/video.mp4, cikti/kapak_yt.jpg, cikti/meta.json (meta.py) ve cikti/kalite.json (geçmiş olmalı).
Aynı video iki kez yüklenmez: projeler/SLUG/yayin.json ya da kanalda aynı başlıklı son yükleme varsa o kullanılır.
Gerekli: YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN (youtube.force-ssl izni).
"""
import argparse, datetime as dt, glob, os, re, shutil, sys, time

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


def video_yukle(yt, body, yol):
    """Sürdürülebilir yükleme (geçici ağ hatasında kaldığı yerden devam eder); video id'sini döndürür."""
    from googleapiclient.http import MediaFileUpload
    media = MediaFileUpload(yol, chunksize=16 * 1024 * 1024, resumable=True, mimetype="video/mp4")
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
    O.log(f"✓ yüklendi: https://youtu.be/{yanit['id']}")
    return yanit["id"]


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


def bastan_sifirla(slug, yol, slot):
    """Videoyu görsel aşamasından yeniden üretime alır. Doğrulanmış senaryo ve ses korunur; yayın kaydı, sahne tasarımları
    ve ajan raporları silinir. Yedek kaynaklı (düşük kaliteli) görseller varlik aşamasında NVIDIA ile yeniden üretilir."""
    pdir = O.proje_dir(slug)
    if os.path.exists(yol):
        os.remove(yol)
    shutil.rmtree(os.path.join(pdir, "sahneler"), ignore_errors=True)
    for f in glob.glob(os.path.join(pdir, "rapor_g*.md")):
        os.remove(f)
    d = O.durum()
    v = d["videolar"].setdefault(slug, {})
    v.update(asama="varlik", sahne_deneme=0, slot=slot)
    d["aktif"] = slug
    O.durum_yaz(d)
    O.log(f"• {slug}: baştan üretime alındı (aşama varlik, slot {slot})")


def kisalari_sil(yt, slug):
    """bastan için: projenin henüz yayınlanmamış (private) Shorts'larını YouTube'dan siler ve kayıtlarını kaldırır;
    uzun video yeniden yüklenince Shorts hattı aynı seçimle (kisa*.json korunur) yeni sesle yeniden üretir.
    Herkese açık ya da yayın saati geçmiş Shorts'a dokunulmaz."""
    simdi = dt.datetime.now(dt.timezone.utc)
    for kyol in sorted(glob.glob(os.path.join(O.proje_dir(slug), "kisa*_yayin.json"))):
        k = O.json_oku(kyol, {}) or {}
        if not k.get("video_id"):
            continue
        slot = dt.datetime.fromisoformat(str(k.get("slot", "")).replace("Z", "+00:00") or "1970-01-01T00:00:00+00:00")
        if slot <= simdi:
            O.log(f"! {slug}: Shorts {k['video_id']} yayın saati geçmiş, silinmez")
            continue
        it = yt.videos().list(part="status", id=k["video_id"]).execute().get("items", [])
        if it and it[0]["status"].get("privacyStatus") != "private":
            O.log(f"! {slug}: Shorts {k['video_id']} herkese açık, silinmez")
            continue
        if it:
            yt.videos().delete(id=k["video_id"]).execute()
        os.remove(kyol)
        O.log(f"• {slug}: Shorts {k['video_id']} silindi (yeniden üretilecek)")


def yenile_istegi(yt, adaylar):
    """calistir.json'daki "yenile": ["slug"] isteği: henüz yayınlanmamış (private, slotu gelmemiş) videoyu YouTube'dan
    siler. Ardından tamamla() onu 'silinmiş' görüp aynı çalıştırmada yeniden render ettirir ve yükletir.
    "bastan": ["slug"] aynı silmeyi yapar ama projeyi görsel aşamasına döndürür (bastan_sifirla): görseller yeniden
    üretilir, sahneler yeniden tasarlanır, sonra render edilip aynı slota yüklenir.
    Herkese açık ya da yayın saati geçmiş videolara dokunulmaz. İstek bir kez kullanılır ve silinir.
    Döner: (silinen video id'leri, baştan alınan slug'lar)."""
    cyol = os.path.join(O.KOK, "calistir.json")
    c = O.json_oku(cyol, {}) or {}
    istek = c.get("yenile") or []
    istek = [istek] if isinstance(istek, str) else istek
    bastan = c.get("bastan") or []
    bastan = [bastan] if isinstance(bastan, str) else bastan
    silinen, sifirlanan = set(), set()
    if not istek and not bastan:
        return silinen, sifirlanan
    aktif = O.durum().get("aktif")
    for slug, yol, y, bekliyor in adaylar:
        if slug not in istek and slug not in bastan:
            continue
        if slug in bastan and aktif not in (None, slug):
            O.log(f"! {slug}: başka bir proje ({aktif}) üretimde, baştan alınamaz")
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
                continue
            else:
                yt.videos().delete(id=y["video_id"]).execute()
                silinen.add(y["video_id"])
                O.log(f"• {slug}: {y['video_id']} silindi (istek üzerine yeniden üretilip yüklenecek)")
            if slug in bastan:
                kisalari_sil(yt, slug)
                bastan_sifirla(slug, yol, y["slot"])
                sifirlanan.add(slug)
        except Exception as e:
            O.log(f"! {slug}: yenileme yapılamadı ({str(e)[:160]})")
            return silinen, sifirlanan                      # istek korunur, sonraki çalıştırmada tekrar denenir
    c.pop("yenile", None)
    c.pop("bastan", None)
    O.json_yaz(cyol, c)
    return silinen, sifirlanan


def yorum_metni(slug):
    """Kanalın kendi ilk yorumu: proje.json 'yorum' (senaryo ajanı yazar); yoksa genel bir soru."""
    metin = re.sub(r"\s+", " ", str((O.proje(slug) or {}).get("yorum") or "")).strip()
    if metin and len(metin) <= 280 and "http" not in metin.lower():
        return metin
    return "Did anything in this video surprise you? Tell us about your own experience in the comments."


def yorum_gonder(yt, video_id, metin):
    """Kanalın kendi videosuna yorum yazar (eski Türkçe hattaki yorum_at.py'den). Video bu kanala ait ve herkese açık
    olmalı; aynı metin daha önce yazılmışsa tekrar yazmaz (zaman aşımı sonrası tekrar çalıştırmada çift yorum olmasın).
    Yorumun id'sini döndürür. YouTube API yorum sabitlemeyi desteklemez: sabitlemek isteyen Studio'dan elle yapar."""
    kanal = (yt.channels().list(part="id", mine=True).execute().get("items") or [{}])[0].get("id")
    it = yt.videos().list(part="snippet,status", id=video_id).execute().get("items", [])
    if not kanal or not it or it[0]["snippet"].get("channelId") != kanal:
        raise RuntimeError("video bu kanala ait değil ya da bulunamadı; yorum yazılmadı")
    if it[0]["status"].get("privacyStatus") != "public":
        raise RuntimeError("video henüz herkese açık değil; yorum sonraki çalıştırmada")
    for t in yt.commentThreads().list(part="snippet", videoId=video_id, maxResults=100, order="time").execute().get("items", []):
        top = t["snippet"]["topLevelComment"]["snippet"]
        if (top.get("authorChannelId") or {}).get("value") == kanal and top.get("textOriginal", "").strip() == metin:
            return t["id"]
    r = yt.commentThreads().insert(part="snippet", body={"snippet": {
        "videoId": video_id, "topLevelComment": {"snippet": {"textOriginal": metin}}}}).execute()
    return r["id"]


def kisa_yorum_bekleyenler(simdi):
    """Yayına çıkmış ama kanalın ilk yorumu yazılmamış Shorts kayıtları: [(slug, kayıt yolu, kayıt)]."""
    out = []
    for slug in O.durum()["videolar"]:
        for kyol in sorted(glob.glob(os.path.join(O.proje_dir(slug), "kisa*_yayin.json"))):
            k = O.json_oku(kyol, {}) or {}
            if k.get("video_id") and k.get("slot") and not k.get("yorum_tamam") \
                    and dt.datetime.fromisoformat(k["slot"].replace("Z", "+00:00")) <= simdi:
                out.append((slug, kyol, k))
    return out


def kisa_yorumlari(yt, bekleyen, azami=6):
    """Shorts'a kanalın ilk yorumu: uzun videonun bağlantısı ve bir soru (yorum başına 50 birim; çalıştırma başına
    en çok `azami`, eski Shorts birikimi kotayı tüketmesin)."""
    for slug, kyol, k in bekleyen[:azami]:
        uzun = k.get("uzun_id") or (O.json_oku(os.path.join(O.proje_dir(slug), "yayin.json"), {}) or {}).get("video_id")
        metin = (f"The full video, with every study and its limits: https://youtu.be/{uzun}\n\n" if uzun else "") + \
            "What food question should we look into next?"
        try:
            k["yorum_id"] = yorum_gonder(yt, k["video_id"], metin)
            k["yorum_tamam"] = True
            O.json_yaz(kyol, k)
            O.log(f"✓ {slug}: Shorts kanal yorumu yazıldı ({k['video_id']})")
        except Exception as e:
            O.log(f"! {slug}: Shorts yorumu yazılamadı ({str(e)[:120]})")
            if "quota" in str(e).lower():
                return


def tamamla():
    """Yüklenmiş videoları denetler (plan işi her çalıştırmada, karardan ÖNCE çağırır):
    - yayın saati gelmemiş bir video kanalda yoksa (ör. Studio'dan yanlışlıkla silindiyse) proje 'render'
      aşamasına döner: aynı çalıştırmada yeniden render edilip yüklenir. Yayınlanmış videolara dokunulmaz.
    - kapağı (işleme sonrası) ya da oynatma listesi eksik kalmış videoları tamamlar;
    - yayına çıkmış videolara kanalın ilk yorumunu (proje.json 'yorum') bir kez yazar;
    - yayına çıkmış Shorts'a uzun videonun bağlantısıyla kanalın ilk yorumunu bir kez yazar."""
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
        if bekliyor or not (y.get("kapak_tamam") and y.get("liste_tamam") and y.get("yorum_tamam")) \
                or baslik_farkli(slug, y):
            adaylar.append((slug, yol, y, bekliyor))
    kisa_bek = kisa_yorum_bekleyenler(simdi)
    if not adaylar and not kisa_bek:
        return O.log("denetlenecek video yok")
    yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    silinen, sifirlanan = yenile_istegi(yt, adaylar)
    adaylar = [a for a in adaylar if a[0] not in sifirlanan]
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
        if y.get("kapak_tamam") and y.get("liste_tamam") and (bekliyor or y.get("yorum_tamam")) \
                and not baslik_farkli(slug, y):
            continue
        try:
            if baslik_farkli(slug, y):
                y["baslik"] = baslik_guncelle(yt, y["video_id"], O.proje(slug)["baslik"])
                O.log(f"✓ {slug}: başlık güncellendi -> {y['baslik']}")
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
            if not bekliyor and not y.get("yorum_tamam"):
                y["yorum_id"] = yorum_gonder(yt, y["video_id"], yorum_metni(slug))
                y["yorum_tamam"] = True
                O.log(f"✓ {slug}: kanal yorumu yazıldı")
        except Exception as e:
            O.log(f"! {slug}: {str(e)[:160]}")
            if "quota" in str(e).lower():
                O.json_yaz(yol, y)
                return O.log("YouTube kotası dolu — sonraki çalıştırmada tekrar denenecek")
        O.json_yaz(yol, y)
    kisa_baglanti_guncelle(yt)
    kisa_yorumlari(yt, kisa_bek)
    liste_temizle(yt, m)


def baslik_farkli(slug, y):
    """proje.json'daki başlık sonradan değiştirildiyse (ör. tıklama oranı için) YouTube'daki başlık da güncellenir."""
    p = O.proje(slug) or {}
    return bool(p.get("baslik")) and bool(y.get("baslik")) and p["baslik"][:100] != y["baslik"]


def baslik_guncelle(yt, vid, baslik):
    """Yalnızca başlığı değiştirir; videos.update snippet'in tamamını istediği için mevcut snippet korunur (50 birim)."""
    sn = yt.videos().list(part="snippet", id=vid).execute()["items"][0]["snippet"]
    yeni = {k: sn[k] for k in ("description", "tags", "categoryId", "defaultLanguage", "defaultAudioLanguage") if k in sn}
    yeni["title"] = baslik[:100]
    yt.videos().update(part="snippet", body={"id": vid, "snippet": yeni}).execute()
    return yeni["title"]


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


def kisa_ad(no=1):
    return "kisa" if no == 1 else f"kisa_{no}"          # kisa.py ad() ile aynı


def kisa_slot(slug, simdi, no=1):
    """Shorts'un yayın zamanı (kanalın yayın saatinde, günde en çok bir Shorts):
    - Yeni video: N. Shorts uzun videodan N gün sonra (Salı videosu: Çarşamba + Perşembe, Cuma videosu: Cumartesi +
      Pazar); o gün doluysa videonun öteki Shorts günü.
    - Eski video (o günler geçmiş ya da dolu): yeni videolara ayrılan günlere dokunmadan ilk boş Pazartesi, Salı ya da
      Cuma; uzun videodan ve aynı videonun önceki Shorts'undan en az bir gün sonra."""
    yayin = O.marka()["yayin"]
    sa, dk = map(int, yayin["saat_utc"].split(":"))
    ayrilan = {(g + k) % 7 for g in yayin["gunler"] for k in (1, 2)}      # Çarşamba, Perşembe, Cumartesi, Pazar
    pdir = O.proje_dir(slug)
    y = O.json_oku(os.path.join(pdir, "yayin.json"), {}) or {}
    dolu = {(O.json_oku(y_, {}) or {}).get("slot", "")[:10] for y_ in glob.glob(os.path.join(O.PROJELER, "*", "kisa*_yayin.json"))}

    def saat(g):
        return dt.datetime(g.year, g.month, g.day, sa, dk, tzinfo=dt.timezone.utc)

    def tarih(t):
        return dt.datetime.fromisoformat(t.replace("Z", "+00:00"))

    alt = simdi + dt.timedelta(hours=3)
    for n in range(1, no):                            # aynı videonun önceki Shorts'undan sonra
        t = (O.json_oku(os.path.join(pdir, f"{kisa_ad(n)}_yayin.json"), {}) or {}).get("slot")
        if t:
            alt = max(alt, tarih(t) + dt.timedelta(hours=20))
    uzun = y.get("slot") or y.get("yuklenme")
    if uzun:
        L = tarih(uzun).date()
        for k in [no] + [k for k in (1, 2) if k != no]:
            g = L + dt.timedelta(days=k)
            if saat(g) >= alt and g.isoformat() not in dolu:
                return saat(g)
        alt = max(alt, tarih(uzun) + dt.timedelta(hours=20))
    g = alt.date()
    while True:
        if saat(g) >= alt and g.weekday() not in ayrilan and g.isoformat() not in dolu:
            return saat(g)
        g += dt.timedelta(days=1)


def kisa_aciklama(slug, uzun_id, no=1):
    import meta as M
    p, m = O.proje(slug), O.marka()
    tanim = O.json_oku(os.path.join(O.proje_dir(slug), f"{kisa_ad(no)}.json"), {}) or {}
    parca = [tanim.get("aciklama") or "", f"Full video: https://youtu.be/{uzun_id}"]
    if p.get("kaynaklar"):
        parca.append("SOURCES\n" + "\n".join(f"{i}. {k}" for i, k in enumerate(p["kaynaklar"], 1)))
    if m.get("aciklama_sonu"):
        parca.append(m["aciklama_sonu"].strip())
    parca.append(("#Shorts " + M.hashtag(p.get("etiketler", []), n=2)).strip())
    return M.temiz("\n\n".join(x for x in parca if x))[:4900]


def kisa_yukle(slug, kuru=False, no=1):
    """cikti/kisa/kisa.mp4'ü (no > 1: cikti/kisa_N/kisa_N.mp4) Shorts olarak zamanlanmış yükler; açıklamada uzun videonun
    bağlantısı. Bir kez yüklenir (projeler/SLUG/kisa_yayin.json ya da kanalda aynı başlıklı son yükleme)."""
    import meta as M
    pdir = O.proje_dir(slug)
    ad = kisa_ad(no)
    kyol = os.path.join(pdir, f"{ad}_yayin.json")
    if (O.json_oku(kyol, {}) or {}).get("video_id"):
        return O.log(f"Shorts zaten yüklü: {O.json_oku(kyol)['video_id']}")
    y = O.json_oku(os.path.join(pdir, "yayin.json"), {}) or {}
    if not y.get("video_id"):
        raise SystemExit("uzun video henüz yüklenmemiş — Shorts yüklenmiyor")
    video = os.path.join(pdir, "cikti", ad, f"{ad}.mp4")
    if not os.path.exists(video):
        raise SystemExit(f"cikti/{ad}/{ad}.mp4 yok — önce Shorts render edilmeli")
    p, m = O.proje(slug), O.marka()
    tanim = O.json_oku(os.path.join(pdir, f"{ad}.json"), {}) or {}
    baslik = M.temiz(tanim.get("baslik_yt") or p["baslik"])[:100]
    if baslik.strip().lower() == str(y.get("baslik") or p["baslik"]).strip().lower():
        baslik = (baslik[:91] + " #Shorts")       # uzun videoyla aynı başlık olmasın (ayni_baslikli onu bulmasın)
    simdi = dt.datetime.now(dt.timezone.utc)
    slot = kisa_slot(slug, simdi, no).strftime("%Y-%m-%dT%H:%M:%SZ")
    body = {"snippet": {"title": baslik, "description": kisa_aciklama(slug, y["video_id"], no), "tags": M.etiket_listesi(p, m),
                        "categoryId": m.get("kategori", "27"), "defaultLanguage": m.get("dil", "en"),
                        "defaultAudioLanguage": m.get("dil", "en")},
            "status": {"privacyStatus": "private", "publishAt": slot, "selfDeclaredMadeForKids": False,
                       "containsSyntheticMedia": bool(m.get("sentetik_beyan", True)), "embeddable": True,
                       "license": "youtube", "publicStatsViewable": True}}
    O.log(f"Shorts yükleme: '{baslik}' -> zamanlanmış {slot} (uzun video {y['video_id']})")
    if kuru:
        print(body["snippet"]["description"])
        return O.log(f"(kuru çalışma) status: {body['status']}")
    from googleapiclient.discovery import build
    import youtube_api as YY
    yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    vid = ayni_baslikli(yt, baslik)
    digerleri = {y["video_id"]} | {(O.json_oku(k, {}) or {}).get("video_id")
                                    for k in glob.glob(os.path.join(pdir, "kisa*_yayin.json"))}
    if vid and vid not in digerleri:
        O.log(f"kanalda aynı başlıklı video var, yeniden yüklenmiyor: {vid}")
    else:
        vid = video_yukle(yt, body, video)
    O.json_yaz(kyol, {"video_id": vid, "url": f"https://youtube.com/shorts/{vid}", "slot": slot, "baslik": baslik,
                      "uzun_id": y["video_id"], "yuklenme": simdi.strftime("%Y-%m-%dT%H:%M:%SZ")})


def kisa_baglanti_guncelle(yt):
    """Uzun video yeniden yüklendiyse (yeni id) Shorts açıklamalarındaki bağlantıyı yeniler (Shorts başına 50 birim)."""
    for slug in O.durum()["videolar"]:
        uzun = (O.json_oku(os.path.join(O.proje_dir(slug), "yayin.json"), {}) or {}).get("video_id")
        for kyol in sorted(glob.glob(os.path.join(O.proje_dir(slug), "kisa*_yayin.json"))):
            no = int(re.search(r"kisa_?(\d*)_yayin", kyol).group(1) or 1)
            k = O.json_oku(kyol, {}) or {}
            if not k.get("video_id") or not uzun or k.get("uzun_id") == uzun:
                continue
            try:
                it = yt.videos().list(part="snippet", id=k["video_id"]).execute().get("items", [])
                if it:
                    sn = it[0]["snippet"]
                    yeni = {x: sn[x] for x in ("title", "tags", "categoryId", "defaultLanguage", "defaultAudioLanguage")
                            if x in sn}
                    yeni["description"] = kisa_aciklama(slug, uzun, no)
                    yt.videos().update(part="snippet", body={"id": k["video_id"], "snippet": yeni}).execute()
                    O.log(f"✓ {slug}: Shorts {no} açıklamasındaki uzun video bağlantısı yenilendi ({uzun})")
                k["uzun_id"] = uzun
                O.json_yaz(kyol, k)
            except Exception as e:
                O.log(f"! {slug}: Shorts {no} bağlantısı yenilenemedi ({str(e)[:120]})")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--slot", help="yayın zamanı (UTC, ISO)")
    ap.add_argument("--kuru", action="store_true")
    ap.add_argument("--kota-kontrol", action="store_true")
    ap.add_argument("--tamamla", action="store_true", help="eksik kalan kapak / oynatma listesi")
    ap.add_argument("--kisa", action="store_true", help="Shorts'u (cikti/kisa/kisa.mp4) zamanlanmış yükle")
    ap.add_argument("--no", type=int, default=1, help="--kisa ile: kaçıncı Shorts (2: kisa_2.json, cikti/kisa_2/)")
    a = ap.parse_args()
    if a.kota_kontrol:
        return kota_kontrol()
    if a.tamamla:
        return tamamla()
    if a.kisa:
        return kisa_yukle(O.aktif_slug(a.proje), a.kuru, a.no)
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
    import youtube_api as YY
    yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    vid = ayni_baslikli(yt, meta["baslik"])
    if vid:
        O.log(f"kanalda aynı başlıklı video var, yeniden yüklenmiyor: {vid}")
    else:
        vid = video_yukle(yt, body, os.path.join(cikti, "video.mp4"))
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
