#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Öneri → güvenli otomatik uygulama.

Döngü: analytics_rapor.json oku → analiz önerilerini uygula.
ASLA üretim saatlerini / slot kilidini / cron'u değiştirmez.
12:00 ve 20:00 videoları otomasyon.yml + slot kilidi ile korunur.
"""
from __future__ import annotations

import json
import os
from datetime import datetime, timezone

RAPOR = "analytics_rapor.json"
DURUM = "durum.json"
TEMA_DOSYA = "oneri_tema.json"
ONCELIK_SENARYO = "senaryolar_oncelik.json"

TEMA_KW = {
    "market_vitrin": ["market", "kasa", "vitrin", "raf", "reyon", "sepet", "parfüm", "labirent"],
    "fiyat_indirim": ["fiyat", "indirim", "pahalı", "ucuz", "etiket"],
    "yeme_restoran": ["menü", "restoran", "mısır", "kahve", "sinema", "büfe"],
    "abonelik_dijital": ["abonelik", "üyelik", "bedava", "iptal", "uygulama", "wifi"],
    "finans_kart": ["kart", "kredi", "banka", "taksit", "faiz"],
    "gizem": ["okyanus", "deniz", "bermuda", "mariana"],
}


def _load(path, default=None):
    if not os.path.exists(path):
        return default
    with open(path, encoding="utf-8-sig") as f:
        return json.load(f)


def _save(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def _tema_bonuslari(rapor: dict) -> dict:
    oneriler = (rapor.get("oneriler") or {})
    tema_skor = oneriler.get("tema_skor") or {}
    if not tema_skor:
        tema_skor = {}
        for t in (rapor.get("top_videolar_analytics") or [])[:10]:
            b = (t.get("baslik") or "").lower()
            views = int(t.get("views") or t.get("izlenme") or 0)
            for tema, kws in TEMA_KW.items():
                if any(k in b for k in kws):
                    tema_skor[tema] = tema_skor.get(tema, 0) + views

    if not tema_skor:
        return {
            "guncelleme": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
            "bonus_kw": ["market", "kasa", "fiyat", "vitrin"],
            "engelle_kw": [],
            "not": "tema skoru yok; varsayılan market/kasa",
        }

    sirali = sorted(tema_skor.items(), key=lambda x: -x[1])
    bonus_kw = []
    for tema, _ in sirali[:3]:
        if tema == "diger":
            continue
        for k in TEMA_KW.get(tema, []):
            if k not in bonus_kw:
                bonus_kw.append(k)

    engelle = []
    max_skor = sirali[0][1] if sirali else 0
    if tema_skor.get("gizem", 0) < max_skor * 0.25 and max_skor > 0:
        engelle = list(TEMA_KW.get("gizem", []))

    return {
        "guncelleme": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "tema_skor": tema_skor,
        "bonus_kw": bonus_kw or ["market", "kasa", "fiyat"],
        "engelle_kw": engelle,
        "not": "otomasyon seçiminde bonus_kw +2, engelle_kw -2 skor",
    }


def _oncelik_senaryo_sirala(tema: dict) -> bool:
    if not os.path.exists(ONCELIK_SENARYO):
        return False
    data = _load(ONCELIK_SENARYO, [])
    if not isinstance(data, list) or len(data) < 2:
        return False
    bonus = set(tema.get("bonus_kw") or [])
    engelle = set(tema.get("engelle_kw") or [])

    def skor(s):
        b = (s.get("baslik") or "").lower()
        return sum(2 for k in bonus if k in b) - sum(2 for k in engelle if k in b)

    yeni = sorted(data, key=lambda s: -skor(s))
    if [s.get("baslik") for s in data] == [s.get("baslik") for s in yeni]:
        return False
    _save(ONCELIK_SENARYO, yeni)
    print("✓ senaryolar_oncelik sırası güncellendi")
    return True


def main():
    rapor = _load(RAPOR)
    if not rapor:
        print("! analytics_rapor.json yok — önce analytics_rapor.py")
        return

    tema = _tema_bonuslari(rapor)
    _save(TEMA_DOSYA, tema)
    print(f"✓ {TEMA_DOSYA} | bonus={tema.get('bonus_kw')} engelle={tema.get('engelle_kw')}")

    siralandi = _oncelik_senaryo_sirala(tema)

    durum = _load(DURUM, {}) or {}
    oneriler = (rapor.get("oneriler") or {}).get("oncelikli") or []
    durum["oneri_uygulama"] = {
        "zaman": tema["guncelleme"],
        "bonus_kw": tema.get("bonus_kw"),
        "engelle_kw": tema.get("engelle_kw"),
        "senaryo_siralandi": siralandi,
        "uygulanan": [x for x in [
            "oneri_tema.json (seçim skoru)",
            "senaryolar_oncelik sırası" if siralandi else None,
            "baslik_guclendir" if os.environ.get("BASLIK_UYGULANDI") else None,
        ] if x],
        "uygulanmayan_korumalar": [
            "12:00/20:00 yayın saatleri değiştirilmez",
            "slot kilidi / üretim atlanmaz",
            "cron zamanları değiştirilmez",
        ],
        "oneri_ozet": (rapor.get("oneriler") or {}).get("ozet", ""),
        "top_oneriler": [o.get("baslik") for o in oneriler[:3]],
    }
    _save(DURUM, durum)
    print("✓ durum.json ← oneri_uygulama")
    print("KORUMA: 12:00 ve 20:00 ASLA bu script ile videosuz bırakılmaz.")


if __name__ == "__main__":
    main()
