#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Haftalık canlı maraton: yayınlanmış (herkese açık) uzun videoları arka arkaya canlı yayın olarak akıtır.

  python3 uzun_en/araclar/canli.py hazirla --mod tam|deneme   # bölüm seçimi, kartlar, kodlama -> /tmp/canli
  python3 uzun_en/araclar/canli.py yayinla                    # YouTube'da yayını açar, akıtır, kapatır

- Yalnızca YouTube'da şu an herkese açık olan bölümler kullanılır (zamanlanmış/özel videolar asla sızmaz).
- Sıra: son maratondan beri yayınlanan yeni bölümler önce, sonra izlenmeye göre; toplam süre HEDEF_DK'yı geçmez.
- Bölümler arasında 'Up next' kartı (kodla üretilen fon müziği), başta tanıtım, sonda kapanış kartı.
- Deneme modu: özel (private) yayın, 2 bölümden 45'er saniye. Uçtan uca denemek içindir.
- Yayın anahtarı günlüğe yazılmaz (::add-mask::), yalnızca 600 izinli geçici dosyada durur.
Gerekli env: YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN, GH_TOKEN.
"""
import argparse, datetime as dt, json, os, subprocess, sys, textwrap, threading, time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

W, H, FPS = 1280, 720, 30
VB = ["-b:v", "2500k", "-maxrate", "3000k", "-bufsize", "6000k"]
KOD_V = ["-c:v", "libx264", "-preset", "veryfast", "-profile:v", "high", "-pix_fmt", "yuv420p", "-r", str(FPS),
         "-g", str(FPS * 2), "-keyint_min", str(FPS * 2), "-sc_threshold", "0"] + VB
KOD_A = ["-c:a", "aac", "-b:a", "128k", "-ar", "48000", "-ac", "2"]
HEDEF_DK = 150                    # bölümlerin toplam azami süresi (GitHub işi 6 saatle sınırlı)
KART_SN, ACILIS_SN, KAPANIS_SN = 10, 20, 20
TMP = os.environ.get("CANLI_TMP", "/tmp/canli")
KAYIT = os.path.join(O.KOK, "canli", "kayit.json")
FONT = os.path.join(os.path.dirname(O.KOK), "assets", "font")
ZEMIN, KREM, SARI, KIRMIZI = (20, 28, 46), (244, 238, 226), (255, 204, 51), (214, 69, 52)


def _yt():
    from googleapiclient.discovery import build
    from youtube_api import _kimlik
    return build("youtube", "v3", credentials=_kimlik(), cache_discovery=False)


def _font(ad, boy):
    from PIL import ImageFont
    for y in (os.path.join(FONT, ad), "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"):
        if os.path.exists(y):
            return ImageFont.truetype(y, boy)
    return ImageFont.load_default()


def _sure(yol):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", yol],
                       capture_output=True, text=True)
    return float(r.stdout.strip() or 0)


# ------------------------------------------------------------------------------------------------- bölüm seçimi
def adaylar():
    """durum.json'da yüklenmiş ve slotu geçmiş bölümler; (slug, video_id, başlık, slot)."""
    d = O.json_oku(os.path.join(O.KOK, "durum.json"), {"videolar": {}})
    simdi = dt.datetime.now(dt.timezone.utc).isoformat()
    out = []
    for slug, v in d["videolar"].items():
        if v.get("asama") != "yuklendi" or not v.get("slot") or v["slot"] > simdi:
            continue
        y = O.json_oku(os.path.join(O.proje_dir(slug), "yayin.json"), {})
        if y.get("video_id"):
            out.append({"slug": slug, "id": y["video_id"], "baslik": y.get("baslik") or slug, "slot": v["slot"]})
    return out


def pazar():
    """Pazar yayını: son 7 günde yayınlanan bölümler en başa alınır (haftanın özeti)."""
    return dt.datetime.now(dt.timezone.utc).weekday() == 6


