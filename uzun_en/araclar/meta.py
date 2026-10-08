#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""YouTube başlığı, açıklaması (bölümler + kaynaklar + beyanlar), etiketleri ve kapak görseli.

  python3 uzun_en/araclar/meta.py --proje SLUG            # -> projeler/SLUG/cikti/meta.json + aciklama.txt
  python3 uzun_en/araclar/meta.py --proje SLUG --kapak    # ayrıca Remotion ile kapak (cikti/kapak_yt.jpg)
Önce hazirla.py çalışmış olmalı (bölüm zamanları remotion/src/tam/tam.gen.json'dan okunur).
"""
import argparse, os, re, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402


def temiz(s):
    """YouTube başlık/açıklamada < ve > kabul etmez."""
    return s.replace("<", "＜").replace(">", "＞")


def bolumler(veri):
    out = []
    for s in veri["sahneler"]:
        if s["meta"].get("bolum"):
            t = 0 if not out else s["bas"]
            if out and t - out[-1][0] < 10:                   # YouTube: bölümler en az 10 sn
                continue
            out.append((t, s["meta"]["bolum"]))
    if out and veri["toplam"] - out[-1][0] < 10:
        out.pop()
    return out if len(out) >= 3 else []


def hashtag(etiketler, n=3):
    out = []
    for e in etiketler:
        h = re.sub(r"[^A-Za-z0-9]", "", e.title())
        if 3 <= len(h) <= 24 and h.lower() not in (x.lower() for x in out):
            out.append(h)
        if len(out) == n:
            break
    return " ".join(f"#{h}" for h in out)


def uret(slug):
    p = O.proje(slug)
    m = O.marka()
    veri = O.json_oku(os.path.join(O.REMOTION, "src", "tam", "tam.gen.json"))
    if not veri or veri.get("slug") != slug:
        raise SystemExit("tam.gen.json bu projeye ait değil — önce hazirla.py --proje " + slug)
    parca = [p["aciklama_giris"].strip()]
    b = bolumler(veri)
    if b:
        parca.append("CHAPTERS\n" + "\n".join(f"{O.zaman_str(t)} {ad}" for t, ad in b))
    parca.append("SOURCES\n" + "\n".join(f"{i}. {k}" for i, k in enumerate(p["kaynaklar"], 1)))
    if m.get("aciklama_sonu"):
        parca.append(m["aciklama_sonu"].strip())
    parca.append(f"Subscribe to {m.get('ad', '')} for a new food-science explainer every Tuesday and Friday.")
    parca.append(hashtag(p.get("etiketler", [])))
    aciklama = temiz("\n\n".join(x for x in parca if x))[:4900]
    etiketler, toplam = [], 0
    for e in list(p.get("etiketler", [])) + list(m.get("anahtar_kelimeler", [])):
        e = temiz(e.strip())
        if e and e.lower() not in (x.lower() for x in etiketler) and toplam + len(e) + 3 <= 480:
            etiketler.append(e)
            toplam += len(e) + 3
    meta = {"baslik": temiz(p["baslik"])[:100], "aciklama": aciklama, "etiketler": etiketler,
            "kategori": m.get("kategori", "27"), "dil": m.get("dil", "en"), "sure_sn": round(veri["toplam"], 1),
            "bolum_sayisi": len(b)}
    cikti = os.path.join(O.proje_dir(slug), "cikti")
    O.json_yaz(os.path.join(cikti, "meta.json"), meta)
    with open(os.path.join(cikti, "aciklama.txt"), "w", encoding="utf-8") as f:
        f.write(meta["baslik"] + "\n\n" + aciklama + "\n\nTAGS: " + ", ".join(etiketler) + "\n")
    O.log(f"meta: '{meta['baslik']}' — {len(aciklama)} karakter açıklama, {len(b)} bölüm, {len(etiketler)} etiket")
    return meta


def kapak(slug):
    """Remotion 'Kapak' kompozisyonu -> cikti/kapak_yt.jpg (YouTube sınırı 2 MB)."""
    from PIL import Image
    cikti = os.path.join(O.proje_dir(slug), "cikti")
    os.makedirs(cikti, exist_ok=True)
    png = os.path.join(cikti, "kapak_yt.png")
    ek = [f"--browser-executable={os.environ['REMOTION_TARAYICI']}"] if os.environ.get("REMOTION_TARAYICI") else []
    subprocess.run([os.path.join(O.REMOTION, "node_modules", ".bin", "remotion"), "still", "src/index.ts", "Kapak", png, *ek],
                   cwd=O.REMOTION, check=True)
    jpg = os.path.join(cikti, "kapak_yt.jpg")
    for q in (92, 85, 75):
        Image.open(png).convert("RGB").save(jpg, quality=q)
        if os.path.getsize(jpg) < 1_900_000:
            break
    os.remove(png)
    O.log(f"kapak: {os.path.relpath(jpg, O.REPO)} ({os.path.getsize(jpg) // 1024} KB)")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--kapak", action="store_true")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    uret(slug)
    if a.kapak:
        kapak(slug)


if __name__ == "__main__":
    main()
