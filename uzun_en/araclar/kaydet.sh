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
git commit -qm "$MESAJ"
for i in 1 2 3 4 5 6; do
  if git pull -q --rebase --autostash origin main && git push -q origin HEAD:main; then
    echo "kaydedildi: $MESAJ"; exit 0
  fi
  echo "push denemesi $i başarısız, bekleniyor..."; sleep $((i * 4))
done
echo "::error::push 6 denemede başarısız"; exit 1
