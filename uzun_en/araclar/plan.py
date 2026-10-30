#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Takvim ve durum: hangi video, hangi aşamada, hangi yayın slotuna? (GitHub Actions'ın ilk işi)

  python3 uzun_en/araclar/plan.py              # karar ver, GITHUB_OUTPUT'a yaz, gerekiyorsa yeni projeyi başlat
  python3 uzun_en/araclar/plan.py --goster     # yalnızca durumu yazdır

Yayın: marka.json -> yayin.gunler / yayin.saat_utc (varsayılan Salı ve Cuma 14:00 UTC).
Üretim, slottan en çok URETIM_ONCE saat önce başlar (tek seferlik erken başlatma: calistir.json -> "uretim_once_saat"). Aşamalar: senaryo -> varlik -> sahne -> render -> yuklendi.
Önde üretim: yayınlanmayı bekleyen (slotu gelecekte) video sayısı marka.json "onde_uretim_azami"dan
(varsayılan 4; 0 = önde üretim kapalı) azsa, sıradaki boş slotun videosu erkenden üretilip zamanlanmış yüklenir. Slota ACIL saatten fazla
varken ("onde" çıktısı) iş yalnızca Claude kotasıyla yürür: kota bitince yedek modele geçilmez, sonraki çalıştırma bekler.
Sınıra ulaşıldıysa yarıda kalmış aktif proje de bekletilir; slota URETIM_ONCE saat kala kaldığı aşamadan devam eder.
Slota az kaldıysa (SABLON_ESIK) ya da sahne tasarımı defalarca kesildiyse kalan sahneler otomatik şablonla çizilir;
video yine zamanında yayınlanır.
"""
import argparse, datetime as dt, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ortak as O  # noqa: E402

URETIM_ONCE = 72          # saat: slottan en çok bu kadar önce üretime başla
ACIL = 72                 # saat: slota bundan az kaldıysa yedek model (Gemini) ve şablon devreye girebilir
ONDE_AZAMI = 4            # yayınlanmayı bekleyen en çok video (marka.json "onde_uretim_azami" ile değişir)
EN_AZ_ONCE = 5            # saat: bundan yakın slota yeni video yetiştirilmez
SABLON_ESIK = 14          # saat: slota bundan az kaldıysa sahne tasarımı atlanır (şablon)
SAHNE_DENEME = 3          # sahne aşaması en çok bu kadar çalıştırma alır
GORSEL_BEKLE = 30         # saat: görseller çoğunlukla yedek kaynaktan geldiyse slota bundan fazla varken beklenir
ASAMALAR = ["senaryo", "varlik", "sahne", "render", "yuklendi"]
GRUP_SAYISI = int(os.environ.get("UZUN_SAHNE_GRUP", "8") or 8)
SLUG_DESEN = re.compile(r"[a-z0-9][a-z0-9-]{1,79}")   # slug'ı yapay zekâ üretir; kabuk/yol/kod enjeksiyonuna karşı


def slug_gecerli(slug):
    return isinstance(slug, str) and bool(SLUG_DESEN.fullmatch(slug))


def simdi():
    z = os.environ.get("UZUN_SIMDI")                     # test için
    return dt.datetime.fromisoformat(z.replace("Z", "+00:00")) if z else dt.datetime.now(dt.timezone.utc)


def iso(t):
    return t.astimezone(dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def tarih(s):
    return dt.datetime.fromisoformat(s.replace("Z", "+00:00"))


def slotlar(bas, gun=None):
    """Yayın günlerindeki slotlar; varsayılan ufuk 6 hafta, önde üretim sınırı büyükse ona yetecek kadar uzar
    (haftada 2 slot: sınır 13 iken 6 hafta yetmiyor, "boş slot yok" deyip üretimi durduruyordu — 30 Ekim)."""
    if gun is None:
        gun = max(42, onde_azami() * 4)
    y = O.marka().get("yayin", {})
    gunler = y.get("gunler", [1, 4])
    sa, dk = (int(x) for x in y.get("saat_utc", "14:00").split(":"))
    g0 = bas.replace(hour=0, minute=0, second=0, microsecond=0)
    out = []
    for i in range(gun):
        g = g0 + dt.timedelta(days=i)
        if g.weekday() in gunler:
            t = g.replace(hour=sa, minute=dk)
            if t > bas:
                out.append(t)
    return out


def ileride(d, t):
    """Slotu gelecekte olan (üretimde ya da yüklenip yayın bekleyen) video sayısı."""
    return sum(1 for v in d["videolar"].values()
               if v.get("slot") and v.get("asama") != "iptal" and tarih(v["slot"]) > t)


def onde_azami():
    return int(O.marka().get("onde_uretim_azami", ONDE_AZAMI))


def dolu_slotlar(d):
    return {v.get("slot") for v in d["videolar"].values() if v.get("slot")}


def konu_sec():
    k = O.json_oku(os.path.join(O.KOK, "konular.json"), {"konular": []})
    for x in k["konular"]:
        if x.get("durum", "bekliyor") == "bekliyor":
            if not slug_gecerli(x.get("slug")):
                O.log(f"geçersiz slug atlandı: {x.get('slug')!r} (yalnızca a-z, 0-9 ve '-')")
                continue
            return x
    return None


def konu_isaretle(slug, durum):
    yol = os.path.join(O.KOK, "konular.json")
    k = O.json_oku(yol, {"konular": []})
    for x in k["konular"]:
        if x["slug"] == slug:
            x["durum"] = durum
    O.json_yaz(yol, k)


def sahne_gruplari(slug, n=GRUP_SAYISI):
    """Tasarlanmamış (taslak) sahneleri n dengeli gruba böler; kart sahneleri ucuz olduğundan yarım sayılır."""
    from ortak import taslak_mi
    p = O.proje(slug)
    if not p:
        return []
    kaynak = os.path.join(O.proje_dir(slug), "sahneler")
    eksik = [s for s in p["sahneler"] if taslak_mi(os.path.join(kaynak, f"S{s['id']:02d}.tsx"))]
    if not eksik:
        return []
    n = max(1, min(n, len(eksik) // 4 or 1))
    agirlik = [0.5 if s.get("tip") == "kart" else 1.0 for s in eksik]
    hedef = sum(agirlik) / n
    gruplar, cur, w = [], [], 0.0
    for s, a in zip(eksik, agirlik):                      # ardışık sahneler aynı ajanda kalsın (süreklilik)
        cur.append(s["id"])
        w += a
        if w >= hedef - 1e-9 and len(gruplar) < n - 1:
            gruplar.append(cur)
            cur, w = [], 0.0
    if cur:
        gruplar.append(cur)
    return [{"no": i + 1, "sahneler": ",".join(map(str, g))} for i, g in enumerate(gruplar)]


def karar(d, t):
    """(slug, asama, slot, sablon, neden) — yapılacak iş yoksa slug None."""
    aktif = d.get("aktif")
    if aktif and d["videolar"].get(aktif, {}).get("asama") != "yuklendi":
        v = d["videolar"][aktif]
        slot = tarih(v["slot"]) if v.get("slot") else t
        if slot - t < dt.timedelta(hours=1):              # slot yok ya da kaçtı: bir sonraki boş slota kaydır
            bos = [s for s in slotlar(t) if iso(s) not in dolu_slotlar(d) and s - t >= dt.timedelta(hours=EN_AZ_ONCE)]
            if bos:
                v["slot"] = iso(bos[0])
                slot = bos[0]
                O.log(f"slot kaçtı -> {v['slot']}")
        asama = v.get("asama", "senaryo")
        kalan = (slot - t).total_seconds() / 3600
        diger = ileride(d, t) - 1                         # bu projenin dışında yayın bekleyenler
        if (kalan > URETIM_ONCE and diger >= onde_azami()
                and (os.environ.get("UZUN_ZORLA") or "").strip() not in ASAMALAR):
            return None, None, v["slot"], False, (f"aktif proje {aktif} ({asama}) bekletiliyor: slota {kalan:.0f} saat, "
                                                  f"önde {diger} video hazır (en çok {onde_azami()}); "
                                                  f"slota {URETIM_ONCE} saat kala kaldığı yerden devam eder")
        sablon = asama == "sahne" and (kalan < SABLON_ESIK or v.get("sahne_deneme", 0) >= SAHNE_DENEME)
        if sablon:
            asama = "render"
        return aktif, asama, v["slot"], sablon, f"aktif proje, slota {kalan:.0f} saat"
    bos = [s for s in slotlar(t) if iso(s) not in dolu_slotlar(d) and s - t >= dt.timedelta(hours=EN_AZ_ONCE)]
    if not bos:
        return None, None, None, False, "boş slot yok"
    kalan = (bos[0] - t).total_seconds() / 3600
    if kalan > URETIM_ONCE:
        n = ileride(d, t)
        if n >= onde_azami():
            return None, None, iso(bos[0]), False, (f"sıradaki slot {iso(bos[0])} ({kalan:.0f} saat sonra) — "
                                                    f"önde {n} video hazır, yeterli")
        O.log(f"önde üretim: yayın bekleyen {n} video (en çok {onde_azami()}), sıradaki slot {iso(bos[0])}")
    # kuyrukta senaryosu hazır (ör. elle eklenmiş) bir proje var mı?
    for slug, v in d["videolar"].items():
        if v.get("asama") != "yuklendi" and not v.get("slot") and slug_gecerli(slug):
            v["slot"] = iso(bos[0])
            d["aktif"] = slug
            return slug, v.get("asama", "senaryo"), v["slot"], False, "kuyruktaki proje başlatıldı"
    k = konu_sec()
    if not k:
        return "__konu__", "konu", iso(bos[0]), False, "konu havuzu boş: ajan önce yeni konular önerecek"
    slug = k["slug"]
    d["videolar"][slug] = {"slot": iso(bos[0]), "asama": "senaryo", "baslangic": iso(t), "sahne_deneme": 0}
    d["aktif"] = slug
    konu_isaretle(slug, "uretimde")
    return slug, "senaryo", iso(bos[0]), False, f"yeni proje: {slug}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--goster", action="store_true")
    ap.add_argument("--asama-yaz", nargs=2, metavar=("SLUG", "ASAMA"), help="aşamayı güncelle (iş akışı kullanır)")
    ap.add_argument("--sahne-deneme", metavar="SLUG", help="sahne aşaması deneme sayacını artır")
    ap.add_argument("--gorsel-bekle", metavar="SLUG",
                    help="görseller zayıfken beklenmeli mi? (çıkış 0: evet, slota GORSEL_BEKLE saatten fazla var)")
    a = ap.parse_args()
    d = O.durum()
    if a.gorsel_bekle:
        v = d["videolar"].get(a.gorsel_bekle, {})
        kalan = (tarih(v["slot"]) - simdi()).total_seconds() / 3600 if v.get("slot") else 0
        bekle = kalan > GORSEL_BEKLE
        O.log(f"slota {kalan:.0f} saat; görsel yeniden denemesi için " + ("beklenir" if bekle else "zaman yok, devam"))
        sys.exit(0 if bekle else 1)
    if a.asama_yaz:
        slug, asama = a.asama_yaz
        v = d["videolar"].setdefault(slug, {})
        v["asama"] = asama
        if asama == "yuklendi" and d.get("aktif") == slug:
            d["aktif"] = None
        if asama == "iptal":
            d["aktif"] = None
        O.durum_yaz(d)
        return O.log(f"{slug}: {asama}")
    if a.sahne_deneme:
        v = d["videolar"].setdefault(a.sahne_deneme, {})
        v["sahne_deneme"] = v.get("sahne_deneme", 0) + 1
        O.durum_yaz(d)
        return
    t = simdi()
    if a.goster:
        print(json.dumps(d, ensure_ascii=False, indent=2))
        print("sıradaki slotlar:", [iso(s) for s in slotlar(t)[:6]])
        return
    zorla = (os.environ.get("UZUN_ZORLA") or "").strip()
    global URETIM_ONCE
    cyol = os.path.join(O.KOK, "calistir.json")
    calistir = O.json_oku(cyol, {}) or {}
    if calistir.get("uretim_once_saat"):                 # tek seferlik: sıradaki videoyu erken başlat
        URETIM_ONCE = int(calistir["uretim_once_saat"])
    slug, asama, slot, sablon, neden = karar(d, t)
    if calistir.get("uretim_once_saat") and neden.startswith("yeni proje"):
        calistir.pop("uretim_once_saat")
        O.json_yaz(cyol, calistir)
        O.log("erken başlatma kullanıldı; calistir.json'dan kaldırıldı")
    if zorla in ASAMALAR and slug and slug != "__konu__":
        asama = zorla
        sablon = sablon or zorla == "render"           # elle "render": kalan sahneler şablonla çizilir
    O.log(f"karar: {neden} -> {slug or '-'} / {asama or '-'} (slot {slot or '-'}){' [şablon]' if sablon else ''}")
    if slug and slug != "__konu__":
        O.durum_yaz(d)
    is_var = bool(slug) and asama not in (None, "yuklendi")
    no = ASAMALAR.index(asama) if asama in ASAMALAR else 9
    onde = bool(slot) and tarih(slot) - t > dt.timedelta(hours=ACIL)
    cikti = {"is": str(is_var).lower(), "slug": slug or "", "asama": asama or "", "asama_no": str(no), "slot": slot or "",
             "sablon": str(sablon).lower(), "onde": str(onde).lower()}
    if os.environ.get("GITHUB_OUTPUT"):
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            for k, v in cikti.items():
                f.write(f"{k}={v}\n")
    print(json.dumps(cikti, ensure_ascii=False))


if __name__ == "__main__":
    main()
