# /watch (claude-watch)

Bu klasör https://github.com/taoufik123-collab/claude-watch projesinin kopyasıdır.
- Kaynak commit: `7711231e4c47e5d4e06bcf5326c4abf5b70ab4a9`
- Lisans: MIT, bkz. `LICENSE`
- Alınan dosyalar: yalnızca `SKILL.md` ve `scripts/` çalışma dosyaları (testler, hook ve eklenti dosyaları hariç).

Bu depoda açılan Claude Code oturumlarında `/watch <video-url> [neden]` komutunu sağlar.

Gereken araçlar:
- `ffmpeg`
- `yt-dlp` (`pip install --user yt-dlp`)

Altyazısı olmayan videolar için Whisper anahtarı gerekir. Bu proje ücretli API kullanmadığı için anahtar verilmez; o videolar yalnızca karelerle incelenir. Bulut ortamında YouTube adreslerinin ağ ayarlarında (Allowed domains) açık olması gerekir.
