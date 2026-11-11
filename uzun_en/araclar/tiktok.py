#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""TikTok'a video gönderir (Content Posting API). Reels kuyruğuna giren video, reels.yml'den buraya gelir.

  python3 uzun_en/araclar/tiktok.py --baglan KOD     # ilk bağlantı: yetki kodunu tokena çevir, şifreli sakla
  python3 uzun_en/araclar/tiktok.py --gonder GUID    # reels.json'daki öğeyi (MEDYA/GUID.mp4) TikTok'a gönder
  python3 uzun_en/araclar/tiktok.py --durum          # bağlantı ve hesap bilgisi (gizlilik seçenekleri)

Gerekli: TIKTOK_CLIENT_KEY, TIKTOK_CLIENT_SECRET (GitHub gizli ayarları), KEK (token şifresi; Actions'ta mevcut bir
gizli ayar), GH_TOKEN. Tokenlar herkese açık depoda yalnızca şifreli durur: "tiktok" ön-sürümünde tiktok_token.enc
(AES-256, KEK ile). Erişim tokenı 24 saatte biter; her çalıştırma yenileme tokenıyla yenisini alır ve dosyayı günceller.

Mod (marka.json "tiktok_mod"):
  "gizli"  (varsayılan) Direct Post, privacy_level SELF_ONLY: video yalnızca hesap sahibine görünür; kanal sahibi
           uygulamadan herkese açar. TikTok incelemesinden geçmemiş uygulamalar zaten yalnızca gizli paylaşabilir.
  "taslak" Videoyu hesabın gelen kutusuna taslak olarak yollar; kanal sahibi düzenleyip kendisi paylaşır.
