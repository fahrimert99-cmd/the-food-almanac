# Remotion tam video — sahne tasarım rehberi

Bu rehber `src/tam/sahneler/SNN.tsx` sahne dosyalarını yazan herkes içindir. Tarz, kanalın ilk videosudur
(`uzun_en/projeler/food-order-blood-sugar/sahneler/`); yeni sahneleri yazmadan önce oradaki `S01`–`S06` ile
birkaç sahneyi okuyun. Çalışan projenin sahneleri `hazirla.py` tarafından `src/tam/sahneler/` içine kopyalanır;
tasarımı orada yaparsınız, iş akışı bitince projeye geri yazılır.

Tarzın özü:
- NVIDIA FLUX gravür görseli tam kare kullanılır ve yavaş kamera hareketiyle canlanır.
- Görselin üstünde anlatımla kelime kelime senkron, sade ve okunaklı katmanlar bulunur:
  - kesik çizgili yemek ya da nesne etiketleri,
  - Anton kinetik başlıklar,
  - rozetler,
  - çizilen grafikler,
  - akan parçacıklar.
- Sakin ve eğitici bir dil kullanılır. Gürültü ve abartı yoktur.

## Araçlar

```bash
cd uzun_en/remotion
node kare.mjs --sahne 14 --bilgi                 # cümleler + her kelimenin sahne içi zamanı + meta (baslik/etiket)
node kare.mjs --sahne 14 --otomatik              # her cümlenin başı/ortası/sonu + sahne sonu kareleri
node kare.mjs --sahne 14 --anlar 2.4,5.1,9.8     # istediğiniz anlar
npx tsc -p . 2>&1 | grep "sahneler/S14"          # yalnızca kendi dosyanızın tip hataları (boş olmalı)
```

**Önizleme çıktısı**
- Kareler `out/onizleme/S14/kare_<sn>.png` dosyalarına yazılır (1920x1080).
- Temas sayfası `out/onizleme/S14/temas.jpg` dosyasıdır. Her karenin altında zaman ve o anki altyazı yazılıdır.
- Bu dosyalara Read aracıyla bakın.

**Önizlemenin kapsamı**
- `kare.mjs` yalnızca sizin sahnenizi paketler; diğer sahnelerdeki hatalar sizi etkilemez.
- Filigran, otomatik bölüm rozeti ve altyazı dahil, tıpkı videodaki gibi çizer.
- Bir çalıştırma yaklaşık 15–30 saniye sürer.

**Görseller ve koordinatlar**
- Görseller `public/img/tam/NN.jpg` dosyalarındadır. Kodda `gorsel="tam/NN"` diye kullanılır.
- Koordinat ızgaraları `out/izgara/NN.jpg` dosyalarındadır. Bunlar 1440x810 boyutundadır, ama üzerindeki
  etiketler 1920x1080 koordinatlarını gösterir.
- Etiket ve çapa noktalarını bu ızgaralardan okuyun.

## Kurallar

1. **Dokunma sınırı.** Yalnızca size verilen `src/tam/sahneler/SNN.tsx` dosyalarını düzenleyin.
   - Aşağıdaki dosyalar ortaktır, değiştirmeyin:
     - `kutuphane.tsx`, `ortak.tsx`, `zaman.ts`
     - `Tam.tsx`, `Katmanlar.tsx`, `kayit.ts`, `veri.ts`
     - `kare.mjs`, `hazirla_tam.py`
   - Yardımcı bir bileşene ihtiyacınız varsa kendi sahne dosyanızın içinde tanımlayın.
   - Kütüphanede hata görürseniz raporlayın.
2. **İçe aktarma.** Yalnızca `react` ve `../kutuphane` kullanılır.
   - Sahne dosyası `export default` ile `React.FC<SP>` döndürür. Props `{ t, s }` biçimindedir; `t` sahne içi saniyedir.
3. **Senkron.** Her katman, anlatımda ilgili kelime söylendiğinde gelmelidir: `const K = kelimeZamani(s); K(cümle_no, "ifade")`.
   - İfade, o cümlede birebir geçmelidir (büyük/küçük harf fark etmez). `--bilgi` çıktısından kontrol edin.
   - Bulunamayan ifade sessizce cümle başına düşer ve konsola uyarı yazar. Bu bir hatadır.
4. **Güvenli alanlar.**
   - Altyazı bandı: y ≥ 960. Önemli yazı veya etiket buraya konmaz.
   - Filigran: sağ üstte x ≥ 1590, y ≤ 92. Boş bırakın.
   - Otomatik bölüm rozeti: sol üstte x ≤ 780, y ≤ 110. Bölüm açan (meta.bolum + meta.bolumNo) ve hemen öncesinde
     kart olmayan sahnelerde ilk ~3,4 saniye görünür. `--bilgi` çıktısındaki meta'ya bakın.
   - Sahne özel ayarı: dosyada `export const ayar = { filigran: false }` filigranı, `{ rozet: false }` rozeti o sahnede gizler.
     Yalnızca tasarım gerçekten gerektiriyorsa kullanın.
5. **Kamera.**
   - `Kamera` + `kameraYolu(t, s.sure, başlangıçPenceresi, bitişPenceresi)` kullanın.
   - Pencere `[x, y, genişlik]` biçimindedir; yükseklik genişlik × 9/16 olarak hesaplanır.
   - Hareket yavaş olmalıdır: toplam yakınlaşma en çok yaklaşık %12 olsun.
   - Pencere otomatik olarak görselin içinde tutulur.
   - Etiketler görsel koordinatıyla verilir ve kameranın içinde (`<Kamera>` çocukları olarak) yer alır.
