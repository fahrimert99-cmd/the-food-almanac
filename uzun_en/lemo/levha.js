// Lemo yedeği: görsel servisleri (NVIDIA, Cloudflare, Gemini) üretemediğinde sahne görselini kodla çizer.
// Lemo-opuscar'ın bakır gravür motoruyla (engine/, MIT) metinsiz bir natürmort levhası: kâğıt zemin, taramalı mürekkep
// ve hafif suluboya; kanalın FLUX gravür görselleriyle aynı dil. Tarifteki nesneler (gorsel.py lemo_nesneler) en çok üç
// figür olarak dizilir. Sahnede başlık varsa sağ üçte bir boş kalır (FLUX'taki SAG_BOS kuralı); dikey (Shorts) levhada
// konu çerçevenin ortasında, alt üçte bir boştur. Her şey tohumla belirlenir: aynı tarif hep aynı levhayı verir.
import { B, Wash, paperTexture } from './engine/index.js';

const LIGHT = [-0.6, -0.7];
const { RNG, noise1 } = B;

// ------------------------------------------------------------------ geometri yardımcıları
const ell = (cx, cy, rx, ry, n = 72, rot = 0) => B.ellipsePts(cx, cy, rx, ry, rot, n);
const arc = (cx, cy, rx, ry, a0, a1, n = 40) => B.ellipsePts(cx, cy, rx, ry, 0, n, a0, a1);
function rrect(x0, y0, x1, y1, r) {
  const P = [], q = (cx, cy, a0) => { for (let k = 0; k <= 8; k++) { const a = a0 + (k / 8) * Math.PI / 2; P.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]); } };
  q(x1 - r, y1 - r, 0); q(x0 + r, y1 - r, Math.PI / 2); q(x0 + r, y0 + r, Math.PI); q(x1 - r, y0 + r, Math.PI * 1.5);
  return P;
}
function lens(cx, cy, len, wid, rot, n = 48, ruffle = 0, seed = 1) {   // yaprak: iki ucu sivri
  const P = [], c = Math.cos(rot), s = Math.sin(rot);
  for (let k = 0; k < n; k++) {
    const u = k / n, a = u * Math.PI * 2, x = Math.cos(a) * len / 2;
    let y = Math.sin(a) * wid / 2 * Math.pow(Math.abs(Math.sin(a)), 0.15) * (1 - 0.15 * Math.cos(a));
    y += Math.sign(y) * ruffle * (noise1(k * 0.9, seed) - 0.5) * wid * 0.25;
    P.push([cx + c * x - s * y, cy + s * x + c * y]);
  }
  return P;
}
const rot = (pts, cx, cy, a) => { const c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y]) => [cx + c * (x - cx) - s * (y - cy), cy + s * (x - cx) + c * (y - cy)]); };
// birleşik organik biçim (brokoli tepesi, zerdeçal kökü, kemik): f(x, y) > 0 içerisi; sıfır eğrisi marching squares ile
function blob(fn, x0, y0, x1, y1, step = 3) {
  const nx = Math.ceil((x1 - x0) / step) + 1, ny = Math.ceil((y1 - y0) / step) + 1, V = new Float32Array(nx * ny);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) V[j * nx + i] = (i === 0 || j === 0 || i === nx - 1 || j === ny - 1) ? -1 : fn(x0 + i * step, y0 + j * step);
  const P = (i, j, va, i2, j2, vb) => { const u = va / (va - vb); return [x0 + (i + (i2 - i) * u) * step, y0 + (j + (j2 - j) * u) * step]; };
  const T = { 1: [[3, 0]], 2: [[0, 1]], 3: [[3, 1]], 4: [[1, 2]], 5: [[3, 0], [1, 2]], 6: [[0, 2]], 7: [[3, 2]], 8: [[2, 3]], 9: [[0, 2]], 10: [[0, 1], [2, 3]], 11: [[1, 2]], 12: [[1, 3]], 13: [[0, 1]], 14: [[0, 3]] };
  const segs = [];
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = V[j * nx + i], b = V[j * nx + i + 1], c = V[(j + 1) * nx + i + 1], d = V[(j + 1) * nx + i];
    let k = 0; if (a > 0) k |= 1; if (b > 0) k |= 2; if (c > 0) k |= 4; if (d > 0) k |= 8;
    if (k === 0 || k === 15) continue;
    const e = [P(i, j, a, i + 1, j, b), P(i + 1, j, b, i + 1, j + 1, c), P(i + 1, j + 1, c, i, j + 1, d), P(i, j + 1, d, i, j, a)];
    for (const [p, q] of T[k]) segs.push([e[p], e[q]]);
  }
  const key = p => Math.round(p[0] * 50) + ',' + Math.round(p[1] * 50), ends = new Map(), used = new Uint8Array(segs.length);
  segs.forEach((s, k) => { for (const e of [0, 1]) { const kk = key(s[e]); (ends.get(kk) || ends.set(kk, []).get(kk)).push(k); } });
  let best = [];
  for (let k0 = 0; k0 < segs.length; k0++) {
    if (used[k0]) continue; used[k0] = 1; const line = [segs[k0][0], segs[k0][1]];
    for (;;) { const end = line[line.length - 1], cand = (ends.get(key(end)) || []).find(k => !used[k]); if (cand == null) break; used[cand] = 1; const s = segs[cand]; line.push(key(s[0]) === key(end) ? s[1] : s[0]); }
    if (line.length > best.length) best = line;
  }
  return B.resample(best, 2.5);
}
const circ = (cx, cy, r) => (x, y) => 1 - Math.hypot(x - cx, y - cy) / r;
const capsule = (ax, ay, bx, by, r) => (x, y) => { const dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy, t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / L2)); return 1 - Math.hypot(x - ax - dx * t, y - ay - dy * t) / r; };
const union = (...fs) => (x, y) => Math.max(...fs.map(f => f(x, y)));

