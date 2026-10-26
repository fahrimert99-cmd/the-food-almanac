# The Food Almanac — otonom YouTube kanalı

**The Food Almanac** (@FoodAlmanacTV) için video üretim sistemi. Kanal kanıta dayalı İngilizce gıda bilimi
anlatımları yayınlar. Her **Salı ve Cuma 14:00 UTC'de** (17:00 TR) 10–11 dakikalık bir video çıkar; üretim tamamen
GitHub Actions'ta, kendiliğinden yapılır.

```
konu → araştırma + senaryo (Claude) → bağımsız doğruluk denetimi → NVIDIA FLUX gravür görselleri + Kokoro ses
     → 8 paralel ajanla Remotion sahne tasarımı → 1080p render → kalite kontrolü → zamanlanmış YouTube yüklemesi
```

Ayrıntılı kullanım için: **[uzun_en/README.md](uzun_en/README.md)**

## Depo yapısı

| Yol | Ne |
|---|---|
| `uzun_en/` | Hattın tamamı: araçlar, ajan görevleri, Remotion projesi, konu havuzu, durum, projeler |
| `.github/workflows/uzun_en.yml` | Ana hat. Saatte bir çalışır, ne yapılacağına `plan.py` karar verir. |
| `.github/workflows/uzun_en_kanal.yml` | Kanal ayarları: açıklama, anahtar kelimeler, banner |
| `.github/workflows/ci.yml` | Her değişiklikte hızlı kontrol: Python, JSON, senaryo kuralları, Remotion tip denetimi |
| `.github/workflows/uzun_en_gorsel.yml` | Tarifi değiştirilen görseli (ör. kapak) yeniden üretir; tetik `uzun_en/gorsel_yenile.json` |
| `.github/workflows/uzun_en_analiz.yml` | Haftalık kanal analizi verisi (ülke, trafik, izleyici tutma): `uzun_en/analiz/` |
| `.github/workflows/eski_akis_temizlik.yml` | Eski (silinmiş) iş akışlarının çalıştırma geçmişini temizler; bitince boşta bekler |
| `assets/marka_en/` | Banner, profil görseli ve kaynak gravürler |
| `assets/font/` | Anton fontu (OFL) |

## Secrets (Settings → Secrets and variables → Actions)

| Secret | Ne için |
|---|---|
| `YT_CLIENT_ID`, `YT_CLIENT_SECRET`, `YT_REFRESH_TOKEN` | YouTube'a yükleme. Değerler bir kez `python3 uzun_en/araclar/token_al.py` ile alınır. |
| `CLAUDE_YEDEK2_TOKEN` | Claude'un ilk denenen anahtarı (`claude setup-token` ile alınan OAuth token, abonelik kotası). Sıra: `CLAUDE_YEDEK2_TOKEN` → `CLAUDE_ANA_TOKEN` → `CLAUDE_CODE_OAUTH_TOKEN`. API anahtarı kabul edilmez. |
| `CLAUDE_ANA_TOKEN` | Claude'un ikinci sıradaki anahtarı (OAuth token). |
| `CLAUDE_CODE_OAUTH_TOKEN` | Claude yedek anahtarı: ana anahtarın kotası/yetkisi biterse senaryo, doğrulama ve sahne ajanları bununla sürer. |
| `GEMINI_API_KEY` | Claude kotası biterse yedek ajan (ücretsiz katman) |
| `NVIDIA_API_KEY` | Gravür görselleri (ücretsiz) |
| `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN` | NVIDIA çökerse aynı FLUX ailesiyle görsel (Workers AI, günde 10.000 neuron ücretsiz) |
| `CLOUDFLARE_ACCOUNT_ID_2`, `CLOUDFLARE_API_TOKEN_2` | İlk Cloudflare hesabının kotası bitince kullanılan ikinci hesap |
| `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET` | Shorts'ların TikTok'a yüklenmesi (`reels.yml`, `araclar/tiktok.py`) |
| `X_API_KEY`, `X_API_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_SECRET` | Shorts'ların X'e (Twitter) video + YouTube bağlantısıyla paylaşılması (`reels.yml`, `araclar/x.py`) |

Hiçbir adım ücretli API kredisi kullanmaz.

Bu depo eskiden Türkçe "Tuzak Avcısı" Shorts kanalının otomasyonuydu. O hattın kodu kaldırıldı; git geçmişinde
duruyor.
