#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Reels kuyruğuna giren Shorts videosunu X'e (Twitter) yükler ve paylaşır.

  python3 uzun_en/araclar/x.py --gonder GUID [--dizin /tmp/medya] [--kuru]
  python3 uzun_en/araclar/x.py --durum                                       # anahtarları ve hesabı doğrula

Gerekli GitHub Secrets (Read and Write izinli X Developer uygulaması, OAuth 1.0a User Token):
  X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
Ek kütüphane gerektirmez (yalnızca Python standart kütüphanesi).
"""
import argparse, base64, hashlib, hmac, json, os, secrets, sys, time, urllib.error, urllib.parse, urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402
import meta as M   # noqa: E402

UPLOAD_URL = "https://upload.twitter.com/1.1/media/upload.json"
TWEET_URL = "https://api.twitter.com/2/tweets"
ME_URL = "https://api.twitter.com/2/users/me"
KAYIT = os.path.join(O.KOK, "reels.json")
PARCA_BOYUT = 4 * 1024 * 1024  # 4 MB


def _pct(s):
    return urllib.parse.quote(str(s), safe="")


def _anahtarlar():
    k = [os.environ.get(x, "").strip() for x in ("X_API_KEY", "X_API_SECRET", "X_ACCESS_TOKEN", "X_ACCESS_SECRET")]
    if not all(k):
        raise SystemExit("X gizli ayarları (X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET) eksik")
    return k


def _oauth_baslik(yontem, url, imza_param=None):
    ck, cs, at, ats = _anahtarlar()
    u = urllib.parse.urlsplit(url)
    temel_url = f"{u.scheme}://{u.netloc}{u.path}"
    oauth = {
        "oauth_consumer_key": ck,
        "oauth_nonce": secrets.token_hex(16),
        "oauth_signature_method": "HMAC-SHA1",
        "oauth_timestamp": str(int(time.time())),
        "oauth_token": at,
        "oauth_version": "1.0",
    }
    tum = {**oauth, **(imza_param or {})}
    for k, v in urllib.parse.parse_qsl(u.query, keep_blank_values=True):
        tum[k] = v
    sirali = "&".join(f"{_pct(k)}={_pct(tum[k])}" for k in sorted(tum))
    taban = f"{yontem.upper()}&{_pct(temel_url)}&{_pct(sirali)}"
    anahtar = f"{_pct(cs)}&{_pct(ats)}".encode()
    oauth["oauth_signature"] = base64.b64encode(hmac.new(anahtar, taban.encode(), hashlib.sha1).digest()).decode()
    return "OAuth " + ", ".join(f'{_pct(k)}="{_pct(oauth[k])}"' for k in sorted(oauth))


def _istek(yontem, url, form=None, json_veri=None, multipart=None, zaman_asimi=120):
    basliklar = {"Authorization": _oauth_baslik(yontem, url, form)}
    govde = None
    if form is not None:
        govde = urllib.parse.urlencode(form).encode()
        basliklar["Content-Type"] = "application/x-www-form-urlencoded"
    elif json_veri is not None:
        govde = json.dumps(json_veri).encode()
        basliklar["Content-Type"] = "application/json; charset=UTF-8"
    elif multipart is not None:
        sinir, govde = multipart
        basliklar["Content-Type"] = f"multipart/form-data; boundary={sinir}"
    r = urllib.request.Request(url, data=govde, headers=basliklar, method=yontem.upper())
    try:
        with urllib.request.urlopen(r, timeout=zaman_asimi) as y:
            ham = y.read()
            return json.loads(ham) if ham else {}
    except urllib.error.HTTPError as e:
        hata = e.read().decode(errors="replace")[:400]
        raise SystemExit(f"X API {url}: HTTP {e.code} {hata}")


def _multipart_yap(alanlar, dosya_bayt):
    sinir = "----FoodAlmanac" + secrets.token_hex(12)
    parcalar = []
    for k, v in alanlar.items():
        parcalar.append(f"--{sinir}\r\nContent-Disposition: form-data; name=\"{k}\"\r\n\r\n{v}\r\n".encode())
    parcalar.append(
        f"--{sinir}\r\nContent-Disposition: form-data; name=\"media\"; filename=\"video.mp4\"\r\n"
        f"Content-Type: video/mp4\r\n\r\n".encode() + dosya_bayt + f"\r\n--{sinir}--\r\n".encode()
    )
    return sinir, b"".join(parcalar)


def video_yukle(yol):
    boyut = os.path.getsize(yol)
    init = _istek("POST", UPLOAD_URL, form={
        "command": "INIT",
        "total_bytes": str(boyut),
        "media_type": "video/mp4",
        "media_category": "tweet_video",
    })
    mid = init["media_id_string"]
    with open(yol, "rb") as f:
        i = 0
        while True:
            parca = f.read(PARCA_BOYUT)
            if not parca:
                break
            mp = _multipart_yap({"command": "APPEND", "media_id": mid, "segment_index": str(i)}, parca)
            _istek("POST", UPLOAD_URL, multipart=mp, zaman_asimi=300)
            i += 1
    fin = _istek("POST", UPLOAD_URL, form={"command": "FINALIZE", "media_id": mid})
    bilgi = fin.get("processing_info")
    while bilgi and bilgi.get("state") in ("pending", "in_progress"):
        bekle = min(30, max(2, int(bilgi.get("check_after_secs", 5))))
        time.sleep(bekle)
        st = _istek("GET", f"{UPLOAD_URL}?command=STATUS&media_id={mid}")
        bilgi = st.get("processing_info")
    if bilgi and bilgi.get("state") == "failed":
        raise SystemExit(f"X video işleme hatası: {bilgi.get('error')}")
    return mid


def metin_hazirla(r):
    """280 karakter sınırına uygun X paylaşım metni (başlık + özet + uzun video bağlantısı + 2 etiket)."""
    p = O.proje(r["proje"]) or {}
    no = r.get("no", 1)
    ad = "kisa" if no == 1 else f"kisa_{no}"
    tanim = O.json_oku(os.path.join(O.proje_dir(r["proje"]), f"{ad}.json"), {}) or {}
    baslik = (r.get("baslik") or tanim.get("baslik_yt") or p.get("baslik") or "").strip()
    ozet = (tanim.get("aciklama") or "").strip()
    baglanti = r.get("uzun_url") or ""
    etiket = M.hashtag(["FoodScience"] + [e for e in p.get("etiketler", []) if len(e.split()) <= 2], n=2)
    alt = "\n\n".join(x for x in [f"Full study breakdown: {baglanti}" if baglanti else "", etiket] if x)
    # X'te her URL 23 karakter sayılır; güvenli sınır 265 karakter
    kalan = 265 - len(alt) - len(baslik) - 4
    if ozet and kalan > 30:
        if len(ozet) > kalan:
            ozet = ozet[:kalan - 1].rsplit(" ", 1)[0].rstrip(".,;:") + "…"
        ust = f"{baslik}\n\n{ozet}"
    else:
        ust = baslik
    return f"{ust}\n\n{alt}".strip()[:280]


def durum():
    y = _istek("GET", ME_URL).get("data", {})
    O.log(f"X hesabı bağlı: @{y.get('username')} ({y.get('name')})")


def gonder(guid, dizin, kuru=False):
    k = O.json_oku(KAYIT, {}) or {}
    r = next((x for x in k.get("reels", []) if x["guid"] == guid), None)
    if not r:
        raise SystemExit(f"reels.json'da {guid} yok")
    metin = metin_hazirla(r)
    if kuru:
        print(metin)
        return O.log(f"(kuru çalışma) uzunluk: {len(metin)} karakter")
    yol = os.path.join(dizin, r["dosya"])
    if not os.path.exists(yol):
        raise SystemExit(f"video dosyası yok: {yol}")
    mid = video_yukle(yol)
    yanit = _istek("POST", TWEET_URL, json_veri={"text": metin, "media": {"media_ids": [mid]}})
    tid = (yanit.get("data") or {}).get("id", "?")
    O.log(f"✓ X: {guid} paylaşıldı (https://x.com/i/web/status/{tid})")
    print(f"::notice title=X::{guid} paylaşıldı: https://x.com/i/web/status/{tid}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gonder", help="reels.json içindeki guid (ör. garlic-blood-pressure-1)")
    ap.add_argument("--dizin", default="/tmp/medya")
    ap.add_argument("--durum", action="store_true")
    ap.add_argument("--kuru", action="store_true")
    a = ap.parse_args()
    if a.durum:
        durum()
    elif a.gonder:
        gonder(a.gonder, a.dizin, a.kuru)
    else:
        ap.error("--gonder ya da --durum gerekli")


if __name__ == "__main__":
    main()
