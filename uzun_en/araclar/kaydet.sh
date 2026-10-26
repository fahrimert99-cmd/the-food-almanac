#!/usr/bin/env bash
# İş akışı çıktısını main'e kaydeder (çakışmaya karşı pull --rebase + yeniden deneme).
#   bash uzun_en/araclar/kaydet.sh "mesaj" yol1 [yol2 ...]
set -u
MESAJ="$1"; shift
git config user.name "uzun-en-bot"
git config user.email "uzun-en-bot@users.noreply.github.com"
if [ -n "${GH_TOKEN:-}" ]; then
  git remote set-url origin "https://x-access-token:${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
fi
for p in "$@"; do git add -A -- "$p" 2>/dev/null || true; done
if git diff --cached --quiet; then echo "kaydedilecek değişiklik yok"; exit 0; fi
# Hook'lar kapalı: Bash yetkili bir ajan .git/hooks içine betik yazmış olsa bile commit/pull sırasında
# (GH_TOKEN ortamdayken) çalışmaz.
git -c core.hooksPath=/dev/null commit --no-verify -qm "$MESAJ"
for i in 1 2 3 4 5 6; do
  if git -c core.hooksPath=/dev/null pull -q --rebase --autostash origin main && git -c core.hooksPath=/dev/null push --no-verify -q origin HEAD:main; then
    echo "kaydedildi: $MESAJ"; exit 0
  fi
  echo "push denemesi $i başarısız, bekleniyor..."; sleep $((i * 4))
done
echo "::error::push 6 denemede başarısız"; exit 1
