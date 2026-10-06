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


# İngilizce marka/kelimeler: Türkçe i->İ kuralı uygulanmaz (NETFLIX, IPHONE...)
_INGILIZCE = {"netflix", "spotify", "duolingo", "gillette", "prime", "iphone", "lightning", "premium",
              "nespresso", "starbucks", "mcdonald's", "mcdonald's'ın", "mcdonald's'ta", "online", "apple",
              "tall", "grande", "lego", "temu", "pegasus", "amazon", "usb-c", "venti"}


def _tr_ust(s):
    out = []
    for w in s.split(" "):
        kok = re.sub(r"[^\w'’-]", "", w.lower())
        tab = kok.split("'")[0].split("’")[0]
        if kok in _INGILIZCE or tab in _INGILIZCE:
            # marka kısmı İngilizce büyük harf, Türkçe eki Türkçe kurala göre
            i = w.lower().find(tab)
            out.append(w[:i] + w[i:i + len(tab)].upper()
                       + w[i + len(tab):].replace("i", "İ").replace("ı", "I").upper())
        else:
            out.append(w.replace("i", "İ").replace("ı", "I").upper())
    return " ".join(out)


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


# ---------------- ikonlar (kodla) ----------------
def ikon(d, ad, cx, cy, s=1.0, ton=None):
    """Adına göre basit vektör ikon çizer (s: ölçek, ~100px * s)."""
    if s <= 0.02:
        return
    g = (120, 125, 140)
    if ad == "kulaklik":
        kulaklik(d, cx, cy - 20 * s, s, renk=(255, 255, 255), golge=(180, 184, 196))
    elif ad == "kulaklik_kotu":
        kulaklik(d, cx, cy - 20 * s, s * 0.85, renk=(200, 196, 188), golge=(150, 146, 140))
        d.line((cx - 70 * s, cy - 60 * s, cx + 40 * s, cy + 20 * s), fill=(120, 116, 110), width=max(2, int(6 * s)))
    elif ad == "paket":
        paket(d, cx, cy, 1.6 * s)
    elif ad == "fabrika":
        fabrika(d, cx, cy, s)
    elif ad == "ev":
        ev(d, cx, cy, s)
    elif ad == "magaza":
        d.rectangle((cx - 110 * s, cy - 40 * s, cx + 110 * s, cy + 90 * s), fill=g)
        for i in range(5):
            x = cx - 110 * s + i * 44 * s
            d.rectangle((x, cy - 90 * s, x + 44 * s, cy - 40 * s), fill=KIRMIZI if i % 2 == 0 else BEYAZ)
        d.rectangle((cx - 30 * s, cy + 20 * s, cx + 30 * s, cy + 90 * s), fill=SARI)
    elif ad == "restoran":
        d.ellipse((cx - 90 * s, cy - 60 * s, cx + 90 * s, cy + 60 * s), fill=BEYAZ)
        d.ellipse((cx - 60 * s, cy - 40 * s, cx + 60 * s, cy + 40 * s), fill=(225, 225, 230))
        d.rectangle((cx - 130 * s, cy - 60 * s, cx - 118 * s, cy + 70 * s), fill=GRI)
        d.rectangle((cx + 118 * s, cy - 60 * s, cx + 130 * s, cy + 70 * s), fill=GRI)
    elif ad == "telefon":
        kutu(d, cx - 55 * s, cy - 95 * s, cx + 55 * s, cy + 95 * s, r=int(16 * s), renk=(40, 40, 50))
        kutu(d, cx - 45 * s, cy - 82 * s, cx + 45 * s, cy + 82 * s, r=int(10 * s), renk=(235, 236, 240))
    elif ad == "tv":
        kutu(d, cx - 130 * s, cy - 80 * s, cx + 130 * s, cy + 70 * s, r=int(14 * s), renk=(40, 40, 50))
        kutu(d, cx - 118 * s, cy - 68 * s, cx + 118 * s, cy + 58 * s, r=int(8 * s), renk=ton or (60, 90, 160))
        d.rectangle((cx - 40 * s, cy + 70 * s, cx + 40 * s, cy + 90 * s), fill=(40, 40, 50))
    elif ad == "kahve":
        d.polygon([(cx - 60 * s, cy - 70 * s), (cx + 60 * s, cy - 70 * s), (cx + 45 * s, cy + 90 * s),
                   (cx - 45 * s, cy + 90 * s)], fill=BEYAZ)
        d.rectangle((cx - 66 * s, cy - 92 * s, cx + 66 * s, cy - 70 * s), fill=(60, 60, 70))
        d.rectangle((cx - 54 * s, cy - 10 * s, cx + 49 * s, cy + 35 * s), fill=ton or (30, 120, 80))
    elif ad == "kart":
        kutu(d, cx - 120 * s, cy - 75 * s, cx + 120 * s, cy + 75 * s, r=int(16 * s), renk=ton or (60, 110, 200))
        d.rectangle((cx - 120 * s, cy - 40 * s, cx + 120 * s, cy - 15 * s), fill=(30, 30, 40))
        kutu(d, cx - 95 * s, cy + 10 * s, cx - 45 * s, cy + 45 * s, r=int(6 * s), renk=SARI)
    elif ad == "sepet":
        d.polygon([(cx - 110 * s, cy - 50 * s), (cx + 110 * s, cy - 50 * s), (cx + 80 * s, cy + 50 * s),
                   (cx - 80 * s, cy + 50 * s)], fill=(200, 205, 215))
        for i in range(4):
            x = cx - 70 * s + i * 47 * s
            d.line((x, cy - 45 * s, x + 5 * s, cy + 45 * s), fill=(150, 155, 165), width=max(2, int(5 * s)))
        d.ellipse((cx - 70 * s, cy + 55 * s, cx - 40 * s, cy + 85 * s), fill=(90, 90, 100))
        d.ellipse((cx + 40 * s, cy + 55 * s, cx + 70 * s, cy + 85 * s), fill=(90, 90, 100))
        d.line((cx - 110 * s, cy - 50 * s, cx - 140 * s, cy - 90 * s), fill=(150, 155, 165), width=max(2, int(8 * s)))
    elif ad == "oynat":
        d.ellipse((cx - 90 * s, cy - 90 * s, cx + 90 * s, cy + 90 * s), fill=KIRMIZI)
        d.polygon([(cx - 28 * s, cy - 45 * s), (cx - 28 * s, cy + 45 * s), (cx + 45 * s, cy)], fill=BEYAZ)
    elif ad == "dur":
        d.ellipse((cx - 90 * s, cy - 90 * s, cx + 90 * s, cy + 90 * s), fill=(70, 70, 82))
        d.rectangle((cx - 35 * s, cy - 40 * s, cx - 12 * s, cy + 40 * s), fill=BEYAZ)
        d.rectangle((cx + 12 * s, cy - 40 * s, cx + 35 * s, cy + 40 * s), fill=BEYAZ)
    elif ad == "para":
        d.ellipse((cx - 80 * s, cy - 80 * s, cx + 80 * s, cy + 80 * s), fill=SARI)
        d.ellipse((cx - 62 * s, cy - 62 * s, cx + 62 * s, cy + 62 * s), outline=(200, 150, 20), width=max(2, int(6 * s)))
        yazi(d, (cx, cy), "TL", max(10, int(70 * s)), (150, 100, 10))
    elif ad == "ucak":
        d.polygon([(cx - 120 * s, cy), (cx + 120 * s, cy - 10 * s), (cx + 120 * s, cy + 10 * s)], fill=BEYAZ)
        d.ellipse((cx - 130 * s, cy - 18 * s, cx + 130 * s, cy + 18 * s), fill=BEYAZ)
        d.polygon([(cx - 10 * s, cy), (cx + 40 * s, cy - 90 * s), (cx + 60 * s, cy - 90 * s), (cx + 40 * s, cy)], fill=GRI)
        d.polygon([(cx - 10 * s, cy), (cx + 40 * s, cy + 90 * s), (cx + 60 * s, cy + 90 * s), (cx + 40 * s, cy)], fill=GRI)
    elif ad == "saat":
        saat(d, cx, cy, 90 * s, 0.3)
    elif ad == "yildiz":
        yildiz(d, cx, cy, 70 * s)
    elif ad == "cark":
        renkler = [KIRMIZI, SARI, YESIL, (60, 110, 200), (255, 110, 30), (160, 80, 200)]
        r = 110 * s
        for i in range(6):
            d.pieslice((cx - r, cy - r, cx + r, cy + r), i * 60, i * 60 + 60, fill=renkler[i])
        d.ellipse((cx - 20 * s, cy - 20 * s, cx + 20 * s, cy + 20 * s), fill=BEYAZ)
        d.polygon([(cx - 18 * s, cy - r - 30 * s), (cx + 18 * s, cy - r - 30 * s), (cx, cy - r + 10 * s)], fill=BEYAZ)
    elif ad == "kupon":
        kutu(d, cx - 130 * s, cy - 65 * s, cx + 130 * s, cy + 65 * s, r=int(14 * s), renk=ton or (255, 110, 30))
        for y in range(int(cy - 55 * s), int(cy + 55 * s), max(4, int(18 * s))):
            d.line((cx + 60 * s, y, cx + 60 * s, y + 8 * s), fill=BEYAZ, width=max(2, int(4 * s)))
        yazi(d, (cx - 35 * s, cy), "%", max(10, int(90 * s)), BEYAZ)
    elif ad == "kilit":
        d.arc((cx - 55 * s, cy - 120 * s, cx + 55 * s, cy - 10 * s), 180, 360, fill=GRI, width=max(3, int(22 * s)))
        d.rectangle((cx - 55 * s, cy - 66 * s, cx - 33 * s, cy - 30 * s), fill=GRI)
        d.rectangle((cx + 33 * s, cy - 66 * s, cx + 55 * s, cy - 30 * s), fill=GRI)
        kutu(d, cx - 85 * s, cy - 35 * s, cx + 85 * s, cy + 90 * s, r=int(16 * s), renk=SARI)
        d.ellipse((cx - 14 * s, cy + 10 * s, cx + 14 * s, cy + 38 * s), fill=KOYU)
    elif ad == "jilet":
        kutu(d, cx - 18 * s, cy - 10 * s, cx + 18 * s, cy + 120 * s, r=int(10 * s), renk=ton or (60, 110, 200))
        kutu(d, cx - 100 * s, cy - 70 * s, cx + 100 * s, cy - 10 * s, r=int(12 * s), renk=(200, 205, 215))
        d.line((cx - 92 * s, cy - 40 * s, cx + 92 * s, cy - 40 * s), fill=(120, 125, 140), width=max(2, int(5 * s)))
    elif ad == "yazici":
        kutu(d, cx - 130 * s, cy - 40 * s, cx + 130 * s, cy + 60 * s, r=int(14 * s), renk=(90, 92, 105))
        d.rectangle((cx - 80 * s, cy - 110 * s, cx + 80 * s, cy - 40 * s), fill=BEYAZ)
        d.rectangle((cx - 80 * s, cy + 40 * s, cx + 80 * s, cy + 120 * s), fill=BEYAZ)
        for i in range(3):
            d.line((cx - 60 * s, cy + 62 * s + i * 18 * s, cx + 50 * s, cy + 62 * s + i * 18 * s), fill=GRI, width=max(2, int(5 * s)))
    elif ad == "kartus":
        kutu(d, cx - 60 * s, cy - 90 * s, cx + 60 * s, cy + 90 * s, r=int(12 * s), renk=(50, 50, 60))
        d.rectangle((cx - 45 * s, cy - 20 * s, cx + 45 * s, cy + 75 * s), fill=ton or (40, 160, 220))
    elif ad == "sarj":
        kutu(d, cx - 70 * s, cy - 70 * s, cx + 70 * s, cy + 70 * s, r=int(18 * s), renk=BEYAZ)
        d.rectangle((cx - 35 * s, cy - 110 * s, cx - 20 * s, cy - 70 * s), fill=GRI)
        d.rectangle((cx + 20 * s, cy - 110 * s, cx + 35 * s, cy - 70 * s), fill=GRI)
        d.line((cx, cy + 70 * s, cx, cy + 130 * s), fill=BEYAZ, width=max(3, int(12 * s)))
    elif ad == "kablo":
        d.line((cx - 120 * s, cy + 60 * s, cx - 20 * s, cy + 60 * s, cx + 20 * s, cy - 40 * s), fill=BEYAZ, width=max(3, int(12 * s)))
        kutu(d, cx + 5 * s, cy - 110 * s, cx + 55 * s, cy - 30 * s, r=int(10 * s), renk=(200, 205, 215))
        d.rectangle((cx + 18 * s, cy - 140 * s, cx + 42 * s, cy - 110 * s), fill=GRI)
    elif ad == "kapsul":
        d.polygon([(cx - 70 * s, cy - 30 * s), (cx + 70 * s, cy - 30 * s), (cx + 45 * s, cy + 60 * s), (cx - 45 * s, cy + 60 * s)],
                  fill=ton or (170, 40, 60))
        d.ellipse((cx - 85 * s, cy - 50 * s, cx + 85 * s, cy - 15 * s), fill=(200, 200, 210))
    elif ad == "tugla":
        kutu(d, cx - 120 * s, cy - 40 * s, cx + 120 * s, cy + 70 * s, r=int(10 * s), renk=ton or KIRMIZI)
        for i in range(4):
            x = cx - 90 * s + i * 60 * s
            kutu(d, x - 20 * s, cy - 70 * s, x + 20 * s, cy - 35 * s, r=int(8 * s), renk=ton or KIRMIZI)
    elif ad == "takvim":
        kutu(d, cx - 100 * s, cy - 80 * s, cx + 100 * s, cy + 100 * s, r=int(14 * s), renk=BEYAZ)
        d.rectangle((cx - 100 * s, cy - 80 * s, cx + 100 * s, cy - 35 * s), fill=KIRMIZI)
        for i in range(3):
            for j in range(3):
                d.rectangle((cx - 70 * s + j * 50 * s, cy - 15 * s + i * 38 * s, cx - 45 * s + j * 50 * s,
                             cy + 8 * s + i * 38 * s), fill=(200, 200, 210))
    elif ad == "fatura":
        d.rectangle((cx - 80 * s, cy - 110 * s, cx + 80 * s, cy + 110 * s), fill=BEYAZ)
        for i in range(5):
            d.line((cx - 55 * s, cy - 70 * s + i * 30 * s, cx + 55 * s, cy - 70 * s + i * 30 * s), fill=GRI, width=max(2, int(6 * s)))
        yazi(d, (cx, cy + 80 * s), "TL", max(10, int(40 * s)), KIRMIZI)
    elif ad == "kurye":
        d.ellipse((cx - 110 * s, cy + 30 * s, cx - 50 * s, cy + 90 * s), fill=(60, 60, 70))
        d.ellipse((cx + 50 * s, cy + 30 * s, cx + 110 * s, cy + 90 * s), fill=(60, 60, 70))
        d.polygon([(cx - 80 * s, cy + 40 * s), (cx + 80 * s, cy + 40 * s), (cx + 40 * s, cy - 20 * s), (cx - 50 * s, cy - 20 * s)], fill=KIRMIZI)
        kutu(d, cx - 100 * s, cy - 110 * s, cx - 10 * s, cy - 25 * s, r=int(10 * s), renk=SARI)
    elif ad == "hamburger":
        d.pieslice((cx - 110 * s, cy - 100 * s, cx + 110 * s, cy + 20 * s), 180, 360, fill=(220, 150, 60))
        d.rectangle((cx - 115 * s, cy - 45 * s, cx + 115 * s, cy - 25 * s), fill=YESIL)
        d.rectangle((cx - 110 * s, cy - 25 * s, cx + 110 * s, cy + 15 * s), fill=(110, 60, 40))
        kutu(d, cx - 110 * s, cy + 15 * s, cx + 110 * s, cy + 55 * s, r=int(16 * s), renk=(220, 150, 60))
    elif ad == "bina":
        d.rectangle((cx - 80 * s, cy - 130 * s, cx + 80 * s, cy + 100 * s), fill=(110, 115, 130))
        for i in range(4):
            for j in range(3):
                d.rectangle((cx - 60 * s + j * 45 * s, cy - 110 * s + i * 48 * s, cx - 35 * s + j * 45 * s,
                             cy - 80 * s + i * 48 * s), fill=SARI)
    elif ad == "zil":
        _yapistir(d, ikon_zil(int(180 * s), 15), cx, cy)
    elif ad == "veri":
        for i in range(3):
            y = cy - 80 * s + i * 60 * s
            d.ellipse((cx - 90 * s, y - 25 * s, cx + 90 * s, y + 25 * s), fill=(60, 110, 200))
            d.rectangle((cx - 90 * s, y, cx + 90 * s, y + 35 * s), fill=(60, 110, 200))
            d.ellipse((cx - 90 * s, y - 25 * s, cx + 90 * s, y + 25 * s), outline=(140, 180, 240), width=max(2, int(5 * s)))
    elif ad == "muzik":
        d.ellipse((cx - 80 * s, cy + 30 * s, cx - 20 * s, cy + 80 * s), fill=SARI)
        d.ellipse((cx + 30 * s, cy + 10 * s, cx + 90 * s, cy + 60 * s), fill=SARI)
        d.rectangle((cx - 30 * s, cy - 90 * s, cx - 18 * s, cy + 55 * s), fill=SARI)
        d.rectangle((cx + 78 * s, cy - 110 * s, cx + 90 * s, cy + 35 * s), fill=SARI)
        d.polygon([(cx - 30 * s, cy - 90 * s), (cx + 90 * s, cy - 110 * s), (cx + 90 * s, cy - 80 * s), (cx - 30 * s, cy - 60 * s)], fill=SARI)
    elif ad == "alev":
        d.polygon([(cx, cy - 120 * s), (cx + 70 * s, cy - 10 * s), (cx + 55 * s, cy + 80 * s), (cx - 55 * s, cy + 80 * s),
                   (cx - 70 * s, cy - 10 * s)], fill=(255, 110, 30))
        d.polygon([(cx, cy - 40 * s), (cx + 35 * s, cy + 30 * s), (cx + 25 * s, cy + 80 * s), (cx - 25 * s, cy + 80 * s),
                   (cx - 35 * s, cy + 30 * s)], fill=SARI)
    else:   # bilinmeyen ad: soru işareti rozeti
        d.ellipse((cx - 80 * s, cy - 80 * s, cx + 80 * s, cy + 80 * s), fill=PANEL, outline=SARI, width=6)
        yazi(d, (cx, cy), "?", max(10, int(110 * s)), SARI)


