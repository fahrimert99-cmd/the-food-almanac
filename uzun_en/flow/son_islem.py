#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Flow Shorts son işlemi (yerelde/Claude oturumunda çalışır; iş akışında değil).

  python3 uzun_en/flow/son_islem.py --proje SLUG --girdi ham.mp4 --cikti flow_kisa.mp4
  python3 uzun_en/flow/son_islem.py --proje SLUG --klipler DIZIN --cikti flow_kisa.mp4
      DIZIN: clip1.mp4..clipN.mp4 (Flow klipleri) + ses1.wav..sesN.wav (sahne anlatımları). Almanac Studio'nun
      birleştirmesi başarısız olursa yedek yol: klipleri anlatım süresine göre kırpar/yavaşlatır, sesi bindirir.

Ekledikleri: 1080x1920, kanca başlığı (flow_kisa.json "kanca"), Anton altyazı (anahtar kelimeler kehribar),
kaynak etiketleri ("kaynak_etiketleri"), üstte ilerleme çubuğu, son sahnede "FULL VIDEO ON THE CHANNEL" şeridi.
Zamanlama flow_kisa.json "sahneler[].sure_sn" (anlatım süresi) + 0.4 sn'den hesaplanır. Gerekli: ffmpeg, Pillow,
Anton ve Crimson Text fontları (yolu FONT_ANTON / FONT_SERIF ile değiştirilebilir).
"""
import argparse, json, os, subprocess, sys, tempfile
from PIL import Image, ImageDraw, ImageFont

ap = argparse.ArgumentParser()
ap.add_argument("--proje", required=True)
ap.add_argument("--girdi")
ap.add_argument("--klipler")
ap.add_argument("--cikti", required=True)
arg = ap.parse_args()
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
t_ = json.load(open(os.path.join(KOK, "projeler", arg.proje, "flow_kisa.json"), encoding="utf-8"))
cfg = {"durs": [s["sure_sn"] for s in t_["sahneler"]], "hook": t_["kanca"],
       "lines": [[s["anlatim"], s.get("vurgu", [])] for s in t_["sahneler"]], "chips": t_.get("kaynak_etiketleri", {})}
W, H = 1080, 1920
ANTON = os.environ.get("FONT_ANTON", "/usr/share/fonts/truetype/google-fonts/ofl/anton/Anton-Regular.ttf")
SERIF = os.environ.get("FONT_SERIF", "/usr/share/fonts/truetype/google-fonts/ofl/crimsontext/CrimsonText-SemiBold.ttf")
INK, CREAM, RUST, AMBER = (28, 26, 23), (243, 233, 210), (178, 58, 43), (242, 179, 61)
WHITE = (255, 255, 255)
OUT = tempfile.mkdtemp(prefix="flow_ov_")
F = lambda p, s: ImageFont.truetype(p, s)

# sahne zaman çizelgesi: anlatım süresi + 0.4 s
starts, t = [], 0.0
for d in cfg["durs"]:
    starts.append((t, d)); t += d + 0.4
TOTAL = t


def birlestir(dizin):
    """Almanac Studio birleştiremezse: clipN + sesN -> ham video (anlatım 0.2 sn'de, sahne = anlatım + 0.4 sn)."""
    parca = []
    for i, d in enumerate(cfg["durs"], 1):
        T = round(d + 0.4, 3); S = round(min(1.15, max(1.0, T / 8.0)), 4); p = os.path.join(OUT, f"s{i}.mp4")
        subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", os.path.join(dizin, f"clip{i}.mp4"), "-i", os.path.join(dizin, f"ses{i}.wav"),
            "-filter_complex", f"[0:v]setpts={S}*PTS,fps=30,tpad=stop_mode=clone:stop_duration=2,trim=0:{T},setpts=PTS-STARTPTS,format=yuv420p[v];"
            f"[0:a]atempo={round(1/S,4)},apad,atrim=0:{T},asetpts=PTS-STARTPTS,volume=0.04,aresample=48000,aformat=channel_layouts=stereo[amb];"
            f"[1:a]adelay=200|200,aresample=48000,aformat=channel_layouts=stereo,apad,atrim=0:{T}[nar];[nar][amb]amix=inputs=2:duration=first:normalize=0[a]",
            "-map", "[v]", "-map", "[a]", "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-c:a", "aac", "-b:a", "192k", "-t", str(T), p], check=True)
        parca.append(p)
    liste = os.path.join(OUT, "liste.txt"); open(liste, "w").write("".join(f"file '{p}'\n" for p in parca))
    ham = os.path.join(OUT, "ham.mp4"); bir = os.path.join(OUT, "bir.mp4")
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", liste, "-c", "copy", bir], check=True)
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-i", bir, "-c:v", "copy", "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ar", "48000",
                    "-c:a", "aac", "-b:a", "192k", ham], check=True)
    return ham


GIRDI = birlestir(arg.klipler) if arg.klipler else arg.girdi
if not GIRDI:
    ap.error("--girdi ya da --klipler gerekli")


def chunks(words):
    out, cur = [], []
    for w in words:
        if cur and (len(" ".join(cur + [w])) > 15 or len(cur) >= 3):
            out.append(cur); cur = []
        cur.append(w)
        if w.endswith((",", ":", ";", "?", ".")):
            out.append(cur); cur = []
    if cur: out.append(cur)
    if len(out) > 1 and len(" ".join(out[-1])) < 5: out[-2] += out.pop()
    return out

