#!/usr/bin/env bash
# claude CLI'yi üç tokenla çalıştırır: önce CLAUDE_ANA, sonra CLAUDE_YEDEK, sonra CLAUDE_YEDEK2.
#   bash uzun_en/araclar/claude_calistir.sh -p "..." --max-turns 80 ...
# KREDİ HARCANMAZ: tokenlar yalnızca CLAUDE_CODE_OAUTH_TOKEN (abonelik kotası, `claude setup-token`)
# olarak verilir. "sk-ant-api..." ile başlayan API anahtarları kredi harcayacağı için atlanır.
# Her token kota/yetki hatasında sıradakine geçer; başarısız token aynı job içinde tekrar denenmez.
set -u
BITTI=/tmp/claude_bitti
LIMIT="usage[[:space:]]+limit|limit[[:space:]]+reached|hit[[:space:]]+your|you('ve| have)?[[:space:]]+hit|weekly[[:space:]]+limit|daily[[:space:]]+limit|limit[[:space:]]+will[[:space:]]+reset|rate.?limit|credit[[:space:]]+balance|quota|insufficient|invalid[[:space:]]+(api[[:space:]]+key|bearer|x-api-key)|authentication|unauthori[sz]ed|oauth[[:space:]]+token|token[[:space:]]+(has[[:space:]]+)?expired|/login|\b(401|403|429)\b"

temizle() { printf '%s' "$1" | tr -d '[:space:]'; }
ANA=$(temizle "${CLAUDE_ANA:-}"); YEDEK=$(temizle "${CLAUDE_YEDEK:-}"); YEDEK2=$(temizle "${CLAUDE_YEDEK2:-}")
for v in ANA YEDEK YEDEK2; do
  if [[ "${!v}" == sk-ant-api* ]]; then
    echo "::warning::Claude $v anahtarı bir API anahtarı (sk-ant-api...); kredi harcamamak için kullanılmıyor. 'claude setup-token' ile OAuth token verin."
    printf -v "$v" ''
  fi
done
[ -f "$BITTI" ] && ANA=""
[ -n "$ANA$YEDEK$YEDEK2" ] || { echo "::error::Claude tokenı yok (YEDEK2 / ANA / CODE sırası denendi)"; exit 1; }

calistir() {  # $1 = token, geri kalan = claude argümanları
  local k="$1"; shift
  env -u ANTHROPIC_API_KEY -u CLAUDE_API_KEY -u CLAUDE_ANA -u CLAUDE_YEDEK -u CLAUDE_YEDEK2 CLAUDE_CODE_OAUTH_TOKEN="$k" claude "$@"
}

LOG=$(mktemp)
for pair in "ANA:$ANA" "YEDEK:$YEDEK" "YEDEK2:$YEDEK2"; do
  isim=${pair%%:*}; k=${pair#*:}
  [ -n "$k" ] || continue
  [ -f "/tmp/claude_${isim}_bitti" ] && continue
  echo "Claude: $isim tokenı (fallback slot)"
  calistir "$k" "$@" 2>&1 | tee "$LOG"; RC=${PIPESTATUS[0]}
  [ "$RC" -eq 0 ] && { rm -f "$LOG"; exit 0; }
  if ! tail -n 40 "$LOG" | grep -qiE "$LIMIT"; then rm -f "$LOG"; exit "$RC"; fi
  echo "::warning::Claude $isim tokenı kota/yetki hatası verdi; sıradaki tokena geçiliyor"
  touch "/tmp/claude_${isim}_bitti"
done
rm -f "$LOG"
echo "::error::Tüm Claude tokenları başarısız oldu"
exit 1