def _sar(metin, boy, gen):
    """Metni verilen genişliğe sığacak satırlara böler."""
    kel, sat, cur = metin.split(), [], ""
    for k in kel:
        dene = (cur + " " + k).strip()
        if F(boy).getlength(dene) <= gen or not cur:
            cur = dene
        else:
            sat.append(cur)
            cur = k
    if cur:
        sat.append(cur)
    return sat


# ---------------- ŞABLONLAR ----------------
# Her şablon: f(d, t, T, p)  — t sahne içi zaman, T sahne süresi, p parametreler.

def sb_kanca(d, t, T, p):
    k = ease_back(faz(t, 0, 0.4))
    buyuk = _tr_ust(p.get("buyuk", ""))
    boy = 230
    while boy > 90 and F(boy).getlength(buyuk) > W - 120:
        boy -= 10
    yazi(d, (W / 2, 820), buyuk, int(boy * k) + 1, SARI, kontur=6)
    if t > 0.25:
        yazi(d, (W / 2, 1010), _tr_ust(p.get("orta", "")), 100, BEYAZ, kontur=4)
        yazi(d, (W / 2, 1140), _tr_ust(p.get("vurgu", "")), 140, KIRMIZI, kontur=4)


def sb_fiyat(d, t, T, p):
    """Telefonda ürün kartı + zıplayan fiyat etiketi (+ ara bant)."""
    g = ease_out(faz(t, 0, 0.5))
    cy = 900 + (1 - g) * 600
    x0, y0, x1, y1 = telefon(d, W / 2, cy)
    kutu(d, x0 + 30, y0 + 90, x1 - 30, y0 + 470, r=24, renk=(52, 54, 66))
    ikon(d, p.get("ikon", "paket"), W / 2, y0 + 280, 1.2)
    yazi(d, (W / 2, y0 + 540), _tr_ust(p.get("urun", "")), 46, (40, 40, 50))
    for i in range(5):
        yildiz(d, W / 2 - 120 + i * 60, y0 + 610, 22)
    kutu(d, x0 + 40, y1 - 150, x1 - 40, y1 - 50, r=50, renk=(255, 110, 30))
    yazi(d, (W / 2, y1 - 100), _tr_ust(p.get("buton", "SEPETE EKLE")), 50, BEYAZ)
    fiyat_etiketi(d, W / 2 + 230, cy - 330, p.get("fiyat", ""), ease_back(faz(t, 0.8, 0.45)) * 1.25)
    if p.get("bant") and t > T * 0.55:
        baslik_bandi(d, _tr_ust(p["bant"]), t, T * 0.55, y=330, boy=88)


