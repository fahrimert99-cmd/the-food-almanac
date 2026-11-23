#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Google Flow ile elle/Claude ile üretilen gravür Shorts'larını YouTube'a zamanlanmış yükler (haftada bir).

Bu hat otomatik Shorts hattından (kisa*_yayin.json) ayrıdır; onun dosyalarına dokunmaz.

  python3 uzun_en/araclar/flow_kisa.py --liste                 # bekleyen / yüklenmiş Flow Shorts'ları ve slotları
  python3 uzun_en/araclar/flow_kisa.py --yukle [--kuru]        # bekleyenleri sırayla haftalık slotlara yükle
  python3 uzun_en/araclar/flow_kisa.py --yukle --proje SLUG    # yalnızca bir proje
  python3 uzun_en/araclar/flow_kisa.py --yukle --cakisma       # + aynı güne düşen otomatik Shorts'ların zamanlamasını kaldır

Girdi (projeler/SLUG/):
  flow_kisa.json   -> başlık, açıklama, kaynaklar (şema: uzun_en/flow/README.md)
  flow_kisa.mp4    -> GitHub sürümü "uzun-en-SLUG" içinde varlık olarak (repoda değil); betik gh ile indirir
Çıktı: projeler/SLUG/flow_kisa_yayin.json  {"video_id", "url", "slot", "baslik", "uzun_id", "yuklenme"}

Kural: uzun video yüklenmeden Flow Shorts yüklenmez (açıklamada uzun videonun bağlantısı var). Haftada en çok bir Flow
Shorts; gün/saat marka.json "flow_kisa" ile değiştirilebilir (varsayılan Cumartesi 17:00 UTC = 20:00 TR).
Gerekli: YT_CLIENT_ID, YT_CLIENT_SECRET, YT_REFRESH_TOKEN; varlığı indirmek için GH_TOKEN.
Kota dolarsa çıkış kodu 3 (iş akışı bunu hata saymaz; ertesi gün kaldığı yerden devam eder).
"""
import argparse, datetime as dt, glob, os, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

TANIM = "flow_kisa.json"
KAYIT = "flow_kisa_yayin.json"
VIDEO = "flow_kisa.mp4"
MEDYA_DALI = os.environ.get("FLOW_MEDYA_DALI", "flow-medya")
VARSAYILAN = {"gun": 5, "saat_utc": "17:00", "en_erken_saat": 3}   # 5 = Cumartesi (Python haftanın günü)


def ayar():
    a = dict(VARSAYILAN)
    a.update(O.marka().get("flow_kisa") or {})
    return a


def ts(t):
    return dt.datetime.fromisoformat(t.replace("Z", "+00:00"))


def z(t):
    return t.strftime("%Y-%m-%dT%H:%M:%SZ")


def projeler():
    """flow_kisa.json'u olan projeler, eklenme sırasıyla (dosyadaki 'eklenme' alanı; yoksa slug)."""
    out = []
    for yol in glob.glob(os.path.join(O.PROJELER, "*", TANIM)):
        slug = os.path.basename(os.path.dirname(yol))
        t = O.json_oku(yol, {}) or {}
        out.append((t.get("eklenme") or "9999", slug))
    return [s for _, s in sorted(out)]


def kayit(slug):
    return O.json_oku(os.path.join(O.proje_dir(slug), KAYIT), {}) or {}


def dolu_haftalar():
    """Zaten bir Flow Shorts'u olan ISO haftaları."""
    out = set()
    for slug in projeler():
        s = kayit(slug).get("slot")
        if s:
            out.add(ts(s).isocalendar()[:2])
    return out


def sonraki_slot(simdi, dolu):
    a = ayar()
    sa, dk = map(int, a["saat_utc"].split(":"))
    alt = simdi + dt.timedelta(hours=a["en_erken_saat"])
    g = alt.date()
    while True:
        t = dt.datetime(g.year, g.month, g.day, sa, dk, tzinfo=dt.timezone.utc)
        if g.weekday() == a["gun"] and t >= alt and t.isocalendar()[:2] not in dolu:
            return t
        g += dt.timedelta(days=1)


