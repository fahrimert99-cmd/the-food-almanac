#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kanal analizi: The Food Almanac videolarının YouTube verilerini toplar (yalnızca okur).

  python3 uzun_en/araclar/analiz.py      # uzun_en/analiz/<tarih>.json yazar

Toplananlar:
- Data API: anlık abone, izlenme ve video sayıları.
- Analytics API (yalnızca yayin.json'daki videolar; eski kanalın verisi karışmaz):
  - video başına izlenme, izlenme süresi, ortalama izleme, abone kazanımı;
  - ülke, trafik kaynağı, abone/abone olmayan, cihaz, yaş ve cinsiyet kırılımları;
  - günlük seyir, gösterim ve tıklama oranı, izleyici tutma eğrisi.
Gelir verisi bilerek alınmaz, çünkü repo herkese açık. Analytics verisi YouTube'da 2–3 gün gecikmeli oluşur.
Bir sorgu başarısız olursa hatası rapora yazılır, diğerleri sürer.
"""
import datetime as dt
import glob
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
import youtube_api as YY  # noqa: E402
from googleapiclient.discovery import build  # noqa: E402

CIKTI = os.path.join(O.KOK, "analiz")
TEMEL = ("views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,"
         "subscribersGained,subscribersLost,likes,comments,shares")


def videolar():
    v = []
    for y in glob.glob(os.path.join(O.PROJELER, "*", "yayin.json")):
        d = O.json_oku(y, {}) or {}
        if d.get("video_id"):
            v.append({"slug": os.path.basename(os.path.dirname(y)), "id": d["video_id"],
                      "baslik": d.get("baslik", ""), "slot": d.get("slot") or ""})
    return sorted(v, key=lambda x: x["slot"])


def sorgu(ya, **k):
    try:
        r = ya.reports().query(ids="channel==MINE", **k).execute()
        adlar = [h["name"] for h in r.get("columnHeaders", [])]
        return {"satirlar": [dict(zip(adlar, s)) for s in (r.get("rows") or [])]}
    except Exception as e:  # noqa: BLE001 — her sorgunun hatası rapora yazılır
        return {"hata": str(e)[:500]}


def main():
    simdi = dt.datetime.now(dt.timezone.utc)
    bitis = simdi.date().isoformat()
    vs = videolar()
    yayinda = [v for v in vs if v["slot"] and v["slot"] <= simdi.strftime("%Y-%m-%dT%H:%M:%SZ")]
    bas = min([v["slot"][:10] for v in vs] + [bitis])
    kimlik = YY._kimlik()
    yt = build("youtube", "v3", credentials=kimlik, cache_discovery=False)
    ya = build("youtubeAnalytics", "v2", credentials=kimlik, cache_discovery=False)

    R = {"tarih": simdi.strftime("%Y-%m-%dT%H:%M:%SZ"), "aralik": [bas, bitis], "videolar": vs,
         "yayinda": [v["id"] for v in yayinda]}
    try:
        k = yt.channels().list(part="statistics", mine=True).execute()["items"][0]["statistics"]
        R["kanal"] = {x: k.get(x) for x in ("subscriberCount", "viewCount", "videoCount")}
        if vs:
            r = yt.videos().list(part="statistics", id=",".join(v["id"] for v in vs)).execute()
            R["anlik"] = {i["id"]: i.get("statistics", {}) for i in r.get("items", [])}
    except Exception as e:  # noqa: BLE001
        R["kanal"] = {"hata": str(e)[:500]}

    # Erişim denetimi: kanal düzeyinde son 7 gün (Analytics API açık mı, izin var mı?)
    R["erisim"] = sorgu(ya, startDate=(simdi.date() - dt.timedelta(days=7)).isoformat(), endDate=bitis,
                        metrics="views")
    if vs:
        f = "video==" + ",".join(v["id"] for v in vs)
        A = dict(startDate=bas, endDate=bitis, filters=f)
        R["video"] = sorgu(ya, metrics=TEMEL, dimensions="video", sort="-views", maxResults=200, **A)
        R["ulke"] = sorgu(ya, metrics="views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage",
                          dimensions="country", sort="-views", maxResults=25, **A)
        R["trafik"] = sorgu(ya, metrics="views,estimatedMinutesWatched,averageViewDuration",
                            dimensions="insightTrafficSourceType", sort="-views", **A)
        R["abone_durumu"] = sorgu(ya, metrics="views,averageViewDuration,averageViewPercentage",
                                  dimensions="subscribedStatus", **A)
        R["cihaz"] = sorgu(ya, metrics="views,estimatedMinutesWatched", dimensions="deviceType", sort="-views", **A)
        R["yas_cinsiyet"] = sorgu(ya, metrics="viewerPercentage", dimensions="ageGroup,gender", **A)
        R["gunluk"] = sorgu(ya, metrics="views,estimatedMinutesWatched,subscribersGained,subscribersLost",
                            dimensions="day", sort="day", **A)
        R["gosterim"] = sorgu(ya, metrics="videoThumbnailImpressions,videoThumbnailImpressionsClickRate",
                              dimensions="video", **A)
        R["izleyici_tutma"] = {v["id"]: sorgu(ya, metrics="audienceWatchRatio,relativeRetentionPerformance",
                                              dimensions="elapsedVideoTimeRatio", startDate=bas, endDate=bitis,
                                              filters=f"video=={v['id']}") for v in yayinda}

    os.makedirs(CIKTI, exist_ok=True)
    yol = os.path.join(CIKTI, f"{bitis}.json")
    O.json_yaz(yol, R)
    hatalar = {a: b["hata"][:160] for a, b in R.items() if isinstance(b, dict) and "hata" in b}
    print(f"rapor: {os.path.relpath(yol, O.REPO)} | {len(vs)} video ({len(yayinda)} yayında) | kanal: {R.get('kanal')}")
    print("Analytics erişimi:", "TAMAM" if "satirlar" in R["erisim"] else f"HATA — {R['erisim']['hata'][:300]}")
    for a, b in hatalar.items():
        print(f"  sorgu hatası [{a}]: {b}")
    sys.exit(0 if "satirlar" in R["erisim"] else 1)


if __name__ == "__main__":
    main()