def sb_akis(d, t, T, p):
    """Sol → sağ akış: kayan paketler; aradan çıkanlar çarpılanır."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=88)
    fx, ex, yy = 230, 850, 900
    ikon(d, p.get("sol_ikon", "fabrika"), fx, yy, 1.2 * ease_out(faz(t, 0.1, 0.5)))
    ikon(d, p.get("sag_ikon", "ev"), ex, yy, 1.2 * ease_out(faz(t, 0.4, 0.5)))
    yazi(d, (fx, yy + 190), _tr_ust(p.get("sol", "")), 56, BEYAZ, kontur=3)
    yazi(d, (ex, yy + 190), _tr_ust(p.get("sag", "")), 56, BEYAZ, kontur=3)
    c = ease_out(faz(t, 0.7, 0.6))
    if c > 0:
        d.line((fx + 150, yy + 40, fx + 150 + (ex - fx - 300) * c, yy + 40), fill=(70, 70, 82), width=14)
    for i in range(4):
        q = (t - 1.0) * 0.4 + i / 4.0
        if t < 1.0:
            continue
        q = q % 1.0
        x = fx + 150 + (ex - fx - 300) * q
        ikon(d, p.get("tasinan", "paket"), x, yy - 10 - 18 * math.sin(q * math.pi), 0.55)
    ara = p.get("aradakiler", [])
    for j, ad in enumerate(ara[:2]):
        gx = 330 if len(ara) > 1 and j == 0 else (750 if len(ara) > 1 else W / 2)
        bas = 1.4 + j * 0.5
        if faz(t, bas, 0.4) > 0:
            kutu(d, gx - 170, 1200, gx + 170, 1330, r=20, renk=PANEL)
            yazi(d, (gx, 1265), _tr_ust(ad), 56, GRI)
            carpi(d, gx, 1265, 70, faz(t, bas + 0.3, 0.3))


def sb_cubuklar(d, t, T, p):
    """Etiketli çubuklar: 'dus' küçülür(+çarpı), 'buyu' uzar; sonunda sonuç yazısı."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=84)
    kalemler = p.get("kalemler", [])
    y0 = 560 if p.get("bant") else 520
    for i, km in enumerate(kalemler[:4]):
        y = y0 + i * 220
        k = ease_out(faz(t, i * 0.3, 0.5))
        yazi(d, (120, y - 70), _tr_ust(km.get("ad", "")), 56, BEYAZ, hiza="lm", kontur=3)
        kutu(d, 120, y - 25, 120 + 820 * k, y + 55, r=16, renk=PANEL)
        oran = float(km.get("oran", 1.0))
        hedef = km.get("durum", "")
        dk = ease_out(faz(t, 1.2 + i * 0.25, 0.6))
        if hedef == "dus":
            dolu = 820 * k * oran * (1 - 0.88 * dk)
            renk = KIRMIZI
        elif hedef == "buyu":
            dolu = 820 * k * (oran * 0.25 + oran * 0.75 * dk)
            renk = SARI
        else:
            dolu = 820 * k * oran
            renk = km.get("renk") and tuple(km["renk"]) or SARI
        kutu(d, 120, y - 25, 120 + max(30, dolu), y + 55, r=16, renk=renk)
        if km.get("deger") and dk > 0.5:
            dx = 120 + max(30, dolu)
            if dx + 20 + F(54).getlength(km["deger"]) > W - 30:   # taşarsa çubuğun içine yaz
                yazi(d, (dx - 20, y + 15), km["deger"], 54, KOYU, hiza="rm")
            else:
                yazi(d, (dx + 20, y + 15), km["deger"], 54, BEYAZ, hiza="lm", kontur=3)
        if hedef == "dus":
            carpi(d, 1000, y + 15, 40, faz(t, 1.2 + i * 0.25, 0.3))
    if p.get("sonuc"):
        k2 = ease_back(faz(t, 2.0, 0.4))
        if k2 > 0:
            yb = y0 + len(kalemler[:4]) * 220 + 20
            yazi(d, (W / 2, yb), _tr_ust(p["sonuc"]), int(92 * k2) + 1,
                 YESIL if p.get("sonuc_renk") != "kirmizi" else KIRMIZI, kontur=4)