def cap_png(words, keys, path):
    f = F(ANTON, 104); img = Image.new("RGBA", (W, 300), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    tw = [w.upper() for w in words]; sp = d.textlength(" ", font=f)
    ws = [d.textlength(w, font=f) for w in tw]; x = (W - (sum(ws) + sp * (len(tw) - 1))) / 2
    if x < 50:  # iki satır
        k = min(range(1, len(tw)), key=lambda k: abs(sum(ws[:k]) - sum(ws[k:]))); rows = [range(k), range(k, len(tw))]
    else: rows = [range(len(tw))]
    y = 150 - len(rows) * 62
    for r in rows:
        lw = sum(ws[i] for i in r) + sp * (len(r) - 1); x = (W - lw) / 2
        for i in r:
            core = words[i].strip(",.;:?!").lower()
            d.text((x, y), tw[i], font=f, fill=AMBER if core in keys else WHITE, stroke_width=9, stroke_fill=INK)
            x += ws[i] + sp
        y += 124
    img.save(path)

def hook_png(lines, path):
    img = Image.new("RGBA", (W, 460), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    tag = F(SERIF, 40); tt = "THE FOOD ALMANAC"; w = d.textlength(tt, font=tag)
    d.text(((W - w) / 2, 6), tt, font=tag, fill=CREAM, stroke_width=3, stroke_fill=INK)
    y = 70
    for i, ln in enumerate(lines):
        f = F(ANTON, 150); w = d.textlength(ln, font=f)
        bg, fg = (CREAM, INK) if i == 0 else (RUST, CREAM)
        d.rectangle(((W - w) / 2 - 34, y, (W + w) / 2 + 34, y + 178), fill=bg)
        d.text(((W - w) / 2, y - 6), ln, font=f, fill=fg); y += 192
    img.save(path)

def chip_png(text, path):
    f = F(SERIF, 40); img = Image.new("RGBA", (W, 90), (0, 0, 0, 0)); d = ImageDraw.Draw(img)
    w = d.textlength(text, font=f)
    d.rounded_rectangle(((W - w) / 2 - 26, 10, (W + w) / 2 + 26, 76), 10, fill=CREAM + (235,), outline=INK, width=3)
    d.text(((W - w) / 2, 14), text, font=f, fill=INK); img.save(path)

def strip_png(path):
    f = F(ANTON, 58); img = Image.new("RGBA", (W, 110), RUST + (240,)); d = ImageDraw.Draw(img)
    t = "FULL VIDEO ON THE CHANNEL"; w = d.textlength(t, font=f); d.text(((W - w) / 2, 14), t, font=f, fill=CREAM)
    img.save(path)

ev = []
for i, (line, keys) in enumerate(cfg["lines"]):
    s0, d = starts[i]; ch = chunks(line.split()); L = [len(" ".join(c)) for c in ch]; t0 = s0 + 0.2
    for j, c in enumerate(ch):
        seg = d * L[j] / sum(L); p = f"{OUT}/c{i}_{j}.png"; cap_png(c, set(keys), p)
        ev.append((p, t0, (t0 + seg) if j < len(ch) - 1 else s0 + d + 0.4, 1260)); t0 += seg
for k, (sc, text) in enumerate(cfg["chips"].items()):
    p = f"{OUT}/chip{k}.png"; chip_png(text, p); s0, d = starts[int(sc) - 1]
    ev.append((p, s0 + 0.3, s0 + d + 0.4, 1150))
hook_png(cfg["hook"], f"{OUT}/hook.png"); strip_png(f"{OUT}/strip.png")
h_end = starts[0][1] + 0.4; last0 = starts[-1][0]

inp = ["-i", GIRDI, "-loop", "1", "-t", str(TOTAL), "-i", f"{OUT}/hook.png", "-loop", "1", "-t", str(TOTAL), "-i", f"{OUT}/strip.png",
       "-f", "lavfi", "-i", f"color=c=0xF3E9D2:s=1080x10:d={TOTAL}"]
for e in ev: inp += ["-loop", "1", "-t", str(TOTAL), "-i", e[0]]
fc = [f"[0:v]scale=1080:1920:flags=lanczos,setsar=1,trim=0:{TOTAL},setpts=PTS-STARTPTS[b0]",
      f"[1:v]format=rgba,fade=t=out:st={h_end-0.3}:d=0.3:alpha=1[hk]", f"[b0][hk]overlay=0:170:enable='lt(t,{h_end})'[b1]"]
cur = "b1"
for k, e in enumerate(ev):
    fc.append(f"[{cur}][{k+4}:v]overlay=0:{e[3]}:enable='between(t,{e[1]:.3f},{e[2]-0.001:.3f})'[v{k}]"); cur = f"v{k}"
fc.append(f"[2:v]format=rgba,fade=t=in:st={last0+0.5}:d=0.3:alpha=1[st]")
fc.append(f"[{cur}][st]overlay=0:1560:enable='gte(t,{last0+0.5})'[e1]")
fc.append(f"[e1][3:v]overlay=x='-w+w*t/{TOTAL}':y=0[vo]")
fc.append(f"[0:a]atrim=0:{TOTAL},afade=t=out:st={TOTAL-0.4}:d=0.4[ao]")
subprocess.run(["ffmpeg", "-y", "-v", "error"] + inp + ["-filter_complex", ";".join(fc), "-map", "[vo]", "-map", "[ao]",
                "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p", "-r", "30", "-c:a", "aac", "-b:a", "192k",
                "-movflags", "+faststart", "-t", str(TOTAL), arg.cikti], check=True)
print("ok", round(TOTAL, 2))
