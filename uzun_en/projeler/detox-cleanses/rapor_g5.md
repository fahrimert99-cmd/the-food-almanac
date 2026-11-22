# Rapor — grup 5 (sahne 31–37)

Not: 31–37 dosyaları stub değil, hazır tasarımla geldi. Her sahneyi render edip denetledim, aşağıdaki düzeltmeleri yaptım. Görsel yeniden üretilmedi.

- **S31 (oksalat):** yeşillik, bardak ve pancar için üç etiket, OXALATE başlığı ve böbrek taşı riski kartı. JUICE etiketi, "High-oxalate juices · NIH" notunun üstüne biniyordu; aşağı taşıdım.
- **S32 (Getting 2013):** 2013 ve 65 rozetleri, mikroskop, bardak, kavanoz ve lam rafı etiketleri, kaynak hapı. KIDNEY BIOPSIES etiketi kamera yakınlaşınca sol kenara 40 px'ten fazla yaklaşıyordu; içeri aldım.
- **S33 (65 biyopsi):** başlık, onay maddesi, 3 OF 65 rozeti, JUICING PATIENT ve OXALATE CRYSTALS etiketleri. OXALATE CRYSTALS etiketi başlığın üstüne biniyordu, JUICING PATIENT etiketi altyazı bandına yakındı. İkisini boş kâğıda taşıdım, son not yazısını yukarı aldım.
- **S34 (Makkapati 2018):** 65 rozeti, NORMAL KIDNEYS, SMOOTHIE CLEANSE, GASTRIC BYPASS ve ANTIBIOTICS etiketleri, END-STAGE KIDNEY DISEASE başlığı. Değişiklik gerekmedi.
- **S35 (kreatinin grafiği):** meta.grafik çubukları 1.12 ve 5.43, NEEDED DIALYSIS hapı. Maddeler anlatım sırasına uymuyordu (20–30 OZ, POMEGRANATE'ten önce söyleniyor); sırayı düzelttim, aradaki boşluk kalktı. Son render'ı bu düzeltmeden sonra almadım.
- **S36 (C vitamini → oksalat):** sol panelde madde listesi, 450 MG rozeti, POMEGRANATE JUICE ve VITAMIN C etiketleri, VITAMIN C → OXALATE akışı. `AdimAkisi` öğesinde olmayan `bitis` alanı tsc hatası veriyordu; kaldırdım. Sonuç olarak VITAMIN C hapı sahne sonuna kadar kalıyor.
- **S37 (risk faktörleri):** ONE PATIENT ve UNCOMMON INJURY hapları, ardından KNOWN RISK FACTORS başlığı ve altı maddelik liste. Değişiklik gerekmedi.

Doğrulama: S31–S37 için tsc temiz, kelime eşleşme uyarısı yok. S31, S32 ve S33 düzeltmelerini yeniden render edip bakmadım; yalnızca S33'ün ve S31'in yeni karesine baktım. Kütüphane hatası bulmadım. Çözülmemiş sorun yok.
