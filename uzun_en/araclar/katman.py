#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Görseli iki katmana ayırır: ön plan (konu, saydam PNG) ve arka plan (konu silinip doldurulmuş JPG). Shorts'ta iki
katman farklı hızda yakınlaşınca 2,5D derinlik (parallax) hissi oluşur; ekran kartı gerekmez.

  python3 uzun_en/araclar/katman.py GORSEL.jpg [GORSEL2.jpg ...]     # yanına GORSEL_on.png ve GORSEL_arka.jpg yazar

Konu: rembg (U²-Net, CPU). Arka plan: konunun genişletilmiş maskesi OpenCV inpaint (Telea) ile küçük boyutta doldurulur,
büyütülüp yalnızca maske bölgesine konur. Konu bulunamazsa (maske çok küçük ya da neredeyse tüm kare) None döner;
o görsel tek katmanlı kalır.
"""
import os, sys

import numpy as np
from PIL import Image, ImageFilter

_OTURUM = None
ALAN = (0.04, 0.85)      # konu karenin bu oranı arasında değilse katmanlama yapılmaz


def _oturum():
    global _OTURUM
    if _OTURUM is None:
        from rembg import new_session
        _OTURUM = new_session("u2net")
    return _OTURUM


def ayir(yol):
    """(ön plan PNG yolu, arka plan JPG yolu) ya da None."""
    import cv2
    from rembg import remove
    kok = os.path.splitext(yol)[0]
    on_yol, arka_yol = kok + "_on.png", kok + "_arka.jpg"
    if os.path.exists(on_yol) and os.path.exists(arka_yol):
        return on_yol, arka_yol
    im = Image.open(yol).convert("RGB")
    rgba = remove(im, session=_oturum(), post_process_mask=True)
    a = np.asarray(rgba)[:, :, 3]
    oran = float((a > 128).mean())
    if not ALAN[0] <= oran <= ALAN[1]:
        print(f"katman: {os.path.basename(yol)} konu alanı %{oran * 100:.0f}, tek katman kalır")
        return None
    # ön plan: kenarı hafifçe yumuşatılmış alfa
    alfa = Image.fromarray(a).filter(ImageFilter.GaussianBlur(1.2))
    on = im.copy()
    on.putalpha(alfa)
    on.save(on_yol)
    # arka plan: konu + kenar payı silinip doldurulur (yakınlaşmada konunun arkası görünür)
    w, h = im.size
    maske = cv2.dilate((a > 40).astype(np.uint8) * 255, np.ones((31, 31), np.uint8))
    k = 4                                              # inpaint küçük boyutta: hızlı ve yumuşak
    kucuk = cv2.resize(np.asarray(im)[:, :, ::-1], (w // k, h // k), interpolation=cv2.INTER_AREA)
    km = cv2.resize(maske, (w // k, h // k), interpolation=cv2.INTER_NEAREST)
    dolu = cv2.inpaint(kucuk, km, 12, cv2.INPAINT_TELEA)
    dolu = cv2.GaussianBlur(cv2.resize(dolu, (w, h), interpolation=cv2.INTER_CUBIC), (0, 0), 6)
    m = cv2.GaussianBlur(maske, (0, 0), 8).astype(np.float32)[:, :, None] / 255.0
    arka = (np.asarray(im)[:, :, ::-1] * (1 - m) + dolu * m).astype(np.uint8)
    cv2.imwrite(arka_yol, arka, [cv2.IMWRITE_JPEG_QUALITY, 92])
    print(f"katman: {os.path.basename(yol)} konu %{oran * 100:.0f}")
    return on_yol, arka_yol


if __name__ == "__main__":
    for y in sys.argv[1:]:
        ayir(y)
