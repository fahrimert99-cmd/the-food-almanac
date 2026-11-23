# Flow Shorts hattı (The Food Almanac)

Haftada bir, yayınlanmış bir uzun videonun konusunu Google Flow'da **hareketli gravür** stilinde 40–55 saniyelik bir
Shorts olarak anlatır. Video Flow'da (Claude masaüstü uygulaması + "Almanac Studio" aracı) üretilir; yükleme ve
zamanlama GitHub'da otomatiktir. Otomatik Shorts hattından (`kisa*_yayin.json`, `uzun_en_kisa.yml`) tamamen ayrıdır.

```
konu (yayınlanmış uzun video) → Claude: kaynak kontrolü + 7 sahnelik senaryo → Flow "Almanac Studio": sesler + klipler
  → son_islem.py: 1080x1920, kanca, altyazı, kaynak etiketi → sürüm "uzun-en-SLUG" içine flow_kisa.mp4
  → projeler/SLUG/flow_kisa.json main'e → flow_kisa.yml: Cumartesi 17:00 UTC'ye zamanlanmış YouTube yüklemesi
```

## Haftalık akış

1. **Konu seç:** `yayin.json`'unda `video_id` olan (yüklenmiş) bir uzun video. Flow Shorts'u olmayanlardan biri:
   `python3 uzun_en/araclar/flow_kisa.py --liste`
2. **Üret (Claude masaüstü uygulamasında):** Flow'u yerleşik tarayıcıda aç, giriş yap, aşağıdaki ana komutu ver.
   7 sahne ≈ 84 Flow kredisi, ≈ 10 dk. Üretim sürerken araç sayfasından ayrılma.
3. **Son işlem:**
   `python3 uzun_en/flow/son_islem.py --proje SLUG --girdi almanac_studio.mp4 --cikti flow_kisa.mp4`
   Araç birleştiremezse hata ekranındaki sahne kliplerini ve `ses1..N.wav`'ı bir klasöre koy:
   `python3 uzun_en/flow/son_islem.py --proje SLUG --klipler KLASOR --cikti flow_kisa.mp4`
4. **Yayına koy:** `gh release upload uzun-en-SLUG flow_kisa.mp4 --clobber`, sonra `projeler/SLUG/flow_kisa.json`'u
   main'e gönder. `flow_kisa.yml` bir sonraki boş Cumartesi 17:00 UTC (20:00 TR) için zamanlanmış yükler ve
   `flow_kisa_yayin.json`'u yazar. Haftada en çok bir Flow Shorts; gün/saat `marka.json` içinde
   `"flow_kisa": {"gun": 5, "saat_utc": "17:00"}` ile değiştirilebilir (gun: 0 = Pazartesi).

