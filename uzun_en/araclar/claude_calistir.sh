#!/usr/bin/env bash
# claude CLI'yi iki anahtarla çalıştırır: önce CLAUDE_ANA, kota/yetki hatasında CLAUDE_YEDEK.
#   bash uzun_en/araclar/claude_calistir.sh -p "..." --max-turns 80 ...
# KREDİ HARCANMAZ: anahtarlar yalnızca CLAUDE_CODE_OAUTH_TOKEN (abonelik kotası, `claude setup-token`)
# olarak verilir. "sk-ant-api..." ile başlayan API anahtarları kredi harcayacağı için atlanır.
# Ana anahtarın kotası bir kez bittiğinde bu iş (job) boyunca bir daha denenmez.
set -u
BITTI=/tmp/claude_ana_bitti
LIMIT='usage limit|limit reached|hit your limit|limit will reset|rate.?limit|credit balance|quota|insufficient|invalid (api key|bearer|x-api-key)|authentication|unauthori[sz]ed|oauth token|token (has )?expired|/login|\b(401|403|429)\b'

temizle() { printf '%s' "$1" | tr -d '[:space:]'; }
ANA=$(temizle "${CLAUDE_ANA:-}"); YEDEK=$(temizle "${CLAUDE_YEDEK:-}")
for v in ANA YEDEK; do
  if [[ "${!v}" == sk-ant-api* ]]; then
    echo "::warning::Claude $v anahtarı bir API anahtarı (sk-ant-api...); kredi harcamamak için kullanılmıyor. 'claude setup-token' ile OAuth token verin."
    printf -v "$v" ''
  fi
done
[ -f "$BITTI" ] && ANA=""
[ -n "$ANA$YEDEK" ] || { echo "::error::Claude anahtarı yok (CLAUDE_ANA_TOKEN / CLAUDE_CODE_OAUTH_TOKEN)"; exit 1; }

calistir() {  # $1 = token, geri kalan = claude argümanları
  local k="$1"; shift
  env -u ANTHROPIC_API_KEY -u CLAUDE_API_KEY -u CLAUDE_ANA -u CLAUDE_YEDEK CLAUDE_CODE_OAUTH_TOKEN="$k" claude "$@"
}

LOG=$(mktemp)
if [ -n "$ANA" ]; then
  echo "Claude: ana anahtar"
  calistir "$ANA" "$@" 2>&1 | tee "$LOG"; RC=${PIPESTATUS[0]}
  [ "$RC" -eq 0 ] && { rm -f "$LOG"; exit 0; }
  if [ -z "$YEDEK" ] || ! tail -n 40 "$LOG" | grep -qiE "$LIMIT"; then rm -f "$LOG"; exit "$RC"; fi
  echo "::warning::Claude ana anahtarı kota/yetki hatası verdi; yedek anahtara geçiliyor"
  touch "$BITTI"
fi
rm -f "$LOG"
echo "Claude: yedek anahtar"
calistir "$YEDEK" "$@"
