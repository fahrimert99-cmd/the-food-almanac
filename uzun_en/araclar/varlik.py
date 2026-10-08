#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Büyük dosyalar (görseller, sesler, video) git'e girmez; her proje için bir GitHub sürümünde (release) tutulur.

  python3 uzun_en/araclar/varlik.py indir --proje SLUG [--tur gorsel,ses,video]
  python3 uzun_en/araclar/varlik.py yukle --proje SLUG [--tur gorsel,ses,video] [--degisen]

Sürüm etiketi: uzun-en-SLUG (ön-sürüm). Görseller tek tek (NN.jpg, kapak.jpg, uretim.json), sesler tek arşiv
(ses.tar: cümle WAV'ları + zaman.json), video ise izlemelik 720p kopya (onizleme_720p.mp4) + kapak_yt.jpg olarak durur.
Tohum: projeler/SLUG/tohum/ klasörü varsa (ilk kurulumda elle konan görsel/ses) sürüm yoksa oradan alınır.
GH_TOKEN ortam değişkeni gerekir (Actions: github.token).
"""
import argparse, glob, hashlib, os, shutil, subprocess, sys, tarfile, tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

IZ = ".indirilen.json"          # indirilen dosyaların özetleri (yalnızca değişenleri geri yüklemek için)


def _ozet(yol):
    with open(yol, "rb") as f:
        return hashlib.sha1(f.read()).hexdigest()


def surum_var(slug):
    r = subprocess.run(["gh", "release", "view", O.etiket(slug), "--json", "tagName"], capture_output=True, text=True)
    return r.returncode == 0


def surum_olustur(slug):
    if surum_var(slug):
        return
    p = O.proje(slug) or {}
    O.gh("release", "create", O.etiket(slug), "--prerelease", "--target", os.environ.get("GITHUB_SHA", "main"),
         "--title", f"[uzun_en] {p.get('baslik', slug)}"[:120],
         "--notes", "İngilizce uzun video hattının görsel/ses/video arşivi (otomatik).")


def _tohumdan(slug, turler):
    """Sürüm henüz yokken projeler/SLUG/tohum/ içeriğini çalışma klasörlerine açar."""
    pdir = O.proje_dir(slug)
    tohum = os.path.join(pdir, "tohum")
    if not os.path.isdir(tohum):
        return False
    if "gorsel" in turler:
        os.makedirs(os.path.join(pdir, "images"), exist_ok=True)
        for y in glob.glob(os.path.join(tohum, "images", "*")):
            shutil.copyfile(y, os.path.join(pdir, "images", os.path.basename(y)))
    if "ses" in turler and os.path.isdir(os.path.join(tohum, "ses")):
        hedef = os.path.join(pdir, "ses")
        os.makedirs(hedef, exist_ok=True)
        for y in glob.glob(os.path.join(tohum, "ses", "*")):
            ad = os.path.basename(y)
            if ad.endswith(".opus"):                    # tohumda yer kazanmak için Opus; ses.py/hazirla WAV okur
                subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", y, "-ar", "22050", "-ac", "1", "-c:a", "pcm_s16le",
                                os.path.join(hedef, ad[:-5] + ".wav")], check=True)
            else:
                shutil.copyfile(y, os.path.join(hedef, ad))
    O.log(f"tohumdan alındı: {', '.join(turler)}")
    return True


def indir(slug, turler):
    pdir = O.proje_dir(slug)
    if not surum_var(slug):
        if not _tohumdan(slug, turler):
            O.log("sürüm yok (henüz üretilmemiş) — indirilecek bir şey yok")
        return
    iz = {}
    tmp = tempfile.mkdtemp(prefix="varlik_")
    if "gorsel" in turler:
        hedef = os.path.join(pdir, "images")
        os.makedirs(hedef, exist_ok=True)
        subprocess.run(["gh", "release", "download", O.etiket(slug), "-D", hedef, "--clobber",
                        "-p", "[0-9][0-9].jpg", "-p", "kapak.jpg", "-p", "uretim.json"], check=False)
        for y in glob.glob(os.path.join(hedef, "*")):
            iz[os.path.relpath(y, pdir)] = _ozet(y)
    if "ses" in turler:
        r = subprocess.run(["gh", "release", "download", O.etiket(slug), "-D", tmp, "--clobber", "-p", "ses.tar"])
        if r.returncode == 0:
            hedef = os.path.join(pdir, "ses")
            os.makedirs(hedef, exist_ok=True)
            with tarfile.open(os.path.join(tmp, "ses.tar")) as t:
                t.extractall(hedef, filter="data")
    if "video" in turler:
        subprocess.run(["gh", "release", "download", O.etiket(slug), "-D", os.path.join(pdir, "cikti"), "--clobber",
                        "-p", "onizleme_720p.mp4", "-p", "kapak_yt.jpg"], check=False)
    O.json_yaz(os.path.join(pdir, IZ), iz)
    shutil.rmtree(tmp, ignore_errors=True)
    n = len(glob.glob(os.path.join(pdir, "images", "*.jpg")))
    O.log(f"indirildi: {n} görsel" + (", ses" if os.path.exists(os.path.join(pdir, "ses", "zaman.json")) else ""))


def yukle(slug, turler, degisen=False):
    pdir = O.proje_dir(slug)
    surum_olustur(slug)
    iz = O.json_oku(os.path.join(pdir, IZ), {}) or {}
    dosyalar = []
    if "gorsel" in turler:
        for y in sorted(glob.glob(os.path.join(pdir, "images", "*"))):
            ad = os.path.basename(y)
            if ".aday." in ad or not (ad.endswith(".jpg") or ad == "uretim.json"):
                continue
            if degisen and iz.get(os.path.relpath(y, pdir)) == _ozet(y):
                continue
            dosyalar.append(y)
    if "ses" in turler and os.path.exists(os.path.join(pdir, "ses", "zaman.json")):
        tmp = tempfile.mkdtemp(prefix="varlik_")
        tar = os.path.join(tmp, "ses.tar")
        with tarfile.open(tar, "w") as t:
            for y in sorted(glob.glob(os.path.join(pdir, "ses", "*"))):
                if y.endswith((".wav", ".json")):
                    t.add(y, arcname=os.path.basename(y))
        dosyalar.append(tar)
    if "video" in turler:
        dosyalar += [y for y in (os.path.join(pdir, "cikti", "onizleme_720p.mp4"), os.path.join(pdir, "cikti", "kapak_yt.jpg"))
                     if os.path.exists(y)]
    for i in range(0, len(dosyalar), 20):
        O.gh("release", "upload", O.etiket(slug), "--clobber", *dosyalar[i:i + 20])
    O.log(f"sürüme yüklendi ({O.etiket(slug)}): {len(dosyalar)} dosya")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("islem", choices=["indir", "yukle"])
    ap.add_argument("--proje")
    ap.add_argument("--tur", default="gorsel,ses")
    ap.add_argument("--degisen", action="store_true", help="yalnızca indirildikten sonra değişen görselleri yükle")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    turler = [x.strip() for x in a.tur.split(",") if x.strip()]
    (indir(slug, turler) if a.islem == "indir" else yukle(slug, turler, a.degisen))


if __name__ == "__main__":
    main()