def sb_soru_cevap(d, t, T, p):
    """Soru bandı → büyük cevap → altta 2 ikonlu durum (saat dönüyor, yıldız söner...)."""
    baslik_bandi(d, _tr_ust(p.get("soru", "")), t, 0.0, y=420, boy=84)
    k = ease_back(faz(t, 0.5, 0.4))
    cevap = _tr_ust(p.get("cevap", ""))
    boy = 260
    while boy > 100 and F(boy).getlength(cevap) > W - 100:
        boy -= 10
    if k > 0:
        yazi(d, (W / 2, 700), cevap, int(boy * k) + 1, KIRMIZI, kontur=6)
    alt = p.get("alt", [])
    for j, a in enumerate(alt[:2]):
        x = 290 if len(alt) > 1 and j == 0 else (790 if len(alt) > 1 else W / 2)
        if faz(t, 1.0 + j * 0.3, 0.3) <= 0:
            continue
        if a.get("ikon") == "saat":
            saat(d, x, 1080, 110, t / 3.0)
        elif a.get("ikon") == "yildiz":
            for i in range(5):
                son = a.get("dus") and faz(t, 1.6 + i * 0.12, 0.2) > 0.5 and i >= 2
                yildiz(d, x - 170 + i * 85, 1080, 36, dolu=not son)
        else:
            ikon(d, a.get("ikon", ""), x, 1080, 1.0 * ease_back(faz(t, 1.0 + j * 0.3, 0.4)))
        yazi(d, (x, 1250), _tr_ust(a.get("ad", "")), 58, BEYAZ, kontur=3)