def aciklama(slug, tanim, uzun_id):
    import meta as M
    p, m = O.proje(slug), O.marka()
    parca = [tanim.get("aciklama") or "", f"Full video: https://youtu.be/{uzun_id}"]
    kaynak = tanim.get("kaynaklar") or p.get("kaynaklar") or []
    if kaynak:
        parca.append("SOURCES\n" + "\n".join(f"{i}. {k}" for i, k in enumerate(kaynak, 1)))
    if m.get("aciklama_sonu"):
        parca.append(m["aciklama_sonu"].strip())
    parca.append(("#Shorts " + M.hashtag(tanim.get("etiketler") or p.get("etiketler", []), n=2)).strip())
    return M.temiz("\n\n".join(x for x in parca if x))[:4900]


def videoyu_getir(slug):
    hedef = os.path.join(O.proje_dir(slug), "cikti")
    yol = os.path.join(hedef, VIDEO)
    if os.path.exists(yol):
        return yol
    os.makedirs(hedef, exist_ok=True)
    r = subprocess.run(["gh", "release", "download", f"uzun-en-{slug}", "-p", VIDEO, "-D", hedef, "--clobber"],
                       capture_output=True, text=True)
    if r.returncode == 0 and os.path.exists(yol):
        return yol
    # Yedek: video ayrı "flow-medya" dalında (MEDYA_DALI/SLUG/flow_kisa.mp4) olabilir.
    # Bulunursa sürüme de yüklenir, bir dahaki sefere oradan gelir.
    f = subprocess.run(["git", "fetch", "--depth", "1", "origin", MEDYA_DALI], capture_output=True, text=True)
    if f.returncode == 0:
        with open(yol, "wb") as fh:
            g = subprocess.run(["git", "show", f"FETCH_HEAD:{slug}/{VIDEO}"], stdout=fh, stderr=subprocess.PIPE)
        if g.returncode == 0 and os.path.getsize(yol) > 0:
            u = subprocess.run(["gh", "release", "upload", f"uzun-en-{slug}", yol, "--clobber"],
                               capture_output=True, text=True)
            O.log(f"  {slug}: {VIDEO} {MEDYA_DALI} dalından alındı"
                  + (", sürüme yüklendi" if u.returncode == 0 else f" (sürüme yüklenemedi: {u.stderr.strip()[:80]})"))
            return yol
        if os.path.exists(yol):
            os.remove(yol)
    O.log(f"! {slug}: {VIDEO} ne sürümde (uzun-en-{slug}) ne {MEDYA_DALI} dalında — atlanıyor ({r.stderr.strip()[:120]})")
    return None


def yukle(slug, slot, kuru=False):
    import meta as M
    import yukle as Y
    pdir = O.proje_dir(slug)
    tanim = O.json_oku(os.path.join(pdir, TANIM), {}) or {}
    y = O.json_oku(os.path.join(pdir, "yayin.json"), {}) or {}
    if not y.get("video_id"):
        O.log(f"• {slug}: uzun video henüz yüklenmemiş — Flow Shorts bekliyor")
        return False
    p, m = O.proje(slug), O.marka()
    baslik = M.temiz(tanim.get("baslik_yt") or p["baslik"])[:100]
    if baslik.strip().lower() == str(y.get("baslik") or p["baslik"]).strip().lower():
        baslik = baslik[:91] + " #Shorts"
    body = {"snippet": {"title": baslik, "description": aciklama(slug, tanim, y["video_id"]),
                        "tags": M.etiket_listesi(p, m), "categoryId": m.get("kategori", "27"),
                        "defaultLanguage": m.get("dil", "en"), "defaultAudioLanguage": m.get("dil", "en")},
            "status": {"privacyStatus": "private", "publishAt": z(slot), "selfDeclaredMadeForKids": False,
                       "containsSyntheticMedia": bool(m.get("sentetik_beyan", True)), "embeddable": True,
                       "license": "youtube", "publicStatsViewable": True}}
    O.log(f"Flow Shorts: {slug} — '{baslik}' -> {z(slot)}")
    if kuru:
        print(body["snippet"]["description"])
        return True
    video = videoyu_getir(slug)
    if not video:
        return False
    from googleapiclient.discovery import build
    import youtube_api as YY
    yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    vid = Y.ayni_baslikli(yt, baslik)
    if vid:
        O.log(f"kanalda aynı başlıklı video var, yeniden yüklenmiyor: {vid}")
    else:
        vid = Y.video_yukle(yt, body, video)
    O.json_yaz(os.path.join(pdir, KAYIT), {"video_id": vid, "url": f"https://youtube.com/shorts/{vid}", "slot": z(slot),
                                           "baslik": baslik, "uzun_id": y["video_id"],
                                           "yuklenme": z(dt.datetime.now(dt.timezone.utc))})
    return True


