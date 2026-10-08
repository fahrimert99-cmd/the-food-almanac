#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kanal analizi: The Food Almanac videolarının YouTube verilerini toplar (yalnızca okur).

  python3 uzun_en/araclar/analiz.py      # uzun_en/analiz/<tarih>.json yazar

Toplananlar:
- Data API: anlık abone, izlenme ve video sayıları.
- Analytics API (yalnızca yayin.json'daki videolar; eski kanalın verisi karışmaz):
  - video başına izlenme, izlenme süresi, ortalama izleme, abone kazanımı;
  - ülke, trafik kaynağı, abone/abone olmayan, cihaz, yaş ve cinsiyet kırılımları;
  - günlük seyir ve izleyici tutma eğrisi.
- Reporting API: gösterim ve tıklama oranı (video ve ülke bazında). İlk çalıştırmada rapor işi açılır.
Gelir verisi bilerek alınmaz, çünkü repo herkese açık. Analytics verisi YouTube'da 2–3 gün gecikmeli oluşur.
Bir sorgu başarısız olursa hatası rapora yazılır, diğerleri sürer.
"""
import csv
import datetime as dt
import glob
import io
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
import youtube_api as YY  # noqa: E402
from googleapiclient.discovery import build  # noqa: E402
from googleapiclient.http import MediaIoBaseDownload  # noqa: E402

CIKTI = os.path.join(O.KOK, "analiz")
DENEME = 4                                  # 5xx/429 gibi geçici Google hatalarında artan beklemeyle tekrar
ERISIM_RAPORU = "channel_reach_basic_a1"   # Reporting API: gösterim + tıklama oranı (video, ülke, abone durumu)
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
        r = ya.reports().query(ids="channel==MINE", **k).execute(num_retries=DENEME)
        adlar = [h["name"] for h in r.get("columnHeaders", [])]
        return {"satirlar": [dict(zip(adlar, s)) for s in (r.get("rows") or [])]}
    except Exception as e:  # noqa: BLE001 — her sorgunun hatası rapora yazılır
        return {"hata": str(e)[:500]}


def gosterim(kimlik, ids, bas):
    """Gösterim ve tıklama oranı (Analytics API vermez): Reporting API'nin günlük 'channel_reach_basic_a1' raporları.
    İlk çalıştırmada rapor işi oluşturulur; YouTube ilk raporları birkaç gün içinde üretir."""
    try:
        yr = build("youtubereporting", "v1", credentials=kimlik, cache_discovery=False)
        isler = yr.jobs().list().execute(num_retries=DENEME).get("jobs", [])
        j = next((x for x in isler if x.get("reportTypeId") == ERISIM_RAPORU), None)
        if not j:
            yr.jobs().create(body={"reportTypeId": ERISIM_RAPORU, "name": "food-almanac-reach"}).execute()  # tekrar yok: çift iş açılmasın
            return {"durum": "rapor işi oluşturuldu; YouTube ilk raporları birkaç gün içinde üretir"}
        raporlar, sayfa = [], None
        while True:
            r = yr.jobs().reports().list(jobId=j["id"], pageToken=sayfa).execute(num_retries=DENEME)
            raporlar += r.get("reports", [])
            sayfa = r.get("nextPageToken")
            if not sayfa:
                break
        video, ulke, gunler = {}, {}, set()
        for rp in raporlar:
            if rp.get("startTime", "")[:10] < bas:
                continue
            istek = yr.media().download(resourceName=" ")
            istek.uri = rp["downloadUrl"]
            tampon = io.BytesIO()
            indir = MediaIoBaseDownload(tampon, istek, chunksize=-1)
            bitti = False
            while not bitti:
                _, bitti = indir.next_chunk(num_retries=DENEME)
            for satir in csv.DictReader(io.StringIO(tampon.getvalue().decode("utf-8"))):
                if satir.get("video_id") not in ids:
                    continue
                g = float(satir.get("video_thumbnail_impressions") or 0)
                o = float(satir.get("video_thumbnail_impressions_ctr") or 0)
                gunler.add(satir.get("date", ""))
                for anahtar, sozluk in ((satir["video_id"], video), (satir.get("country_code") or "?", ulke)):
                    t = sozluk.setdefault(anahtar, {"gosterim": 0.0, "tiklama": 0.0})
                    t["gosterim"] += g
                    t["tiklama"] += g * o
        ozet = lambda d: {k: {"gosterim": int(v["gosterim"]),  # noqa: E731
                              "tiklama_orani": round(v["tiklama"] / v["gosterim"], 4) if v["gosterim"] else None}
                          for k, v in sorted(d.items(), key=lambda kv: -kv[1]["gosterim"])}
        return {"rapor_sayisi": len(raporlar), "gunler": sorted(gunler), "video": ozet(video),
                "ulke": dict(list(ozet(ulke).items())[:25]),
                "not": "tiklama_orani, YouTube'un CSV'deki video_thumbnail_impressions_ctr birimiyle gösterim ağırlıklı ortalamadır"}
    except Exception as e:  # noqa: BLE001
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
        k = yt.channels().list(part="statistics", mine=True).execute(num_retries=DENEME)["items"][0]["statistics"]
        R["kanal"] = {x: k.get(x) for x in ("subscriberCount", "viewCount", "videoCount")}
        if vs:
            r = yt.videos().list(part="statistics", id=",".join(v["id"] for v in vs)).execute(num_retries=DENEME)
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
        R["izleyici_tutma"] = {v["id"]: sorgu(ya, metrics="audienceWatchRatio,relativeRetentionPerformance",
                                              dimensions="elapsedVideoTimeRatio", startDate=bas, endDate=bitis,
                                              filters=f"video=={v['id']}") for v in yayinda}

        R["gosterim"] = gosterim(kimlik, {v["id"] for v in vs}, bas)

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