6. **Görsel kusurları.** Her görseli ızgarasıyla birlikte inceleyin. Aşağıdakileri pencere seçimiyle dışarıda bırakın;
   olmuyorsa kâğıt rengi yamayla (`kagit(1)` radyal gradyan, örnek `S04`) ya da `Panel`/`Ortu` ile örtün:
   - anlamsız yazı, sahte harf veya etiket, imza,
   - bozuk el, parmak, yüz veya anatomi.
   Kusur görünür kalmamalıdır.
7. **Doğruluk.** Ekrandaki her yazı şu kaynaklardan birine dayanmalıdır:
   - o sahnenin anlatımı,
   - `s.meta` (`baslik`, `etiket`, `grafik`, `kart`),
   - çalışan projenin `uzun_en/projeler/<slug>/proje.json` → `kaynaklar`.

   Yeni sayı, çalışma ayrıntısı ya da iddia uydurmayın. Sağlık iddialarını abartmayın. Etiketler 1–4 kelime ve BÜYÜK HARF olsun.
8. **Yoğunluk.**
   - Aynı anda en çok 2–3 katman grubu bulunsun. Yenisi gelmeden eskisini soldurun (`bitis`).
   - Görselin ana öznesini kapatmayın.
   - 10 saniyeyi aşan sahnelerde 3–5 senkron vuruş olsun, kısa sahnelerde en az 2.
9. **Okunurluk.**
   - Yazı ile yazı çakışmamalıdır.
   - Karışık görsel bölgesinin üstündeki yazıya `Panel`, `Ortu`, hap ya da kart zemini verin.
   - Yazı kenara 40 pikselden fazla yaklaşmamalıdır.
10. **Çeşitlilik ve tutarlılık.**
    - Ardışık sahnelerde aynı düzeni üst üste tekrarlamayın: panel sağda, sonra solda, sonra diyagram, sonra etiketler gibi dönüşümlü kullanın.
    - Renk ve fontlar her zaman `RENK`, `ANTON` ve `INTER` olmalıdır.
11. **Geçişler.** Sahneyi bütünüyle soldurmayın ya da karartmayın; çapraz geçişi `Tam` yapar. Sahnenin son karesi de dolu görünmelidir.
12. **Performans.**
    - Büyük alanlara blur uygulamayın.
    - Bir karede en çok yaklaşık 200 SVG öğesi olsun.
    - `Math.random` yerine `random("tohum")` kullanın.

## Kütüphane (`src/tam/kutuphane.tsx`)

| Bileşen | Ne işe yarar |
|---|---|
| `Kamera`, `kameraYolu`, `pencereAra` | Görsel ve yavaş kamera; çocuklar görsel koordinatındadır |
| `Etiket` | Çapa noktasından hapa çizilen kesikli çizgi (yemek ve nesne etiketleri) |
| `Hap` | Statik hap etiketi |
| `Baslik`, `BaslikBlok` | Anton kinetik başlık (maskeden kayarak girer); alt alta satırlar |
| `Not` | Inter açıklama satırı |
| `VurguRozet` | Büyük sayı rozeti (`–37%`, `<140`, `≈ HALF`) + not |
| `KaynakEtiketi` | Sol üstte kaynak hapı (`s.meta.etiket` varsa kullanın) |
| `Panel`, `Ortu`, `AltSis` | Kâğıt rengi yan panel, tam örtü, alt geçiş |
| `KanSekeriGrafigi`, `EGRILER`, `egriDeger` | Kalem ucuyla çizilen kan şekeri eğrileri, taban ve eşik çizgisi, aralık gölgesi, dakika işaretleri |
| `CubukGrafik` | Büyüyen çubuklar + değer etiketleri |
| `Liste` | Numaralı, onaylı ya da çarpılı maddeler |
| `AdimAkisi` | `VEGETABLES → PROTEIN → CARBS` gibi akış |
| `Ikon`, `IkonYol` | Onay, çarpı, saat, uyarı, soru ve ok simgeleri |
| `Parcaciklar` | Akan ve yükselen parlak parçacıklar (glukoz vb.) |
| `GorselKart` | Polaroid görsel kartı (kırpımlı) |
| `BolumKarti` | Bölüm kartı sahneleri |
| `Genel` | Varsayılan (otomatik şablon) sahne |
| `MARKA` | Kanal adı: `MARKA.ad`, `MARKA.filigran` (kanal adını asla elle yazmayın) |
| `sayac` | Sayaç |

Yardımcılar: `kelimeZamani`, `ilerle`, `eout`, `einout`, `pop`, `sol`, `kis`, `kagit`, `random`.

Renk ve yazı:

| Ad | Değer / font | Kullanım |
|---|---|---|
| `RENK.kagit` | `#F6F3EC` | Zemin |
| `RENK.lacivert` | `#1B2A41` | Ana yazı |
| `RENK.koyuYesil` | `#1F4A2C` | Başlık vurgusu |
| `RENK.altin` | `#B8862B` | Vurgu |
| `RENK.mercan` | `#CC5842` | Karbonhidrat önce, olumsuz |
| `RENK.yesil` | `#568A46` | Sebze ve protein önce, olumlu |
| Başlık | Anton | Büyük harf |
| Etiket ve metin | Inter 800 / 500 | — |

## Kontrol listesi (her sahne için)

- [ ] `npx tsc` kendi dosyanızda temiz.
- [ ] `node kare.mjs --sahne N --otomatik --anlar <her vuruş + 0,6 sn>` çalıştırıldı ve temas sayfası incelendi.
- [ ] Görsel kusuru görünmüyor.
- [ ] Yazılar çakışmıyor.
- [ ] Güvenli alanlar boş.
- [ ] Her katman doğru kelimeyle geliyor.
- [ ] Ekrandaki her yazı anlatımla ya da meta ile destekleniyor.
- [ ] Son kare dolu ve dengeli görünüyor.
