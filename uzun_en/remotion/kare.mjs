#!/usr/bin/env node
// Tek sahne önizleme: sahneyi yalnız başına paketler ve istenen anların karelerini PNG olarak çizer.
// Diğer sahne dosyalarından bağımsızdır (onlarda hata olsa da çalışır).
//
//   node kare.mjs --sahne 12 --bilgi                 # cümleler ve kelime zamanları (sahne içi sn)
//   node kare.mjs --sahne 12 --anlar 0.5,3.2,7       # bu anların kareleri + temas sayfası
//   node kare.mjs --sahne 12 --otomatik              # her cümlenin başı/ortası/sonu + sahne sonu
//   node kare.mjs --sahne 12 --otomatik --anlar 4.4  # ikisi birlikte
// Çıktı: out/onizleme/SNN/kare_<sn>.png ve out/onizleme/SNN/temas.jpg (2 sütun, küçük; zaman + altyazı yazılı)
import { bundle } from "@remotion/bundler";
import { openBrowser, renderStill, selectComposition } from "@remotion/renderer";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const KOK = path.dirname(fileURLToPath(import.meta.url));
const arg = (ad) => { const i = process.argv.indexOf(`--${ad}`); return i < 0 ? null : (process.argv[i + 1] ?? ""); };
const var_ = (ad) => process.argv.includes(`--${ad}`);
const id = Number(arg("sahne"));
if (!id) { console.error("kullanım: node kare.mjs --sahne N [--bilgi] [--anlar a,b] [--otomatik]"); process.exit(2); }
const veri = JSON.parse(fs.readFileSync(path.join(KOK, "src/tam/tam.gen.json"), "utf8"));
const s = veri.sahneler.find((x) => x.id === id);
const karakterAni = (nokta, i) => {
  for (let j = 0; j < nokta.length - 1; j++) {
    const [c0, t0] = nokta[j], [c1, t1] = nokta[j + 1];
    if (c0 <= i && i <= c1) return t0 + (t1 - t0) * ((i - c0) / Math.max(1, c1 - c0));
  }
  return nokta[nokta.length - 1][1];
};
if (var_("bilgi")) {
  console.log(`Sahne ${id}: süre ${s.sure.toFixed(2)} sn (videoda ${s.bas.toFixed(2)} sn'de başlar)`);
  console.log(`meta: ${JSON.stringify(s.meta)}`);
  s.cumleler.forEach((c, k) => {
    console.log(`\n[${k}] ${c.bas.toFixed(2)}–${(c.bas + c.sure).toFixed(2)} sn: ${c.metin}`);
    let i = 0;
    const kel = c.metin.split(" ").map((w) => { const j = c.metin.indexOf(w, i); i = j + w.length; return `${w}@${(c.bas + karakterAni(c.nokta, j)).toFixed(2)}`; });
    console.log("   " + kel.join("  "));
  });
  if (!arg("anlar") && !var_("otomatik")) process.exit(0);
}
let anlar = (arg("anlar") || "").split(",").filter(Boolean).map(Number);
if (var_("otomatik")) {
  for (const c of s.cumleler) anlar.push(c.bas + 0.15, c.bas + c.sure * 0.5, c.bas + c.sure - 0.1);
  anlar.push(s.sure - 0.05);
}
anlar = [...new Set(anlar.map((a) => Math.max(0, Math.min(s.sure - 1 / 30, a)).toFixed(2)))].map(Number).sort((a, b) => a - b);
const ad = `S${String(id).padStart(2, "0")}`;
const gecici = path.join(KOK, "src", "tam", `.onizleme-${process.pid}`);
const paket = path.join(KOK, "out", `.paket-${process.pid}`);
const cikti = path.join(KOK, "out", "onizleme", ad);
fs.mkdirSync(gecici, { recursive: true });
fs.mkdirSync(cikti, { recursive: true });
fs.writeFileSync(path.join(gecici, "index.tsx"), `import React from "react";
import { Composition, registerRoot } from "remotion";
import { Onizleme } from "../Onizleme";
import * as M from "../sahneler/${ad}";
const Kok: React.FC = () => <Composition id="Onizleme" component={() => <Onizleme id={${id}} Bilesen={M.default} ayar={(M as { ayar?: object }).ayar} />}
  durationInFrames={${Math.ceil(s.sure * veri.fps) + 1}} fps={${veri.fps}} width={1920} height={1080} />;
registerRoot(Kok);
`);
const tarayici = fs.existsSync("/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell")
  ? "/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell" : null;
let durum = 0;
try {
  const serveUrl = await bundle({ entryPoint: path.join(gecici, "index.tsx"), outDir: paket, enableCaching: false,
    publicDir: path.join(KOK, "public"), rootDir: KOK, onProgress: () => {} });
  const browser = await openBrowser("chrome", { browserExecutable: tarayici, chromiumOptions: {} });
  const composition = await selectComposition({ serveUrl, id: "Onizleme", puppeteerInstance: browser, browserExecutable: tarayici });
  const dosyalar = [];
  for (const a of anlar) {
    const frame = Math.min(composition.durationInFrames - 1, Math.round(a * veri.fps));
    const out = path.join(cikti, `kare_${a.toFixed(2)}.png`);
    await renderStill({ composition, serveUrl, output: out, frame, puppeteerInstance: browser, browserExecutable: tarayici, overwrite: true });
    dosyalar.push([a, out]);
    console.log(`${a.toFixed(2)} sn -> ${out}`);
  }
  await browser.close({ silent: true });
  const altyazi = (a) => { const T = s.bas + a; const p = veri.altyazi.find((x) => x.t0 <= T && T < x.t1); return p ? p.kelimeler.map((k) => k.w).join(" ") : ""; };
  const liste = dosyalar.map(([a, f]) => `${a}\t${f}\t${altyazi(a)}`).join("\n");
  execFileSync("python3", ["-c", `
import sys
from PIL import Image, ImageDraw, ImageFont
satirlar=[(l.split("\\t")+["",""])[:3] for l in sys.stdin.read().split("\\n") if l.strip()]
W,H=960,540
n=len(satirlar); sh=Image.new("RGB",(W*2,(H+40)*((n+1)//2)),"white")
try: f=ImageFont.truetype("/usr/share/fonts/opentype/inter/Inter-Bold.otf",22)
except OSError: f=None
for k,(a,yol,alt) in enumerate(satirlar):
    im=Image.open(yol).convert("RGB").resize((W,H)); x=(k%2)*W; y=(k//2)*(H+40)
    sh.paste(im,(x,y)); d=ImageDraw.Draw(sh); d.rectangle([x,y+H,x+W,y+H+40],fill=(20,20,20))
    d.text((x+8,y+H+8),f"{float(a):.2f} sn  |  {alt}"[:90],fill=(255,220,90),font=f)
sh.save(sys.argv[1],quality=85)
`, path.join(cikti, "temas.jpg")], { input: liste });
  console.log(`temas sayfası: ${path.join(cikti, "temas.jpg")}`);
} catch (e) {
  console.error("HATA:", e?.message ?? e);
  durum = 1;
} finally {
  fs.rmSync(gecici, { recursive: true, force: true });
  fs.rmSync(paket, { recursive: true, force: true });
}
process.exit(durum);
