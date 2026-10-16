# Claude'suz kısa video deneyi

Bu deney, `food-order-blood-sugar` konusu için Claude çağrısı kullanmadan hazırlanmış bağımsız bir kısa videodur.

- Format: 9:16 dikey, 1080×1920
- Hedef süre: yaklaşık 70 saniye
- Görsel üretimi: HTML/CSS/GSAP ve mevcut kapak görseli
- Ses: Claude dışı TTS ile üretilen `narration.wav`
- Kaynak konu: `uzun_en/projeler/food-order-blood-sugar/proje.json`

## Üretim

```bash
cd uzun_en/deneyler/claude-suz-food-order
npx --yes hyperframes@0.8.164 lint . --json
npx --yes hyperframes@0.8.164 render -c ./index.html -o ./out/video_silent.mp4
ffmpeg -y -i ./out/video_silent.mp4 -i ./narration.wav -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 160k -shortest ./out/food-order-blood-sugar-claude-suz.mp4
```

Bu klasör Claude'lu mevcut kanal videosuna dokunmaz; yalnızca A/B karşılaştırma denemesidir.
