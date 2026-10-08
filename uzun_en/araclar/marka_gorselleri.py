#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kanal banner'ı ve profil görselini Remotion ile çizer (marka değişince bir kez çalıştırılır).

  python3 uzun_en/araclar/marka_gorselleri.py     # -> assets/marka_en/banner.jpg (2560x1440), avatar.png (800x800)
Önce herhangi bir proje için hazirla.py çalışmış olmalı (fontlar ve tam.gen.json).
"""
import glob, os, shutil, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

HEDEF = os.path.join(O.REPO, "assets", "marka_en")


def main():
    m = O.marka()
    O.json_yaz(os.path.join(O.REMOTION, "src", "marka.gen.json"),
               {"ad": m["ad"], "filigran": m["ad"].upper(), "slogan": m.get("slogan", "")})
    pub = os.path.join(O.REMOTION, "public", "img", "marka")
    os.makedirs(pub, exist_ok=True)
    for y in glob.glob(os.path.join(HEDEF, "kaynak", "*.jpg")):
        shutil.copyfile(y, os.path.join(pub, os.path.basename(y)))
    tarayici = os.environ.get("REMOTION_TARAYICI", "")
    ek = [f"--browser-executable={tarayici}"] if tarayici else []
    for kimlik, ad in (("Afis", "banner.png"), ("Avatar", "avatar.png")):
        subprocess.run([os.path.join(O.REMOTION, "node_modules", ".bin", "remotion"), "still", "src/index.ts", kimlik,
                        os.path.join(HEDEF, ad), *ek], cwd=O.REMOTION, check=True)
    from PIL import Image                       # banner JPEG: YouTube sınırı 6 MB
    Image.open(os.path.join(HEDEF, "banner.png")).convert("RGB").save(os.path.join(HEDEF, "banner.jpg"), quality=90)
    os.remove(os.path.join(HEDEF, "banner.png"))
    O.log(f"yazıldı: {HEDEF}/banner.jpg, avatar.png")


if __name__ == "__main__":
    main()
