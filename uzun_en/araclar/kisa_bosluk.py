#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kural: takvimde boş gün kalmaz. Salı ve Cuma uzun video, diğer her gün en az bir Shorts.

  python3 uzun_en/araclar/kisa_bosluk.py [--kuru]

Yarından planlı son yayına kadar her günü tarar. Shorts'u olmayan bir Shorts gününe (Salı/Cuma dışı) eski bir videodan
ek Shorts ayırır: projeler/SLUG/kisa_N_yayin.json'a yalnızca {"slot"} yazar. Shorts hattı (uzun_en_kisa.yml) videosu
olmayan bu kayıtları sıradan Shorts'lardan sonra üretip o güne yükler (kisa_slot ayrılan slotu kullanır).
- Çarşamba/Perşembe (Salı videosunun) ve Cumartesi/Pazar (Cuma videosunun) günleri o videonun kendi Shorts'ları için
  bekletilir: video yüklenmiş ama Shorts'ları henüz yüklenmemişse o günlere dokunulmaz.
- Aday: uzun videosu yüklenmiş, yayın saati boş günden en az bir gün önce olan, KISA_AZAMI'dan az Shorts'u olan proje.
  Önce Shorts'u az olan, sonra Shorts'ları en çok izlenen (son kanal analizi), sonra uzun videosu en çok izlenen.
Shorts hiç seçilmezse (aday yoksa) uyarı yazar; uzun video günlerindeki boşluğu üretim hattı (plan.py) doldurur.
"""
import argparse, glob, json, os, re, sys
import datetime as dt

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

KISA_AZAMI = 4        # bir videodan en çok bu kadar Shorts (cümle havuzu ve tekrar hissi)


def tarih(t):
    return dt.datetime.fromisoformat(t.replace("Z", "+00:00"))


def kisa_ad(no):
    return "kisa" if no == 1 else f"kisa_{no}"


def kisalar(slug):
    """{no: kayıt} — videosu olan ya da slotu ayrılmış Shorts kayıtları."""
    out = {}
    for y in glob.glob(os.path.join(O.proje_dir(slug), "kisa*_yayin.json")):
        k = O.json_oku(y, {}) or {}
        if k.get("video_id") or k.get("slot"):
            out[int(re.search(r"kisa_?(\d*)_yayin", os.path.basename(y)).group(1) or 1)] = k
    return out


def izlenmeler():
    """Son kanal analizinden video id -> izlenme (uzun ve Shorts)."""
    son = sorted(glob.glob(os.path.join(O.KOK, "analiz", "20*.json")))
    d = O.json_oku(son[-1], {}) if son else {}
    out = {}
    for b in ("video", "kisa_video"):
        for r in ((d or {}).get(b) or {}).get("satirlar") or []:
            out[r.get("video")] = r.get("views", 0)
    return out


def bosluklar(simdi=None):
    """[(gün, ...)] Shorts'u olmayan ve doldurulabilir Shorts günleri; ayrıca uyarılar."""
    m = O.marka()
    simdi = simdi or dt.datetime.now(dt.timezone.utc)
    uzun_gunler = set(m["yayin"]["gunler"])
    sayi = int(m.get("kisa_sayisi", 2))
    uzun, kisa_gun = {}, set()
    for slug in O.durum()["videolar"]:
        y = O.json_oku(os.path.join(O.proje_dir(slug), "yayin.json"), {}) or {}
        if y.get("video_id") and y.get("slot"):
            uzun[tarih(y["slot"]).date()] = slug
        for k in kisalar(slug).values():
            if k.get("slot"):
                kisa_gun.add(tarih(k["slot"]).date())
    tum = list(uzun) + list(kisa_gun)
    if not tum:
        return [], uzun
    bas, son = simdi.date() + dt.timedelta(days=1), max(tum)
    out, g = [], bas
    while g <= son:
        if g.weekday() not in uzun_gunler and g not in kisa_gun:
            # bu gün bir yeni videonun kendi Shorts günü mü? (Salı -> Çar/Per, Cuma -> Cmt/Paz)
            sahip = next((uzun[g - dt.timedelta(days=k)] for k in (1, 2)
                          if (g - dt.timedelta(days=k)).weekday() in uzun_gunler and (g - dt.timedelta(days=k)) in uzun), None)
            bekliyor = sahip and sum(1 for k in kisalar(sahip).values() if k.get("video_id")) < sayi
            if not bekliyor:
                out.append(g)
        g += dt.timedelta(days=1)
    return out, uzun


def sec(gun, sayac, izl):
    """Boş güne ek Shorts verilecek proje ve Shorts numarası; yoksa None."""
    aday = []
    for slug in O.durum()["videolar"]:
        p = O.proje(slug) or {}
        y = O.json_oku(os.path.join(O.proje_dir(slug), "yayin.json"), {}) or {}
        if p.get("kisa_yok") or not y.get("video_id") or not y.get("slot"):
            continue
        if tarih(y["slot"]).date() > gun - dt.timedelta(days=1):
            continue                                        # uzun video o günden en az bir gün önce yayında olmalı
        ks = kisalar(slug)
        verilen = sayac.get(slug, [])
        n = len(ks) + len(verilen)
        if n >= KISA_AZAMI:
            continue
        kisa_izl = sum(izl.get(k.get("video_id"), 0) for k in ks.values())
        aday.append((n, -kisa_izl, -izl.get(y["video_id"], 0), y["slot"], slug, max(list(ks) + verilen + [0]) + 1))
    if not aday:
        return None
    aday.sort()
    return aday[0][4], aday[0][5]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kuru", action="store_true", help="yalnızca yazdır, kayıt açma")
    a = ap.parse_args()
    m = O.marka()
    gunler, _ = bosluklar()
    if not gunler:
        return O.log("takvimde boş Shorts günü yok")
    izl, sayac = izlenmeler(), {}
    saat = m["yayin"]["saat_utc"]
    for g in gunler:
        s = sec(g, sayac, izl)
        if not s:
            O.log(f"::warning::{g}: boş gün için uygun eski video yok (her videonun {KISA_AZAMI} Shorts'u var)")
            continue
        slug, no = s
        slot = f"{g.isoformat()}T{saat}:00Z"
        O.log(f"• {g} ({['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'][g.weekday()]}): {slug} Shorts {no} ayrıldı ({slot})")
        sayac.setdefault(slug, []).append(no)
        if not a.kuru:
            O.json_yaz(os.path.join(O.proje_dir(slug), f"{kisa_ad(no)}_yayin.json"), {"slot": slot})


if __name__ == "__main__":
    main()
