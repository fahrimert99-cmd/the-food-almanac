#!/usr/bin/env bash
# apt paketlerini kurar (ör. bash uzun_en/araclar/apt_kur.sh ffmpeg fonts-inter).
# Ubuntu aynası takılırsa adım dakikalarca asılı kalıp işi düşürüyordu (22 Ekim Reels: 30 dk; 26 Ekim: Azure aynası
# 25 dk yanıt vermedi, uzun video görsel aşaması düştü). Sıra:
#   1. varsayılan ayna (süre sınırlı),
#   2. ana Ubuntu aynası (archive.ubuntu.com),
#   3. apt yine olmazsa yedekler: ffmpeg -> GitHub'daki statik derleme (BtbN/FFmpeg-Builds),
#      fonts-inter -> repodaki Inter yazı tipleri, espeak-ng -> atlanır (Piper/Kokoro pip paketleri kendi
#      espeak verisini taşır; gerekirse sonraki adım açık hata verir).
set -u

dene() {   # $1: deneme adı
  if sudo timeout 180 apt-get update -qq -o Acquire::Retries=2 -o Acquire::http::Timeout=30 &&
     sudo timeout 420 apt-get install -y -qq -o Acquire::Retries=2 -o Acquire::http::Timeout=30 "${PAKETLER[@]}" >/dev/null; then
    return 0
  fi
  echo "::warning::apt kurulumu (${PAKETLER[*]}) $1 başarısız ya da takıldı"
  return 1
}

PAKETLER=("$@")
dene "varsayılan ayna" && exit 0

# Azure aynası yerine ana Ubuntu aynası
sudo sed -i -E 's#https?://[a-z0-9.-]*archive\.ubuntu\.com#http://archive.ubuntu.com#g' \
  /etc/apt/sources.list.d/*.sources /etc/apt/sources.list 2>/dev/null
dene "archive.ubuntu.com aynası" && exit 0

# apt olmadan: paket paket yedekler
eksik=0
for p in "${PAKETLER[@]}"; do
  case "$p" in
    ffmpeg)
      command -v ffmpeg >/dev/null && continue
      d=$(mktemp -d)
      if curl -fsSL --retry 3 --max-time 300 -o "$d/f.tar.xz" \
           https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-linux64-gpl.tar.xz &&
         tar -xJf "$d/f.tar.xz" -C "$d" &&
         sudo install -m 755 "$d"/ffmpeg-*/bin/ffmpeg "$d"/ffmpeg-*/bin/ffprobe /usr/local/bin/; then
        echo "::notice::ffmpeg statik derlemeden kuruldu ($(ffmpeg -version | head -1))"
      else
        echo "::error::ffmpeg kurulamadı"; eksik=1
      fi
      rm -rf "$d" ;;
    fonts-inter)
      mkdir -p "$HOME/.local/share/fonts" &&
        cp "$(dirname "$0")"/../remotion/public/fonts/Inter-*.otf "$HOME/.local/share/fonts/" &&
        fc-cache -f >/dev/null 2>&1
      echo "::notice::Inter yazı tipi repodan kuruldu" ;;
    espeak-ng)
      command -v espeak-ng >/dev/null || echo "::warning::espeak-ng kurulamadı; atlandı (pip paketleri kendi verisini taşır)" ;;
    *)
      echo "::error::$p için yedek yok"; eksik=1 ;;
  esac
done
[ "$eksik" = 0 ] || { echo "::error::apt kurulumu (${PAKETLER[*]}) başarısız"; exit 1; }
exit 0
