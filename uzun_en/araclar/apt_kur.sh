#!/usr/bin/env bash
# apt paketlerini kurar (ör. bash uzun_en/araclar/apt_kur.sh ffmpeg fonts-inter).
# Ubuntu aynası takılırsa adım dakikalarca asılı kalıp işi zaman aşımına düşürüyordu (22 Ekim Reels: 30 dk):
# her deneme süre sınırlı, en çok 3 deneme.
set -u
for i in 1 2 3; do
  if sudo timeout 240 apt-get update -qq -o Acquire::Retries=3 &&
     sudo timeout 480 apt-get install -y -qq -o Acquire::Retries=3 "$@" >/dev/null; then
    exit 0
  fi
  echo "::warning::apt kurulumu ($*) deneme $i başarısız ya da takıldı; yeniden deneniyor"
  sleep 15
done
echo "::error::apt kurulumu ($*) 3 denemede başarısız"
exit 1
