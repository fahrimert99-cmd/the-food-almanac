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
        ─► gorsel.py (NVIDIA FLUX gravür) + ses.py (Kokoro) ->  GitHub sürümüne (uzun-en-<slug>) arşiv
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
| Claude | Önce `CLAUDE_ANA_TOKEN`, kota/yetki hatasında `CLAUDE_CODE_OAUTH_TOKEN` (yedek); `araclar/claude_calistir.sh`. İkisi de abonelik kotası; `sk-ant-api...` API anahtarları kredi harcamamak için atlanır. |
| Gemini | `GEMINI_API_KEY` ücretsiz katman (faturalandırma kapalı). Claude kotası bitince devralır. |
| Görsel | NVIDIA ücretsiz API; çökerse Cloudflare Workers AI FLUX (günlük ücretsiz kota) |
| Ses | Kokoro "Michael" (yerel, açık kaynak; ilk iki video Piper ile) |
| Müzik | Kodla üretilir |
| YouTube | Ücretsiz Data API kotası |
| GitHub Actions | Repo herkese açık olduğu için dakika sınırı yok. |

## Kurulum (yapıldı)

1. **Secret'lar:** `CLAUDE_ANA_TOKEN`, `CLAUDE_CODE_OAUTH_TOKEN`, `GEMINI_API_KEY`, `NVIDIA_API_KEY`, `YT_CLIENT_ID`, `YT_CLIENT_SECRET`,
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
- **Önde üretim:** Hat boşta kaldığında sıradaki slotların videolarını önceden üretir ve YouTube'a zamanlanmış yükler.
  - En çok 4 video önde durur (yaklaşık 2 hafta). Sayıyı `marka.json` → `onde_uretim_azami` değiştirir.
  - Slota 72 saatten fazla varken iş yalnızca Claude kotasıyla yürür; kota bitince yedek modele geçilmez, sonraki
    çalıştırma (3 saatte bir) kaldığı yerden devam eder.
  - Slot yaklaşınca (72 saat) normal kurallar geçerlidir: gerekirse Gemini ve şablon sahneler devreye girer.
  - Hat boş beklemez: uzun video yüklenince plan hemen yeniden çalışır. Her Shorts başarıyla bitince de sıradaki
    Shorts başlar: önce aynı videonunki, sonra Shorts'u eksik bir sonraki video. İş kalmayınca zincir kendiliğinden
    durur.
- **Durdurmak:** Actions → Uzun Video EN → "..." → **Disable workflow**.
- **Durum:** `uzun_en/durum.json` her videonun aşamasını, slotunu ve YouTube kimliğini tutar
  (`projeler/<slug>/yayin.json`).
- **Analiz:** Kanal Analizi iş akışı her pazartesi YouTube Analytics verisini `analiz/<tarih>.json` dosyasına
  yazar: ülke, trafik kaynağı, abone durumu, izleyici tutma. Gelir verisi alınmaz. Hemen çalıştırmak için
  `analiz/tetik.json` içindeki sayıyı artırın.
- **Instagram Reels:** YouTube'da yayınlanan Shorts'lar günde en çok bir tane Reels olarak paylaşılır.
  - **Kuyruk:** `reels.yml` her gün 12:23 UTC'de çalışır (`araclar/reels.py`).
    - Yayınlanmış ve henüz paylaşılmamış en eski Shorts'u seçer.
    - Videoyu Instagram koşullarına göre yeniden kodlar.
    - Videoyu `reels-medya` dalına ve `reels.xml` beslemesine koyar.
    - Kaydı `uzun_en/reels.json` dosyasına yazar.
  - **Yayın:** Make senaryosu "Food Almanac – Instagram + Facebook Reels" beslemeyi her gün 14:00 UTC'de okur.
    Yeni öğeyi sırayla şuralara gönderir:
    - Instagram @foodalmanactv (Create a reel post),
    - Facebook Sayfası FoodAlmanactv (Publish a Reel),
    - Pinterest (video pin; kapak karesi `SLUG-N.jpg`, bağlantı uzun video).
  - **Hemen kuyruğa almak:** `reels_islem.json` içindeki sayıyı artırın. Günde birden fazla Reels eklenmez.
- **Ayarlar** (Settings → Variables, isteğe bağlı):

  | Değişken | Ne işe yarar |
  |---|---|
  | `UZUN_CLAUDE_MODEL` | `opus` ya da `sonnet`. Sonnet kotayı daha az tüketir. |
  | `UZUN_SAHNE_GRUP` | Paralel sahne ajanı sayısı (varsayılan 8). |

## Bekleyen kararlar

- **Anlatıcı sesi (19 Ekim 2026):** Kanal sahibinin kendi ses klonu (Chatterbox Turbo, `klon` motoru) hazır ve
  denendi. Yumurta videosunun Shorts ve uzun önizlemesi üretildi (`ses_klon_video.yml`), kanal sahibi beğendi.
  - **Karar:** Ses ŞİMDİLİK DEĞİŞMEYECEK. Önce Michael (Kokoro) sesli videoların verilerine bakılacak:
    - ilk 30 saniyede kalan izleyici,
    - ortalama izlenme süresi,
    - Shorts'ta kaydırmadan izleyenlerin oranı.
  - Geçişe kanal sahibiyle birlikte karar verilecek. O zamana kadar `marka.json` → `ses_motoru: kokoro` kalır.
  - Hiçbir oturum ya da ajan sesi kendi başına değiştirmez.
  - Geçiş yapılırsa:
    - yayınlanmış projeler `proje.json`'da `ses_motoru: kokoro` ile sabitlenir;
    - üretim işlerine ses örneğinin çözülmesi ve `chatterbox-tts` kurulumu eklenir (`ses_klon.yml`'deki adımlar).
  - Ses örneği yalnızca şifreli durur: `assets/ses/referans.enc`, `araclar/sifre.sh`.

## Dosyalar

| Yol | Ne |
|---|---|
| `marka.json` | Kanal adı, slogan, yayın günleri/saati, açıklama, anahtar kelimeler, ses |
| `konular.json`, `durum.json` | Konu havuzu, üretim durumu |
| `gorev/*.md` | Ajan görevleri: KONU, SENARYO, DOGRULA, SAHNE |
| `araclar/` | Python araçları (her birinin başında kullanım yazar) |
| `remotion/` | Remotion projesi. `TASARIM.md` sahne tasarım rehberidir. |
| `hyperframes/` | HTML tabanlı HyperFrames önizleme/render projesi; Remotion'a alternatif hızlı prototipleme hattı. |
| `projeler/<slug>/` | proje.json, arastirma.md, dogrulama.md, sahneler/, yayin.json. Görsel ve ses dosyaları sürümdedir. |

Yerelde deneme (YouTube'a yüklemez):

```bash
python3 uzun_en/araclar/hazirla.py --proje food-order-blood-sugar
cd uzun_en/remotion && npx remotion studio
```

HyperFrames ile HTML kompozisyonunu önizlemek veya MP4 üretmek için:

```bash
cd uzun_en/hyperframes
npm run dev
npm run render -- -o out/video.mp4
```

HyperFrames Node.js 22+ ve FFmpeg gerektirir. Remotion hattı mevcut üretim akışının varsayılanıdır;
HyperFrames HTML/CSS tabanlı sahneleri hızlıca denemek ve ayrı render etmek için eklenmiştir.
