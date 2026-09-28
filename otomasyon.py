#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GitHub-native otomasyon (AI BAĞIMLILIĞI YOK).
senaryolar.json'daki hazır senaryolardan sıradakini alır -> video üretir ->
YouTube'a yükler -> sırayı ilerletir. Ayarlar: config.json
"""
import os, json, tempfile, io, sys, re, unicodedata, hashlib
import video as V

SENARYOLAR = "senaryolar.json"
DURUM = "durum.json"
LOG = io.StringIO()
LOCK = ".otomasyon.lock"

_KONU_STOP = {
    "NEDEN", "NASIL", "TUZAĞI", "TUZAK", "GİZLİ", "GERÇEK", "GERÇEKTE",
    "SENİ", "KADAR", "DAHA", "İLE", "BİR", "NEDİR", "VAR", "YOK", "İLAVE",
    "EDİLEN", "AYLIK", "GÜNDE", "GERÇEKTEN", "KİM", "HANGİ", "NELER",
    "ÖNÜNDE", "İÇİN", "OLAN", "OLUR", "GİDER", "MALİYET",
}

def _konu_kokleri(baslik):
    metin = re.sub(r"[^0-9A-Za-zÇĞİÖŞÜçğıöşü ]", " ", (baslik or "").upper())
    return {kelime[:4] for kelime in metin.split()
            if len(kelime) >= 4 and kelime not in _KONU_STOP}

def _konu_tekrari(baslik, kullanilan_basliklar):
    kokler = _konu_kokleri(baslik)
    if len(kokler) < 2:
        return None
    for eski in kullanilan_basliklar or []:
        if eski and len(kokler & _konu_kokleri(eski)) >= 2:
            return eski
    return None

def _kilit_al():
    try:
        fd = os.open(LOCK, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(str(os.getpid()))
        return True
    except FileExistsError:
        try:
            with open(LOCK, encoding="utf-8") as f:
                pid = int(f.read().strip())
            os.kill(pid, 0)
        except (FileNotFoundError, ProcessLookupError, ValueError, PermissionError):
            try:
                os.unlink(LOCK)
            except FileNotFoundError:
                pass
            return _kilit_al()
        return False

def _kilit_birak():
    try:
        os.unlink(LOCK)
    except FileNotFoundError:
        pass

def _senaryolar():
    with open(SENARYOLAR, encoding="utf-8-sig") as f:
        return json.load(f)

def _durum():
    if os.path.exists(DURUM):
        with open(DURUM, encoding="utf-8-sig") as f:
            return json.load(f)
    return {"yapilan": []}

def _durum_yaz(durum):
    durum["son_rapor"] = LOG.getvalue()[-1800:]
    with open(DURUM, "w", encoding="utf-8") as f:
        json.dump(durum, f, ensure_ascii=False, indent=2)

def _sonraki_yayin_zamani(cfg):
    """Config'teki en yakın uygun UTC slotunu ISO-8601 olarak döndürür.

    GitHub Actions kuyruk gecikmelerine dayanıklı:
    - Slot henüz gelmemişse → o slotu kullan (publishAt).
    - Slot geçmiş ama TOLERANS (4 saat) içindeyse → anında public (None döner).
    - Slot + tolerans tamamen geçmişse → bir sonraki güne kaydır.
    Böylece akşam cron'u 1-2 saat gecikse bile 20:00 TR slotu kaçırılmaz;
    çok geç kalırsa video hemen yayınlanır, yarına atılmaz.
    """
    from datetime import datetime, timezone, timedelta
    saatler = cfg.get("yayin_saatleri_utc")
    if not saatler:
        tek = cfg.get("yayin_saati_utc")
        saatler = [tek] if tek else []
    adaylar = []
    now = datetime.now(timezone.utc)
    TOLERANS = timedelta(hours=4)
    for saat in saatler:
        try:
            hh, mm = map(int, str(saat).split(":"))
        except Exception:
            continue
        h = now.replace(hour=hh, minute=mm, second=0, microsecond=0)
        if h + TOLERANS < now:
            h += timedelta(days=1)
            adaylar.append(h)
        elif h > now:
            adaylar.append(h)
    if not adaylar:
        return None
    return min(adaylar).strftime("%Y-%m-%dT%H:%M:%SZ")

print("WARNING: otomasyon.py is in a temporary state. Restore full version from commit e89d47821d7e3936ba344bbf0811c288694de0a7 and re-apply the _sonraki_yayin_zamani change.")