def sec(mod):
    al = adaylar()
    if not al:
        return []
    yt = _yt()
    bilgi = {}
    for i in range(0, len(al), 50):
        r = yt.videos().list(part="status,statistics", id=",".join(a["id"] for a in al[i:i + 50])).execute()
        for it in r.get("items", []):
            bilgi[it["id"]] = it
    acik = []
    for a in al:
        it = bilgi.get(a["id"])
        if not it or it["status"].get("privacyStatus") != "public":
            O.log(f"atlandı (herkese açık değil): {a['slug']}")
            continue
        a["izlenme"] = int(it.get("statistics", {}).get("viewCount", 0))
        acik.append(a)
    kayit = O.json_oku(KAYIT, [])
    son = max((k["tarih"] for k in kayit if k.get("mod") == "tam" and k.get("durum") == "tamam"), default="")
    if mod == "tam" and pazar():
        hafta = (dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=7)).isoformat()
        son = min(son, hafta) if son else hafta
    yeni = sorted([a for a in acik if a["slot"] > son], key=lambda a: a["slot"], reverse=True)
    eski = sorted([a for a in acik if a["slot"] <= son], key=lambda a: -a["izlenme"])
    if eski:                                             # her gün farklı bölümle başlasın (günlük yayın)
        g = dt.date.today().toordinal() % len(eski)
        eski = eski[g:] + eski[:g]
    sira = yeni + eski
    return sira[:2] if mod == "deneme" else sira


# ------------------------------------------------------------------------------------------------- görseller
def _yaz_sarili(c, xy, metin, font, renk, gen, ara=1.12):
    x, y = xy
    harf = max(8, int(gen / (font.size * 0.52)))
    for satir in textwrap.wrap(metin, harf):
        c.text((x, y), satir, font=font, fill=renk)
        y += int(font.size * ara)
    return y


def _zemin():
    from PIL import Image, ImageDraw
    im = Image.new("RGB", (W, H), ZEMIN)
    c = ImageDraw.Draw(im)
    for i in range(H):                                   # hafif dikey geçiş
        k = i / H
        c.line([(0, i), (W, i)], fill=tuple(int(z * (1.0 - 0.25 * k)) for z in ZEMIN))
    return im, c


def kart_acilis(bolumler, yol, haftalik=False):
    im, c = _zemin()
    c.text((80, 60), "THE FOOD ALMANAC  ·  THIS WEEK'S EPISODES FIRST" if haftalik else "THE FOOD ALMANAC", font=_font("Inter-ExtraBold.otf", 30), fill=SARI)
    c.text((80, 105), "FOOD MYTHS MARATHON", font=_font("Anton-Regular.ttf", 96), fill=KREM)
    c.text((80, 225), f"{len(bolumler)} popular food claims, checked against the research",
           font=_font("Inter-Medium.otf", 30), fill=KREM)
    f = _font("Inter-Bold.otf", 26)
    y = 300
    goster = bolumler if len(bolumler) <= 8 else bolumler[:7]
    for i, b in enumerate(goster, 1):
        c.text((80, y), f"{i:>2}.  {b['baslik'][:78]}", font=f, fill=KREM)
        y += 38
    if len(bolumler) > len(goster):
        c.text((80, y), f"       … and {len(bolumler) - len(goster)} more", font=f, fill=KREM)
    c.text((80, H - 60), "Replay of past episodes  ·  New videos every Tuesday & Friday",
           font=_font("Inter-Medium.otf", 24), fill=SARI)
    im.save(yol)


