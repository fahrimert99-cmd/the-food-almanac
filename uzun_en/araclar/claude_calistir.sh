#!/usr/bin/env bash
# claude CLI'yi sırayla birden çok token ile çalıştırır: CLAUDE_ANA -> CLAUDE_YEDEK -> CLAUDE_YEDEK2.
# Bir token kota/yetki hatası verirse sıradakine geçilir.
#   bash uzun_en/araclar/claude_calistir.sh -p "..." --max-turns 80 ...
# KREDİ HARCANMAZ: token'lar yalnızca CLAUDE_CODE_OAUTH_TOKEN (abonelik kotası, `claude setup-token`)
# olarak verilir. "sk-ant-api..." ile başlayan API anahtarları kredi harcayacağı için atlanır.
# Kotası biten token bu iş (job) boyunca bir daha denenmez.
set -u
LIMIT='(usage|session|weekly|daily|opus|sonnet) limit|limit reached|hit your [a-z ]{0,20}limit|limit will reset|resets [0-9]|rate.?limit|credit balance|quota|insufficient|invalid (api key|bearer|x-api-key)|authentication|unauthori[sz]ed|oauth token|token (has )?expired|/login|\b(401|403|429)\b'
ADLAR=(CLAUDE_ANA CLAUDE_YEDEK CLAUDE_YEDEK2)

temizle() { printf '%s' "$1" | tr -d '[:space:]'; }
SIRA=()
for ad in "${ADLAR[@]}"; do
  k=$(temizle "${!ad:-}")
  [ -n "$k" ] || continue
  if [[ "$k" == sk-ant-api* ]]; then
    echo "::warning::Claude $ad bir API anahtarı (sk-ant-api...); kredi harcamamak için kullanılmıyor. 'claude setup-token' ile OAuth token verin."
    continue
  fi
  [ -f "/tmp/claude_bitti_$ad" ] && continue
  SIRA+=("$ad")
done
[ "${#SIRA[@]}" -gt 0 ] || { echo "::error::Kullanılabilir Claude token'ı yok (CLAUDE_ANA_TOKEN / CLAUDE_CODE_OAUTH_TOKEN / CLAUDE_YEDEK2_TOKEN)"; exit 1; }

calistir() {  # $1 = token, geri kalan = claude argümanları
  local k="$1"; shift
  env -u ANTHROPIC_API_KEY -u CLAUDE_API_KEY -u CLAUDE_ANA -u CLAUDE_YEDEK -u CLAUDE_YEDEK2 CLAUDE_CODE_OAUTH_TOKEN="$k" claude "$@"
}

LOG=$(mktemp)
SON=$(( ${#SIRA[@]} - 1 ))
for i in "${!SIRA[@]}"; do
  ad=${SIRA[$i]}
  echo "Claude: $ad"
  calistir "$(temizle "${!ad}")" "$@" 2>&1 | tee "$LOG"; RC=${PIPESTATUS[0]}
  [ "$RC" -eq 0 ] && { rm -f "$LOG"; exit 0; }
  if [ "$i" -eq "$SON" ] || ! tail -n 40 "$LOG" | grep -qiE "$LIMIT"; then rm -f "$LOG"; exit "$RC"; fi
  echo "::warning::Claude $ad kota/yetki hatası verdi; ${SIRA[$((i + 1))]} token'ına geçiliyor"
  touch "/tmp/claude_bitti_$ad"
done