// ------------------------------------------------------------------ nesneler
// Her nesne geometri döndürür; çizim ve örtüşme (excl) dizgide yapılır. Parça: {polys, style, sp, tone, base, w}.
// (cx, by): yatay orta ve taban çizgisi; s: nesnenin yüksekliği (px).
// küçük nesne yığını (kabın içinde ya da terazi kefesinde): ceviz içi, kuru erik, böğürtlen, yumurta, kapsül
const RENK_IC = { walnuts: '#c99248', prunes: '#4e3a52', berries: '#5a3a6e', eggs: '#efe2c4', pills: '#e2c25e' };
function tane(x, y, r, v, R, k) {
  if (v === 'eggs') { const P = []; for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2, sy = Math.sin(a); P.push([x + Math.cos(a) * r * 0.78 * (1 - 0.1 * sy), y + sy * r]); } return { P, lines: [] }; }
  if (v === 'pills') return { P: rot([...arc(x + r * 0.6, y, r * 0.4, r * 0.4, -Math.PI / 2, Math.PI / 2, 10), ...arc(x - r * 0.6, y, r * 0.4, r * 0.4, Math.PI / 2, Math.PI * 1.5, 10)], x, y, R() * Math.PI), lines: [] };
  if (v === 'berries') return { P: ell(x, y, r * 0.75, r * 0.75, 28), lines: [] };
  const P = []; for (let i = 0; i < 44; i++) { const a = i / 44 * Math.PI * 2; const b = v === 'walnuts' ? 1 + 0.12 * (noise1(i * 0.7, k + 3) - 0.5) + 0.06 * Math.sin(a * 6) : 1 + 0.06 * (noise1(i * 0.6, k) - 0.5); P.push([x + Math.cos(a) * r * 1.05 * b, y + Math.sin(a) * r * 0.82 * b]); }
  const lines = v === 'walnuts' ? [[[x, y - r * 0.8], [x + r * 0.05, y], [x, y + r * 0.8]], arc(x - r * 0.45, y, r * 0.25, r * 0.5, -1.2, 1.2, 8), arc(x + r * 0.45, y, r * 0.25, r * 0.5, Math.PI - 1.2, Math.PI + 1.2, 8)] : [];
  return { P, lines };
}
function kume(cx, cy, w, h, v, R, n = 7) {
  const parts = [], lines = [], tint = [], foot = [], r = Math.min(w / 4.2, h / 1.7);
  const yer = []; for (let k = 0; k < n; k++) { const row = k < 3 ? 0 : k < 6 ? 1 : 2, i = row === 0 ? k : row === 1 ? k - 3 : k - 6, cnt = row === 0 ? 3 : row === 1 ? 3 : 1; yer.push([cx + (i - (cnt - 1) / 2) * r * 1.65 + (R() - 0.5) * r * 0.3, cy + h * 0.15 - row * r * 0.75 + (R() - 0.5) * r * 0.15]); }
  yer.sort((a, b) => a[1] - b[1]);                              // arkadakiler önce: öndekiler onları örter
  yer.forEach(([x, y], k) => { const t = tane(x, y, r, v, R, k); parts.push({ polys: [t.P], style: 'contour', sp: 2.6, base: v === 'prunes' ? 0.4 : 0.12, w: 1.1, small: true }); lines.push(...t.lines); foot.push(t.P); tint.push({ polys: [t.P], color: RENK_IC[v] || '#c99248', alpha: 0.55 }); });
  return { parts, lines, tint, foot };
}
const N = {};
N.bowl = (cx, by, s, v, R) => {
  const W = s * 2.1, ry = s * 0.2, top = by - s * 0.8, depth = by - top;
  const front = arc(cx, top, W / 2, ry, 0, Math.PI), curve = arc(cx, top, W / 2, depth, 0, Math.PI).reverse();
  const body = [...front, ...curve.slice(1, -1)], rim = ell(cx, top, W / 2, ry);
  const yigin = !!RENK_IC[v];
  const icerik = { oats: '#cfa766', yogurt: '#efe8d6', beans: '#9b6a48', cereal: '#d7a55a', soup: '#c98a4a', rice: '#efe6d0' }[v];
  const parts = [], tint = [{ polys: [body], color: '#d9cfb9', alpha: 0.32 }];
  if (yigin) {
    const k = kume(cx, top - ry * 0.55, W * 0.78, s * 0.42, v, R, 8);
    parts.push({ polys: [rim], tone: () => 0.82, sp: 3.4, angle: 0.9 }, ...k.parts, { polys: [body], style: 'contour', sp: 4.6, base: 0.08 });
    return { parts, lines: k.lines, tint: [...tint, ...k.tint], foot: [body, rim, ...k.foot], w: W, occl: true };
  }
  parts.push({ polys: [body], style: 'contour', sp: 4.6, base: 0.08 });
  if (icerik) {
    const mound = ell(cx, top - ry * 0.25, W / 2 * 0.86, ry * 0.86);
    parts.push({ polys: [rim], excl: [mound], tone: () => 0.85, sp: 3.6, angle: 0.9 });
    parts.push({ polys: [mound], style: 'stip', tone: B.sphereTone(cx, top - ry * 0.4, W / 2 * 0.86, ry, { base: 0.1 }), sp: 4.2 });
    tint.push({ polys: [mound], color: icerik, alpha: 0.6 });
  } else parts.push({ polys: [rim], tone: B.linTone(cx, top - ry, cx, top + ry, 0.85, 0.35), sp: 3.6, angle: 0.9 });
  return { parts, tint, foot: [body, rim], w: W };
};
N.plate = (cx, by, s, v, R) => {
  const W = s * 2.6, ry = s * 0.36, cy = by - ry;
  const outer = ell(cx, cy, W / 2, ry), inner = ell(cx, cy - ry * 0.05, W / 2 * 0.7, ry * 0.68);
  const parts = [{ polys: [outer], excl: [inner], tone: B.linTone(cx - W / 2, cy, cx + W / 2, cy, 0.25, 0.6), sp: 4.2, angle: 0.2 }, { polys: [inner], tone: () => 0.12, sp: 6, angle: 0.25, w: 1.0 }];
  const tint = [{ polys: [outer], color: '#e6dfcf', alpha: 0.3 }];
  if (RENK_IC[v]) { const k = kume(cx, cy - ry * 0.35, W * 0.6, s * 0.5, v, R, 7); return { parts: [...parts, ...k.parts], lines: k.lines, tint: [...tint, ...k.tint], foot: [outer, ...k.foot], w: W, occl: true }; }
  return { parts, tint, foot: [outer], w: W };
};
N.glass = (cx, by, s, v) => {
  const tw = s * 0.34, bw = s * 0.27, top = by - s;
  const body = [[cx - tw, top], [cx + tw, top], [cx + bw, by - s * 0.03], [cx + bw * 0.96, by], [cx - bw * 0.96, by], [cx - bw, by - s * 0.03]];
  const lv = top + s * 0.32, lw = bw + (tw - bw) * (1 - 0.32);
  const liquid = [[cx - lw, lv], [cx + lw, lv], [cx + bw, by - s * 0.03], [cx + bw * 0.96, by], [cx - bw * 0.96, by], [cx - bw, by - s * 0.03]];
  const renk = { milk: '#f1ede2', juice: '#e09a45', water: '#b9cbd1', kefir: '#ece6d4', smoothie: '#b75a6a', tea: '#b5803f', oil: '#c4b04a' }[v] || '#b9cbd1';
  const parts = [{ polys: [body], style: 'none', w: 1.5 }, { polys: [liquid], tone: B.linTone(cx - lw, 0, cx + lw, 0, 0.55, 0.15), sp: 4.4, angle: Math.PI / 2 - 0.05 }];
  const lines = [[[cx - tw * 0.72, top + s * 0.06], [cx - bw * 0.7, by - s * 0.08]], ...ell(cx, top, tw, s * 0.045).length ? [] : []];
  return { parts, lines, rims: [ell(cx, top, tw, s * 0.045), ell(cx, lv, lw, s * 0.04)], tint: [{ polys: [liquid], color: renk, alpha: 0.5 }], foot: [body], w: tw * 2 };
};
N.bottle = (cx, by, s, v) => {
  const pill = v === 'pills', bw = s * (pill ? 0.3 : 0.2), bh = s * (pill ? 0.66 : 0.6), nw = s * (pill ? 0.24 : 0.075), top = by - s;
  const sh = (x0, x1, y0, y1, n = 10) => Array.from({ length: n + 1 }, (_, i) => { const u = i / n, e = u * u * (3 - 2 * u); return [x0 + (x1 - x0) * e, y0 + (y1 - y0) * u]; });
  const body = pill ? rrect(cx - bw, by - bh, cx + bw, by, s * 0.05)
    : [[cx - bw + s * 0.03, by], [cx + bw - s * 0.03, by], [cx + bw, by - s * 0.03], [cx + bw, by - bh], ...sh(cx + bw, cx + nw, by - bh, top + s * 0.22).slice(1), [cx + nw, top + s * 0.06], [cx - nw, top + s * 0.06], ...sh(cx - nw, cx - bw, top + s * 0.22, by - bh), [cx - bw, by - s * 0.03]];
  const cap = pill ? rrect(cx - nw * 1.12, by - bh - s * 0.2, cx + nw * 1.12, by - bh + s * 0.01, s * 0.03) : rrect(cx - nw * 1.15, top, cx + nw * 1.15, top + s * 0.08, s * 0.015);
  const label = rrect(cx - bw * 0.98, by - bh * 0.78, cx + bw * 0.98, by - bh * 0.3, 2);
  const renk = { oil: '#a99a3a', vinegar: '#b4783a', pills: '#d8cfb8', supplement: '#c08a3a', sauce: '#8a3a2a' }[v] || '#9aa76a';
  const parts = [{ polys: [body], excl: [label, cap], tone: B.cylTone(cx, by - bh / 2, bw, Math.PI / 2, { base: 0.1 }), style: 'hatch', sp: 4.4, angle: Math.PI / 2 - 0.04 }, { polys: [label], tone: () => 0.06, sp: 7, w: 0.8, angle: 0.1 }, { polys: [cap], sp: 3.2, base: 0.35, angle: 0.4 }];
  return { parts, tint: [{ polys: [body], color: renk, alpha: 0.42 }], foot: [body, cap], w: bw * 2 };
};
N.jar = (cx, by, s, v) => {
  const bw = s * 0.36, top = by - s * 0.82, body = rrect(cx - bw, top, cx + bw, by, s * 0.08), lid = rrect(cx - bw * 1.04, top - s * 0.16, cx + bw * 1.04, top + s * 0.02, s * 0.03);
  return { parts: [{ polys: [body], excl: [lid], tone: B.cylTone(cx, by - s * 0.4, bw, Math.PI / 2, { base: 0.08 }), sp: 4.4, angle: Math.PI / 2 - 0.04 }, { polys: [lid], sp: 3, base: 0.35, angle: Math.PI / 2 }], tint: [{ polys: [body], color: v === 'honey' ? '#d9a03a' : '#ece6d4', alpha: 0.4 }], foot: [body, lid], w: bw * 2 };
};
N.cup = (cx, by, s, v) => {
  const w = s * 0.42, top = by - s * 0.82, rim = ell(cx, top, w, s * 0.1), saucer = ell(cx, by - s * 0.02, w * 1.85, s * 0.14);
  const body = [...arc(cx, top, w, s * 0.1, 0, Math.PI), [cx - w, top], [cx - w * 0.82, by - s * 0.12], ...arc(cx, by - s * 0.12, w * 0.82, s * 0.08, Math.PI, 0).slice(1), [cx + w * 0.82, by - s * 0.12], [cx + w, top]];
  const hO = ell(cx + w * 1.12, top + s * 0.3, s * 0.2, s * 0.22), hI = ell(cx + w * 1.12, top + s * 0.3, s * 0.11, s * 0.13);
  const liq = ell(cx, top + s * 0.012, w * 0.86, s * 0.075);
  const renk = v === 'tea' ? '#a7703a' : '#5e3b29';
  return {
    parts: [{ polys: [saucer], excl: [body, hO], tone: B.linTone(cx - w * 2, 0, cx + w * 2, 0, 0.2, 0.6), sp: 4, angle: 0.15 },
      { polys: [hO], excl: [hI, body], sp: 3.4, base: 0.3, angle: 0.8 },
      { polys: [body], tone: B.cylTone(cx, by - s * 0.45, w, Math.PI / 2, { base: 0.06 }), sp: 4.2, angle: Math.PI / 2 - 0.04 },
      { polys: [rim], excl: [liq], tone: () => 0.15, sp: 6, w: 1.2 }, { polys: [liq], tone: () => 0.82, sp: 2.8, angle: 0.2 }],
    lines: [0, 1].map(k => Array.from({ length: 14 }, (_, i) => [cx - s * 0.08 + k * s * 0.16 + Math.sin(i * 0.7 + k) * s * 0.04, top - s * 0.12 - i * s * 0.03])),
    tint: [{ polys: [body], color: '#e6dccb', alpha: 0.3 }, { polys: [liq], color: renk, alpha: 0.6 }], foot: [body, saucer, hO], w: w * 3.7,
  };
};
N.spoon = (cx, by, s) => {
  const b = ell(cx - s * 0.62, by - s * 0.12, s * 0.26, s * 0.12, 48, -0.12), h = rot(rrect(cx - s * 0.36, by - s * 0.16, cx + s * 0.75, by - s * 0.11, 3), cx, by, -0.12);
  return { parts: [{ polys: [b], style: 'contour', sp: 3.2, base: 0.15 }, { polys: [h], excl: [b], sp: 2.6, base: 0.25, angle: -0.12 }], tint: [{ polys: [b, h], color: '#b8b5a8', alpha: 0.3 }], foot: [b, h], w: s * 1.7 };
};
N.pills = (cx, by, s, v, R) => {
  const parts = [], tint = [], foot = [];
  for (let k = 0; k < 6; k++) {
    const x = cx + (R() - 0.5) * s * 1.2, y = by - s * 0.12 - R() * s * 0.22, a = R() * Math.PI, L = s * 0.42, r = s * 0.1;
    const p = rot([...arc(x + L / 2 - r, y, r, r, -Math.PI / 2, Math.PI / 2, 14), ...arc(x - L / 2 + r, y, r, r, Math.PI / 2, Math.PI * 1.5, 14)], x, y, a);
    parts.push({ polys: [p], style: 'contour', sp: 2.6, base: 0.12, w: 1.1, small: true }); foot.push(p);
    tint.push({ polys: [p], color: v === 'tablet' ? '#ece6d8' : k % 2 ? '#e2c25e' : '#efe6cf', alpha: 0.5 });
  }
  return { parts, tint, foot, w: s * 1.4 };
};
N.egg = (cx, by, s, v, R) => {
  const parts = [], tint = [], foot = [], n = 3;
  for (let k = 0; k < n; k++) {
    const x = cx + (k - 1) * s * 0.52 + (R() - 0.5) * s * 0.06, h = s * (k === 1 ? 0.92 : 0.8), y = by - h / 2 - (k === 1 ? s * 0.06 : 0);
    const P = []; for (let i = 0; i < 64; i++) { const a = i / 64 * Math.PI * 2, sy = Math.sin(a); P.push([x + Math.cos(a) * h * 0.36 * (1 - 0.12 * sy), y + sy * h / 2]); }
    parts.push({ polys: [P], style: 'contour', sp: 3.6, base: 0.05, order: k === 1 ? 0 : 1 }); foot.push(P);
    tint.push({ polys: [P], color: '#efe2c4', alpha: 0.45 });
  }
  return { parts: [parts[1], parts[0], parts[2]], tint, foot, w: s * 1.5, occl: true };
};
N.notebook = (cx, by, s, v, R) => {
  const n = v === 'stack' ? 6 : 1, w = s * (n > 1 ? 1.05 : 1.25), d = s * (n > 1 ? 0.36 : 0.42), t = n > 1 ? s * 0.11 : s * 0.08;
  const parts = [], lines = [], tint = [], foot = [];
  for (let k = 0; k < n; k++) {                              // alttan üste: üstteki dosya en son çizilir, alttakileri örter
    const y = by - k * t * 0.92, dx = (R() - 0.5) * s * 0.05;
    const topF = [[cx + dx - w / 2 - d * 0.5, y - t - d], [cx + dx + w / 2 - d * 0.5, y - t - d], [cx + dx + w / 2 + d * 0.5, y - t], [cx + dx - w / 2 + d * 0.5, y - t]];
    const side = [[cx + dx - w / 2 + d * 0.5, y - t], [cx + dx + w / 2 + d * 0.5, y - t], [cx + dx + w / 2 + d * 0.5, y], [cx + dx - w / 2 + d * 0.5, y]];
    parts.push({ polys: [side], tone: () => 0.12, style: 'none', w: 1.1 }, { polys: [topF], tone: B.linTone(cx - w, 0, cx + w, 0, 0.3, 0.6), sp: 4.4, angle: 0.15, style: k === n - 1 ? 'hatch' : 'none', w: 1.2 });
    for (let j = 1; j < 4; j++) lines.push([[cx + dx - w / 2 + d * 0.5 + 6, y - t + j * t / 4], [cx + dx + w / 2 + d * 0.5 - 4, y - t + j * t / 4]]);
    foot.push(topF, side); tint.push({ polys: k === n - 1 ? [topF, side] : [side], color: k % 2 ? '#d8c8a2' : '#c2a575', alpha: 0.42 });
  }
  return { parts, lines, tint, foot, w: w + d, occl: true };
};
N.scale = (cx, by, s, v, R) => {
  const base = [[cx - s * 0.28, by], [cx + s * 0.28, by], [cx + s * 0.18, by - s * 0.08], [cx - s * 0.18, by - s * 0.08]];
  const post = rrect(cx - s * 0.03, by - s * 0.95, cx + s * 0.03, by - s * 0.08, 2), beam = rrect(cx - s * 0.62, by - s * 0.95, cx + s * 0.62, by - s * 0.91, 2);
  const tilt = RENK_IC[v] ? s * 0.05 : 0;                    // dolu kefe biraz aşağıda
  const panL = [...arc(cx - s * 0.58, by - s * 0.42 + tilt, s * 0.25, s * 0.09, 0, Math.PI)], panR = [...arc(cx + s * 0.58, by - s * 0.42 - tilt, s * 0.25, s * 0.09, 0, Math.PI)];
  const lines = [];
  for (const sx of [-1, 1]) { const x = cx + sx * s * 0.58, py = by - s * 0.42 + (sx < 0 ? tilt : -tilt); lines.push([[x, by - s * 0.91], [x - s * 0.25, py]], [[x, by - s * 0.91], [x + s * 0.25, py]]); }
  const parts = [{ polys: [base], sp: 3, base: 0.3 }, { polys: [post], sp: 2.4, base: 0.3, angle: Math.PI / 2 }, { polys: [beam], sp: 2.4, base: 0.3 }, { polys: [panR], style: 'contour', sp: 3, base: 0.2 }];
  const tint = [{ polys: [base, post, beam, panL, panR], color: '#b89a5c', alpha: 0.4 }], foot = [base, post, beam, panL, panR];
  if (RENK_IC[v]) { const k = kume(cx - s * 0.58, by - s * 0.5 + tilt, s * 0.44, s * 0.22, v, R, 6); parts.push(...k.parts); lines.push(...k.lines); tint.push(...k.tint); foot.push(...k.foot); }
  parts.push({ polys: [panL], style: 'contour', sp: 3, base: 0.2 });
  return { parts, lines, tint, foot, w: s * 1.5, occl: !!RENK_IC[v] };
};
N.measure = (cx, by, s, v, R) => {   // cam ölçü kabı: ağzı geniş, solda gaga, sağda kulp, yanında çizgiler
  const tw = s * 0.42, bw = s * 0.34, top = by - s * 0.92;
  const body = [[cx - tw - s * 0.06, top - s * 0.02], [cx - tw + s * 0.04, top + s * 0.04], [cx + tw, top], [cx + bw, by - s * 0.03], [cx + bw * 0.96, by], [cx - bw * 0.96, by], [cx - bw, by - s * 0.03], [cx - tw, top + s * 0.08]];
  const hO = ell(cx + tw + s * 0.1, top + s * 0.36, s * 0.16, s * 0.24), hI = ell(cx + tw + s * 0.1, top + s * 0.36, s * 0.08, s * 0.15);
  const lines = [[[cx - tw * 0.7, top + s * 0.1], [cx - bw * 0.7, by - s * 0.08]]];
  for (let j = 1; j <= 4; j++) { const y = by - j * s * 0.18; lines.push([[cx - bw * 0.15, y], [cx + bw * (j % 2 ? 0.25 : 0.45), y]]); }
  const parts = [{ polys: [hO], excl: [hI, body], tone: () => 0.25, sp: 3.2, angle: 0.6 }];
  const tint = [{ polys: [body], color: '#c9d3d5', alpha: 0.25 }], foot = [body, hO];
  if (RENK_IC[v]) { const k = kume(cx, by - s * 0.3, bw * 1.7, s * 0.5, v, R, 7); parts.push(...k.parts); lines.push(...k.lines); tint.push(...k.tint); }
  else if (v) { const lq = [[cx - bw * 0.99, by - s * 0.45], [cx + bw * 0.99, by - s * 0.45], [cx + bw, by - s * 0.03], [cx - bw, by - s * 0.03]]; parts.push({ polys: [lq], tone: () => 0.3, sp: 4.4, angle: Math.PI / 2 }); }
  parts.push({ polys: [body], style: 'none', w: 1.5 });
  return { parts, lines, rims: [ell(cx + s * 0.02, top + s * 0.03, tw * 1.02, s * 0.045)], tint, foot, w: tw * 2 + s * 0.3, occl: true };
};
N.magnifier = (cx, by, s, v, R) => {   // masada yatan büyüteç: basık mercek halkası ve sapı
  const lx = cx - s * 0.35, ly = by - s * 0.2, rx = s * 0.5, ryy = s * 0.2;
  const ringO = ell(lx, ly, rx, ryy), ringI = ell(lx, ly, rx * 0.86, ryy * 0.82);
  const handle = rot(rrect(lx + rx * 0.92, ly - s * 0.045, lx + rx + s * 0.75, ly + s * 0.045, s * 0.04), lx + rx, ly, 0.22);
  const lines = [arc(lx - rx * 0.2, ly - ryy * 0.1, rx * 0.5, ryy * 0.45, Math.PI * 1.1, Math.PI * 1.55, 10)];
  return { parts: [{ polys: [handle], excl: [ringO], tone: B.linTone(0, ly - s * 0.05, 0, ly + s * 0.08, 0.2, 0.75), sp: 2.6, angle: 0.22 }, { polys: [ringO], excl: [ringI], tone: () => 0.5, sp: 2.4, angle: 0.4 }, { polys: [ringI], tone: () => 0.08, sp: 6, angle: -0.5, w: 0.9 }],
    lines, tint: [{ polys: [ringO, handle], color: '#b8995a', alpha: 0.45 }, { polys: [ringI], color: '#cfdadb', alpha: 0.25 }], foot: [ringO, handle], w: s * 1.75 };
};
N.tape = (cx, by, s, v, R) => {   // kıvrılmış mezura: sarmal halkalar ve dışarı uzanan şerit
  const r = s * 0.42, cy = by - r * 0.42, coil = ell(cx, cy, r, r * 0.42), lines = [];
  for (let k = 1; k < 5; k++) lines.push(ell(cx, cy, r * (1 - k * 0.17), r * 0.42 * (1 - k * 0.17), 48));
  const strip = []; for (let i = 0; i <= 30; i++) { const u = i / 30; strip.push([cx + r * 0.9 + u * s * 0.9, by - s * 0.03 - Math.sin(u * Math.PI) * s * 0.12]); }
  const band = [...strip.map(([x, y]) => [x, y - s * 0.045]), ...strip.slice().reverse().map(([x, y]) => [x, y + s * 0.045])];
  for (let i = 2; i < 30; i += 2) { const [x, y] = strip[i]; lines.push([[x, y - s * 0.045], [x, y - (i % 6 === 0 ? s * 0.005 : s * 0.025)]]); }
  return { parts: [{ polys: [band], tone: () => 0.15, sp: 5, w: 1.1, angle: 0.1 }, { polys: [coil], tone: B.sphereTone(cx, cy, r, r * 0.42, { base: 0.1 }), sp: 3.4, angle: 0.3 }], lines, tint: [{ polys: [coil, band], color: '#d9b84a', alpha: 0.55 }], foot: [coil, band], w: r * 2 + s * 0.9 };
};
N.dial = (cx, by, s) => {   // banyo tartısı
  const pl = rrect(cx - s * 0.75, by - s * 0.22, cx + s * 0.75, by, s * 0.08), di = ell(cx, by - s * 0.32, s * 0.24, s * 0.24);
  const lines = []; for (let k = -5; k <= 5; k++) { const a = -Math.PI / 2 + k * 0.22; lines.push([[cx + Math.cos(a) * s * 0.2, by - s * 0.32 + Math.sin(a) * s * 0.2], [cx + Math.cos(a) * s * 0.16, by - s * 0.32 + Math.sin(a) * s * 0.16]]); }
  lines.push([[cx, by - s * 0.32], [cx + s * 0.04, by - s * 0.48]]);
  return { parts: [{ polys: [pl], excl: [di], tone: B.linTone(cx, by - s * 0.22, cx, by, 0.2, 0.6), sp: 4, angle: 0.05 }, { polys: [di], tone: () => 0.05, style: 'none', w: 1.6 }], lines, tint: [{ polys: [pl], color: '#c9cbc6', alpha: 0.35 }], foot: [pl, di], w: s * 1.5 };
};
N.fruit = (cx, by, s, v, R) => {
  const renk = { apple: '#b5483a', orange: '#df8a36', grapefruit: '#e38a6e', lemon: '#e2c24a', prune: '#4a3550', plum: '#5a3a68', tomato: '#c2432f', peach: '#e6a070', beet: '#8a2e4c', fruit: '#c0703a' }[v] || '#c0703a';
  const r = s * (v === 'beet' ? 0.33 : 0.46), cy = by - r * 0.98 - (v === 'beet' ? r * 0.25 : 0), parts = [], lines = [], tint = [];
  if (v === 'grapefruit' || v === 'orange' && R() < 0.5) {   // yarıya kesilmiş narenciye: kabuk halkası ve dilimler
    const out = ell(cx, cy, r, r * 0.86), pulp = ell(cx, cy, r * 0.84, r * 0.72);
    parts.push({ polys: [out], excl: [pulp], tone: () => 0.45, sp: 3.2, angle: 0.6 });
    for (let k = 0; k < 10; k++) { const a = k / 10 * Math.PI * 2; lines.push([[cx + Math.cos(a) * r * 0.08, cy + Math.sin(a) * r * 0.07], [cx + Math.cos(a) * r * 0.8, cy + Math.sin(a) * r * 0.68]]); }
    parts.push({ polys: [pulp], style: 'stip', tone: () => 0.35, sp: 3 });
    tint.push({ polys: [out], color: renk, alpha: 0.55 });
    return { parts, lines, tint, foot: [out], w: r * 2 };
  }
  const flat = v === 'tomato' ? 0.82 : v === 'prune' || v === 'plum' ? 1.12 : 0.95;
  const body = []; for (let i = 0; i < 80; i++) { const a = i / 80 * Math.PI * 2; body.push([cx + Math.cos(a) * r * (v === 'prune' ? 0.8 : 1), cy + Math.sin(a) * r * flat * (1 + 0.04 * Math.sin(a * 2 + 1)) + (Math.sin(a) < 0 ? Math.pow(Math.max(0, Math.cos(a * 4)), 30) * r * 0.06 : 0)]); }
  parts.push({ polys: [body], style: 'contour', sp: v === 'prune' ? 2.8 : 3.8, base: v === 'prune' ? 0.4 : 0.08 });
  if (v === 'orange' || v === 'lemon') parts.push({ polys: [body], style: 'stip', tone: B.sphereTone(cx, cy, r, r, { base: 0 }), sp: 5 });
  const topY = cy - r * flat;
  if (v === 'beet') {
    lines.push(Array.from({ length: 10 }, (_, i) => [cx + Math.sin(i * 0.3) * r * 0.08, cy + r * flat + i * r * 0.035]));
    for (let k = -1; k <= 1; k++) { const L = lens(cx + k * r * 0.34, topY - r * 0.5, r * 0.8, r * 0.34, -Math.PI / 2 + k * 0.45, 40, 0.6, 3 + k); parts.push({ polys: [L], sp: 3.4, base: 0.15, angle: k * 0.5 }); tint.push({ polys: [L], color: '#5f7f44', alpha: 0.45 }); lines.push([[cx + k * r * 0.1, topY], [cx + k * r * 0.45, topY - r * 0.3]]); }
  } else if (v === 'tomato') {
    for (let k = 0; k < 5; k++) { const a = -Math.PI / 2 + k / 5 * Math.PI * 2; lines.push([[cx, topY + r * 0.06], [cx + Math.cos(a) * r * 0.3, topY + r * 0.06 + Math.sin(a) * r * 0.12]]); }
  } else if (v !== 'prune') {
    lines.push([[cx, topY + r * 0.05], [cx + r * 0.04, topY - r * 0.22], [cx + r * 0.1, topY - r * 0.32]]);
    if (v !== 'lemon') { const L = lens(cx + r * 0.38, topY - r * 0.24, r * 0.62, r * 0.26, -0.35, 40, 0, 4); parts.push({ polys: [L], sp: 3, base: 0.1, angle: -0.3 }); tint.push({ polys: [L], color: '#6f8f4e', alpha: 0.45 }); }
  }
  tint.unshift({ polys: [body], color: renk, alpha: v === 'prune' ? 0.5 : 0.55 });
  return { parts, lines, tint, foot: [body], w: r * 2 };
};
N.berries = (cx, by, s, v, R) => {
  const parts = [], tint = [], foot = [];
  for (let k = 0; k < 7; k++) { const x = cx + (R() - 0.5) * s * 0.7, y = by - s * 0.12 - R() * s * 0.32, r = s * 0.11; const P = ell(x, y, r, r, 36); parts.push({ polys: [P], style: 'contour', sp: 2.6, base: 0.25, w: 1.1, small: true }); foot.push(P); tint.push({ polys: [P], color: '#5a3a6e', alpha: 0.55 }); }
  return { parts, tint, foot, w: s * 0.9 };
};
N.leaves = (cx, by, s, v, R) => {
  const parts = [], lines = [], tint = [], foot = [], ruf = v === 'kale' ? 1.2 : 0.25;
  for (let k = 0; k < 5; k++) {
    const a = -Math.PI / 2 + (k - 2) * 0.38 + (R() - 0.5) * 0.1, len = s * (0.95 + R() * 0.2), x0 = cx + (k - 2) * s * 0.07, y0 = by - s * 0.04;
    const mx = x0 + Math.cos(a) * len * 0.52, my = y0 + Math.sin(a) * len * 0.52, L = lens(mx, my, len, len * 0.42, a, 56, ruf, 7 + k);
    parts.push({ polys: [L], sp: 3.4, base: 0.12, angle: a + 0.9, order: k % 2 }); foot.push(L);
    lines.push([[x0, y0], [x0 + Math.cos(a) * len * 0.98, y0 + Math.sin(a) * len * 0.98]]);
    for (let j = 1; j < 6; j++) { const u = j / 6.5, px = x0 + Math.cos(a) * len * u, py = y0 + Math.sin(a) * len * u; for (const sd of [-1, 1]) lines.push([[px, py], [px + Math.cos(a + sd * 0.8) * len * 0.15, py + Math.sin(a + sd * 0.8) * len * 0.15]]); }
    tint.push({ polys: [L], color: v === 'kale' ? '#4f6e45' : '#6b8f4c', alpha: 0.5 });
  }
  return { parts, lines, tint, foot, w: s * 1.2, occl: true };
};
N.broccoli = (cx, by, s, v, R) => {
  const fs = []; for (let k = 0; k < 9; k++) { const a = Math.PI + (k / 8) * Math.PI, rr = s * (0.26 + R() * 0.06); fs.push(circ(cx + Math.cos(a) * s * 0.34, by - s * 0.6 + Math.sin(a) * s * 0.26, rr)); }
  fs.push(circ(cx, by - s * 0.72, s * 0.3));
  const crown = blob(union(...fs), cx - s, by - s * 1.2, cx + s, by - s * 0.2, 3);
  const stem = [[cx - s * 0.12, by - s * 0.42], [cx + s * 0.12, by - s * 0.42], [cx + s * 0.09, by], [cx - s * 0.09, by]];
  return { parts: [{ polys: [stem], excl: [crown], sp: 3.2, base: 0.15, angle: Math.PI / 2 - 0.1 }, { polys: [crown], style: 'stip', tone: B.sphereTone(cx, by - s * 0.65, s * 0.6, s * 0.4, { base: 0.05 }), sp: 4.8 }, { polys: [crown], style: 'none', w: 1.6 }], tint: [{ polys: [crown, stem], color: '#5f8a48', alpha: 0.5 }], foot: [crown, stem], w: s * 1.2 };
};
N.garlic = (cx, by, s, v, R) => {
  const P = []; for (let i = 0; i < 80; i++) { const a = i / 80 * Math.PI * 2, sy = Math.sin(a), w = s * 0.46 * (1 - 0.35 * Math.max(0, -sy)); P.push([cx + Math.cos(a) * w, by - s * 0.42 + sy * s * 0.42 * (sy < 0 ? 1.25 : 1)]); }
  const lines = []; for (let k = -2; k <= 2; k++) lines.push(Array.from({ length: 16 }, (_, i) => { const u = i / 15; return [cx + k * s * 0.15 * Math.sin(u * Math.PI) * 1.1, by - s * 0.94 + u * s * 0.9]; }));
  lines.push([[cx, by - s * 0.94], [cx + s * 0.03, by - s * 1.08]]);
  for (let k = 0; k < 9; k++) lines.push([[cx + (k - 4) * s * 0.025, by - s * 0.02], [cx + (k - 4) * s * 0.05, by + s * 0.06]]);
  return { parts: [{ polys: [P], style: 'contour', sp: 3.6, base: 0.04 }], lines, tint: [{ polys: [P], color: '#ece1c6', alpha: 0.45 }], foot: [P], w: s * 0.95 };
};
N.root = (cx, by, s, v, R) => {   // zerdeçal / zencefil
  const fs = [capsule(cx - s * 0.6, by - s * 0.22, cx + s * 0.4, by - s * 0.3, s * 0.15), capsule(cx - s * 0.1, by - s * 0.28, cx + s * 0.05, by - s * 0.62, s * 0.12), capsule(cx + s * 0.3, by - s * 0.3, cx + s * 0.62, by - s * 0.52, s * 0.11)];
  const P = blob(union(...fs), cx - s, by - s, cx + s, by, 3), lines = [];
  for (let k = 0; k < 7; k++) { const x = cx - s * 0.5 + k * s * 0.15; lines.push(arc(x, by - s * 0.26, s * 0.03, s * 0.13, Math.PI * 0.6, Math.PI * 1.4, 10)); }
  return { parts: [{ polys: [P], style: 'contour', sp: 3.4, base: 0.12 }], lines, tint: [{ polys: [P], color: v === 'ginger' ? '#c8a26a' : '#d4902a', alpha: 0.55 }], foot: [P], w: s * 1.4 };
};
N.walnut = (cx, by, s, v, R) => {   // yarım ceviz: kabuk, kesik kenar ve iki loblu iç (bütün ceviz hindistancevizi gibi okunuyordu)
  const a = s * 0.62, b = s * 0.5, cy = by - b * 1.02;
  const egg = (A, Bb, pt) => { const P = []; for (let i = 0; i < 120; i++) { const th = i / 120 * Math.PI * 2, sn = Math.sin(th); P.push([cx + A * Math.cos(th) * (1 - 0.07 * sn), cy + Bb * sn * (1 + 0.06 * sn) + pt * Math.pow(Math.max(0, sn), 10)]); } return P; };
  const outer = egg(a, b, s * 0.05), rim = egg(a * 0.9, b * 0.88, s * 0.04);
  const lobe = side => { const P = [], n = 90, la = a * 0.8, lb = b * 0.78; for (let i = 0; i <= n; i++) { const th = Math.PI / 2 + side * (i / n) * Math.PI, sn = Math.sin(th), c = Math.cos(th); let x = la * c * (1 - 0.07 * sn), y = lb * sn * (1 + 0.06 * sn); const L = Math.hypot(x, y) || 1, k = noise1(i * 0.16, 5 + side) - 0.5 + (noise1(i * 0.45, 9 + side) - 0.5) * 0.4; x += x / L * k * s * 0.07; y += y / L * k * s * 0.07; P.push([cx + x, cy + y]); } for (let i = 1; i < 24; i++) { const u = i / 24; P.push([cx - side * (s * 0.025 + Math.sin(u * 9) * s * 0.008), cy - lb * 0.96 + u * lb * 1.92]); } return P; };
  const L = lobe(1), Rr = lobe(-1), lines = [];
  for (const side of [1, -1]) for (let k = 0; k < 6; k++) { const th = Math.PI / 2 + side * (0.15 + 0.7 * (k + R() * 0.5) / 6) * Math.PI; let x = cx + a * 0.78 * Math.cos(th), y = cy + b * 0.76 * Math.sin(th), d = Math.atan2(cy - y, cx - x) + (R() - 0.5) * 0.6; const P = [[x, y]]; for (let t = 0; t < s * 0.28; t += 3) { d += (noise1(t * 0.05 + k * 7, side + 3) - 0.5) * 0.35; x += Math.cos(d) * 3; y += Math.sin(d) * 3; P.push([x, y]); } lines.push(P); }
  return { parts: [{ polys: [outer], excl: [rim], tone: B.linTone(cx - a, cy - b, cx + a, cy + b, 0.15, 0.7), sp: 3, angle: -0.9, w: 1.8 }, { polys: [rim], excl: [L, Rr], tone: () => 0.88, sp: 3, angle: 0.9 }, { polys: [L, Rr], style: 'contour', sp: 3.4, base: 0.1 }], lines, tint: [{ polys: [L, Rr], color: '#c99248', alpha: 0.55 }, { polys: [outer], color: '#a07a50', alpha: 0.25 }], foot: [outer], w: a * 2 };
};
N.fish = (cx, by, s) => {
  const L = s * 1.9, h = s * 0.5, cy = by - h * 0.6, body = [];
  for (let i = 0; i <= 40; i++) { const u = i / 40, x = cx - L / 2 + u * L * 0.82; body.push([x, cy - h * Math.pow(Math.sin(Math.PI * u), 0.8) * (1 - 0.25 * u)]); }
  for (let i = 40; i >= 0; i--) { const u = i / 40, x = cx - L / 2 + u * L * 0.82; body.push([x, cy + h * 0.8 * Math.pow(Math.sin(Math.PI * u), 0.9) * (1 - 0.3 * u)]); }
  const tx = cx - L / 2 + L * 0.8, tail = [[tx, cy], [cx + L / 2, cy - h * 0.7], [cx + L / 2 - L * 0.04, cy], [cx + L / 2, cy + h * 0.6]];
  const lines = [arc(cx - L * 0.28, cy, h * 0.18, h * 0.55, -1.2, 1.2, 16), ell(cx - L * 0.4, cy - h * 0.12, h * 0.07, h * 0.07, 16)];
  return { parts: [{ polys: [tail], sp: 3, base: 0.2, angle: 0.3 }, { polys: [body], sp: 3.6, base: 0.1, angle: 0.5 }, { polys: [body], sp: 4.2, base: 0.1, angle: -0.5, tone: () => 0.3 }], lines, tint: [{ polys: [body, tail], color: '#93a8b0', alpha: 0.45 }], foot: [body, tail], w: L };
};
N.bread = (cx, by, s) => {
  const w = s * 0.95, P = [...arc(cx, by - s * 0.12, w, s * 0.62, Math.PI, Math.PI * 2, 48), [cx + w, by - s * 0.04], [cx - w, by - s * 0.04]];
  const lines = []; for (let k = -1; k <= 1; k++) lines.push(arc(cx + k * w * 0.45, by - s * 0.5, s * 0.12, s * 0.2, Math.PI * 1.1, Math.PI * 1.9, 12));
  return { parts: [{ polys: [P], style: 'contour', sp: 3.8, base: 0.1 }], lines, tint: [{ polys: [P], color: '#c69356', alpha: 0.5 }], foot: [P], w: w * 2 };
};
N.bone = (cx, by, s) => {
  const L = s * 1.7, y = by - s * 0.3, r = s * 0.15;
  const P = blob(union(capsule(cx - L / 2 + r, y, cx + L / 2 - r, y, r * 0.55), circ(cx - L / 2 + r * 0.6, y - r * 0.7, r), circ(cx - L / 2 + r * 0.6, y + r * 0.7, r), circ(cx + L / 2 - r * 0.6, y - r * 0.7, r), circ(cx + L / 2 - r * 0.6, y + r * 0.7, r)), cx - L, y - s, cx + L, y + s, 3);
  return { parts: [{ polys: [P], style: 'contour', sp: 3.4, base: 0.05 }], tint: [{ polys: [P], color: '#e9e0c9', alpha: 0.45 }], foot: [P], w: L };
};
N.tubes = (cx, by, s) => {
  const rack = rrect(cx - s * 0.62, by - s * 0.42, cx + s * 0.62, by - s * 0.3, 3), base = rrect(cx - s * 0.66, by - s * 0.06, cx + s * 0.66, by, 3), parts = [], tint = [], foot = [rack, base];
  for (let k = 0; k < 5; k++) { const x = cx - s * 0.48 + k * s * 0.24, t = rrect(x - s * 0.06, by - s, x + s * 0.06, by - s * 0.08, s * 0.06), cap = rrect(x - s * 0.07, by - s * 1.06, x + s * 0.07, by - s * 0.95, 2); parts.push({ polys: [t], excl: [rack, cap], tone: B.linTone(x - s * 0.06, 0, x + s * 0.06, 0, 0.3, 0.05), sp: 3, angle: Math.PI / 2, w: 1.1 }, { polys: [cap], sp: 2.4, base: 0.4, small: true }); foot.push(t, cap); tint.push({ polys: [cap], color: k % 2 ? '#8a4a3a' : '#4a5a7a', alpha: 0.5 }); }
  parts.push({ polys: [rack], sp: 3, base: 0.3, angle: 0.1 }, { polys: [base], sp: 3, base: 0.35, angle: 0.1 });
  return { parts, tint: [{ polys: [rack, base], color: '#a88a5a', alpha: 0.4 }, ...tint], foot, w: s * 1.35 };
};
N.sprig = (cx, by, s, v, R) => {   // eşleşme yoksa: yapraklı bir dal (otsu bitki)
  const stem = Array.from({ length: 30 }, (_, i) => { const u = i / 29; return [cx - s * 0.35 + u * s * 0.7 + Math.sin(u * 3) * s * 0.06, by - u * s * 0.95]; });
  const parts = [], tint = [], foot = [];
  for (let k = 0; k < 7; k++) { const p = stem[4 + k * 3], sd = k % 2 ? 1 : -1, a = -Math.PI / 2 + sd * 0.9, L = lens(p[0] + Math.cos(a) * s * 0.14, p[1] + Math.sin(a) * s * 0.14, s * 0.3, s * 0.12, a, 36, 0, 9 + k); parts.push({ polys: [L], sp: 2.8, base: 0.1, angle: a, small: true }); foot.push(L); tint.push({ polys: [L], color: '#6b8f4c', alpha: 0.45 }); }
  return { parts, lines: [stem], tint, foot, w: s * 0.9 };
};
export const NESNELER = Object.keys(N);

