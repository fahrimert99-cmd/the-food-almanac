#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""YouTube'da yayınlanmış Shorts'ları Instagram Reels kuyruğuna koyar (günde en çok bir tane).

  python3 uzun_en/araclar/reels.py --dizin MEDYA [--kuru]     # sıradaki Shorts'u seç, hazırla, beslemeyi yaz
  python3 uzun_en/araclar/reels.py --aciklama SLUG [--no 2]    # Reels açıklamasını yazdır

Seçim: kisa*_yayin.json'u olan, YouTube yayın saati (slot) bugün ya da daha önce olan, henüz kuyruğa girmemiş en eski
Shorts. O gün (UTC) zaten bir Reels eklendiyse hiçbiri. Video GitHub sürümünden (uzun-en-SLUG/kisa*.mp4) indirilip
Instagram koşullarına göre yeniden kodlanır (H.264 ≤ 4,5 Mbps, kapalı GOP, AAC 128k 48 kHz, faststart) ve MEDYA/SLUG-N.mp4
olarak yazılır; yanına kapak karesi (SLUG-N.jpg, Pinterest video pini için) konur. MEDYA/reels.xml (RSS) yeniden
üretilir: Make senaryosu ("Food Almanac – Instagram + Facebook Reels") bu beslemeyi izler, yeni öğenin bağlantısındaki
videoyu açıklamasıyla Instagram'a, Facebook Sayfasına ve Pinterest'e gönderir (<source url> = uzun videonun bağlantısı). MEDYA, depodaki "reels-medya" dalıdır
(raw.githubusercontent.com doğrudan 200 döner; sürüm bağlantıları yönlendirme yaptığından Instagram onları indiremeyebilir).
Kuyruk kaydı: uzun_en/reels.json.
"""
import argparse, datetime as dt, email.utils, glob, os, re, subprocess, sys, tempfile
from xml.sax.saxutils import escape

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
import meta as M  # noqa: E402

KAYIT = os.path.join(O.KOK, "reels.json")
DAL = "reels-medya"
SAKLA_GUN = 14            # medya dalında bu kadar günden eski videolar silinir (Instagram hemen indirir)
BESLEME_AZAMI = 30


def depo():
    return os.environ.get("GITHUB_REPOSITORY", "fahrimert99-cmd/the-food-almanac")


def ad(no):
    return "kisa" if no == 1 else f"kisa_{no}"          # kisa.py ad() ile aynı


def tarih(t):
    return dt.datetime.fromisoformat(t.replace("Z", "+00:00"))


def kayit():
    k = O.json_oku(KAYIT, {}) or {}
    k.setdefault("reels", [])
    return k


def adaylar():
    """(slot, slug, no, yayin) — YouTube'a yüklenmiş tüm Shorts'lar, eskiden yeniye."""
    out = []
    for yol in glob.glob(os.path.join(O.PROJELER, "*", "kisa*_yayin.json")):
        y = O.json_oku(yol, {}) or {}
        m = re.fullmatch(r"kisa(?:_(\d+))?_yayin\.json", os.path.basename(yol))
        if not (m and y.get("video_id") and y.get("slot")):
            continue
        out.append((tarih(y["slot"]), os.path.basename(os.path.dirname(yol)), int(m.group(1) or 1), y))
    return sorted(out, key=lambda a: a[0])


def sec(simdi, k):
    if any(r.get("eklenme", "")[:10] == simdi.date().isoformat() for r in k["reels"]):
        return None
    yapilan = {(r["proje"], r["no"]) for r in k["reels"]}
    gun_sonu = dt.datetime.combine(simdi.date(), dt.time(23, 59), tzinfo=dt.timezone.utc)
    for slot, slug, no, y in adaylar():
        if slot <= gun_sonu and (slug, no) not in yapilan:
            return slug, no, y
    return None


def aciklama(slug, no=1):
    p, m = O.proje(slug), O.marka()
    tanim = O.json_oku(os.path.join(O.proje_dir(slug), f"{ad(no)}.json"), {}) or {}
    baslik = tanim.get("baslik_yt") or p["baslik"]
    parca = [baslik, tanim.get("aciklama") or "",
             f"Full video with every study on YouTube: search “{m.get('ad', 'The Food Almanac')}” (link in bio).",
             "Narration uses a synthetic voice and illustrations are AI-generated. "
             "For education only, not medical advice.",
             M.hashtag(["food science"] + [e for e in p.get("etiketler", []) if len(e.split()) <= 2] + ["nutrition facts"], n=5)]
    return "\n\n".join(x.strip() for x in parca if x and x.strip())[:2200]


def kodla(girdi, cikti):
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", girdi,
                    "-vf", "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2,fps=30",
                    "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p", "-preset", "medium", "-crf", "21",
                    "-maxrate", "4500k", "-bufsize", "9000k", "-g", "60", "-keyint_min", "60", "-sc_threshold", "0",
                    "-c:a", "aac", "-b:a", "128k", "-ar", "48000", "-ac", "2",
                    "-movflags", "+faststart", "-map_metadata", "-1", cikti], check=True)


def kapak(dizin, dosya):
    """Videonun ilk karelerinden (altyazı başlamadan) dikey kapak karesi (aynı ad, .jpg); varsa dokunmaz."""
    jpg = os.path.join(dizin, dosya[:-4] + ".jpg")
    if os.path.exists(os.path.join(dizin, dosya)) and not os.path.exists(jpg):
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", "0.3", "-i", os.path.join(dizin, dosya), "-frames:v", "1",
                        "-vf", "scale=1000:-2", "-q:v", "3", jpg], check=True)


def uzun_url(r):
    """Shorts'un ait olduğu uzun videonun bağlantısı (kayıtta yoksa kisa*_yayin.json'dan)."""
    if r.get("uzun_url"):
        return r["uzun_url"]
    y = O.json_oku(os.path.join(O.proje_dir(r["proje"]), f"{ad(r['no'])}_yayin.json"), {}) or {}
    return f"https://youtu.be/{y['uzun_id']}" if y.get("uzun_id") else "https://www.youtube.com/@FoodAlmanacTV"


def besleme(dizin, k):
    m = O.marka()
    ogeler = []
    for r in sorted(k["reels"], key=lambda r: r["eklenme"], reverse=True)[:BESLEME_AZAMI]:
        if not os.path.exists(os.path.join(dizin, r["dosya"])):
            continue
        ogeler.append(
            "  <item>\n"
            f"    <title>{escape(r['baslik'])}</title>\n"
            f"    <link>{escape(r['video_url'])}</link>\n"
            f"    <guid isPermaLink=\"false\">{escape(r['guid'])}</guid>\n"
            f"    <pubDate>{email.utils.format_datetime(tarih(r['eklenme']))}</pubDate>\n"
            f"    <description><![CDATA[{r['aciklama'].replace(']]>', ']] >')}]]></description>\n"
            f"    <enclosure url=\"{escape(r['video_url'])}\" type=\"video/mp4\" length=\"{r['boyut']}\"/>\n"
            f"    <source url=\"{escape(uzun_url(r))}\">{escape(m.get('ad', 'The Food Almanac'))} on YouTube</source>\n"
            "  </item>")
    xml = ('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n'
           f"  <title>{escape(m.get('ad', 'The Food Almanac'))} – Instagram Reels</title>\n"
           f"  <link>https://github.com/{depo()}</link>\n"
           "  <description>Reels queue (one per day) generated by .github/workflows/reels.yml</description>\n"
           + "\n".join(ogeler) + ("\n" if ogeler else "") + "</channel>\n</rss>\n")
    with open(os.path.join(dizin, "reels.xml"), "w", encoding="utf-8") as f:
        f.write(xml)


def temizle(dizin, k, simdi):
    tut = {r["dosya"][:-4] for r in k["reels"] if simdi - tarih(r["eklenme"]) < dt.timedelta(days=SAKLA_GUN)}
    for yol in glob.glob(os.path.join(dizin, "*.mp4")) + glob.glob(os.path.join(dizin, "*.jpg")):
        if os.path.basename(yol)[:-4] not in tut:
            os.remove(yol)


def gun(dizin, kuru=False, simdi=None):
    simdi = simdi or dt.datetime.now(dt.timezone.utc)
    k = kayit()
    s = sec(simdi, k)
    if not s:
        O.log("bugün eklenecek Reels yok")
    else:
        slug, no, y = s
        dosya = f"{slug}-{no}.mp4"
        tanim = O.json_oku(os.path.join(O.proje_dir(slug), f"{ad(no)}.json"), {}) or {}
        O.log(f"Reels: {slug} Shorts {no} ({y['video_id']}, YouTube {y['slot']})")
        if kuru:
            print(aciklama(slug, no))
            return s
        yerel = os.path.join(O.proje_dir(slug), "cikti", ad(no), f"{ad(no)}.mp4")
        with tempfile.TemporaryDirectory() as t:
            if not os.path.exists(yerel):
                O.gh("release", "download", f"uzun-en-{slug}", "-D", t, "-p", f"{ad(no)}.mp4", "--clobber")
                yerel = os.path.join(t, f"{ad(no)}.mp4")
            kodla(yerel, os.path.join(dizin, dosya))
        k["reels"].append({"proje": slug, "no": no, "yt_id": y["video_id"], "guid": f"{slug}-{no}",
                           "baslik": tanim.get("baslik_yt") or O.proje(slug)["baslik"],
                           "aciklama": aciklama(slug, no), "dosya": dosya,
                           "uzun_url": f"https://youtu.be/{y['uzun_id']}" if y.get("uzun_id") else "",
                           "video_url": f"https://raw.githubusercontent.com/{depo()}/{DAL}/{dosya}",
                           "boyut": os.path.getsize(os.path.join(dizin, dosya)),
                           "eklenme": simdi.strftime("%Y-%m-%dT%H:%M:%SZ")})
        O.json_yaz(KAYIT, k)
        gh = os.environ.get("GITHUB_ENV")
        if gh:
            with open(gh, "a") as f:
                f.write(f"REELS={slug}-{no}\n")
    if not kuru:
        temizle(dizin, k, simdi)
        for r in k["reels"]:
            kapak(dizin, r["dosya"])
        besleme(dizin, k)
    return s


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dizin")
    ap.add_argument("--kuru", action="store_true")
    ap.add_argument("--aciklama")
    ap.add_argument("--no", type=int, default=1)
    a = ap.parse_args()
    if a.aciklama:
        print(aciklama(a.aciklama, a.no))
    elif a.dizin:
        os.makedirs(a.dizin, exist_ok=True)
        gun(a.dizin, a.kuru)
    else:
        ap.error("--dizin ya da --aciklama gerekli")


if __name__ == "__main__":
    main()