def sb_karsilastir(d, t, T, p):
    """İki kart yan yana (iyi/kötü işaretli), sonunda tik."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=90)
    for j, (kart, x) in enumerate(((p.get("sol", {}), 290), (p.get("sag", {}), 790))):
        k = ease_back(faz(t, 0.3 + j * 0.4, 0.45))
        if k <= 0:
            continue
        w2, h2 = 210 * k, 270 * k
        kutu(d, x - w2, 900 - h2, x + w2, 900 + h2, r=24, renk=(38, 40, 50), cizgi=(80, 82, 96), kalinlik=4)
        ikon(d, kart.get("ikon", ""), x, 860, 1.0 * k)
        if kart.get("alt"):
            for i, sat in enumerate(_sar(_tr_ust(kart["alt"]), 40, 380 * k)[:2]):
                yazi(d, (x, 1060 + i * 46), sat, max(10, int(40 * k)), (215, 215, 225))
        yazi(d, (x, 900 + h2 + 60), _tr_ust(kart.get("ad", "")), 64, BEYAZ, kontur=3)
        isaret = kart.get("isaret")
        if isaret == "x":
            carpi(d, x + w2 - 30, 900 - h2 + 30, 34, faz(t, 1.4 + j * 0.2, 0.3))
        elif isaret == "tik":
            tik(d, x + w2 - 40, 900 - h2 + 40, 36, faz(t, 1.4 + j * 0.2, 0.4))


def sb_sayac(d, t, T, p):
    """Büyük sayaç: 'bas'tan 'son'a sayar (geri sayım da olur), birim + açıklama."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=88)
    if p.get("ikon"):
        ikon(d, p["ikon"], W / 2, 620, 1.3 * ease_back(faz(t, 0.1, 0.4)))
    bas, son = float(p.get("bas", 0)), float(p.get("son", 100))
    k = ease_out(faz(t, 0.4, max(0.8, T * float(p.get("hiz", 0.55)))))
    deger = bas + (son - bas) * k
    od = int(p.get("ondalik", 0))
    sayi = f"{deger:.{od}f}".replace(".", ",") if od else str(int(round(deger)))
    metin = f"{p.get('on', '')}{sayi}{p.get('birim', '')}"
    nab = 1 + 0.06 * math.sin(math.pi * kis((t - 0.4) * 4)) if k < 1 else 1
    sb = 250
    while sb > 90 and F(sb).getlength(metin) > W - 120:
        sb -= 10
    yazi(d, (W / 2, 960), metin, int(sb * nab), SARI if p.get("renk") != "kirmizi" else KIRMIZI, kontur=6)
    if p.get("alt"):
        for i, sat in enumerate(_sar(_tr_ust(p["alt"]), 72, W - 160)[:2]):
            yazi(d, (W / 2, 1150 + i * 84), sat, 72, BEYAZ, kontur=4)


