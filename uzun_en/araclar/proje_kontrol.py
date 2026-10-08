#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""proje.json yapı ve kural denetimi (senaryo ajanının çıktısı üretime girmeden önce).

  python3 uzun_en/araclar/proje_kontrol.py --proje SLUG    # hata varsa çıkış kodu 1; hatalar ve uyarılar yazdırılır
  python3 uzun_en/araclar/proje_kontrol.py --proje SLUG --yazim   # yazım aşaması: en az 10 dk, açılışta rakam
"""
import argparse, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

KELIME_SN = 2.73            # Piper (norman, length_scale 1.08), sahne araları dahil video süresi: ~2,73 kelime/sn
                            # (ikinci videodan ölçüldü: 1597 kelime -> 584,9 sn)
SURE_DK = (9.0, 14.5)       # kesin sınır; yazım aşaması --asgari-dk 10 ile daha sıkı denetlenir
SAYI = re.compile(r"\d|\b(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty|forty|fifty|"
                  r"sixty|seventy|eighty|ninety|hundred|thousand|percent|half|third|quarter|dozen)\b", re.I)
ABARTI_BUYUK = {"really", "never", "always", "stop", "warning", "danger", "what", "this", "does", "your", "eat", "now",
                "must", "worst", "best", "truth", "secret", "every", "after", "before", "real", "happens"}
NVIDIA_RISKLI = re.compile(r"\b(blood|gore|wound|anatomy|anatomical|cut-away|label|labels|callout|chart|diagram|text|"
                           r"letters?|numbers?|words?|caption|logo)\b", re.I)


def kahraman_payi(p):
    """kahraman (konu yiyeceği) geçen görselli sahnelerin oranı; alan yoksa None."""
    k = (p.get("kahraman") or "").strip().lower()
    if not k:
        return None
    desen = re.compile(r"\b" + re.escape(k[:-1] if k.endswith("s") else k), re.I)   # tekil/çoğul ikisi de sayılır
    g = [s for s in p.get("sahneler", []) if s.get("tip", "gorsel") == "gorsel" and s.get("gorsel")]
    return sum(1 for s in g if desen.search(s["gorsel"])) / max(1, len(g))


def denetle(slug, asgari_dk=None, yazim=False):
    """yazim=True: yazım aşamasının sıkı kuralları (en az 10 dk, açılışta kaynaklı rakam). Yayındaki eski projeler
    bu kurallardan önce yazıldığı için varsayılan denetim bunları aramaz."""
    p = O.proje(slug)
    h, u = [], []                       # hatalar, uyarılar
    if not p:
        return ["proje.json okunamadı ya da yok"], []
    m = O.marka()
    ad = m.get("ad", "")
    if p.get("slug") != slug:
        h.append(f"slug '{p.get('slug')}' klasör adıyla ('{slug}') aynı olmalı")
    b = p.get("baslik", "")
    if not 20 <= len(b) <= 100:
        h.append(f"baslik 20–100 karakter olmalı (şu an {len(b)})")
    if b.isupper() or "!!" in b:
        h.append("baslik tamamen büyük harf ya da '!!' içeremez (sakin, güvenilir ton)")
    vurgu_harf = [w for w in re.findall(r"\b[A-Z]{3,}\b", b) if w.lower() in ABARTI_BUYUK]   # DASH, HbA1c gibi kısaltmalar serbest
    if re.search(r"\b(shock\w*|miracle|toxic|poison)\b", b, re.I) or vurgu_harf:
        h.append("baslik abartılı kelime ('shock', 'miracle', 'toxic', 'poison') ya da vurgu için BÜYÜK harfle yazılmış "
                 f"kelime içeremez {vurgu_harf or ''}".rstrip())
    if len(p.get("aciklama_giris", "")) < 200:
        h.append("aciklama_giris en az 200 karakter olmalı")
    kay = p.get("kaynaklar") or []
    if len(kay) < 3 or not all(isinstance(x, str) and len(x) > 30 for x in kay):
        h.append("kaynaklar: en az 3 tam kaynak (yazarlar, başlık, dergi, yıl) gerekli")
    k = p.get("kapak") or {}
    sat = k.get("satirlar") or []
    if not 2 <= len(sat) <= 4 or any(len(x) > 15 for x in sat):
        h.append("kapak.satirlar: 2–4 satır (tercihen 3–4), her satır en çok 15 karakter (tercihen 14): yazı kapağın sol "
                 "yarısını dev harflerle doldurur, kısa satır daha büyük yazı demektir")
    if not k.get("gorsel"):
        h.append("kapak.gorsel (kapak görseli tarifi) gerekli")
    if k.get("vurgu") and len(k["vurgu"]) > 6:
        h.append("kapak.vurgu en çok 6 karakter (ör. '–37%')")
    et = p.get("etiketler") or []
    if not 5 <= len(et) <= 15 or sum(len(x) + 1 for x in et) > 450:
        h.append("etiketler: 5–15 adet, toplam 450 karakteri geçmemeli")
    if not isinstance(p.get("seslendirme_duzelt", {}), dict):
        h.append("seslendirme_duzelt bir sözlük olmalı")

    S = p.get("sahneler") or []
    if not 35 <= len(S) <= 85:
        h.append(f"sahne sayısı 35–85 olmalı (şu an {len(S)})")
    for i, s in enumerate(S, 1):
        if s.get("id") != i:
            h.append(f"sahne id'leri 1'den başlayıp sırayla artmalı (sıra {i}: id {s.get('id')})")
            break
    kelime = 0
    for s in S:
        n = s.get("id")
        metin = (s.get("metin") or "").strip()
        if not metin:
            h.append(f"sahne {n}: metin boş")
            continue
        kelime += len(metin.split())
        for c in O.cumleler(metin):
            if len(c.split()) > 42:
                h.append(f"sahne {n}: çok uzun cümle ({len(c.split())} kelime) — bölün")
        if re.search(r"[%&/~=+<>#@*_|\[\]{}]", metin):
            h.append(f"sahne {n}: seslendirilecek metinde sembol var (% & / ~ = + < > # ...) — kelimeyle yazın")
        if re.search(r"\b(Dr|vs|etc|e\.g|i\.e)\.", metin):
            u.append(f"sahne {n}: kısaltma noktası cümleyi bölebilir ({metin[:40]}...)")
        tip = s.get("tip", "gorsel")
        if tip not in ("gorsel", "kart", "grafik"):
            h.append(f"sahne {n}: tip gorsel/kart/grafik olmalı")
        if tip == "gorsel":
            g = s.get("gorsel") or ""
            if len(g.split()) < 8:
                h.append(f"sahne {n}: gorsel tarifi en az 8 kelime olmalı")
            elif NVIDIA_RISKLI.search(g):
                u.append(f"sahne {n}: gorsel tarifinde riskli kelime '{NVIDIA_RISKLI.search(g).group(0)}' (NVIDIA siyah görsel/yazı üretebilir)")
        if tip == "kart":
            kk = s.get("kart") or {}
            if not all(kk.get(x) for x in ("ust", "baslik", "alt")):
                h.append(f"sahne {n}: kart {{ust, baslik, alt}} gerekli")
            elif len(kk["baslik"]) > 32:
                h.append(f"sahne {n}: kart.baslik en çok 32 karakter")
        if tip == "grafik":
            g = s.get("grafik") or {}
            cub = g.get("cubuklar") or []
            if not (g.get("baslik") and g.get("kaynak") and 2 <= len(cub) <= 6 and
                    all(isinstance(c.get("deger"), (int, float)) and c.get("etiket") and c.get("metin") for c in cub)):
                h.append(f"sahne {n}: grafik {{baslik, alt, cubuklar[2–6: etiket, deger(sayı), metin], kaynak}} gerekli")
        bl = s.get("baslik")
        if bl and (not bl.get("satirlar") or any(len(x) > 18 for x in bl["satirlar"]) or len(bl["satirlar"]) > 3):
            h.append(f"sahne {n}: baslik.satirlar 1–3 satır, her biri en çok 18 karakter")
    if S and not S[0].get("bolum"):
        h.append("ilk sahnenin 'bolum' alanı olmalı (YouTube bölümleri 0:00'dan başlar)")
    bolumler = [s for s in S if s.get("bolum")]
    if len(bolumler) < 4:
        h.append(f"en az 4 bölüm ('bolum' alanı) olmalı (şu an {len(bolumler)})")
    if S and ad and ad.lower() not in " ".join(s.get("metin", "") for s in S[:8]).lower():
        h.append(f"ilk sahnelerde kanal adı geçmeli (ör. 'Welcome to {ad}.')")
    if S and (S[-1].get("tip") != "kart" or "medical advice" not in S[-1].get("metin", "").lower()):
        h.append("son sahne kapanış kartı olmalı ve 'not medical advice' uyarısını içermeli")
    if S and ad and ad.lower() not in S[-1].get("metin", "").lower():
        h.append(f"son sahnede kanal adı geçmeli (abone çağrısı: 'subscribe to {ad}')")
    if yazim:
        acilis = " ".join(x.get("metin", "") for x in S[:2])
        if not SAYI.search(acilis):
            h.append("açılış: ilk iki sahnede kaynaklı somut bir rakam olmalı (izleyici ilk 15 saniyede karar veriyor); "
                     "ör. 'in a trial of 41 adults … about 12 percent lower'")
    pay = kahraman_payi(p)
    if pay is not None and pay < 0.45:
        h.append(f"kahraman '{p['kahraman']}' görselli sahnelerin yalnızca %{pay * 100:.0f}'inde; en az yarısının "
                 "gorsel tarifinde aynı kelimeyle geçmeli")
    dk = kelime / KELIME_SN / 60
    alt = asgari_dk or (10.0 if yazim else SURE_DK[0])
    if not alt <= dk <= SURE_DK[1]:
        h.append(f"tahmini süre {dk:.1f} dk — {alt:g}–{SURE_DK[1]:g} dk olmalı ({kelime} kelime; ~{int(10.75 * 60 * KELIME_SN)} kelime hedefleyin)")
    return h, u + [f"tahmini süre: {dk:.1f} dk ({kelime} kelime, {len(S)} sahne, {len(bolumler)} bölüm)"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--proje")
    ap.add_argument("--asgari-dk", type=float, help=f"en kısa tahmini süre (varsayılan {SURE_DK[0]:g})")
    ap.add_argument("--yazim", action="store_true", help="yazım aşaması: en az 10 dk + açılışta kaynaklı rakam")
    a = ap.parse_args()
    slug = O.aktif_slug(a.proje)
    h, u = denetle(slug, a.asgari_dk, a.yazim)
    for x in u:
        print("UYARI:", x)
    for x in h:
        print("HATA:", x)
    print("SONUÇ:", "GEÇTİ" if not h else f"{len(h)} HATA")
    sys.exit(1 if h else 0)


if __name__ == "__main__":
    main()
