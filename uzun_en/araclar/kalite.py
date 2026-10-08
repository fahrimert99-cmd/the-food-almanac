#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Yüklemeden önce son video için otomatik kalite kontrolü. Geçmezse video YouTube'a yüklenmez.

  python3 uzun_en/araclar/kalite.py --proje SLUG     # projeler/SLUG/cikti/video.mp4 -> cikti/kalite.json
Kontroller: 1920x1080 / 30 fps, süre (zaman çizelgesiyle), ses akışı ve ses yüksekliği, uzun siyah bölüm,
düz renk (boş) kareler, en az 8 dakika.
"""
import argparse, json, os, re, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402


def calis(args):
    return subprocess.run(args, capture_output=True, text=True)


def denetle(slug):
    video = os.path.join(O.proje_dir(slug), "cikti", "video.mp4")
    veri = O.json_oku(os.path.join(O.REMOTION, "src", "tam", "tam.gen.json"), {})
    h, bilgi = [], {}
    if not os.path.exists(video):
        return ["video.mp4 yok"], bilgi
    r = calis(["ffprobe", "-v", "error", "-show_entries", "stream=codec_type,width,height,r_frame_rate:format=duration",
               "-of", "json", video])
    d = json.loads(r.stdout or "{}")
    v = next((s for s in d.get("streams", []) if s.get("codec_type") == "video"), {})
    a = next((s for s in d.get("streams", []) if s.get("codec_type") == "audio"), None)
    sure = float(d.get("format", {}).get("duration", 0))
    bilgi.update(genislik=v.get("width"), yukseklik=v.get("height"), fps=v.get("r_frame_rate"), sure=round(sure, 1))
    if (v.get("width"), v.get("height")) != (1920, 1080):
        h.append(f"çözünürlük {v.get('width')}x{v.get('height')} (1920x1080 bekleniyordu)")
    if v.get("r_frame_rate") not in ("30/1", "30000/1000"):
        h.append(f"kare hızı {v.get('r_frame_rate')}")
    if not a:
        h.append("ses akışı yok")
    if sure < 8 * 60:
        h.append(f"süre {sure / 60:.1f} dk (en az 8 dk)")
    if veri.get("toplam") and abs(sure - veri["toplam"]) > 3:
        h.append(f"süre {sure:.1f} sn, zaman çizelgesi {veri['toplam']:.1f} sn")
    # ses yüksekliği (EBU R128)
    r = calis(["ffmpeg", "-hide_banner", "-nostats", "-i", video, "-vn", "-af", "ebur128", "-f", "null", "-"])
    m = re.findall(r"I:\s+(-?[\d.]+) LUFS", r.stderr)
    if m:
        lufs = float(m[-1])
        bilgi["lufs"] = lufs
        if not -19 <= lufs <= -11:
            h.append(f"ses yüksekliği {lufs} LUFS (-19 ile -11 arası bekleniyordu)")
    # uzun siyah bölüm (kâğıt zeminli videoda siyah = hata), son 2 sn hariç
    r = calis(["ffmpeg", "-hide_banner", "-nostats", "-i", video, "-an", "-vf", "fps=5,blackdetect=d=1.0:pix_th=0.12",
               "-f", "null", "-"])
    siyah = [(float(x), float(y)) for x, y in re.findall(r"black_start:([\d.]+) black_end:([\d.]+)", r.stderr)]
    siyah = [(x, y) for x, y in siyah if x < sure - 2.5]
    bilgi["siyah_sn"] = round(sum(y - x for x, y in siyah), 1)
    if bilgi["siyah_sn"] > 2:
        h.append(f"{bilgi['siyah_sn']} sn siyah görüntü ({siyah[:3]})")
    # örnek karelerde düz renk (boş kare) kontrolü
    from PIL import Image, ImageStat
    tmp = os.path.join(O.proje_dir(slug), "cikti", "_kare.png")
    bos = 0
    for i in range(1, 13):
        t = sure * i / 13
        calis(["ffmpeg", "-v", "error", "-y", "-ss", f"{t:.2f}", "-i", video, "-frames:v", "1", "-vf", "scale=320:180", tmp])
        try:
            if ImageStat.Stat(Image.open(tmp).convert("L")).stddev[0] < 6:
                bos += 1
        except OSError:
            bos += 1
    if os.path.exists(tmp):
        os.remove(tmp)
    bilgi["bos_kare"] = bos
    if bos >= 3:
        h.append(f"12 örnek karenin {bos} tanesi boş/düz renk")
    return h, bilgi


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    h, bilgi = denetle(slug)
    O.json_yaz(os.path.join(O.proje_dir(slug), "cikti", "kalite.json"), {"gecti": not h, "hatalar": h, "bilgi": bilgi})
    O.log(f"kalite: {json.dumps(bilgi, ensure_ascii=False)}")
    for x in h:
        O.log(f"HATA: {x}")
    O.log("SONUÇ: " + ("GEÇTİ" if not h else "KALDI — video yüklenmeyecek"))
    sys.exit(1 if h else 0)


if __name__ == "__main__":
    main()
