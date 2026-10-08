#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kanal dönüşümü (tek seferlik): açıklama, anahtar kelimeler, dil, banner; eski Türkçe videoları gizleme.

  python3 uzun_en/araclar/kanal.py durum                 # kanal adı, handle, video sayısı (yalnızca okur)
  python3 uzun_en/araclar/kanal.py donustur [--gizle]    # marka.json'a göre kanalı düzenle (+ eski videoları gizle)
  python3 uzun_en/araclar/kanal.py gizle                 # kalan eski videoları gizlemeye devam et (günlük kota payı)
  python3 uzun_en/araclar/kanal.py geri_al               # gizlenen videoları/listeleri eski durumuna döndür
  python3 uzun_en/araclar/kanal.py sil                   # gizlenen eski videoları ve listeleri KALICI olarak sil
  python3 uzun_en/araclar/kanal.py gunluk                # zamanlanmış: yarım kalan gizleme/silme işini sürdür
  ... --kuru                                             # hiçbir şeyi değiştirmeden ne yapılacağını yazdır

Kota: video başına 50 birim. Yükleme kotasına yer kalsın diye bir çalıştırmada en çok --azami (70) video gizlenir;
kalanlar sonraki günlerde 'gizle' ile tamamlanır (iş akışı her sabah kendisi çalıştırır, bitince durur).
Gizleme SİLMEZ: eski videolar ve oynatma listeleri 'private' yapılır, önceki durumları uzun_en/kanal_gizlenen.json'a
yazılır; 'geri_al' hepsini eski haline getirir. Uzun videolar (durum.json'daki) gizlenmez.
API kanal adını ve profil fotoğrafını değiştirmeye izin vermez: bunlar YouTube Studio'dan elle yapılır
(assets/marka_en/avatar.png). Kanal adı için yine de bir deneme yapılır; olmazsa rapora yazılır.
"""
import argparse, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

KAYIT = os.path.join(O.KOK, "kanal_gizlenen.json")
STATUS_ALANLARI = ("embeddable", "license", "privacyStatus", "publicStatsViewable", "publishAt",
                   "selfDeclaredMadeForKids", "containsSyntheticMedia")


def yt_al():
    from googleapiclient.discovery import build
    import youtube_api as YY
    return build("youtube", "v3", credentials=YY._kimlik(), cache_discovery=False)


def kanal(yt):
    return yt.channels().list(part="snippet,brandingSettings,statistics,contentDetails", mine=True).execute()["items"][0]


def tum_videolar(yt, up):
    ids, tok = [], None
    while True:
        r = yt.playlistItems().list(part="contentDetails", playlistId=up, maxResults=50, pageToken=tok).execute()
        ids += [it["contentDetails"]["videoId"] for it in r.get("items", [])]
        tok = r.get("nextPageToken")
        if not tok:
            return ids


def durum_yaz(yt):
    k = kanal(yt)
    st = k.get("statistics", {})
    O.log(f"kanal: {k['snippet']['title']} ({k['snippet'].get('customUrl', '-')}) id={k['id']}")
    O.log(f"abone {st.get('subscriberCount')}, video {st.get('videoCount')}, izlenme {st.get('viewCount')}")
    return k


def donustur(yt, gizle, kuru, azami=70, banner=True):
    m = O.marka()
    k = durum_yaz(yt)
    rapor = []
    bs = k.get("brandingSettings", {})
    ch = dict(bs.get("channel", {}))
    ch["description"] = m["kanal_aciklama"]
    ch["keywords"] = " ".join(f'"{x}"' if " " in x else x for x in m.get("anahtar_kelimeler", []))[:500]
    ch["defaultLanguage"] = m.get("dil", "en")
    ch.pop("title", None)
    yeni = {"id": k["id"], "brandingSettings": {"channel": ch}}
    if bs.get("image"):
        yeni["brandingSettings"]["image"] = dict(bs["image"])
    banner_yol = os.path.join(O.REPO, "assets", "marka_en", "banner.jpg")
    if kuru:
        O.log(f"(kuru) açıklama + {len(m.get('anahtar_kelimeler', []))} anahtar kelime" + (f" + banner ({banner_yol})" if banner else "")
              + " yazılacaktı")
    else:
        from googleapiclient.http import MediaFileUpload
        if not banner:
            rapor.append("banner atlandı (Studio'dan elle ayarlandı)")
        else:
            try:
                r = yt.channelBanners().insert(media_body=MediaFileUpload(banner_yol, mimetype="image/jpeg")).execute()
                yeni["brandingSettings"].setdefault("image", {})["bannerExternalUrl"] = r["url"]
                rapor.append("banner yüklendi")
            except Exception as e:
                rapor.append(f"banner YÜKLENEMEDİ: {str(e)[:200]}")
        yt.channels().update(part="brandingSettings", body=yeni).execute()
        rapor.append("açıklama, anahtar kelimeler ve dil güncellendi")
        try:                                           # kanal adı: API çoğu kanalda izin vermez
            ch2 = dict(ch, title=m["ad"])
            yt.channels().update(part="brandingSettings", body={"id": k["id"], "brandingSettings": dict(
                yeni["brandingSettings"], channel=ch2)}).execute()
            yeni_ad = kanal(yt)["snippet"]["title"]
            rapor.append(f"kanal adı: {yeni_ad}" + ("" if yeni_ad == m["ad"] else " (API değiştirmedi — Studio'dan elle)"))
        except Exception as e:
            rapor.append(f"kanal adı API ile değişmedi ({str(e)[:120]}) — Studio'dan elle değiştirin")
    if gizle:
        rapor += gizle_eski(yt, k, kuru, azami)
    for x in rapor:
        O.log("• " + x)
    return rapor


def gizle_eski(yt, k, kuru, azami=70):
    up = k["contentDetails"]["relatedPlaylists"]["uploads"]
    ids = tum_videolar(yt, up)
    korunan = {v.get("video_id") for v in (O.json_oku(os.path.join(O.proje_dir(s), "yayin.json"), {}) or {}
                                           for s in O.durum()["videolar"])}
    basliklar = {(O.proje(s) or {}).get("baslik", "").strip() for s in O.durum()["videolar"]} - {""}
    kayit = O.json_oku(KAYIT, {"videolar": {}, "listeler": {}}) or {"videolar": {}, "listeler": {}}
    gizlenen, kalan = 0, 0
    for i in range(0, len(ids), 50):
        r = yt.videos().list(part="status,snippet", id=",".join(ids[i:i + 50])).execute()
        for v in r.get("items", []):
            st = v["status"]
            if (v["id"] in korunan or v["snippet"]["title"].strip() in basliklar or
                    (st.get("privacyStatus") == "private" and not st.get("publishAt"))):
                continue
            if gizlenen >= azami:
                kalan += 1
                continue
            eski = {a: st[a] for a in STATUS_ALANLARI if a in st}
            if kuru:
                gizlenen += 1
                continue
            yeni = {a: st[a] for a in STATUS_ALANLARI if a in st and a != "publishAt"}
            yeni["privacyStatus"] = "private"
            try:
                yt.videos().update(part="status", body={"id": v["id"], "status": yeni}).execute()
                kayit["videolar"][v["id"]] = {"baslik": v["snippet"]["title"], "status": eski}
                gizlenen += 1
            except Exception as e:
                O.log(f"! {v['id']} gizlenemedi: {str(e)[:120]}")
                if "quota" in str(e).lower():
                    break
        if not kuru:
            O.json_yaz(KAYIT, kayit)
    listeler = 0
    tok = None
    while True:
        r = yt.playlists().list(part="snippet,status", mine=True, maxResults=50, pageToken=tok).execute()
        for pl in r.get("items", []):
            if pl["snippet"]["title"] == O.marka().get("oynatma_listesi") or pl["status"]["privacyStatus"] == "private":
                continue
            if not kuru:
                try:
                    yt.playlists().update(part="snippet,status", body={"id": pl["id"], "snippet": {
                        "title": pl["snippet"]["title"], "description": pl["snippet"].get("description", "")},
                        "status": {"privacyStatus": "private"}}).execute()
                    kayit["listeler"][pl["id"]] = {"baslik": pl["snippet"]["title"], "privacyStatus": pl["status"]["privacyStatus"],
                                                   "aciklama": pl["snippet"].get("description", "")}
                except Exception as e:
                    O.log(f"! liste {pl['id']} gizlenemedi: {str(e)[:120]}")
                    continue
            listeler += 1
        tok = r.get("nextPageToken")
        if not tok:
            break
    if not kuru:
        kayit["tamam"] = kalan == 0
        O.json_yaz(KAYIT, kayit)
    return [f"{'(kuru) ' if kuru else ''}{gizlenen} eski video ve {listeler} oynatma listesi gizlendi (private; silinmedi)"
            + (f"; {kalan} video sonraki günlere kaldı (kota payı)" if kalan else "")]


def geri_al(yt, kuru):
    kayit = O.json_oku(KAYIT, {}) or {}
    n = 0
    for vid, x in list(kayit.get("videolar", {}).items()):
        st = dict(x["status"])
        if st.get("publishAt"):                         # geçmişte kalan yayın zamanı -> doğrudan eski görünürlük
            st.pop("publishAt")
            st["privacyStatus"] = "public"
        if not kuru:
            try:
                yt.videos().update(part="status", body={"id": vid, "status": st}).execute()
                kayit["videolar"].pop(vid)
            except Exception as e:
                O.log(f"! {vid}: {str(e)[:120]}")
                continue
        n += 1
    for pid, x in list(kayit.get("listeler", {}).items()):
        if not kuru:
            try:
                yt.playlists().update(part="snippet,status", body={"id": pid, "snippet": {"title": x["baslik"],
                    "description": x.get("aciklama", "")}, "status": {"privacyStatus": x["privacyStatus"]}}).execute()
                kayit["listeler"].pop(pid)
            except Exception as e:
                O.log(f"! liste {pid}: {str(e)[:120]}")
    if not kuru:
        kayit["tamam"] = True                          # günlük gizleme devamı durur
        O.json_yaz(KAYIT, kayit)
    O.log(f"geri alındı: {n} video")


def _kota_mi(e):
    m = str(e).lower()
    return "quotaexceeded" in m or "quota" in m and "exceed" in m


def sil(yt, kuru, azami=150):
    """Gizlenen (kanal_gizlenen.json) eski videoları ve listeleri kalıcı olarak siler. GERİ ALINAMAZ.
    Güvenlik: yalnızca hâlâ private olan videolar silinir (elle yeniden açılmış olan atlanır); uzun_en videolarına
    dokunulmaz. Kota biterse kalanlar ertesi gün 'gunluk' ile silinir (video başına 50 birim)."""
    kayit = O.json_oku(KAYIT, {}) or {}
    kayit["sil_istendi"] = True
    silinen = kayit.setdefault("silinen", {})
    korunan = {(O.json_oku(os.path.join(O.proje_dir(s), "yayin.json"), {}) or {}).get("video_id")
               for s in O.durum()["videolar"]}
    ids = [v for v in kayit.get("videolar", {}) if v not in korunan][:azami]
    durumlar = {}
    for i in range(0, len(ids), 50):
        r = yt.videos().list(part="status", id=",".join(ids[i:i + 50])).execute()
        durumlar.update({v["id"]: v["status"].get("privacyStatus") for v in r.get("items", [])})
    n = atlanan = 0
    kota = False
    for vid in ids:
        if vid not in durumlar:                         # zaten silinmiş
            silinen[vid] = kayit["videolar"].pop(vid)["baslik"]
            continue
        if durumlar[vid] != "private":                  # elle yeniden açılmış: dokunma
            atlanan += 1
            continue
        if kuru:
            n += 1
            continue
        try:
            yt.videos().delete(id=vid).execute()
        except Exception as e:
            if _kota_mi(e):
                kota = True
                break
            O.log(f"! {vid} silinemedi: {str(e)[:120]}")
            continue
        silinen[vid] = kayit["videolar"].pop(vid)["baslik"]
        n += 1
        if n % 10 == 0:
            O.json_yaz(KAYIT, kayit)
    liste = 0
    if not kota:
        for pid, x in list(kayit.get("listeler", {}).items()):
            if kuru:
                liste += 1
                continue
            try:
                yt.playlists().delete(id=pid).execute()
            except Exception as e:
                if _kota_mi(e):
                    kota = True
                    break
                if "notfound" not in str(e).lower().replace(" ", ""):
                    O.log(f"! liste {pid} silinemedi: {str(e)[:120]}")
                    continue
            silinen[pid] = kayit["listeler"].pop(pid)["baslik"]
            liste += 1
    kalan = len(kayit.get("videolar", {})) - atlanan + len(kayit.get("listeler", {}))
    if not kuru:
        kayit["sil_tamam"] = kalan <= 0
        O.json_yaz(KAYIT, kayit)
    rapor = (f"{'(kuru) ' if kuru else ''}{n} eski video ve {liste} oynatma listesi KALICI olarak silindi"
             + (f"; {atlanan} video elle yeniden açıldığı için atlandı" if atlanan else "")
             + (f"; kota doldu, kalan {kalan} öğe yarın silinecek" if kota or kalan > 0 else ""))
    O.log("• " + rapor)
    with open(os.path.join(O.KOK, "kanal_rapor.md"), "w", encoding="utf-8") as f:
        f.write(f"# Eski videoların silinmesi\n\n- {rapor}\n")
    return rapor


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("islem", choices=["durum", "donustur", "gizle", "geri_al", "sil", "gunluk"])
    ap.add_argument("--azami", type=int, default=70, help="bu çalıştırmada en çok kaç video gizlensin")
    ap.add_argument("--bannersiz", action="store_true", help="banner'ı yükleme (Studio'dan elle ayarlandıysa)")
    ap.add_argument("--gizle", action="store_true", help="eski videoları ve listeleri private yap")
    ap.add_argument("--kuru", action="store_true")
    a = ap.parse_args()
    yt = yt_al()
    if a.islem == "durum":
        durum_yaz(yt)
    elif a.islem == "gizle":
        if (O.json_oku(KAYIT, {}) or {}).get("tamam", True):
            return O.log("gizlenecek eski video kalmadı (ya da dönüşüm hiç başlatılmadı)")
        for x in gizle_eski(yt, kanal(yt), a.kuru, a.azami):
            O.log("• " + x)
    elif a.islem == "donustur":
        rapor = donustur(yt, a.gizle, a.kuru, a.azami, banner=not a.bannersiz)
        with open(os.path.join(O.KOK, "kanal_rapor.md"), "w", encoding="utf-8") as f:
            f.write("# Kanal dönüşümü\n\n" + "\n".join(f"- {x}" for x in rapor) + "\n\n"
                    "Elle yapılacaklar (YouTube Studio → Özelleştirme): kanal adı **" + O.marka()["ad"] + "**, herkese açık kullanıcı adı **"
                    + O.marka().get("handle", "") + "**, profil fotoğrafı `assets/marka_en/avatar.png`.\n")
    elif a.islem == "sil":
        sil(yt, a.kuru)
    elif a.islem == "gunluk":                           # zamanlanmış: yarım kalan iş varsa sürdür
        k = O.json_oku(KAYIT, {}) or {}
        if k.get("sil_istendi") and not k.get("sil_tamam"):
            sil(yt, a.kuru)
        elif not k.get("tamam", True):
            for x in gizle_eski(yt, kanal(yt), a.kuru, a.azami):
                O.log("• " + x)
        else:
            O.log("yapılacak iş yok")
    else:
        geri_al(yt, a.kuru)


if __name__ == "__main__":
    main()
