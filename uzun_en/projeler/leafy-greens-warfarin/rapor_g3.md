# Rapor — Grup 3 (sahne 18–25)

Not: Bu sahneler oturum başında dosyalarda zaten tasarlanmış durumdaydı. Ben yalnızca tsc ve önizleme kontrolü yaptım, iki küçük düzeltme yaptım. Görsel yeniden üretilmedi.

- **S18** — İki tabak (pirinç + tavuk / yeşillik). `–80%` ve `+500%` rozetleri sayılar söylenince geliyor, "VS", "LOW-K DIET" ve "HIGH-K DIET" etiketleri tabaklar üzerinde. 4 vuruş. Kusur yok.
- **S19** — `meta.grafik` ile 4 çubuklu INR grafiği (2.6/3.3/3.1/2.8). Her çubuk kendi sayısıyla büyüyor, iki diyet hapı cümleyle senkron. Kusur yok.
- **S20** — Termometre + lahana. "LESS GREENS / STRONGER DRUG" başlığı, "BLEEDING RISK" ve "LEAFY GREENS" etiketleri, ikinci cümlede "MORE GREENS / WEAKER DRUG". Kadran üzerindeki bozuk rakamlar kâğıt yamayla örtülü.
- **S21** — Tabak + kıvırcık lahana. "GREENS" etiketi, "NOT NEUTRAL" ve "NUMBERS CHANGE" rozetleri, "OTHER DIRECTION" hapı. Kusur yok.
- **S22** — Büyüteç + ıspanak kasesi. "A CAUTION" hapı, 12 people / 4 days rozetleri, ardından "VITAMIN K MATTERS" başlığı. Düzeltme: "very large changes in diet" notu rozetlere yapışıyordu, aşağı kaydırıldı (y=335).
- **S23** — Defter + salata kasesi. Khan kaynak etiketi, 53 people / 4 weeks rozetleri, "EVERYTHING THEY ATE" ve "WEEKLY BLOOD TESTS" etiketleri. Kusur yok.
- **S24** — Ispanak kasesi + sağ panel. "VITAMIN K HIGHER / INR LOWER" hapları, "+100 MICROGRAMS" başlığı, `–0.2 INR` rozeti. Düzeltme: `S24.tsx`'te `s.meta.baslik` için tsc "possibly undefined" hatası vardı, varsayılan değer eklendi.
- **S25** — Tabak + ızgaralı not kâğıdı. "ONE SERVING COOKED GREENS" etiketi, "SEVERAL × 100 µg" rozeti, üç hap: "A WEEK, NO GREENS" / "ONE BIG SPINACH DINNER" / "MAY MOVE THE NUMBER". Kusur yok.

Çözülmemiş: yok. Kütüphane hatası bulunmadı.