Deneme: Actions → "Flow Shorts yükleme" → Run workflow → "Kuru çalışma" işaretli (YouTube'a bir şey göndermez).

## flow_kisa.json

| Alan | Ne |
|---|---|
| `eklenme` | YYYY-AA-GG; bekleyenler bu sırayla haftalara yerleşir |
| `konu`, `ses` | Flow'daki konu sorusu ve anlatıcı sesi (Charon) |
| `kanca` | 1–2 satır, BÜYÜK HARF, satır başına ≤ 14 karakter (ilk sahnede ekranda) |
| `baslik_yt` | YouTube başlığı (15–70 karakter, uzun videonun ve diğer Shorts'ların başlığından farklı) |
| `aciklama` | 1–2 cümle; araç uzun video bağlantısı, kaynaklar, kanal notu ve #Shorts ekler |
| `kaynaklar` | Açıklamadaki SOURCES listesi (yoksa `proje.json` kaynakları) |
| `kaynak_etiketleri` | `{"sahne no": "Yazar · Dergi · Yıl"}` — bulgu verilen sahnelerde ekranda |
| `sahneler[]` | `aksiyon`, `anlatim`, `vurgu` (sarı yazılacak kelimeler), `sure_sn` (Flow'daki ses süresi), `ses_adi` |
| `uretim` | Not amaçlı: araç, tarih, kredi |

Örnek: `projeler/eggs-and-cholesterol/flow_kisa.json`.

## Almanac Studio (Flow aracı)

Flow → Araçlar'da sabitli, arayüzü Türkçe. Senaryo formatı İngilizce kalır:

```text
VOICE: Charon
MODE: FLOW VOICE
SCENE 1 | ACTION: ... | NARRATION: ...
```

- Her sahne kartında **Ses ekle** → Charon (orijinal) → anlatım satırı → performans:
  *Calm, clear American documentary narrator, measured pace, no hype.* → ses adı `Charon KONU S1` → Önizleme →
  **Yeni ses kaydet** → **Medya ekle**. Aynı konuyu yeniden üretirken kayıtlı `Charon KONU S1..` seslerini seçmek yeter.
- **SİNEMATİK VİDEOYU BAŞLAT** tüm sahnelere ses eklenmeden açılmaz; kredi tahminini gösterir.
- Hata olursa araç başa dönmez: hatayı Türkçe gösterir; **Sadece Birleştir** yeni kredi harcamadan yalnızca
  birleştirmeyi tekrarlar. **Yeniden Dene** yeni üretimdir (kredi harcar, onay ister).

### ACTION yazım kuralları (hareketli gravür)

- Her sahnede görünür bir **hareket** olsun: buhar yükselir, sayfalar döner, yumurta kırılır, yağ cızırdar, karakter
  ısırık alır, mum titrer. "still life" yazma (araç zaten siler); hareketsiz tarif = fotoğraf gibi klip.
- Kişi yoksa `no person`; karakter yalnızsa `no other people anywhere`.
- Yasak kelimeler: *blood, anatomy, cut-away, wound* (filtre) ve *label, chart, diagram, graph, text, numbers,
  letters, logo, brand* (sahte yazı çizdirir). Sayıları nesneyle göster (terazi, yan yana tabaklar).
- Anlatım satırı 12–14 kelime, < 110 karakter (8 sn'lik klibi aşmasın), sakin, kaynaklı; ilk sahne < 4 sn kanca.

## Ana komut (Claude masaüstü uygulaması, her video)

```text
TOPIC: <uzun videonun sorusu>
TOPIC WORD: <tek kelime, Türkçe karaktersiz>
SLUG: <uzun_en/projeler altındaki klasör adı>
SCENE COUNT: 7

Google Flow is open in the built-in browser pane and I'm signed in. Use ONLY that pane. Never type my email or
password. If a sign-in page appears, STOP and tell me to sign in myself.

STEP 0 - EVIDENCE: Read uzun_en/projeler/SLUG/proje.json (its kaynaklar and script). Use only findings that are in
those sources or that you open yourself; name each as "Author · Journal · Year". Never invent numbers.
STEP 1 - SCRIPT: Write SCENE COUNT scenes following uzun_en/flow/README.md (hook < 4 s, key number + source in scene 2,
mechanism, limits/other side, practical takeaway; every ACTION has visible motion; 12-14 words per narration).
STEP 2 - TOOL: Open my most recent Flow project, Tools, the pinned "Almanac Studio". Click "Temizle", paste the VOICE,
MODE and SCENE lines, check the scene count.
STEP 3 - VOICES: For each scene card: "Ses ekle", original Charon, narration line, the performance text above,
voice name "Charon TOPICWORD S<n>", Önizleme, "Yeni ses kaydet", "Medya ekle". Stop on any "Aynı ses" warning.
STEP 4 - START: Tell me the "Kredi Tahmini" and wait for my "start". Then click "SİNEMATİK VİDEOYU BAŞLAT" once
and do not leave the page until it finishes. On error, use "Sadece Birleştir", never "Yeniden Dene".
STEP 5 - FINISH: Download the MP4 (or the scene clips + voices), run uzun_en/flow/son_islem.py, write
uzun_en/projeler/SLUG/flow_kisa.json, upload flow_kisa.mp4 to release uzun-en-SLUG, and push flow_kisa.json to main.
```