def cakismalari_kaldir(kuru=False):
    """Flow Shorts ile aynı UTC gününe zamanlanmış otomatik Shorts'ların (kisa*_yayin.json) zamanlamasını kaldırır.

    Video silinmez: YouTube'da gizli kalır, publishAt kaldırılır (geri alınabilir). Kayda
    "zamanlama_kaldirildi" eklenir; "slot" alanı korunur ki otomatik hat o günü yeniden doldurmasın.
    """
    simdi = dt.datetime.now(dt.timezone.utc)
    gunler = {}
    for s in projeler():
        k = kayit(s)
        if k.get("video_id") and k.get("slot") and ts(k["slot"]) > simdi:
            gunler[k["slot"][:10]] = s
    hedefler = []
    for yol in sorted(glob.glob(os.path.join(O.PROJELER, "*", "kisa*_yayin.json"))):
        k = O.json_oku(yol, {}) or {}
        sl = str(k.get("slot") or "")
        if k.get("video_id") and sl[:10] in gunler and ts(sl) > simdi and not k.get("zamanlama_kaldirildi"):
            hedefler.append((yol, k, gunler[sl[:10]]))
    if not hedefler:
        O.log("Çakışma yok.")
        return
    yt = None
    if not kuru:
        from googleapiclient.discovery import build
        import youtube_api as YY
        yt = build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)
    for yol, k, flow_slug in hedefler:
        vid = k["video_id"]
        O.log(f"Çakışma: {os.path.relpath(yol, O.PROJELER)} {vid} ({k.get('slot')}) — Flow Shorts {flow_slug} ile aynı gün")
        if kuru:
            continue
        r = yt.videos().list(part="status", id=vid).execute().get("items") or []
        if not r:
            O.log(f"! {vid} kanalda bulunamadı, atlanıyor")
            continue
        st = r[0]["status"]
        if st.get("privacyStatus") != "private" or not st.get("publishAt"):
            O.log(f"! {vid} zaten zamanlı değil ({st.get('privacyStatus')}), dokunulmadı")
        else:
            yeni = {"privacyStatus": "private"}
            for a in ("embeddable", "license", "publicStatsViewable", "selfDeclaredMadeForKids", "containsSyntheticMedia"):
                if a in st:
                    yeni[a] = st[a]
            yt.videos().update(part="status", body={"id": vid, "status": yeni}).execute()
            O.log(f"  {vid}: zamanlama kaldırıldı, video gizli kaldı")
        k["zamanlama_kaldirildi"] = {"tarih": z(simdi), "eski_slot": k.get("slot"),
                                     "neden": f"Flow Shorts ({flow_slug}) ile aynı gün"}
        O.json_yaz(yol, k)


def bekleyenler(tek=None):
    return [s for s in projeler() if (tek in (None, s)) and not kayit(s).get("video_id")]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--liste", action="store_true")
    ap.add_argument("--yukle", action="store_true")
    ap.add_argument("--proje")
    ap.add_argument("--kuru", action="store_true")
    ap.add_argument("--cakisma", action="store_true", help="aynı güne düşen otomatik Shorts'ların zamanlamasını kaldır")
    a = ap.parse_args()
    simdi = dt.datetime.now(dt.timezone.utc)
    if a.liste:
        for s in projeler():
            k = kayit(s)
            O.log(f"{s}: " + (f"yüklendi {k['video_id']} -> {k['slot']}" if k.get("video_id") else "bekliyor"))
        return
    if a.cakisma and not a.yukle:
        cakismalari_kaldir(a.kuru)
        return
    if not a.yukle:
        ap.error("--liste, --yukle ya da --cakisma")
    dolu = dolu_haftalar()
    import yukle as Y
    for slug in bekleyenler(a.proje):
        slot = sonraki_slot(simdi, dolu)
        try:
            if yukle(slug, slot, a.kuru):
                dolu.add(slot.isocalendar()[:2])
        except Exception as e:
            if Y.kota_hatasi(e):
                O.log("! YouTube kotası dolu — kalanlar sonraki çalıştırmada")
                sys.exit(Y.KOTA_KODU)
            raise
    if a.cakisma:
        cakismalari_kaldir(a.kuru)


if __name__ == "__main__":
    main()