def sb_liste(d, t, T, p):
    """Maddeler sırayla gelir; her birinin yanında ✓ ya da ✗."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=88)
    maddeler = p.get("maddeler", [])[:5]
    adim = min(1.0, max(0.35, (T - 1.0) / max(1, len(maddeler))))
    for i, m in enumerate(maddeler):
        y = 560 + i * 170
        k = ease_out(faz(t, 0.3 + i * adim, 0.4))
        if k <= 0:
            continue
        x0 = 100 - (1 - k) * 700
        kutu(d, x0, y - 62, x0 + 880, y + 62, r=22, renk=PANEL)
        yazi(d, (x0 + 50, y), _tr_ust(m.get("metin", "")), 60, BEYAZ, hiza="lm")
        isaret = m.get("isaret")
        if isaret == "x":
            carpi(d, x0 + 810, y, 32, faz(t, 0.5 + i * adim, 0.3))
        elif isaret == "tik":
            tik(d, x0 + 810, y, 34, faz(t, 0.5 + i * adim, 0.4))


def sb_anahtar(d, t, T, p):
    """Ayar ekranı: anahtar AÇIK'tan KAPALI'ya geçer."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=88)
    g = ease_out(faz(t, 0, 0.5))
    cy = 900 + (1 - g) * 500
    kutu(d, 90, cy - 230, W - 90, cy + 230, r=36, renk=(235, 236, 240))
    yazi(d, (W / 2, cy - 150), _tr_ust(p.get("ekran", "AYARLAR")), 54, (90, 90, 100))
    yazi(d, (150, cy + 20), _tr_ust(p.get("etiket", "")), 62, (30, 30, 40), hiza="lm")
    kapan = ease_out(faz(t, T * 0.45, 0.35))
    acik = 1 - kapan if p.get("yon", "kapat") == "kapat" else kapan
    renk = renk_kar((180, 180, 190), YESIL, acik)
    tx = W - 330
    kutu(d, tx, cy - 45, tx + 180, cy + 65, r=55, renk=renk)
    bx = tx + 55 + 70 * acik
    d.ellipse((bx - 45, cy - 35, bx + 45, cy + 55), fill=BEYAZ)
    if kapan > 0.95 and p.get("sonuc"):
        yazi(d, (W / 2, cy + 340), _tr_ust(p["sonuc"]), 80, SARI, kontur=4)


def sb_boylar(d, t, T, p):
    """Üç boy bardak/paket: etiket, ml; biri vurgulanır (rozetle)."""
    if p.get("bant"):
        baslik_bandi(d, _tr_ust(p["bant"]), t, 0.0, y=330, boy=88)
    etik = p.get("etiketler", ["KÜÇÜK", "ORTA", "BÜYÜK"])
    alt = p.get("alt", [])
    olcek = (0.95, 1.25, 1.55)
    vurgu = p.get("vurgu")
    for i in range(3):
        x = 230 + i * 310
        k = ease_back(faz(t, 0.2 + i * 0.2, 0.45))
        s = olcek[i] * k
        yb = 1150
        if s > 0.02:
            h = 260 * s
            w0, w1 = 95 * s, 72 * s
            d.polygon([(x - w0, yb - h), (x + w0, yb - h), (x + w1, yb), (x - w1, yb)], fill=BEYAZ)
            d.rectangle((x - w0 - 8 * s, yb - h - 26 * s, x + w0 + 8 * s, yb - h), fill=(60, 60, 70))
            d.rectangle((x - w0 * 0.8, yb - h * 0.62, x + w0 * 0.8, yb - h * 0.32), fill=(30, 120, 80))
        yazi(d, (x, yb + 70), _tr_ust(etik[i]) if i < len(etik) else "", 60,
             SARI if vurgu == i else BEYAZ, kontur=3)
        if i < len(alt) and faz(t, 1.0, 0.3) > 0:
            yazi(d, (x, yb + 140), _tr_ust(alt[i]), 46, GRI, kontur=2)
    if vurgu is not None and p.get("rozet"):
        k2 = ease_back(faz(t, 1.3, 0.4))
        if k2 > 0:
            x = 230 + vurgu * 310
            kutu(d, x - 150 * k2, 560, x + 150 * k2, 650, r=20, renk=KIRMIZI)
            yazi(d, (x, 605), _tr_ust(p["rozet"]), int(50 * k2) + 1, BEYAZ)


def sb_buyuk_yazi(d, t, T, p):
    """Satır satır büyük yazı; 'ciz' indeksli satırın üstü çizilir, 'vurgu' sarı."""
    satirlar = p.get("satirlar", [])[:4]
    yb = 960 - (len(satirlar) - 1) * 95
    for i, sat in enumerate(satirlar):
        k = ease_back(faz(t, 0.2 + i * 0.35, 0.4))
        if k <= 0:
            continue
        metin = _tr_ust(sat)
        boy = 130
        while boy > 60 and F(boy).getlength(metin) > W - 120:
            boy -= 6
        renk = SARI if p.get("vurgu") == i else BEYAZ
        y = yb + i * 190
        yazi(d, (W / 2, y), metin, int(boy * k) + 1, renk, kontur=5)
        if p.get("ciz") == i:
            ck = ease_out(faz(t, 0.6 + i * 0.35, 0.4))
            gw = F(boy).getlength(metin)
            d.line((W / 2 - gw / 2 - 20, y, W / 2 - gw / 2 - 20 + (gw + 40) * ck, y), fill=KIRMIZI, width=16)


def sb_damga(d, t, T, p):
    """Ürün kartı + üstüne çarpan büyük damga (TÜKENDİ gibi)."""
    if p.get("ust"):
        baslik_bandi(d, _tr_ust(p["ust"]), t, 0.0, y=330, boy=84)
    k = ease_back(faz(t, 0.2, 0.45))
    if k > 0:
        kutu(d, W / 2 - 300 * k, 950 - 330 * k, W / 2 + 300 * k, 950 + 330 * k, r=30, renk=(38, 40, 50),
             cizgi=(80, 82, 96), kalinlik=4)
        ikon(d, p.get("ikon", "paket"), W / 2, 880, 1.6 * k)
        yazi(d, (W / 2, 950 + 230 * k), _tr_ust(p.get("etiket", "")), max(10, int(56 * k)), BEYAZ)
    dk = faz(t, float(p.get("an", 1.2)), 0.25)
    if dk > 0:
        s = 1.6 - 0.6 * ease_out(dk)
        damga = _tr_ust(p.get("damga", "TÜKENDİ"))
        kat, kd = _katman(900)
        kd.rounded_rectangle((60, 330, 840, 570), radius=24, fill=(14, 14, 18, 215), outline=KIRMIZI, width=16)
        db = 150
        while db > 60 and F(db).getlength(damga) > 700:
            db -= 6
        kd.text((450, 450), damga, font=F(db), fill=KIRMIZI, anchor="mm")
        kat = kat.rotate(-12, resample=Image.BICUBIC)
        kat = kat.resize((int(900 * s), int(900 * s)), Image.BICUBIC)
        _yapistir(d, kat, W / 2, 950)


