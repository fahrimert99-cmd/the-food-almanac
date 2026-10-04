#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Tamamen KODLA çizilmiş Shorts (9:16) — hareketli grafik, AI görsel YOK.

Ses: kanalın Shorts sesi (config.kisa_ses_id, ElevenLabs); anahtar yoksa ücretsiz
edge-tts. Kelime zamanlarına göre sahneler ve kelime kelime altyazı senkronlanır.
Her kare PIL ile çizilir, ffmpeg'e ham olarak akıtılır.

Kullanım: python3 kod_video.py "TEMU NASIL BU KADAR UCUZ? 📦" [cikti.mp4]
Yerel deneme (sessiz, yapay zamanlama): KOD_VIDEO_SESSIZ=1
"""
import json
import math
import os
import re
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw, ImageFont

W, H, FPS = 1080, 1920, 30
FONT = "assets/font/Anton-Regular.ttf"
SARI = (255, 195, 30)
KIRMIZI = (235, 64, 52)
YESIL = (70, 200, 120)
BEYAZ = (245, 245, 245)
GRI = (150, 150, 160)
KOYU = (14, 14, 18)
PANEL = (30, 30, 38)
SABIT_CTA = "Artık biliyorsun. Her gün 12:00 ve 20:00'de yeni bir tuzak. Abone ol, bir daha kanma."

_FONTLAR = {}


def F(boy):
    if boy not in _FONTLAR:
        _FONTLAR[boy] = ImageFont.truetype(FONT, boy)
    return _FONTLAR[boy]


# ---------------- yumuşatma ----------------
def kis(x, a=0.0, b=1.0):
    return max(a, min(b, x))


def ease_out(x):
    x = kis(x)
    return 1 - (1 - x) ** 3


def ease_back(x):
    x = kis(x)
    c1, c3 = 1.70158, 2.70158
    return 1 + c3 * (x - 1) ** 3 + c1 * (x - 1) ** 2


def faz(t, bas, sure):
    """t anında [bas, bas+sure] aralığındaki ilerleme (0..1)."""
    return kis((t - bas) / max(1e-6, sure))


def renk_kar(a, b, k):
    return tuple(int(a[i] + (b[i] - a[i]) * k) for i in range(3))


# ---------------- çizim yardımcıları ----------------
def yazi(d, xy, metin, boy, renk=BEYAZ, hiza="mm", kontur=0, kontur_renk=(0, 0, 0)):
    d.text(xy, metin, font=F(boy), fill=renk, anchor=hiza,
           stroke_width=kontur, stroke_fill=kontur_renk)


def kutu(d, x0, y0, x1, y1, r=28, renk=PANEL, cizgi=None, kalinlik=0):
    d.rounded_rectangle((x0, y0, x1, y1), radius=r, fill=renk, outline=cizgi, width=kalinlik)


def ok(d, x0, y0, x1, y1, renk=SARI, k=10):
    d.line((x0, y0, x1, y1), fill=renk, width=k)
    a = math.atan2(y1 - y0, x1 - x0)
    u = 34
    p1 = (x1 - u * math.cos(a - 0.5), y1 - u * math.sin(a - 0.5))
    p2 = (x1 - u * math.cos(a + 0.5), y1 - u * math.sin(a + 0.5))
    d.polygon([(x1, y1), p1, p2], fill=renk)


def telefon(d, cx, cy, w=520, h=900, olcek=1.0):
    w, h = w * olcek, h * olcek
    x0, y0 = cx - w / 2, cy - h / 2
    kutu(d, x0, y0, x0 + w, y0 + h, r=int(60 * olcek), renk=(40, 40, 50), cizgi=(90, 90, 105), kalinlik=6)
    kutu(d, x0 + 22 * olcek, y0 + 22 * olcek, x0 + w - 22 * olcek, y0 + h - 22 * olcek,
         r=int(44 * olcek), renk=(245, 245, 248))
    kutu(d, cx - 70 * olcek, y0 + 34 * olcek, cx + 70 * olcek, y0 + 58 * olcek, r=12, renk=(40, 40, 50))
    return x0 + 22 * olcek, y0 + 22 * olcek, x0 + w - 22 * olcek, y0 + h - 22 * olcek


def kulaklik(d, cx, cy, s=1.0, renk=(250, 250, 250), golge=(200, 200, 210)):
    for dx in (-60, 60):
        d.ellipse((cx + dx * s - 38 * s, cy - 38 * s, cx + dx * s + 38 * s, cy + 38 * s), fill=golge)
        d.ellipse((cx + dx * s - 30 * s, cy - 30 * s, cx + dx * s + 30 * s, cy + 30 * s), fill=renk)
        d.rounded_rectangle((cx + dx * s - 10 * s, cy + 20 * s, cx + dx * s + 10 * s, cy + 100 * s),
                            radius=int(10 * s), fill=renk)


def fiyat_etiketi(d, cx, cy, metin, s=1.0, renk=KIRMIZI):
    if s <= 0.02:
        return
    w, h = 300 * s, 140 * s
    d.polygon([(cx - w / 2, cy - h / 2), (cx + w / 2 - 40 * s, cy - h / 2), (cx + w / 2, cy),
               (cx + w / 2 - 40 * s, cy + h / 2), (cx - w / 2, cy + h / 2)], fill=renk)
    d.ellipse((cx + w / 2 - 62 * s, cy - 10 * s, cx + w / 2 - 42 * s, cy + 10 * s), fill=KOYU)
    yazi(d, (cx - 20 * s, cy), metin, max(10, int(78 * s)), BEYAZ)


def fabrika(d, cx, cy, s=1.0):
    g = (120, 125, 140)
    d.rectangle((cx - 120 * s, cy - 20 * s, cx + 120 * s, cy + 90 * s), fill=g)
    for i in range(3):
        x = cx - 120 * s + i * 80 * s
        d.polygon([(x, cy - 20 * s), (x + 80 * s, cy - 70 * s), (x + 80 * s, cy - 20 * s)], fill=g)
    d.rectangle((cx + 70 * s, cy - 150 * s, cx + 105 * s, cy - 40 * s), fill=g)
    for i in range(3):
        d.rectangle((cx - 95 * s + i * 70 * s, cy + 15 * s, cx - 60 * s + i * 70 * s, cy + 50 * s), fill=SARI)


def ev(d, cx, cy, s=1.0):
    g = (120, 125, 140)
    d.polygon([(cx - 110 * s, cy - 10 * s), (cx, cy - 110 * s), (cx + 110 * s, cy - 10 * s)], fill=KIRMIZI)
    d.rectangle((cx - 85 * s, cy - 10 * s, cx + 85 * s, cy + 100 * s), fill=g)
    d.rectangle((cx - 22 * s, cy + 35 * s, cx + 22 * s, cy + 100 * s), fill=SARI)


def paket(d, cx, cy, s=1.0):
    d.rectangle((cx - 34 * s, cy - 28 * s, cx + 34 * s, cy + 28 * s), fill=(196, 150, 96))
    d.line((cx, cy - 28 * s, cx, cy + 28 * s), fill=(150, 110, 70), width=max(2, int(6 * s)))


def saat(d, cx, cy, r, ilerleme):
    d.ellipse((cx - r, cy - r, cx + r, cy + r), outline=SARI, width=12)
    a = -math.pi / 2 + ilerleme * 2 * math.pi * 3
    d.line((cx, cy, cx + r * 0.75 * math.cos(a), cy + r * 0.75 * math.sin(a)), fill=BEYAZ, width=10)
    a2 = -math.pi / 2 + ilerleme * 2 * math.pi * 0.25
    d.line((cx, cy, cx + r * 0.5 * math.cos(a2), cy + r * 0.5 * math.sin(a2)), fill=BEYAZ, width=12)


def yildiz(d, cx, cy, r, dolu=True):
    pts = []
    for i in range(10):
        rr = r if i % 2 == 0 else r * 0.45
        a = -math.pi / 2 + i * math.pi / 5
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    d.polygon(pts, fill=SARI if dolu else (70, 70, 80))


def carpi(d, cx, cy, r, k=1.0, renk=KIRMIZI):
    if k <= 0:
        return
    rr = r * ease_back(k)
    d.line((cx - rr, cy - rr, cx + rr, cy + rr), fill=renk, width=18)
    d.line((cx - rr, cy + rr, cx + rr, cy - rr), fill=renk, width=18)


def tik(d, cx, cy, r, k=1.0):
    if k <= 0:
        return
    pts = [(cx - r, cy), (cx - r * 0.3, cy + r * 0.7), (cx + r, cy - r * 0.7)]
    n = ease_out(k)
    if n < 0.5:
        p = n / 0.5
        d.line((pts[0], (pts[0][0] + (pts[1][0] - pts[0][0]) * p, pts[0][1] + (pts[1][1] - pts[0][1]) * p)),
               fill=YESIL, width=22)
    else:
        p = (n - 0.5) / 0.5
        d.line((pts[0], pts[1]), fill=YESIL, width=22)
        d.line((pts[1], (pts[1][0] + (pts[2][0] - pts[1][0]) * p, pts[1][1] + (pts[2][1] - pts[1][1]) * p)),
               fill=YESIL, width=22)


def baslik_bandi(d, metin, t, bas, y=330, boy=96):
    k = ease_back(faz(t, bas, 0.45))
    if k <= 0:
        return
    w = F(boy).getlength(metin) + 80
    x0 = W / 2 - w / 2 * k
    kutu(d, x0, y - 75, W / 2 + w / 2 * k, y + 75, r=18, renk=SARI)
    if k > 0.6:
        yazi(d, (W / 2, y), metin, boy, KOYU)


# ---------------- arka plan + marka ----------------
_KARARTMA = None


def _karartma():
    """Gerçek klip üstüne okunabilirlik katmanı: üst/alt koyu, orta yarı saydam."""
    global _KARARTMA
    if _KARARTMA is None:
        k = Image.new("RGBA", (W, H))
        kd = ImageDraw.Draw(k)
        for y in range(H):
            # ortada ~%45, üstte ve altyazı bölgesinde ~%80 koyuluk
            uc = max(0.0, 1 - min(y, H - y) / 520)
            a = int(255 * (0.55 + 0.33 * uc))
            # altyazı bölgesi (y≈1560) için yumuşak koyu bant
            bant = max(0.0, 1 - abs(y - 1560) / 190)
            a = max(a, int(215 * min(1.0, bant * 1.6)))
            kd.line((0, y, W, y), fill=(10, 10, 14, a))
        _KARARTMA = k
    return _KARARTMA


class Klip:
    """Bir stok klibi 1080x1920/30fps ham kareler olarak akıtır (gerekirse döngüler)."""
    def __init__(self, yol, sure):
        self.son = None
        self.p = subprocess.Popen(
            ["ffmpeg", "-v", "error", "-stream_loop", "-1", "-i", yol, "-t", f"{sure + 1:.2f}", "-an",
             "-vf", "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30,"
                    "eq=saturation=0.9:contrast=1.05",
             "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)

    def kare(self):
        b = self.p.stdout.read(W * H * 3)
        if len(b) == W * H * 3:
            self.son = Image.frombytes("RGB", (W, H), b)
        return self.son

    def kapat(self):
        try:
            self.p.kill()
        except Exception:
            pass


def arka_plan(t, klip=None):
    zemin = klip.kare() if klip else None
    if zemin is not None:
        img = Image.alpha_composite(zemin.convert("RGBA"), _karartma()).convert("RGB")
        d = ImageDraw.Draw(img)
    else:
        img = Image.new("RGB", (W, H), KOYU)
        d = ImageDraw.Draw(img)
        kay = (t * 40) % 120
        for x in range(-120, W + 120, 120):
            d.line((x + kay, 0, x + kay, H), fill=(22, 22, 28), width=2)
        for y in range(-120, H + 120, 120):
            d.line((0, y + kay, W, y + kay), fill=(22, 22, 28), width=2)
    d.rectangle((0, 0, W, 10), fill=SARI)
    yazi(d, (W / 2, 120), "TUZAK AVCISI", 54, SARI, kontur=4)
    return img, d


# ---------------- altyazı ----------------
def altyazi(d, kelimeler, t):
    """Aktif kelimenin bulunduğu 3'lü grubu gösterir, aktif kelime sarı + büyür."""
    if not kelimeler:
        return
    aktif = None
    for i, w in enumerate(kelimeler):
        if w["start"] <= t:
            aktif = i
    if aktif is None or t > kelimeler[-1]["start"] + kelimeler[-1]["dur"] + 0.4:
        return
    g0 = (aktif // 3) * 3
    grup = kelimeler[g0:g0 + 3]
    parcalar = [_tr_ust(w["text"]) for w in grup]
    bosluk = 30
    boy = 92
    ka = ease_back(faz(t, kelimeler[aktif]["start"], 0.18))
    def _boylar(b):
        return [int(b * (1.0 + 0.12 * ka)) if (g0 + j) == aktif else b for j in range(len(grup))]
    def _toplam(b):
        return sum(F(bb).getlength(p) for bb, p in zip(_boylar(b), parcalar)) + bosluk * (len(grup) - 1)
    while boy > 40 and _toplam(boy) > W - 100:
        boy -= 4
    x = W / 2 - _toplam(boy) / 2
    y = 1560
    for j, (p, bb) in enumerate(zip(parcalar, _boylar(boy))):
        gw = F(bb).getlength(p)
        etkin = (g0 + j) == aktif
        yazi(d, (x + gw / 2, y), p, bb, SARI if etkin else BEYAZ, kontur=8)
        x += gw + bosluk


def _tr_ust(s):
    return s.replace("i", "İ").replace("ı", "I").upper()


# ---------------- TEMU sahneleri ----------------
def s_kanca(d, t, T):
    """0: başlık kancası (ilk ~1.2 sn)."""
    k = ease_back(faz(t, 0, 0.4))
    yazi(d, (W / 2, 820), "TEMU", int(230 * k) + 1, SARI, kontur=6)
    if t > 0.25:
        yazi(d, (W / 2, 1010), "NASIL BU KADAR", 110, BEYAZ)
        yazi(d, (W / 2, 1140), "UCUZ?", 150, KIRMIZI)


def s_telefon(d, t, T):
    """Sahne 1: telefonda kulaklık, 30 TL etiketi, 'ARADA KİMSE YOK'."""
    g = ease_out(faz(t, 0, 0.5))
    cy = 900 + (1 - g) * 600
    x0, y0, x1, y1 = telefon(d, W / 2, cy)
    kutu(d, x0 + 30, y0 + 90, x1 - 30, y0 + 470, r=24, renk=(225, 228, 235))
    kulaklik(d, W / 2, y0 + 250, 1.2, renk=(255, 255, 255), golge=(180, 184, 196))
    yazi(d, (W / 2, y0 + 540), "KABLOSUZ KULAKLIK", 46, (40, 40, 50))
    for i in range(5):
        yildiz(d, W / 2 - 120 + i * 60, y0 + 610, 22)
    kutu(d, x0 + 40, y1 - 150, x1 - 40, y1 - 50, r=50, renk=(255, 110, 30))
    yazi(d, (W / 2, y1 - 100), "SEPETE EKLE", 50, BEYAZ)
    s = ease_back(faz(t, 0.8, 0.45))
    fiyat_etiketi(d, W / 2 + 230, cy - 330, "30 TL", s * 1.25)
    if t > T * 0.55:
        baslik_bandi(d, "ARADA KİMSE YOK", t, T * 0.55, y=330, boy=90)


def s_akis(d, t, T):
    """Sahne 2: fabrika → küçük paketler → ev."""
    baslik_bandi(d, "FABRİKADAN KAPINA", t, 0.0, y=330, boy=90)
    fx, ex, yy = 230, 850, 900
    a = ease_out(faz(t, 0.1, 0.5))
    fabrika(d, fx, yy, 1.2 * a + 0.01)
    b = ease_out(faz(t, 0.4, 0.5))
    ev(d, ex, yy, 1.2 * b + 0.01)
    yazi(d, (fx, yy + 190), "FABRİKA", 56, GRI)
    yazi(d, (ex, yy + 190), "KAPIN", 56, GRI)
    c = ease_out(faz(t, 0.7, 0.6))
    if c > 0:
        d.line((fx + 150, yy + 40, fx + 150 + (ex - fx - 300) * c, yy + 40), fill=(70, 70, 82), width=14)
    # paketler hat boyunca akar
    for i in range(4):
        p = ((t - 1.0) * 0.4 + i / 4.0)
        if t < 1.0 or p < 0:
            continue
        p = p % 1.0
        x = fx + 150 + (ex - fx - 300) * p
        paket(d, x, yy - 10 - 18 * math.sin(p * math.pi), 0.9)
    # aradan çıkanlar
    for j, (ad, gx) in enumerate((("TOPTANCI", 330), ("MAĞAZA", 750))):
        bas = 1.4 + j * 0.5
        k = faz(t, bas, 0.4)
        if k > 0:
            kutu(d, gx - 160, 1200, gx + 160, 1330, r=20, renk=PANEL)
            yazi(d, (gx, 1265), ad, 60, GRI)
            carpi(d, gx, 1265, 70, faz(t, bas + 0.3, 0.3))


def s_maliyet(d, t, T):
    """Sahne 3: maliyet kalemleri çizilir, sonra 'BEDELİ KİM ÖDÜYOR? → SEN'."""
    yarim = T * 0.5
    if t < yarim:
        kalemler = (("MAĞAZA KİRASI", 1.0), ("TOPTANCI", 0.8), ("DEPO MASRAFI", 0.55))
        for i, (ad, oran) in enumerate(kalemler):
            y = 560 + i * 230
            k = ease_out(faz(t, i * 0.35, 0.5))
            yazi(d, (120, y - 70), ad, 58, BEYAZ, hiza="lm")
            kutu(d, 120, y - 25, 120 + 820 * k, y + 55, r=16, renk=PANEL)
            dolu = 820 * k * (1 - ease_out(faz(t, 1.3 + i * 0.25, 0.5)) * (0.9 if i < 2 else 0.6))
            kutu(d, 120, y - 25, 120 + max(30, dolu), y + 55, r=16, renk=KIRMIZI if i < 2 else SARI)
            if i < 2:
                carpi(d, 1000, y + 15, 40, faz(t, 1.3 + i * 0.25, 0.3))
        k2 = ease_back(faz(t, 2.0, 0.4))
        if k2 > 0:
            yazi(d, (W / 2, 1300), "= ÇOK UCUZ FİYAT", int(100 * k2) + 1, YESIL)
    else:
        tl = t - yarim
        baslik_bandi(d, "BEDELİ KİM ÖDÜYOR?", tl, 0.0, y=420, boy=86)
        k = ease_back(faz(tl, 0.5, 0.4))
        if k > 0:
            yazi(d, (W / 2, 700), "SEN", int(260 * k) + 1, KIRMIZI, kontur=6)
        k3 = faz(tl, 1.0, 0.4)
        if k3 > 0:
            saat(d, 290, 1080, 120, tl / 3.0)
            yazi(d, (290, 1250), "BEKLEME", 60, BEYAZ)
            for i in range(5):
                # kalite yıldızları teker teker söner
                son = faz(tl, 1.6 + i * 0.12, 0.2) > 0.5 and i >= 2
                yildiz(d, 620 + i * 85, 1080, 38, dolu=not son)
            yazi(d, (790, 1250), "KALİTE", 60, BEYAZ)


def s_yorum(d, t, T):
    """Sahne 4: ilan fotoğrafı vs gerçek fotoğraf, tik."""
    baslik_bandi(d, "YORUMLARA BAK", t, 0.0, y=330, boy=96)
    for j, (ad, x) in enumerate((("İLAN", 290), ("GERÇEK", 790))):
        k = ease_back(faz(t, 0.3 + j * 0.4, 0.45))
        if k <= 0:
            continue
        w2, h2 = 200 * k, 260 * k
        kutu(d, x - w2, 900 - h2, x + w2, 900 + h2, r=24, renk=(235, 236, 240))
        if j == 0:
            kulaklik(d, x, 860, 1.0 * k, renk=(255, 255, 255), golge=(185, 190, 200))
            for i in range(5):
                yildiz(d, x - 100 * k + i * 50 * k, 1080, 18 * k)
        else:
            kulaklik(d, x, 860, 0.8 * k, renk=(200, 196, 188), golge=(150, 146, 140))
            d.line((x - 80 * k, 820, x + 40 * k, 900), fill=(120, 116, 110), width=6)
            for i in range(5):
                yildiz(d, x - 100 * k + i * 50 * k, 1080, 18 * k, dolu=i < 2)
        yazi(d, (x, 900 + h2 + 60), ad, 64, BEYAZ)
    tik(d, W / 2, 1390, 70, faz(t, 1.4, 0.5))


_AVATAR = None


def _avatar():
    global _AVATAR
    if _AVATAR is None:
        _AVATAR = Image.open("assets/marka/avatar.png").convert("RGBA")
    return _AVATAR


def _yapistir(d, katman, cx, cy):
    """RGBA katmanı, çizim tuvaline merkezden yapıştır."""
    im = d._image
    im.paste(katman, (int(cx - katman.width / 2), int(cy - katman.height / 2)), katman)


def _katman(boy):
    k = Image.new("RGBA", (boy, boy), (0, 0, 0, 0))
    return k, ImageDraw.Draw(k)


def ikon_begen(boy, dolu):
    k, kd = _katman(boy)
    s = boy / 100
    r = SARI if dolu else BEYAZ
    kd.rounded_rectangle((8 * s, 44 * s, 26 * s, 92 * s), radius=int(5 * s), fill=r)          # bilek
    kd.rounded_rectangle((32 * s, 40 * s, 86 * s, 92 * s), radius=int(12 * s), fill=r)        # avuç
    kd.polygon([(34 * s, 44 * s), (52 * s, 8 * s), (64 * s, 12 * s), (60 * s, 44 * s)], fill=r)  # başparmak
    if not dolu:
        kd.rounded_rectangle((38 * s, 46 * s, 80 * s, 86 * s), radius=int(9 * s), fill=PANEL)
    return k


def ikon_yorum(boy, nokta_k):
    k, kd = _katman(boy)
    s = boy / 100
    kd.rounded_rectangle((6 * s, 10 * s, 94 * s, 72 * s), radius=int(18 * s), fill=BEYAZ)
    kd.polygon([(24 * s, 70 * s), (22 * s, 94 * s), (46 * s, 70 * s)], fill=BEYAZ)
    for i in range(3):
        z = math.sin(nokta_k * 8 - i * 0.9)
        rr = (7 + 2.5 * max(0, z)) * s
        cx = (30 + i * 20) * s
        kd.ellipse((cx - rr, 41 * s - rr, cx + rr, 41 * s + rr), fill=PANEL)
    return k


def ikon_zil(boy, aci):
    k, kd = _katman(boy)
    s = boy / 100
    kd.pieslice((18 * s, 12 * s, 82 * s, 80 * s), 180, 360, fill=SARI)
    kd.rectangle((18 * s, 46 * s, 82 * s, 72 * s), fill=SARI)
    kd.polygon([(10 * s, 78 * s), (18 * s, 68 * s), (82 * s, 68 * s), (90 * s, 78 * s)], fill=SARI)
    kd.ellipse((42 * s, 78 * s, 58 * s, 94 * s), fill=SARI)
    kd.ellipse((45 * s, 4 * s, 55 * s, 14 * s), fill=SARI)
    return k.rotate(aci, resample=Image.BICUBIC, center=(boy / 2, 10 * s))


def parmak(d, x, y, basili):
    r = 34 if not basili else 28
    d.ellipse((x - r - 10, y - r - 10, x + r + 10, y + r + 10), outline=(255, 255, 255), width=5)
    d.ellipse((x - r, y - r, x + r, y + r), fill=(255, 255, 255))


def patlama(d, cx, cy, k, renk=SARI):
    if not (0 < k < 1):
        return
    for i in range(8):
        a = i * math.pi / 4
        r0, r1 = 70 + 60 * k, 95 + 90 * k
        d.line((cx + r0 * math.cos(a), cy + r0 * math.sin(a), cx + r1 * math.cos(a), cy + r1 * math.sin(a)),
               fill=renk, width=int(10 * (1 - k)) + 2)


def s_son(d, t, T):
    """Kapanış: kanal avatarı + BEĞEN / YORUM YAP / ABONE OL animasyonu."""
    # 1) avatar: zıplayarak gelir, etrafında dönen nişan halkası
    ka = ease_back(faz(t, 0, 0.5))
    ay = 560
    if ka > 0.02:
        boy = int(380 * ka * (1 + 0.025 * math.sin(t * 6)))
        parlak = int(120 + 60 * math.sin(t * 5))
        r = boy / 2 + 26
        d.ellipse((W / 2 - r, ay - r, W / 2 + r, ay + r), outline=(255, 195, 30), width=6)
        bas = (t * 140) % 360
        for i in range(4):
            d.arc((W / 2 - r - 22, ay - r - 22, W / 2 + r + 22, ay + r + 22),
                  bas + i * 90, bas + i * 90 + 50, fill=(255, 195, 30, parlak), width=10)
        _yapistir(d, _avatar().resize((boy, boy), Image.LANCZOS), W / 2, ay)
    if t > 0.35:
        yazi(d, (W / 2, 880), "TUZAK AVCISI", 88, SARI, kontur=4)
        yazi(d, (W / 2, 960), "HER GÜN 12:00 VE 20:00", 50, BEYAZ, kontur=3)

    # 2) üç buton sırayla kayarak gelir; parmak her birine dokunur
    butonlar = [("BEĞEN", 1080), ("YORUM YAP", 1225), ("ABONE OL", 1370)]
    dokun = [1.5, 2.3, 3.1]
    for i, (ad, y) in enumerate(butonlar):
        kg = ease_out(faz(t, 0.6 + i * 0.15, 0.4))
        if kg <= 0:
            continue
        x0 = 150 + (1 - kg) * -900
        basildi = t >= dokun[i]
        bk = faz(t, dokun[i], 0.25)
        olc = 1 - 0.08 * math.sin(math.pi * bk) if 0 < bk < 1 else 1
        w2, h2 = 390 * olc, 62 * olc
        cx = W / 2 + (x0 - 150)
        if ad == "ABONE OL":
            renk = (70, 70, 80) if basildi else KIRMIZI
            metin = "ABONE OLUNDU" if basildi else "ABONE OL"
        else:
            renk = PANEL
            metin = ad
        kutu(d, cx - w2, y - h2, cx + w2, y + h2, r=int(h2), renk=renk,
             cizgi=SARI if (basildi and ad != "ABONE OL") else None, kalinlik=5)
        ix = cx - w2 + 80
        if ad == "BEĞEN":
            _yapistir(d, ikon_begen(86, basildi), ix, y)
            if basildi:
                patlama(d, ix, y, faz(t, dokun[i], 0.5))
        elif ad == "YORUM YAP":
            _yapistir(d, ikon_yorum(86, t if basildi else 0), ix, y)
        else:
            aci = 22 * math.sin((t - dokun[i]) * 18) * max(0, 1 - (t - dokun[i]) / 1.2) if basildi else 0
            _yapistir(d, ikon_zil(86, aci), ix, y)
            if basildi:
                patlama(d, ix, y, faz(t, dokun[i], 0.5), renk=BEYAZ)
        yazi(d, (cx + 40, y), metin, int((54 if metin == "ABONE OLUNDU" else 64) * olc), BEYAZ)

    # 3) dokunma imleci: butondan butona gider
    if 1.0 < t < dokun[-1] + 0.6:
        hedefler = [(W / 2 + 230, y) for _, y in butonlar]
        i = min(range(3), key=lambda j: abs(t - dokun[j]))
        onceki = hedefler[max(0, i - 1)] if t < dokun[i] else hedefler[i]
        k = ease_out(faz(t, dokun[i] - 0.5, 0.4)) if t < dokun[i] else 1
        x = onceki[0] + (hedefler[i][0] - onceki[0]) * k
        y = (onceki[1] + (hedefler[i][1] - onceki[1]) * k) + 40
        parmak(d, x, y, abs(t - dokun[i]) < 0.12)


SAHNE_CIZ = {"TEMU NASIL BU KADAR UCUZ? 📦": [s_telefon, s_akis, s_maliyet, s_yorum]}
# Her sahne + kapanış için gerçek stok klip araması (Pexels/Pixabay, İngilizce)
SAHNE_KLIP = {"TEMU NASIL BU KADAR UCUZ? 📦": [
    "online shopping smartphone", "factory packaging boxes", "warehouse shipping boxes",
    "woman scrolling phone", "delivery package doorstep"]}


def klipleri_indir(baslik, tmp):
    import video as V
    yollar = []
    for i, q in enumerate(SAHNE_KLIP.get(baslik, [])):
        yol = os.path.join(tmp, f"klip_{i}.mp4")
        try:
            r = V.stok_video_ara(q, (W, H), yol, dikey=True)
            yollar.append(yol if r else None)
            print(f"   Klip {i + 1}: {q} -> {r[0] if r else 'yok'}")
        except Exception as e:
            print(f"   Klip {i + 1}: {q} hata {str(e)[:80]}")
            yollar.append(None)
    return yollar


# ---------------- ses + zamanlama ----------------
def seslendir(metin, mp3):
    """Kanal Shorts sesi (ElevenLabs, config.kisa_ses_id) → yoksa edge-tts."""
    import video as V
    cfg = json.load(open("config.json", encoding="utf-8-sig"))
    if os.environ.get("KOD_VIDEO_SESSIZ") == "1":
        sure = max(8.0, len(metin.split()) / 2.6)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i",
                        "anullsrc=r=44100:cl=mono", "-t", f"{sure:.2f}", mp3], check=True)
        return V._yapay_zaman(metin, sure), "sessiz (yerel deneme)"
    if cfg.get("kisa_eleven", True) and V._eleven_key():
        try:
            b = V._eleven_seslendir(metin, mp3, str(cfg.get("kisa_ses_id", "")).strip() or None, speed=1.12)
            return b, "ElevenLabs (kanal Shorts sesi)"
        except Exception as e:
            print("ElevenLabs hata:", str(e)[:150])
    cumleler = [c for c in re.split(r"(?<=[.!?])\s+", metin) if c.strip()]
    b = V.seslendir_prosodik(cumleler, V.CONFIG["sesler"][cfg.get("ses", "erkek")],
                             str(cfg.get("hiz", "+6%")), mp3)
    return b, "edge-tts (ücretsiz)"


