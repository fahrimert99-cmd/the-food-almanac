#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""İngilizce uzun video hattının ortak yolları ve yardımcıları."""
import json, math, os, re, subprocess, wave

ARACLAR = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(ARACLAR)                 # uzun_en/
REPO = os.path.dirname(KOK)
REMOTION = os.path.join(KOK, "remotion")
PROJELER = os.path.join(KOK, "projeler")
DURUM = os.path.join(KOK, "durum.json")


# Tasarlanmamış sahne dosyası (otomatik şablon). numpy gerektirmeyen yerlerde de kullanılır (plan.py).
TASLAK = ('// TASLAK: henüz tasarlanmadı — otomatik şablon (Genel) kullanılır.\n'
          'import { Genel } from "../kutuphane";\n\nexport default Genel;\n')
TASLAK_RE = re.compile(r"export\s+default\s+Genel\s*;")


def taslak_mi(yol):
    try:
        with open(yol, encoding="utf-8") as f:
            return bool(TASLAK_RE.search(f.read()))
    except OSError:
        return True


def log(m):
    print(m, flush=True)


def json_oku(yol, varsayilan=None):
    try:
        with open(yol, encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return varsayilan


def json_yaz(yol, veri):
    os.makedirs(os.path.dirname(yol), exist_ok=True)
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(veri, f, ensure_ascii=False, indent=2)
        f.write("\n")


def marka():
    return json_oku(os.path.join(KOK, "marka.json"), {})


def durum():
    d = json_oku(DURUM, {}) or {}
    d.setdefault("videolar", {})
    return d


def durum_yaz(d):
    json_yaz(DURUM, d)


def proje_dir(slug):
    return os.path.join(PROJELER, slug)


def proje(slug):
    return json_oku(os.path.join(proje_dir(slug), "proje.json"))


def aktif_slug(arg=None):
    """--proje verilmediyse durum.json'daki aktif proje."""
    if arg:
        return arg
    s = durum().get("aktif")
    if not s:
        raise SystemExit("aktif proje yok (durum.json) — --proje verin")
    return s


def gh(*args, check=True):
    """GitHub CLI (Actions'ta GH_TOKEN ile). Çıktıyı döndürür."""
    r = subprocess.run(["gh", *args], capture_output=True, text=True)
    if check and r.returncode != 0:
        raise RuntimeError(f"gh {' '.join(args[:3])}: {r.stderr.strip()[:300]}")
    return r.stdout


def etiket(slug):
    """Projenin GitHub sürüm (release) etiketi: görsel/ses/video arşivi burada tutulur."""
    return f"uzun-en-{slug}"


# --- Altyazı ve ses yardımcıları (foodcode/kendi/demo.py'den) ---------------------------
BAGLAC = {"about", "one", "after", "before", "and", "or", "to", "in", "of", "with", "for", "the", "that",
          "who", "where", "why", "what", "into", "down", "is", "can", "kept"}


def karakter_ani(nokta, i):
    for (c0, t0), (c1, t1) in zip(nokta, nokta[1:]):
        if c0 <= i <= c1:
            return t0 + (t1 - t0) * ((i - c0) / max(1, c1 - c0))
    return nokta[-1][1]


def cumle_parcala(metin, en_cok=6):
    """Önce virgüllerden, sonra dengeli ve bağlaç önünden böler (anahtar ifadeler bölünmez)."""
    out = []
    for ifade in re.split(r"(?<=[,;:])\s+", metin):
        w = ifade.split()
        while len(w) > en_cok:
            n = len(w)
            hedef = math.ceil(n / math.ceil(n / en_cok))
            adaylar = [j for j in range(max(2, hedef - 2), min(n - 2, hedef + 2) + 1)
                       if w[j].lower().strip(",.") in BAGLAC]
            j = min(adaylar, key=lambda j: abs(j - hedef)) if adaylar else hedef
            out.append(" ".join(w[:j]))
            w = w[j:]
        out.append(" ".join(w))
    return out


def cumleler(metin):
    """Anlatımı cümlelere böler (Piper her cümleyi ayrı seslendirir)."""
    return [c for c in re.split(r"(?<=[.!?])\s+", metin.strip()) if c]


def wav_oku(yol):
    import numpy as np
    with wave.open(yol, "rb") as w:
        sr, n, ch = w.getframerate(), w.getnframes(), w.getnchannels()
        x = np.frombuffer(w.readframes(n), dtype=np.int16).astype(np.float32) / 32768
    return (x.reshape(-1, ch).mean(axis=1) if ch > 1 else x), sr


def wav_yaz(yol, x, sr):
    import numpy as np
    x = np.clip(x, -1, 1)
    with wave.open(yol, "wb") as w:
        w.setnchannels(1 if x.ndim == 1 else x.shape[1])
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes((x * 32767).astype(np.int16).tobytes())


def zaman_str(t):
    t = int(t)
    return f"{t // 3600}:{t % 3600 // 60:02d}:{t % 60:02d}" if t >= 3600 else f"{t // 60}:{t % 60:02d}"