// ------------------------------------------------------------------ dizgi
function engrave(ink, polys, o, excl) {
  const { style = 'hatch', sp = 4.2, angle = -0.6, base = 0.06, w = 1.6, small = false } = o;
  const tone = o.tone || B.formTone(polys, { light: LIGHT, base });
  for (const p of polys) B.outline(ink, p, { w: small ? Math.min(w, 1.2) : w, light: LIGHT, excl, run: small ? 0 : 110 });
  if (style === 'none') return;
  if (style === 'stip') { B.stipple(ink, polys, { density: 0.9 / (sp * sp), tone, r: 0.9, thr: 0.12, excl }); return; }
  const ex = excl && excl.length ? excl : null, ex2 = [...(ex || []), ...(o.excl || [])];
  if (style === 'contour' && !ex2.length) B.contourHatch(ink, polys, { spacing: sp, tone, thr: 0.12, wMax: small ? 1.1 : 1.6 });
  else B.hatch(ink, polys, { angle, spacing: sp, tone, thr: 0.12, wMax: small ? 1.1 : 1.6, excl: ex2.length ? ex2 : null, seed: 3 });
  B.hatch(ink, polys, { angle: angle + 1.05, spacing: sp * 1.12, tone, thr: 0.5, wMax: small ? 0.9 : 1.3, excl: ex2.length ? ex2 : null, seed: 5 });
  B.hatch(ink, polys, { angle: angle - 0.5, spacing: sp * 1.3, tone, thr: 0.78, wMax: small ? 0.7 : 1.0, excl: ex2.length ? ex2 : null, seed: 7 });
}