def sahne_sinirlari(sahneler, kelimeler, toplam):
    """Her sahnenin başlangıç zamanı: o sahnenin ilk kelimesinin konuşulduğu an."""
    import video as V
    adet = [len(V._ses_normalize(s["metin"]).split()) for s in sahneler]
    n = len(kelimeler)
    olcek = n / max(1, sum(adet) + len(V._ses_normalize(SABIT_CTA).split()))
    sinir, i = [], 0
    for a in adet:
        idx = min(n - 1, int(round(i * olcek)))
        sinir.append(kelimeler[idx]["start"] if n else 0.0)
        i += a
    cta_idx = min(n - 1, int(round(i * olcek)))
    sinir.append(kelimeler[cta_idx]["start"] if n else toplam)
    sinir[0] = 0.0
    return sinir   # len = sahne + 1 (son eleman CTA başlangıcı)


# ---------------- render ----------------
def render(baslik, cikti):
    S = json.load(open("senaryolar.json", encoding="utf-8-sig"))
    s = next(x for x in S if x["baslik"] == baslik)
    ciz = SAHNE_CIZ[baslik]
    tmp = tempfile.mkdtemp()
    metin = (s["script"].rstrip(" .") + ". " + SABIT_CTA).strip()
    import video as V
    tts_metin = V._ses_normalize(metin)
    mp3 = os.path.join(tmp, "ses.mp3")
    # Ses önbelleği: aynı metin bir daha seslendirilmez (ElevenLabs kredisi korunur)
    import hashlib, shutil
    ob = os.path.join("onizleme", "kod_video", "ses", hashlib.md5(tts_metin.encode()).hexdigest()[:12])
    if os.path.exists(ob + ".mp3") and os.path.exists(ob + ".json"):
        shutil.copy(ob + ".mp3", mp3)
        kelimeler, kaynak = json.load(open(ob + ".json", encoding="utf-8")), "önbellek (kredi harcanmadı)"
    else:
        kelimeler, kaynak = seslendir(tts_metin, mp3)
        if "sessiz" not in kaynak:
            os.makedirs(os.path.dirname(ob), exist_ok=True)
            shutil.copy(mp3, ob + ".mp3")
            json.dump(kelimeler, open(ob + ".json", "w", encoding="utf-8"), ensure_ascii=False)
    print("Ses:", kaynak)
    try:
        karisik = V._muzik_ekle(mp3, tmp, "merak")
    except Exception:
        karisik = mp3
    toplam = V.sure_al(mp3) + 0.6
    sinir = sahne_sinirlari(s["sahneler"], kelimeler, toplam)
    kanca_sure = 1.1
    klipler = klipleri_indir(baslik, tmp) if os.environ.get("KOD_VIDEO_KLIPSIZ") != "1" else []
    print("Sahne başlangıçları:", [round(x, 2) for x in sinir], "toplam", round(toplam, 2))

    ff = subprocess.Popen(
        ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
         "-r", str(FPS), "-i", "-", "-i", karisik, "-map", "0:v", "-map", "1:a",
         "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p",
         "-af", "apad", "-c:a", "aac", "-b:a", "160k", "-shortest", "-movflags", "+faststart", cikti],
        stdin=subprocess.PIPE)
    kare_say = int(toplam * FPS)
    aralik = sinir + [toplam]          # klip i: [aralik[i], aralik[i+1])
    akan, akan_i = None, -1
    for f in range(kare_say):
        t = f / FPS
        ki = max(i for i in range(len(aralik) - 1) if aralik[i] <= t) if t >= 0 else 0
        if ki != akan_i:
            if akan:
                akan.kapat()
            yol = klipler[ki] if ki < len(klipler) else None
            akan = Klip(yol, aralik[ki + 1] - aralik[ki]) if yol else None
            akan_i = ki
        img, d = arka_plan(t, akan)
        if t < kanca_sure:
            s_kanca(d, t, kanca_sure)
        elif t >= sinir[-1]:
            s_son(d, t - sinir[-1], toplam - sinir[-1])
        else:
            for i in range(len(ciz)):
                if sinir[i] <= t < sinir[i + 1]:
                    bas = max(sinir[i], kanca_sure if i == 0 else sinir[i])
                    ciz[i](d, t - bas, sinir[i + 1] - bas)
                    break
        altyazi(d, kelimeler, t)
        # ilerleme çubuğu
        d.rectangle((0, H - 14, W * t / toplam, H), fill=SARI)
        ff.stdin.write(img.tobytes())
    if akan:
        akan.kapat()
    ff.stdin.close()
    ff.wait()
    print("✓", cikti, f"{toplam:.1f} sn")
    return cikti


if __name__ == "__main__":
    b = sys.argv[1] if len(sys.argv) > 1 else "TEMU NASIL BU KADAR UCUZ? 📦"
    out = sys.argv[2] if len(sys.argv) > 2 else "onizleme/kod_video/temu.mp4"
    os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
    render(b, out)
