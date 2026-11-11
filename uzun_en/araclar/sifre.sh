#!/usr/bin/env bash
# Ses klonu referansı ve örnekleri için karma şifreleme (RSA-OAEP + AES-256, openssl). Depo herkese açık olduğundan
# anlatıcının ses örneği ve klonla üretilen denemeler yalnızca şifreli olarak depoya / sürüme girer.
#   bash sifre.sh anahtar DIR              # DIR/klon_anahtar.pub + DIR/klon_anahtar.enc (özel anahtar, KEK ile şifreli)
#   bash sifre.sh ozel DIR CIKTI           # DIR/klon_anahtar.enc -> CIKTI (özel anahtar PEM; KEK ile çözülür)
#   bash sifre.sh sifrele PUB GIRDI ONEK   # ONEK.enc + ONEK.key.enc
#   bash sifre.sh coz OZEL ONEK CIKTI      # ONEK.enc + ONEK.key.enc -> CIKTI
# KEK: ortam değişkeni (Actions'ta mevcut bir gizli ayar); hiçbir anahtar ekrana yazılmaz.
set -euo pipefail
umask 077
islem=$1; shift
case "$islem" in
  anahtar)
    d=$1
    : "${KEK:?KEK yok}"
    openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:3072 -out "$d/ozel.pem" 2>/dev/null
    openssl pkey -in "$d/ozel.pem" -pubout -out "$d/klon_anahtar.pub"
    openssl enc -aes-256-cbc -pbkdf2 -iter 200000 -salt -in "$d/ozel.pem" -out "$d/klon_anahtar.enc" -pass env:KEK
    rm -f "$d/ozel.pem"
    ;;
  ozel)
    : "${KEK:?KEK yok}"
    openssl enc -d -aes-256-cbc -pbkdf2 -iter 200000 -in "$1/klon_anahtar.enc" -out "$2" -pass env:KEK
    ;;
  sifrele)
    pub=$1; girdi=$2; onek=$3
    k=$(mktemp)
    openssl rand -hex 32 | tr -d '\n' > "$k"
    openssl enc -aes-256-cbc -pbkdf2 -iter 100000 -salt -in "$girdi" -out "$onek.enc" -pass file:"$k"
    openssl pkeyutl -encrypt -pubin -inkey "$pub" -pkeyopt rsa_padding_mode:oaep -in "$k" -out "$onek.key.enc"
    rm -f "$k"
    ;;
  coz)
    ozel=$1; onek=$2; cikti=$3
    k=$(mktemp)
    openssl pkeyutl -decrypt -inkey "$ozel" -pkeyopt rsa_padding_mode:oaep -in "$onek.key.enc" -out "$k"
    openssl enc -d -aes-256-cbc -pbkdf2 -iter 100000 -in "$onek.enc" -out "$cikti" -pass file:"$k"
    rm -f "$k"
    ;;
  *) echo "kullanım: sifre.sh anahtar|ozel|sifrele|coz ..." >&2; exit 2 ;;
esac