// spec: { w, h, nesneler: [[ad, çeşit], …], tohum, sag_bos }
export function draw(ctx, spec) {
  const W = spec.w, H = spec.h, R = RNG(spec.tohum || 1), dikey = H > W;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#f3eee2'; ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = 0.75; ctx.drawImage(paperTexture(W, H, 7 + (spec.tohum || 0) % 50), 0, 0, W, H); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
  // alan: başlıklı sahnede sol üçte iki; dikeyde ortada, alt üçte bir boş
  const A = dikey ? { x0: 50, x1: W - 50, top: H * 0.25, by: H * 0.65 } : spec.sag_bos ? { x0: 80, x1: W * 0.66, top: H * 0.06, by: H * 0.86 } : { x0: W * 0.08, x1: W * 0.92, top: H * 0.06, by: H * 0.86 };
  const list = (spec.nesneler && spec.nesneler.length ? spec.nesneler : [['sprig', null]]).filter(([n]) => N[n]).slice(0, dikey ? 2 : 3);
  if (!list.length) list.push(['sprig', null]);
  const n = list.length, hgt = A.by - A.top, mid = (A.x0 + A.x1) / 2, wid = A.x1 - A.x0;
  // yerleşim: ana nesne büyük ve arkada, diğerleri önde ve yanda
  const slots = n === 1 ? [[mid, A.by - hgt * 0.03, hgt * 0.96]]
    : n === 2 ? (dikey ? [[mid - wid * 0.06, A.by - hgt * 0.06, hgt * 0.9], [mid + wid * 0.3, A.by + hgt * 0.04, hgt * 0.42]] : [[mid - wid * 0.14, A.by - hgt * 0.06, hgt * 0.92], [mid + wid * 0.28, A.by + hgt * 0.02, hgt * 0.62]])
      : [[mid - wid * 0.02, A.by - hgt * 0.1, hgt * 0.86], [mid - wid * 0.31, A.by, hgt * 0.56], [mid + wid * 0.31, A.by + hgt * 0.02, hgt * 0.54]];
  const objs = list.map(([ad, cesit], i) => {
    let [x, by, s] = slots[i];
    let o = N[ad](x, by, s, cesit, R);
    const maxW = dikey ? wid * (i === 0 ? 0.86 : 0.42) : n === 1 ? wid * 0.9 : n === 2 ? wid * (i === 0 ? 0.66 : 0.42) : wid * (i === 0 ? 0.56 : 0.36);
    if (o.w > maxW) { s *= maxW / o.w; o = N[ad](x, by, s, cesit, R); }
    return { ...o, ad, x, by, s };
  });
  const ink = new B.Ink(), wash = new Wash({ scale: 1 });
  // zemin: masa yüzeyi, ince yatay taramalar ve nesnelerin gölgesi (ışık sol üstten)
  const yer = Math.max(...objs.map(o => o.by)) + 6, shadows = objs.map(o => ell(o.x + o.s * 0.16, o.by + 2, Math.min(o.w * 0.62, o.s * 1.2), o.s * 0.07));
  const allFoot = objs.flatMap(o => o.foot);
  ink.group('yer');
  B.hatch(ink, [[[A.x0 - 60, yer - 4], [A.x1 + 60, yer - 4], [A.x1 + 90, yer + hgt * 0.14], [A.x0 - 90, yer + hgt * 0.14]]], { angle: 0, spacing: 7, tone: B.linTone(0, yer, 0, yer + hgt * 0.14, 0.42, 0.0), thr: 0.05, wMax: 0.8, excl: [...allFoot, ...shadows], seed: 11, dash: 0.05 });
  for (const sh of shadows) B.hatch(ink, [sh], { angle: 0.1, spacing: 3.2, tone: () => 0.62, thr: 0.1, wMax: 1.1, excl: allFoot, seed: 13 });
  // arkadan öne: önde duranlar arkadakileri örter
  const order = objs.map((o, i) => i).sort((a, b) => objs[a].by - objs[b].by);
  order.forEach((i, k) => {
    const o = objs[i], front = order.slice(k + 1).flatMap(j => objs[j].foot);
    ink.group('n' + i);
    const parts = o.parts.slice();
    parts.forEach((p, pi) => {
      const ownFront = o.occl ? parts.slice(pi + 1).filter(q => q.polys !== p.polys).flatMap(q => q.polys) : [];
      engrave(ink, p.polys, p, [...front, ...ownFront]);
    });
    for (const L of o.lines || []) if (L && L.length > 1) B.stroke(ink, L, Math.max(0.8, Math.min(1.6, o.s / 220)), { taper: 6, excl: front });
    for (const rm of o.rims || []) B.outline(ink, rm, { w: 1.3, light: LIGHT, excl: front, run: 0 });
    for (const t of o.tint || []) wash.add({ path: B.toPath(t.polys.map(p => ({ pts: p, closed: true }))), polys: t.polys, color: t.color, alpha: t.alpha, t0: -10, dur: 0.01, seed: 3 + i, spill: 3 });
  });
  ink.instant('yer');
  for (const g of ink.groups()) ink.instant(g);
  ink.build();
  wash.draw(ctx, 0);
  ink.draw(ctx, Infinity, { view: null });
  // baskı bitişi: hafif sıcak kenar gölgesi
  const vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.45, W / 2, H / 2, Math.max(W, H) * 0.75);
  vg.addColorStop(0, 'rgba(255,255,255,0)'); vg.addColorStop(1, 'rgba(140,110,70,0.12)');
  ctx.globalCompositeOperation = 'multiply'; ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H); ctx.globalCompositeOperation = 'source-over';
  return objs.map(o => o.ad);
}
