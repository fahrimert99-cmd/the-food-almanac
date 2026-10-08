#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Tip denetimi (tsc): hatalı sahne dosyalarını projedeki son sağlam sürüme ya da otomatik şablona döndürür.

  python3 uzun_en/araclar/sahne_onar.py --proje SLUG
Ortak dosyalarda hata kalırsa çıkış kodu 1 (render yapılmaz).
"""
import argparse, os, re, shutil, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
from hazirla import TASLAK, taslak_mi  # noqa: E402


def tsc():
    r = subprocess.run([os.path.join(O.REMOTION, "node_modules", ".bin", "tsc"), "-p", "."], cwd=O.REMOTION,
                       capture_output=True, text=True)
    return r.returncode, r.stdout + r.stderr


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    kod, cikti = tsc()
    if kod == 0:
        return O.log("tsc: temiz")
    print(cikti[-4000:])
    for ad in sorted(set(re.findall(r"src/tam/sahneler/(S\d+)\.tsx", cikti))):
        hedef = os.path.join(O.REMOTION, "src", "tam", "sahneler", f"{ad}.tsx")
        yedek = os.path.join(O.proje_dir(slug), "sahneler", f"{ad}.tsx")
        if os.path.exists(yedek) and not taslak_mi(yedek) and open(yedek).read() != open(hedef).read():
            shutil.copyfile(yedek, hedef)
            O.log(f"{ad}: tip hatası -> projedeki son sürüme döndürüldü")
        else:
            with open(hedef, "w", encoding="utf-8") as f:
                f.write(TASLAK)
            O.log(f"{ad}: tip hatası -> otomatik şablona döndürüldü")
    kod, cikti = tsc()
    if kod != 0:                                            # projedeki sürüm de bozuksa şablon
        for ad in sorted(set(re.findall(r"src/tam/sahneler/(S\d+)\.tsx", cikti))):
            with open(os.path.join(O.REMOTION, "src", "tam", "sahneler", f"{ad}.tsx"), "w", encoding="utf-8") as f:
                f.write(TASLAK)
        kod, cikti = tsc()
    if kod != 0:
        print(cikti[-4000:])
        sys.exit("ortak dosyalarda tip hatası — render yapılmayacak")
    O.log("tsc: onarıldı, temiz")


if __name__ == "__main__":
    main()