SABLONLAR = {
    "kanca": sb_kanca, "fiyat": sb_fiyat, "akis": sb_akis, "cubuklar": sb_cubuklar,
    "soru_cevap": sb_soru_cevap, "karsilastir": sb_karsilastir, "sayac": sb_sayac,
    "liste": sb_liste, "anahtar": sb_anahtar, "boylar": sb_boylar, "buyuk_yazi": sb_buyuk_yazi,
    "damga": sb_damga,
}


def sahne_ciz(d, t, T, spec):
    """Sahne spec'ini çizer; 'sonra' varsa sahne süresi 'bolme' oranında ikiye ayrılır."""
    if spec.get("sonra"):
        b = T * float(spec.get("bolme", 0.5))
        if t >= b:
            return sahne_ciz(d, t - b, T - b, spec["sonra"])
        T = b
    f = SABLONLAR.get(spec.get("tip"))
    if f:
        f(d, t, T, spec)


SAHNE_DOSYA = "kod_sahneler.json"


def sahne_tanimi(baslik):
    """kod_sahneler.json'dan bu başlığın kanca + sahne + klip tanımları."""
    with open(SAHNE_DOSYA, encoding="utf-8") as f:
        return json.load(f)[baslik]


def klipleri_indir(sorgular, tmp):
    import video as V
    yollar = []
    for i, q in enumerate(sorgular):
        yol = os.path.join(tmp, f"klip_{i}.mp4")
        try:
            r = V.stok_video_ara(q, (W, H), yol, dikey=True) if q else None
            yollar.append(yol if r else None)
            print(f"   Klip {i + 1}: {q} -> {r[0] if r else 'yok'}")
        except Exception as e:
            print(f"   Klip {i + 1}: {q} hata {str(e)[:80]}")
            yollar.append(None)
    return yollar


def AZURE_SES():
    return os.environ.get("AZURE_SPEECH_VOICE", "tr-TR-AhmetNeural")


def azure_seslendir(metin, mp3):
    """Azure Speech nöral Türkçe ses; kelime zamanları WordBoundary olayından."""
    import azure.cognitiveservices.speech as sdk
    from xml.sax.saxutils import escape
    conf = sdk.SpeechConfig(subscription=os.environ["AZURE_SPEECH_KEY"].strip(),
                            region=os.environ.get("AZURE_SPEECH_REGION", "swedencentral").strip())
    conf.set_speech_synthesis_output_format(sdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3)
    synth = sdk.SpeechSynthesizer(speech_config=conf, audio_config=None)
    kelimeler = []

    def _sinir(e):
        if e.boundary_type == sdk.SpeechSynthesisBoundaryType.Word and e.text.strip():
            kelimeler.append({"start": e.audio_offset / 1e7,
                              "dur": e.duration.total_seconds(), "text": e.text})
    synth.synthesis_word_boundary.connect(_sinir)
    hiz = os.environ.get("AZURE_SPEECH_RATE", "+12%")
    ic = f'<prosody rate="{hiz}">{escape(metin)}</prosody>'
    if not AZURE_SES().startswith("tr-TR"):   # çok dilli ses: Türkçe konuştur
        ic = f'<lang xml:lang="tr-TR">{ic}</lang>'
    ssml = ('<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="tr-TR">'
            f'<voice name="{AZURE_SES()}">{ic}</voice></speak>')
    r = synth.speak_ssml_async(ssml).get()
    if r.reason != sdk.ResultReason.SynthesizingAudioCompleted:
        raise RuntimeError(f"Azure: {r.reason} {getattr(r, 'cancellation_details', '')}")
    open(mp3, "wb").write(r.audio_data)
    if not kelimeler:   # bazı sesler kelime zamanı vermez: harf sayısına göre dağıt
        import video as V
        sure = V.sure_al(mp3)
        ws = metin.split() or [" "]
        top = sum(len(w) + 1 for w in ws)
        t = 0.0
        for w in ws:
            d = sure * (len(w) + 1) / top
            kelimeler.append({"start": t, "dur": d, "text": w})
            t += d
        print("Azure: kelime zamanı yok, tahmini zamanlama")
    return kelimeler


def seslendir(metin, mp3):
    """Kanal Shorts sesi (ElevenLabs, config.kisa_ses_id) → yoksa edge-tts."""
    import video as V
    cfg = json.load(open("config.json", encoding="utf-8-sig"))
    if os.environ.get("KOD_VIDEO_SESSIZ") == "1":
        sure = max(8.0, len(metin.split()) / 2.6)
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-f", "lavfi", "-i",
                        "anullsrc=r=44100:cl=mono", "-t", f"{sure:.2f}", mp3], check=True)
        ws = metin.split() or [" "]
        return [{"start": i * sure / len(ws), "dur": sure / len(ws), "text": w} for i, w in enumerate(ws)], "sessiz (yerel deneme)"
    if os.environ.get("KOD_VIDEO_TTS") == "azure":
        return azure_seslendir(metin, mp3), f"Azure ({AZURE_SES()})"
    if cfg.get("kisa_eleven", True) and V._eleven_key():
        try:
            import inspect
            vid = str(cfg.get("kisa_ses_id", "")).strip() or None
            if "speed" in inspect.signature(V._eleven_seslendir).parameters:
                b = V._eleven_seslendir(metin, mp3, vid, speed=1.12)
            else:
                b = V._eleven_seslendir(metin, mp3, vid)
            return b, "ElevenLabs (kanal Shorts sesi)"
        except Exception as e:
            print("ElevenLabs hata:", str(e)[:150])
    if os.environ.get("AZURE_SPEECH_KEY"):
        try:
            return azure_seslendir(metin, mp3), f"Azure ({AZURE_SES()})"
        except Exception as e:
            print("Azure hata:", str(e)[:150])
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
    tanim = sahne_tanimi(baslik)
    ciz = tanim["sahneler"]
    tmp = tempfile.mkdtemp()
    metin = (s["script"].rstrip(" .") + ". " + SABIT_CTA).strip()
    import video as V
    tts_metin = V._ses_normalize(metin)
    mp3 = os.path.join(tmp, "ses.mp3")
    # Ses önbelleği: aynı metin bir daha seslendirilmez (ElevenLabs kredisi korunur)
    import hashlib, shutil
    ob_dir = os.environ.get("KOD_VIDEO_SES_DIR", os.path.join("onizleme", "kod_video", "ses"))
    ob_ad = hashlib.md5(tts_metin.encode()).hexdigest()[:12]
    if os.environ.get("KOD_VIDEO_TTS") == "azure":
        ob_ad += "-" + AZURE_SES()
    ob = os.path.join(ob_dir, ob_ad) if ob_dir else None
    if ob and os.path.exists(ob + ".mp3") and os.path.exists(ob + ".json"):
        shutil.copy(ob + ".mp3", mp3)
        kelimeler, kaynak = json.load(open(ob + ".json", encoding="utf-8")), "önbellek (kredi harcanmadı)"
    else:
        kelimeler, kaynak = seslendir(tts_metin, mp3)
        if ob and "sessiz" not in kaynak:
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
    sorgular = [sp.get("klip", "") for sp in ciz] + [tanim.get("kapanis_klip", "delivery package doorstep")]
    klipler = klipleri_indir(sorgular, tmp) if os.environ.get("KOD_VIDEO_KLIPSIZ") != "1" else []
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
            sb_kanca(d, t, kanca_sure, tanim.get("kanca", {}))
        elif t >= sinir[-1]:
            s_son(d, t - sinir[-1], toplam - sinir[-1])
        else:
            for i in range(len(ciz)):
                if sinir[i] <= t < sinir[i + 1]:
                    bas = max(sinir[i], kanca_sure if i == 0 else sinir[i])
                    sahne_ciz(d, t - bas, sinir[i + 1] - bas, ciz[i])
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


