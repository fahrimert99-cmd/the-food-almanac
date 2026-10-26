#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Yüklenmiş (henüz ya da çoktan yayınlanmış) bir videonun YouTube kapağını güncel kapak stiliyle yeniden çizer.

  python3 uzun_en/araclar/kapak_yenile.py --proje SLUG [--proje SLUG2 ...]

Kapak görseli (images/kapak.jpg) yerelde yoksa GitHub sürümünden (uzun-en-SLUG) indirilir. Remotion "Kapak" yalnızca
kapak verisiyle çizilir (ses ve sahneler gerekmez). Sonuç projeler/SLUG/kapak_yt.jpg'ye yazılır ve yayin.json'da
kapak_tamam=false yapılır; uzun_en.yml'nin "Yüklenmiş videoları denetle" adımı (yukle.py) bu dosyayı YouTube'a basar.
Gerekli: Remotion bağımlılıkları (uzun_en/remotion/node_modules), gh (GH_TOKEN).
"""
import argparse, json, os, shutil, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
import hazirla as H  # noqa: E402
import meta as M  # noqa: E402


def kapak_gorseli(slug):
    yol = os.path.join(O.proje_dir(slug), "images", "kapak.jpg")
    if os.path.exists(yol):
        return yol
    os.makedirs(os.path.dirname(yol), exist_ok=True)
    depo = os.environ.get("GITHUB_REPOSITORY", "fahrimert99-cmd/the-food-almanac")
    r = subprocess.run(["gh", "api", f"repos/{depo}/releases/tags/{O.etiket(slug)}", "-q",
                        '.assets[]|select(.name=="kapak.jpg")|.id'], capture_output=True, text=True, check=True)
    kimlik = r.stdout.strip()
    if not kimlik:
        raise SystemExit(f"{slug}: sürümde kapak.jpg yok")
    with open(yol, "wb") as f:
        subprocess.run(["gh", "api", "-H", "Accept: application/octet-stream", f"repos/{depo}/releases/assets/{kimlik}"],
                       stdout=f, check=True)
    return yol


def yenile(slug):
    proje = O.proje(slug)
    if not proje:
        raise SystemExit(f"{slug}: proje.json yok")
    kaynak = kapak_gorseli(slug)
    k = proje.get("kapak") or {}
    kutu, zemin = H.konu_kutusu(kaynak)
    pub = os.path.join(O.REMOTION, "public")
    img = os.path.join(pub, "img", "tam")
    shutil.rmtree(img, ignore_errors=True)
    os.makedirs(img)
    os.makedirs(os.path.join(pub, "fonts"), exist_ok=True)
    for yol in H.font_yollari():
        if os.path.exists(yol):
            shutil.copyfile(yol, os.path.join(pub, "fonts", os.path.basename(yol)))
    shutil.copyfile(kaynak, os.path.join(img, "kapak.jpg"))
    H.kapak_kesik(kaynak, os.path.join(img, "kapak_kesik.png"))
    # yalnızca Kapak çizilir: Tam kompozisyonu için en küçük geçerli veri
    O.json_yaz(os.path.join(O.REMOTION, "src", "tam", "tam.gen.json"),
               {"fps": 30, "toplam": 1, "gecis": 0, "slug": slug, "sahneler": [], "altyazi": [],
                "kapak": {"satirlar": k.get("satirlar") or [], "serit": k.get("serit"), "vurgu": k.get("vurgu"),
                          "vurgu_alt": k.get("vurgu_alt"), "gorsel": "tam/kapak", "kesik": "tam/kapak_kesik",
                          "kutu": kutu, "zemin": zemin}})
    m = O.marka()
    O.json_yaz(os.path.join(O.REMOTION, "src", "marka.gen.json"),
               {"ad": m.get("ad", ""), "filigran": m.get("ad", "").upper(), "slogan": m.get("slogan", ""),
                "kapak_stil": m.get("kapak_stil", "beyaz")})
    M.kapak(slug)
    hedef = os.path.join(O.proje_dir(slug), "kapak_yt.jpg")
    shutil.copyfile(os.path.join(O.proje_dir(slug), "cikti", "kapak_yt.jpg"), hedef)
    yyol = os.path.join(O.proje_dir(slug), "yayin.json")
    y = O.json_oku(yyol, {}) or {}
    if y.get("video_id"):
        y["kapak_tamam"] = False
        O.json_yaz(yyol, y)
    O.log(f"{slug}: yeni kapak {os.path.relpath(hedef, O.REPO)}" + (" (YouTube'a basılacak)" if y.get("video_id") else ""))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje", action="append", required=True)
    for slug in ap.parse_args().proje:
        yenile(slug)


if __name__ == "__main__":
    main()