def kart_siradaki(b, i, n, kapak, yol):
    from PIL import Image
    im, c = _zemin()
    c.text((80, 120), f"UP NEXT  ·  EPISODE {i} OF {n}", font=_font("Inter-ExtraBold.otf", 30), fill=SARI)
    _yaz_sarili(c, (80, 180), b["baslik"].upper(), _font("Anton-Regular.ttf", 64), KREM, 560)
    c.text((80, H - 90), "Subscribe for new episodes every Tuesday & Friday",
           font=_font("Inter-Medium.otf", 24), fill=KREM)
    if kapak and os.path.exists(kapak):
        k = Image.open(kapak).convert("RGB").resize((560, 315))
        im.paste(k, (W - 80 - 560, (H - 315) // 2))
    im.save(yol)


def kart_kapanis(yol):
    im, c = _zemin()
    c.text((80, 200), "THANKS FOR WATCHING", font=_font("Anton-Regular.ttf", 110), fill=KREM)
    c.text((80, 350), "New episodes every Tuesday & Friday. Subscribe so you don't miss them.",
           font=_font("Inter-Medium.otf", 32), fill=KREM)
    c.text((80, 410), "Live again tomorrow, same time", font=_font("Inter-Bold.otf", 32), fill=SARI)
    c.text((80, H - 80), "Education only, not medical advice. Talk to your doctor before changing your diet.",
           font=_font("Inter-Medium.otf", 22), fill=KREM)
    im.save(yol)


def rozet(i, n, yol):
    from PIL import Image, ImageDraw
    im = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    c = ImageDraw.Draw(im)
    metin = f"LIVE MARATHON  ·  {i}/{n}"
    f = _font("Inter-ExtraBold.otf", 20)
    gen = int(c.textlength(metin, font=f)) + 52
    x0, y0 = W - gen - 24, 22
    c.rounded_rectangle([x0, y0, x0 + gen, y0 + 40], radius=20, fill=(14, 20, 34, 200))
    c.ellipse([x0 + 16, y0 + 14, x0 + 28, y0 + 26], fill=KIRMIZI)
    c.text((x0 + 38, y0 + 9), metin, font=f, fill=KREM)
    im.save(yol)


def kucuk_resim(bolumler, kapaklar, yol):
    """Yayın kapağı: 2x2 bölüm kapakları + ortada 'LIVE MARATHON' şeridi."""
    from PIL import Image, ImageDraw
    im = Image.new("RGB", (W, H), ZEMIN)
    for j, k in enumerate([k for k in kapaklar if k and os.path.exists(k)][:4]):
        im.paste(Image.open(k).convert("RGB").resize((W // 2, H // 2)), ((j % 2) * W // 2, (j // 2) * H // 2))
    c = ImageDraw.Draw(im, "RGBA")
    c.rectangle([0, H // 2 - 120, W, H // 2 + 120], fill=(14, 20, 34, 235))
    c.rounded_rectangle([60, H // 2 - 92, 230, H // 2 - 12], radius=14, fill=KIRMIZI)
    c.text((86, H // 2 - 88), "LIVE", font=_font("Anton-Regular.ttf", 62), fill=KREM)
    c.text((260, H // 2 - 106), "FOOD MYTHS MARATHON", font=_font("Anton-Regular.ttf", 100), fill=KREM)
    c.text((62, H // 2 + 28), f"{len(bolumler)} EPISODES  ·  CHECKED AGAINST THE RESEARCH",
           font=_font("Inter-ExtraBold.otf", 40), fill=SARI)
    im.save(yol, quality=90)


def muzik_wav(sn, tohum, yol):
    from hazirla import muzik                     # kodla üretilen fon müziği (giriş/çıkış sönümlü)
    x, sr = muzik(sn, [0], [0.3], kaydir=tohum)
    O.wav_yaz(yol, x * 0.8, sr)


# ------------------------------------------------------------------------------------------------- kodlama
def kodla_kart(png, wav, sn, yol):
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-loop", "1", "-framerate", str(FPS), "-i", png, "-i", wav,
                    "-t", str(sn), "-vf", f"scale={W}:{H},format=yuv420p"] + KOD_V + KOD_A + ["-shortest", yol],
                   check=True)


def kodla_bolum(mp4, rozet_png, yol, kes=None):
    fc = (f"[0:v]scale={W}:{H}:force_original_aspect_ratio=decrease,pad={W}:{H}:(ow-iw)/2:(oh-ih)/2,"
          f"setsar=1,fps={FPS}[v];[v][1:v]overlay=0:0[o]")
    giris = ["-i", mp4, "-loop", "1", "-framerate", str(FPS), "-i", rozet_png]
    sinir = ["-t", str(kes)] if kes else []
    subprocess.run(["ffmpeg", "-y", "-v", "error"] + giris + sinir +
                   ["-filter_complex", fc, "-map", "[o]", "-map", "0:a:0", "-shortest"] + KOD_V + KOD_A + [yol],
                   check=True)


def hazirla(mod):
    os.makedirs(TMP, exist_ok=True)
    bolumler = sec(mod)
    if len(bolumler) < (1 if mod == "deneme" else 2):
        O.log("yayınlanacak yeterli herkese açık bölüm yok; maraton atlandı")
        O.json_yaz(os.path.join(TMP, "plan.json"), {"atla": True})
        return
    kes = 45 if mod == "deneme" else None
    secilen, toplam = [], 0.0
    for b in bolumler:
        d = os.path.join(TMP, b["slug"])
        os.makedirs(d, exist_ok=True)
        subprocess.run(["gh", "release", "download", O.etiket(b["slug"]), "-D", d, "--clobber",
                        "-p", "onizleme_720p.mp4", "-p", "kapak_yt.jpg"], check=False)
        mp4 = os.path.join(d, "onizleme_720p.mp4")
        if not os.path.exists(mp4):
            O.log(f"video arşivi yok, atlandı: {b['slug']}")
            continue
        s = kes or _sure(mp4)
        if secilen and toplam + s > HEDEF_DK * 60:
            break
        b.update(mp4=mp4, kapak=os.path.join(d, "kapak_yt.jpg"), sure=s)
        secilen.append(b)
        toplam += s
    if not secilen:
        O.json_yaz(os.path.join(TMP, "plan.json"), {"atla": True})
        return
    n = len(secilen)
    O.log(f"{n} bölüm, {toplam / 60:.0f} dk: " + ", ".join(b["slug"] for b in secilen))
    parca = []
    kisa = 8 if mod == "deneme" else None

    def kart(ad, png_yap, sn, tohum):
        png, wav, mp4 = (os.path.join(TMP, f"{ad}.{u}") for u in ("png", "wav", "mp4"))
        png_yap(png)
        muzik_wav(sn, tohum, wav)
        kodla_kart(png, wav, sn, mp4)
        return mp4

    parca.append(kart("acilis", lambda p: kart_acilis(secilen, p, mod == "tam" and pazar()), kisa or ACILIS_SN, 0))
    for i, b in enumerate(secilen, 1):
        parca.append(kart(f"siradaki_{i}", lambda p, b=b, i=i: kart_siradaki(b, i, n, b["kapak"], p),
                          kisa or KART_SN, i))
        rz = os.path.join(TMP, f"rozet_{i}.png")
        rozet(i, n, rz)
        cikis = os.path.join(TMP, f"bolum_{i}.mp4")
        t0 = time.time()
        kodla_bolum(b["mp4"], rz, cikis, kes)
        O.log(f"  kodlandı {i}/{n}: {b['slug']} ({time.time() - t0:.0f} sn)")
        parca.append(cikis)
    parca.append(kart("kapanis", kart_kapanis, kisa or KAPANIS_SN, n + 1))
    kucuk_resim(secilen, [b["kapak"] for b in secilen], os.path.join(TMP, "kucuk_resim.jpg"))
    sureler = [_sure(p) for p in parca]
    O.json_yaz(os.path.join(TMP, "plan.json"), {
        "mod": mod, "haftalik": mod == "tam" and pazar(), "parcalar": parca, "sureler": sureler,
        "bolumler": [{k: b[k] for k in ("slug", "id", "baslik", "sure")} for b in secilen]})
    O.log(f"hazır: {len(parca)} parça, {sum(sureler) / 60:.1f} dk")


# ------------------------------------------------------------------------------------------------- yayın
def baslik_aciklama(plan):
    bl = plan["bolumler"]
    n = len(bl)
    baslik = f"{n} Food Myths Checked Against the Research | Food Almanac Live Marathon"
    if plan.get("haftalik"):
        baslik = f"This Week's Episodes + {n} Food Myths Checked | Food Almanac Sunday Marathon"
    if plan["mod"] == "deneme":
        baslik = "[TEST] " + baslik
    satir, t = [], ACILIS_SN
    for i, b in enumerate(bl, 1):
        t += KART_SN
        satir.append(f"{t // 3600:d}:{t % 3600 // 60:02d}:{int(t % 60):02d} {b['baslik']} (full video: https://youtu.be/{b['id']})")
        t += int(b["sure"])
    m = O.marka()
    aciklama = (f"A live replay marathon of {n} episodes of The Food Almanac: popular food claims, checked against "
                "the research.\n\nIn this stream:\n" + "\n".join(satir) +
                "\n\nLive marathon every day. New episodes every Tuesday and Friday. Subscribe so you don't miss them.\n\n"
                "This stream replays previously published episodes. Sources for each claim are listed in the "
                "description of each full video above.\n\n" + m.get("aciklama_sonu", ""))
    return baslik[:100], aciklama[:4900]


def _anahtar_bas(yt, plan):
    from googleapiclient.http import MediaFileUpload
    baslik, aciklama = baslik_aciklama(plan)
    gizlilik = "private" if plan["mod"] == "deneme" else "public"
    simdi = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    yb = yt.liveBroadcasts().insert(part="snippet,status,contentDetails", body={
        "snippet": {"title": baslik, "description": aciklama, "scheduledStartTime": simdi},
        "status": {"privacyStatus": gizlilik, "selfDeclaredMadeForKids": False},
        "contentDetails": {"enableAutoStart": True, "enableAutoStop": False, "enableDvr": True,
                           "recordFromStart": True, "latencyPreference": "normal",
                           "monitorStream": {"enableMonitorStream": False}}}).execute()
    ak = yt.liveStreams().insert(part="snippet,cdn,contentDetails", body={
        "snippet": {"title": "Food Almanac marathon"},
        "cdn": {"frameRate": "30fps", "ingestionType": "rtmp", "resolution": "720p"},
        "contentDetails": {"isReusable": False}}).execute()
    yt.liveBroadcasts().bind(id=yb["id"], part="id,contentDetails", streamId=ak["id"]).execute()
    try:                                          # yapay içerik beyanı + kategori (yayından önce, en iyi çaba)
        yt.videos().update(part="status", body={"id": yb["id"], "status": {
            "privacyStatus": gizlilik, "selfDeclaredMadeForKids": False,
            "containsSyntheticMedia": bool(O.marka().get("sentetik_beyan", True))}}).execute()
    except Exception as e:
        O.log(f"  ! yapay içerik beyanı yazılamadı: {str(e)[:120]}")
    kr = os.path.join(TMP, "kucuk_resim.jpg")
    if os.path.exists(kr):
        try:
            yt.thumbnails().set(videoId=yb["id"], media_body=MediaFileUpload(kr)).execute()
        except Exception as e:
            O.log(f"  ! yayın kapağı basılamadı: {str(e)[:120]}")
    ing = ak["cdn"]["ingestionInfo"]
    anahtar = ing["streamName"]
    print(f"::add-mask::{anahtar}", flush=True)
    return yb["id"], ak["id"], ing["ingestionAddress"].rstrip("/") + "/" + anahtar


def _canliya_al(yt, bid, sid, dur):
    """Otomatik başlatma gecikirse akış etkinleşince yayını elle 'live'a geçirir."""
    son = time.time() + 600
    while time.time() < son and not dur.is_set():
        try:
            yb = yt.liveBroadcasts().list(part="status", id=bid).execute()["items"][0]["status"]["lifeCycleStatus"]
            ak = yt.liveStreams().list(part="status", id=sid).execute()["items"][0]["status"]["streamStatus"]
            if yb == "live":
                O.log("yayın canlıda")
                return
            if ak == "active" and yb in ("ready", "testing"):
                yt.liveBroadcasts().transition(broadcastStatus="live", id=bid, part="status").execute()
        except Exception as e:
            O.log(f"  (durum yoklaması: {str(e)[:100]})")
        dur.wait(20)


def akit(plan, hedef):
    """Parçaları sırayla akıtır; bağlantı koparsa kaldığı parçadan en çok 5 kez yeniden başlar."""
    parca, sure = plan["parcalar"], plan["sureler"]
    k, deneme = 0, 0
    while k < len(parca) and deneme <= 5:
        liste = os.path.join(TMP, "liste.txt")
        with open(liste, "w") as f:
            f.writelines(f"file '{p}'\n" for p in parca[k:])
        t0 = time.time()
        r = subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-re", "-f", "concat", "-safe", "0",
                            "-i", liste, "-c", "copy", "-f", "flv", "-flvflags", "no_duration_filesize", hedef])
        if r.returncode == 0:
            return True
        gecen, j = time.time() - t0, k
        while j < len(parca) and gecen >= sure[j]:
            gecen -= sure[j]
            j += 1
        k, deneme = j, deneme + 1
        O.log(f"::warning::akış koptu (çıkış {r.returncode}); parça {k + 1}/{len(parca)}'den yeniden ({deneme}/5)")
        time.sleep(5)
    return k >= len(parca)


def kapat(bid):
    """Yayını bitir. Saatlerce boşta kalan bağlantı kopabildiği için her denemede yeni istemci kurulur."""
    for deneme in range(1, 6):
        try:
            yt = _yt()
            st = yt.liveBroadcasts().list(part="status", id=bid).execute()["items"][0]["status"]["lifeCycleStatus"]
            if st in ("complete", "revoked"):
                return True
            yt.liveBroadcasts().transition(broadcastStatus="complete", id=bid, part="status").execute()
            O.log(f"yayın kapatıldı: {bid}")
            return True
        except Exception as e:
            O.log(f"  (kapatma {deneme}/5: {str(e)[:120]})")
            time.sleep(10 * deneme)
    return False


def acik_kalanlari_kapat():
    """Önceki maratonlardan canlıda kalmış yayın varsa kapat (kapatma isteği ağ hatasıyla düşmüş olabilir)."""
    for k in O.json_oku(KAYIT, [])[-5:]:
        if k.get("mod") == "tam" and k.get("video_id"):
            kapat(k["video_id"])


def yayinla():
    plan = O.json_oku(os.path.join(TMP, "plan.json"), {})
    if not plan or plan.get("atla"):
        O.log("plan yok ya da atlandı; yayın açılmadı")
        return 0
    acik_kalanlari_kapat()
    yt = _yt()
    try:
        bid, sid, hedef = _anahtar_bas(yt, plan)
    except Exception as e:
        s = str(e)
        if "liveStreamingNotEnabled" in s or "livePermissionBlocked" in s:
            print("::error::Kanalda canlı yayın açık değil. YouTube Studio > Oluştur > Canlı yayına başla ile bir kez "
                  "etkinleştirin (onay 24 saate kadar sürebilir), sonra yeniden deneyin.")
        else:
            print(f"::error::canlı yayın oluşturulamadı: {s[:300]}")
        return 1
    url = f"https://youtu.be/{bid}"
    O.log(f"yayın: {url} ({plan['mod']})")
    kayit = O.json_oku(KAYIT, [])
    giris = {"tarih": dt.datetime.now(dt.timezone.utc).isoformat(), "mod": plan["mod"], "video_id": bid,
             "url": url, "bolumler": [b["slug"] for b in plan["bolumler"]], "durum": "basladi"}
    kayit.append(giris)
    dur = threading.Event()
    th = threading.Thread(target=_canliya_al, args=(_yt(), bid, sid, dur), daemon=True)
    th.start()
    tamam = akit(plan, hedef)
    dur.set()
    time.sleep(15)
    kapat(bid)
    giris["durum"] = "tamam" if tamam else "yarida"
    O.json_yaz(KAYIT, kayit)
    O.log(f"yayın bitti: {giris['durum']} — {url}")
    return 0 if tamam else 1


def deneme_sil():
    """Kayıttaki deneme (özel) yayınlarını YouTube'dan siler; yalnızca mod 'deneme' olanlar, başka hiçbir video."""
    kayit = O.json_oku(KAYIT, [])
    hedef = [k for k in kayit if k.get("mod") == "deneme" and k.get("video_id") and k.get("durum") != "silindi"]
    if not hedef:
        return 0
    yt = _yt()
    for k in hedef:
        try:
            yt.liveBroadcasts().delete(id=k["video_id"]).execute()
        except Exception as e:
            if "notFound" not in str(e) and "404" not in str(e):
                O.log(f"  ! deneme yayını silinemedi {k['video_id']}: {str(e)[:120]}")
                continue
        k["durum"] = "silindi"
        O.log(f"deneme yayını silindi: {k['video_id']}")
    O.json_yaz(KAYIT, kayit)
    return 0


def main():
    ap = argparse.ArgumentParser()
    alt = ap.add_subparsers(dest="komut", required=True)
    h = alt.add_parser("hazirla")
    h.add_argument("--mod", choices=["tam", "deneme"], default="tam")
    alt.add_parser("yayinla")
    alt.add_parser("deneme_sil")
    a = ap.parse_args()
    if a.komut == "deneme_sil":
        return deneme_sil()
    if a.komut == "hazirla":
        hazirla(a.mod)
        return 0
    return yayinla()


if __name__ == "__main__":
    sys.exit(main())