"""
import argparse, json, os, subprocess, sys, tempfile, time, urllib.error, urllib.parse, urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

API = "https://open.tiktokapis.com"
YONLENDIRME = "https://github.com/fahrimert99-cmd/the-food-almanac"      # TikTok uygulamasında kayıtlı redirect URI
SURUM = "tiktok"
DOSYA = "tiktok_token.enc"
KAYIT = os.path.join(O.KOK, "reels.json")


def istek(yol, veri=None, token=None, form=False, yontem="POST"):
    basliklar = {}
    if token:
        basliklar["Authorization"] = f"Bearer {token}"
    if form:
        govde = urllib.parse.urlencode(veri).encode()
        basliklar["Content-Type"] = "application/x-www-form-urlencoded"
    else:
        govde = json.dumps(veri or {}).encode()
        basliklar["Content-Type"] = "application/json; charset=UTF-8"
    r = urllib.request.Request(API + yol, data=govde, headers=basliklar, method=yontem)
    try:
        with urllib.request.urlopen(r, timeout=120) as y:
            return json.loads(y.read())
    except urllib.error.HTTPError as e:
        govde = e.read().decode(errors="replace")[:400]
        raise SystemExit(f"TikTok {yol}: HTTP {e.code} {govde}")


def _kek():
    k = os.environ.get("KEK")
    if not k:
        raise SystemExit("KEK yok (token şifresi)")
    return k


def token_yaz(t):
    with tempfile.TemporaryDirectory() as d:
        acik, enc = os.path.join(d, "t.json"), os.path.join(d, DOSYA)
        with open(acik, "w") as f:
            json.dump(t, f)
        subprocess.run(["openssl", "enc", "-aes-256-cbc", "-pbkdf2", "-iter", "200000", "-salt", "-in", acik,
                        "-out", enc, "-pass", "env:KEK"], check=True, env={**os.environ, "KEK": _kek()})
        if subprocess.run(["gh", "release", "view", SURUM], capture_output=True).returncode != 0:
            O.gh("release", "create", SURUM, "--prerelease", "--target", "main", "--title", "TikTok bağlantısı (şifreli)",
                 "--notes", "TikTok erişim tokenı, AES-256 ile şifreli (otomatik). Açık metin token içermez.")
        O.gh("release", "upload", SURUM, enc, "--clobber")


def token_oku():
    with tempfile.TemporaryDirectory() as d:
        r = subprocess.run(["gh", "release", "download", SURUM, "-D", d, "-p", DOSYA], capture_output=True, text=True)
        if r.returncode != 0:
            raise SystemExit("TikTok bağlı değil: önce tiktok_baglan.yml ile yetki kodu verin")
        acik = subprocess.run(["openssl", "enc", "-d", "-aes-256-cbc", "-pbkdf2", "-iter", "200000",
                               "-in", os.path.join(d, DOSYA), "-pass", "env:KEK"], capture_output=True, check=True,
                              env={**os.environ, "KEK": _kek()}).stdout
    return json.loads(acik)


def _anahtar():
    ck, cs = os.environ.get("TIKTOK_CLIENT_KEY"), os.environ.get("TIKTOK_CLIENT_SECRET")
    if not (ck and cs):
        raise SystemExit("TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET gizli ayarları yok")
    return ck, cs


def _sakla(y):
    if "access_token" not in y:
        raise SystemExit(f"TikTok token alınamadı: {y.get('error') or ''} {y.get('error_description') or ''}")
    t = {k: y[k] for k in ("access_token", "refresh_token", "open_id", "scope") if k in y}
    t["alindi"] = int(time.time())
    token_yaz(t)
    return t


def baglan(kod):
    ck, cs = _anahtar()
    y = istek("/v2/oauth/token/", {"client_key": ck, "client_secret": cs, "code": kod,
                                   "grant_type": "authorization_code", "redirect_uri": YONLENDIRME}, form=True)
    t = _sakla(y)
    O.log(f"TikTok bağlandı (izinler: {t.get('scope')})")


def erisim():
    """Geçerli erişim tokenı: her çalıştırmada yenileme tokenıyla yenilenir (yeni yenileme tokenı da saklanır)."""
    ck, cs = _anahtar()
    t = token_oku()
    y = istek("/v2/oauth/token/", {"client_key": ck, "client_secret": cs, "grant_type": "refresh_token",
                                   "refresh_token": t["refresh_token"]}, form=True)
    return _sakla(y)["access_token"]


def durum():
    tok = erisim()
    c = istek("/v2/post/publish/creator_info/query/", {}, token=tok).get("data", {})
    O.log(f"TikTok hesabı: @{c.get('creator_username')} — gizlilik seçenekleri: {c.get('privacy_level_options')}, "
          f"en uzun video {c.get('max_video_post_duration_sec')} sn")
    return tok, c


def gonder(guid, dizin):
    k = O.json_oku(KAYIT, {}) or {}
    r = next((x for x in k.get("reels", []) if x["guid"] == guid), None)
    if not r:
        raise SystemExit(f"reels.json'da {guid} yok")
    yol = os.path.join(dizin, r["dosya"])
    boyut = os.path.getsize(yol)
    mod = O.marka().get("tiktok_mod", "gizli")
    tok, c = durum()
    kaynak = {"source": "FILE_UPLOAD", "video_size": boyut, "chunk_size": boyut, "total_chunk_count": 1}
    if mod == "taslak":
        y = istek("/v2/post/publish/inbox/video/init/", {"source_info": kaynak}, token=tok)
    else:
        secenek = c.get("privacy_level_options") or []
        gizlilik = "SELF_ONLY" if "SELF_ONLY" in secenek or not secenek else secenek[0]
        aciklama = (r["aciklama"] + "\n\nFull video on YouTube: search “The Food Almanac”.")[:2200]
        y = istek("/v2/post/publish/video/init/", {
            "post_info": {"title": aciklama, "privacy_level": gizlilik, "disable_comment": False,
                          "disable_duet": False, "disable_stitch": False, "video_cover_timestamp_ms": 300},
            "source_info": kaynak}, token=tok)
    d = y.get("data") or {}
    if not d.get("upload_url"):
        raise SystemExit(f"TikTok init başarısız: {y.get('error')}")
    with open(yol, "rb") as f:
        veri = f.read()
    put = urllib.request.Request(d["upload_url"], data=veri, method="PUT",
                                 headers={"Content-Type": "video/mp4", "Content-Length": str(boyut),
                                          "Content-Range": f"bytes 0-{boyut - 1}/{boyut}"})
    with urllib.request.urlopen(put, timeout=600) as _:
        pass
    sonuc = "?"
    for _ in range(30):                      # işlenmesini bekle (en çok ~5 dk)
        time.sleep(10)
        s = istek("/v2/post/publish/status/fetch/", {"publish_id": d["publish_id"]}, token=tok).get("data", {})
        sonuc = s.get("status", "?")
        if sonuc in ("PUBLISH_COMPLETE", "SEND_TO_USER_INBOX", "FAILED"):
            break
    if sonuc == "FAILED":
        raise SystemExit(f"TikTok yayını başarısız: {s.get('fail_reason')}")
    O.log(f"TikTok: {guid} gönderildi ({mod}, durum {sonuc})")
    print(f"::notice title=TikTok::{guid} {'gizli paylaşıldı — uygulamadan herkese açın' if mod != 'taslak' else 'gelen kutusuna taslak olarak gitti'} ({sonuc})")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--baglan")
    ap.add_argument("--gonder")
    ap.add_argument("--dizin", default="/tmp/medya")
    ap.add_argument("--durum", action="store_true")
    a = ap.parse_args()
    if a.baglan:
        baglan(a.baglan.strip())
    elif a.gonder:
        gonder(a.gonder, a.dizin)
    elif a.durum:
        durum()
    else:
        ap.error("--baglan, --gonder ya da --durum")


if __name__ == "__main__":
    main()
