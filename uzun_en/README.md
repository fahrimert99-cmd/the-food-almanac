# The Food Almanac — İngilizce uzun video hattı (otonom)

Bu hat The Food Almanac kanalının (@FoodAlmanacTV) bütün videolarını üretir. Her hafta **Salı ve Cuma 14:00 UTC'de**
(17:00 TR, 10:00 New York) birer adet, yaklaşık 10–11 dakikalık İngilizce video yayınlar. Videolar kanıta dayalı
beslenme ve gıda bilimi anlatımlarıdır.

## Akış

Bütün akış `.github/workflows/uzun_en.yml` içindedir ve 3 saatte bir kendiliğinden çalışır.

```
plan.py ─► (konu havuzu boşsa) KONU ajanı
        ─► SENARYO ajanı: araştırır (WebSearch/WebFetch), kaynaklı senaryoyu proje.json olarak yazar
        ─► proje_kontrol.py: yapı denetimi (+ bir düzeltme turu)
        ─► DOĞRULA ajanı: bağımsız editör, her iddiayı kaynağından kontrol eder; düzeltir ya da reddeder
        ─► gorsel.py (NVIDIA FLUX gravür) + ses.py (Piper)  ->  GitHub sürümüne (uzun-en-<slug>) arşiv
        ─► SAHNE ajanları: 8 paralel grup, her sahneyi Remotion'da kelime kelime senkron tasarlar
        ─► hazirla.py (zaman çizelgesi, altyazı, müzik) ─► Remotion render (1080p)
        ─► kalite.py ─► meta.py (başlık, bölümler, kaynaklar, kapak) ─► yukle.py (private + publishAt)
```

### Kesintiler ve gecikmeler

- **Kota bitmesi ya da hata.** Kesilen aşama bir sonraki çalıştırmada kaldığı yerden devam eder.
- **Slot yaklaşınca.**
  - Slota 14 saatten az kaldığında, ya da sahne tasarımı 3 kez kesildiğinde, kalan sahneler otomatik şablonla
    (`Genel`) çizilir. Video yine zamanında çıkar.
  - Slot kaçarsa video bir sonraki boş slota kayar.
- **Kalite.** Kalite kontrolünü geçemeyen video yüklenmez ve repoda bir **Issue** açılır. GitHub size e-posta
  bildirimi gönderir.

## Ücretler: kredi harcanmaz

| İş | Ne kullanılır |
|---|---|
| Claude | Yalnızca `CLAUDE_CODE_OAUTH_TOKEN` (abonelik kotası). API anahtarı bilerek verilmez. |
| Gemini | `GEMINI_API_KEY` ücretsiz katman (faturalandırma kapalı). Claude kotası bitince devralır. |
| Görsel | NVIDIA ücretsiz API |
| Ses | Piper (yerel) |
| Müzik | Kodla üretilir |
| YouTube | Ücretsiz Data API kotası |
| GitHub Actions | Repo herkese açık olduğu için dakika sınırı yok. |

## Kurulum (yapıldı)

1. **Secret'lar:** `CLAUDE_CODE_OAUTH_TOKEN`, `GEMINI_API_KEY`, `NVIDIA_API_KEY`, `YT_CLIENT_ID`, `YT_CLIENT_SECRET`,
   `YT_REFRESH_TOKEN`.
   - YouTube token'ı yenilemek gerekirse: `python3 uzun_en/araclar/token_al.py` (bilgisayarda bir kez).
   - Claude token'ı yenilemek gerekirse: `claude setup-token`.
2. **YouTube Studio'dan elle ayarlananlar** (API bunları değiştiremez):
   - kanal adı **The Food Almanac**,
   - kullanıcı adı **@FoodAlmanacTV**,
   - profil fotoğrafı `assets/marka_en/avatar.png`,
   - banner `assets/marka_en/banner.jpg`.
3. **API ile ayarlananlar:** Kanal açıklaması ve anahtar kelimeler `uzun_en_kanal.yml` ile ayarlandı.
   - `kanal_islem.json` dosyası değişince bu iş akışı yeniden çalışır.
   - Banner elle konduğu için API onun üzerine yazmaz (`"banner": false`).

## Günlük kullanım

- **İzlemek:** Actions → **Uzun Video EN**. Her video için GitHub Releases → `uzun-en-<slug>` altında izlemelik
  720p kopya, kapak ve tüm görseller bulunur.
- **Konu eklemek ya da sırayı değiştirmek:** `uzun_en/konular.json` dosyasında `bekliyor` durumundaki ilk konu
  sıradaki videodur.
- **Hemen çalıştırmak:** `uzun_en/calistir.json` içindeki `tetik` sayısını artırın, ya da Actions → Run workflow.
- **Durdurmak:** Actions → Uzun Video EN → "..." → **Disable workflow**.
- **Durum:** `uzun_en/durum.json` her videonun aşamasını, slotunu ve YouTube kimliğini tutar
  (`projeler/<slug>/yayin.json`).
- **Ayarlar** (Settings → Variables, isteğe bağlı):

  | Değişken | Ne işe yarar |
  |---|---|
  | `UZUN_CLAUDE_MODEL` | `opus` ya da `sonnet`. Sonnet kotayı daha az tüketir. |
  | `UZUN_SAHNE_GRUP` | Paralel sahne ajanı sayısı (varsayılan 8). |

## Dosyalar

| Yol | Ne |
|---|---|
| `marka.json` | Kanal adı, slogan, yayın günleri/saati, açıklama, anahtar kelimeler, ses |
| `konular.json`, `durum.json` | Konu havuzu, üretim durumu |
| `gorev/*.md` | Ajan görevleri: KONU, SENARYO, DOGRULA, SAHNE |
| `araclar/` | Python araçları (her birinin başında kullanım yazar) |
| `remotion/` | Remotion projesi. `TASARIM.md` sahne tasarım rehberidir. |
| `projeler/<slug>/` | proje.json, arastirma.md, dogrulama.md, sahneler/, yayin.json. Görsel ve ses dosyaları sürümdedir. |

Yerelde deneme (YouTube'a yüklemez):

```bash
python3 uzun_en/araclar/hazirla.py --proje food-order-blood-sugar
cd uzun_en/remotion && npx remotion studio
```