def _slug(b):
    import unicodedata
    t = unicodedata.normalize("NFKD", b.replace("ı", "i").replace("İ", "I")).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", t.lower()).strip("-")[:40]


# ---------------- STOK: önceden render, yayında hazır video ----------------
STOK_TAG = "kod-video-stok"     # GitHub release etiketi (videolar repoya girmez)
KOD_VIDEO_SURUM = "1"           # render görünümü değişince artır -> stok yenilenir


def stok_adi(baslik):
    """Stok dosya adı: senaryo metni + sahne tarifi + sürüm değişirse ad da değişir
    (eski render kendiliğinden geçersiz kalır)."""
    import hashlib
    S = json.load(open("senaryolar.json", encoding="utf-8-sig"))
    s = next(x for x in S if x["baslik"] == baslik)
    tarif = json.dumps(sahne_tanimi(baslik), ensure_ascii=False, sort_keys=True)
    h = hashlib.md5((KOD_VIDEO_SURUM + s["script"] + tarif + SABIT_CTA).encode()).hexdigest()[:8]
    return f"{_slug(baslik)}-{h}.mp4"


def _gh(*arg, timeout=180):
    return subprocess.run(["gh", *arg], capture_output=True, text=True, timeout=timeout)


def stok_varliklar():
    r = _gh("release", "view", STOK_TAG, "--json", "assets", "-q", ".assets[].name")
    return set(r.stdout.split()) if r.returncode == 0 else set()


def stok_indir(baslik, hedef):
    """Stoktaki hazır videoyu indir (GH_TOKEN gerekir). Başarılıysa True."""
    try:
        ad = stok_adi(baslik)
        tmp = tempfile.mkdtemp()
        r = _gh("release", "download", STOK_TAG, "-p", ad, "-D", tmp)
        yol = os.path.join(tmp, ad)
        if r.returncode == 0 and os.path.exists(yol) and os.path.getsize(yol) > 100_000:
            import shutil
            shutil.move(yol, hedef)
            print(f"      Stoktan hazır video: {ad}")
            return True
        print(f"      Stokta yok ({ad}): {(r.stderr or '').strip()[:120]}")
    except Exception as e:
        print(f"      Stok indirme hata: {str(e)[:120]}")
    return False


def stok_eksikleri():
    """Yayınlanmamış marka senaryolarından stokta hazır videosu olmayanlar."""
    S = json.load(open("senaryolar.json", encoding="utf-8-sig"))
    yap = set(json.load(open("durum.json", encoding="utf-8")).get("yapilan", []))
    T = json.load(open(SAHNE_DOSYA, encoding="utf-8"))
    var = stok_varliklar()
    return [s["baslik"] for s in S if s.get("seri") == "marka" and s["baslik"] not in yap
            and s["baslik"] in T and stok_adi(s["baslik"]) not in var]


if __name__ == "__main__":
    # Kullanım: kod_video.py "BAŞLIK" [çıktı]  |  kod_video.py --liste dosya.txt
    if len(sys.argv) > 3 and sys.argv[1] == "--stok-render":
        # kod_video.py --stok-render <parça> <parça_sayısı>: eksik stok videolarını render et
        i, n = int(sys.argv[2]), int(sys.argv[3])
        eksik = stok_eksikleri()
        print(f"Stok: {len(eksik)} eksik video; bu parça: {len(eksik[i::n])}")
        os.makedirs("stok", exist_ok=True)
        for b in eksik[i::n]:
            try:
                render(b, os.path.join("stok", stok_adi(b)))
            except Exception as e:
                print("HATA", b, str(e)[:200])
    elif len(sys.argv) > 2 and sys.argv[1] == "--liste":
        basliklar = [x.strip() for x in open(sys.argv[2], encoding="utf-8") if x.strip()]
        for b in basliklar:
            out = os.path.join("onizleme", "kod_video", _slug(b) + ".mp4")
            os.makedirs(os.path.dirname(out), exist_ok=True)
            try:
                render(b, out)
            except Exception as e:
                print("HATA", b, str(e)[:200])
    else:
        b = sys.argv[1] if len(sys.argv) > 1 else "TEMU NASIL BU KADAR UCUZ? 📦"
        out = sys.argv[2] if len(sys.argv) > 2 else os.path.join("onizleme", "kod_video", _slug(b) + ".mp4")
        os.makedirs(os.path.dirname(out) or ".", exist_ok=True)
        render(b, out)
