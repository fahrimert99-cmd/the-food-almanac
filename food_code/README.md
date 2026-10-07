# Food Code — bağımsız haftalık üretim profili

Bu profil, mevcut Türkçe TUZAK AVCISI hattından izole tutulur. Ana dalın günlük Shorts akışına dokunmaz.

## Güvenli varsayılanlar

- Dil: İngilizce, `en-US`
- Format: yatay, yaklaşık 10–13 dakika
- Yayın: haftada bir
- Görsel: tutarlı AI editoryal illüstrasyonları
- Yayın modu: önce taslak; insan incelemesi olmadan public yükleme yok
- YouTube OAuth: mevcut Türkçe kanalın token'ı kullanılmaz; `FOOD_CODE_YT_REFRESH_TOKEN` gerekir
- Yapay içerik beyanı: açık

## Üretim sırası

1. `topics.json` içinden konu seçilir.
2. Kaynak gerektiren iddialar ve güvenli dil kurallarıyla İngilizce senaryo üretilir.
3. AI sahneleri ve İngilizce seslendirme ile yatay video render edilir.
4. Video, senaryo, kaynak listesi ve inceleme formu artifact olarak çıkarılır.
5. İnsan editör `APPROVE` verirse ayrı Food Code OAuth kimliğiyle yükleme yapılır.

## Token ve kanal izolasyonu

Aşağıdaki secret'lar TUZAK AVCISI token'larından ayrı olmalıdır:

- `FOOD_CODE_YT_CLIENT_ID`
- `FOOD_CODE_YT_CLIENT_SECRET`
- `FOOD_CODE_YT_REFRESH_TOKEN`
- `FOOD_CODE_ELEVEN_VOICE_ID`

İlk testte YouTube yüklemesi kapalıdır. İlk video private yüklenip manuel kalite kontrolü yapılmadan public yayın açılmaz.
