// Lemo levhalarını JPG olarak çizer (gorsel.py'nin son yedeği; görsel servisi ve kota gerekmez).
//   node uzun_en/lemo/levha.mjs isler.json
// isler.json: [{ "cikti": "…/05.jpg", "w": 1920, "h": 1080, "nesneler": [["bowl", "oats"], …], "tohum": 5, "sag_bos": true }]
// Tarayıcı: LEVHA_CHROME ya da PLAYWRIGHT_CHROME, yoksa sistemdeki Chrome/Chromium (GitHub koşucularında
// /usr/bin/google-chrome hazır). Bağımlılık: playwright-core (npm --prefix uzun_en/lemo install).
import fs from 'fs';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright-core';

const KOK = path.dirname(fileURLToPath(import.meta.url));
const TIP = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8' };

function tarayici() {
  const aday = [process.env.LEVHA_CHROME, process.env.PLAYWRIGHT_CHROME, '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser'];
  for (const k of ['/opt/pw-browsers']) {
    if (!fs.existsSync(k)) continue;
    for (const d of fs.readdirSync(k).sort().reverse()) {
      aday.push(path.join(k, d, 'chrome-linux', 'headless_shell'), path.join(k, d, 'chrome-linux', 'chrome'));
    }
  }
  return aday.find(p => p && fs.existsSync(p));
}

function sunucu() {
  return new Promise(res => {
    const s = http.createServer((q, r) => {
      const p = path.resolve(KOK, '.' + decodeURIComponent(q.url.split('?')[0]));
      if (!p.startsWith(KOK + path.sep) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end(); }
      r.writeHead(200, { 'Content-Type': TIP[path.extname(p)] || 'application/octet-stream' });
      fs.createReadStream(p).pipe(r);
    });
    s.listen(0, '127.0.0.1', () => res(s));
  });
}

const isler = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const exe = tarayici();
if (!exe) { console.error('levha: Chrome/Chromium bulunamadı (LEVHA_CHROME ile verin)'); process.exit(2); }
const srv = await sunucu();
const browser = await chromium.launch({ executablePath: exe, args: ['--font-render-hinting=none', '--force-color-profile=srgb'] });
let hata = 0;
try {
  const page = await browser.newPage({ viewport: { width: 1920, height: 1920 }, deviceScaleFactor: 1 });
  page.on('pageerror', e => console.error('levha: sayfa hatası:', e.message));
  await page.goto(`http://127.0.0.1:${srv.address().port}/levha.html`);
  await page.waitForFunction(() => window.READY === true, null, { timeout: 30000 });
  for (const is of isler) {
    const t0 = Date.now();
    try {
      const ciz = await page.evaluate(s => window.ciz(s), is);
      fs.mkdirSync(path.dirname(is.cikti), { recursive: true });
      await (await page.$('canvas')).screenshot({ path: is.cikti, type: 'jpeg', quality: 92 });
      console.log(JSON.stringify({ cikti: is.cikti, nesneler: ciz, ms: Date.now() - t0 }));
    } catch (e) {
      hata++;
      console.error(`levha: ${is.cikti} çizilemedi: ${e.message.split('\n')[0]}`);
    }
  }
} finally {
  await browser.close();
  srv.close();
}
process.exit(hata ? 1 : 0);
