# The Food Almanac — otonom YouTube kanalı

**The Food Almanac** (@FoodAlmanacTV) için video üretim sistemi. Kanal kanıta dayalı İngilizce gıda bilimi
anlatımları yayınlar. Her **Salı ve Cuma 14:00 UTC'de** (17:00 TR) 10–11 dakikalık bir video çıkar; üretim tamamen
GitHub Actions'ta, kendiliğinden yapılır.

```
konu → araştırma + senaryo (Claude) → bağımsız doğruluk denetimi → NVIDIA FLUX gravür görselleri + Piper ses
     → 8 paralel ajanla Remotion sahne tasarımı → 1080p render → kalite kontrolü → zamanlanmış YouTube yüklemesi
```

Ayrıntılı kullanım için: **[uzun_en/README.md](uzun_en/README.md)**

## Depo yapısı

| Yol | Ne |
|---|---|
| `uzun_en/` | Hattın tamamı: araçlar, ajan görevleri, Remotion projesi, konu havuzu, durum, projeler |
| `.github/workflows/uzun_en.yml` | Ana hat. 3 saatte bir çalışır, ne yapılacağına `plan.py` karar verir. |
| `.github/workflows/uzun_en_kanal.yml` | Kanal ayarları: açıklama, anahtar kelimeler, banner |
| `.github/workflows/ci.yml` | Her değişiklikte hızlı kontrol: Python, JSON, senaryo kuralları, Remotion tip denetimi |
| `.github/workflows/eski_akis_temizlik.yml` | Eski (silinmiş) iş akışlarının çalıştırma geçmişini temizler; bitince boşta bekler |
| `assets/marka_en/` | Banner, profil görseli ve kaynak gravürler |
| `assets/font/` | Anton fontu (OFL) |

## Secrets (Settings → Secrets and variables → Actions)

| Secret | Ne için |
|---|---|
| `YT_CLIENT_ID`, `YT_CLIENT_SECRET`, `YT_REFRESH_TOKEN` | YouTube'a yükleme. Değerler bir kez `python3 uzun_en/araclar/token_al.py` ile alınır. |
| `CLAUDE_CODE_OAUTH_TOKEN` | Senaryo, doğrulama ve sahne ajanları. Abonelik kotasıyla çalışır, kredi harcamaz. |
| `GEMINI_API_KEY` | Claude kotası biterse yedek ajan (ücretsiz katman) |
| `NVIDIA_API_KEY` | Gravür görselleri (ücretsiz) |

Hiçbir adım ücretli API kredisi kullanmaz.

Bu depo eskiden Türkçe "Tuzak Avcısı" Shorts kanalının otomasyonuydu. O hattın kodu kaldırıldı; git geçmişinde
duruyor.
