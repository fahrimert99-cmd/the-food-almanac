// Sahne 31 — ikinci mekanizma: lif. Bazı lifler su çekip bağırsakta koyu, jel benzeri bir karışım oluşturur.
import React from "react";
import { Baslik, Etiket, INTER, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu,
  kelimeZamani, kis, pop, random, sol } from "../kutuphane";

type N = [number, number];

// Görsel 31: solda brokoli, ortada/sağda yeşil fasulye + yapraklar. Sağ üstteki süs dairesi kâğıt yamayla örtülür
// (yazı ve büyüteç alanı). Sağ alttaki imza (x 1680-1840, y 1045-1075) pencere dışında kalır (alt kenar <= 1012).
const GUNES: N = [1469, 253];
const KAGIT31 = (a: number) => `rgba(252,252,228,${a})`; // görseldeki yerel kâğıt tonu
const PA: [number, number, number] = [40, 0, 1800];
const PB: [number, number, number] = [90, 10, 1720];
const LENS = { x: 1572, y: 300, r: 188 };
const FASULYE: N = [1462, 676]; // büyütecin baktığı fasulye noktası (görsel koordinatı)

/** Numaralı / simgeli çip (S27 ile aynı dil). x,y = merkez. */
const Cip: React.FC<{
  t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; no?: string;
  ikon?: "onay" | "saat"; simge?: React.ReactNode; boyut?: number; harfAraligi?: number;
}> = ({ t, bas, bitis = 1e9, x, y, metin, renk, no, ikon, simge, boyut = 27, harfAraligi = 1.5 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.42;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
      display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: `8px ${boyut * 0.85}px 8px 9px`, fontFamily: INTER, fontWeight: 800,
      fontSize: boyut, letterSpacing: harfAraligi, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, color: "#fff", display: "flex", flex: "none",
        alignItems: "center", justifyContent: "center", fontSize: boyut * 0.82 }}>
        {no ?? simge ?? (ikon ? <IkonYol ad={ikon} boyut={d * 0.66} renk="#fff" kalinlik={6} /> : null)}
      </span>
      {metin}
    </div>
  );
};

/** Damla yolu (su). */
const damla = (x: number, y: number, s: number) =>
  `M ${x} ${y - 15 * s} C ${x + 10 * s} ${y - 3 * s}, ${x + 10 * s} ${y + 9 * s}, ${x} ${y + 9 * s} ` +
  `C ${x - 10 * s} ${y + 9 * s}, ${x - 10 * s} ${y - 3 * s}, ${x} ${y - 15 * s} Z`;

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, PA, PB);
  const olcek = 1920 / pencere[2];
  const ekran = (p: N): N => [(p[0] - pencere[0]) * olcek, (p[1] - pencere[1]) * olcek];

  const tIkinci = K(0, "second mechanism"), tLif = K(0, "is fiber") + 0.15;
  const tSebze = K(1, "Vegetables"), tZengin = K(1, "rich in fiber");
  const tLens = K(1, "of fiber absorb") - 0.2;
  const bitis1 = tLens - 0.35;
  const tSu = K(1, "absorb water"), tKalin = K(1, "thick"), tJel = K(1, "gel-like"), tBagirsak = K(1, "in the gut");

  // büyüteç
  const [lSc, lAl] = pop(t, tLens, 0.6);
  const g = eout(ilerle(t, tKalin - 0.15, 1.5)); // jelleşme
  const islak = eout(ilerle(t, tSu + 0.3, 0.9)); // su emilimi
  const { x: cx, y: cy, r } = LENS;
  const dalga = (t - tLens) * (1.1 - 0.8 * g);
  const lifler = Array.from({ length: 7 }, (_, i) => {
    const y0 = cy - 150 + i * 50;
    const pts: string[] = [];
    for (let x = cx - r - 20; x <= cx + r + 20; x += 14) {
      const yy = y0 + 13 * Math.sin(x / 38 + i * 1.7 + dalga) + 6 * Math.sin(x / 17 + i);
      pts.push(`${x.toFixed(1)},${yy.toFixed(1)}`);
    }
    return pts.join(" ");
  });
  // su damlaları: WATER etiketinden büyütecin içine
  const kaynak: N = [1300, 160];
  const damlalar: React.ReactNode[] = [];
  for (let j = 0; j < 16; j++) {
    const t0 = tSu + j * 0.055, u = (t - t0) / 0.6;
    if (u <= 0 || u >= 1.45) continue;
    const r1 = random(`d31-${j}-a`), r2 = random(`d31-${j}-b`);
    const hx = cx - 70 + r1 * 160, hy = cy - 90 + r2 * 190;
    const e = eout(kis(u));
    const px = kaynak[0] + (hx - kaynak[0]) * e, py = kaynak[1] + (hy - kaynak[1]) * e - Math.sin(Math.PI * kis(u)) * 40;
    if (u < 1) {
      damlalar.push(<path key={j} d={damla(px, py, 1)} fill="rgba(27,42,65,0.28)" stroke={RENK.lacivert} strokeWidth={2.5} />);
    } else {
      const v = (u - 1) / 0.45;
      damlalar.push(<circle key={j} cx={hx} cy={hy} r={8 + 26 * v} fill="none" stroke={RENK.yesil} strokeWidth={3} opacity={1 - v} />);
    }
  }
  // büyüteç bağlantı çizgileri (fasulyeden)
  const F = ekran(FASULYE);
  const dx = cx - F[0], dy = cy - F[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
  const pBag = eout(ilerle(t, tLens + 0.1, 0.5));
  const r0 = 30;

  return (
    <>
      <Kamera gorsel="tam/31" pencere={pencere}>
        {/* süs dairesi kâğıtla örtülür */}
        <div style={{ position: "absolute", left: GUNES[0] - 320, top: GUNES[1] - 320, width: 640, height: 640,
          background: `radial-gradient(circle closest-side at 50% 50%, ${KAGIT31(1)} 0%, ${KAGIT31(1)} 75%, ${KAGIT31(0)} 100%)` }} />
        <Etiket t={t} bas={tSebze} bitis={bitis1} capa={[930, 330]} konum={[1135, 232]} metin="BROCCOLI" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tSebze + 0.45} bitis={bitis1} capa={[1380, 745]} konum={[1120, 440]} metin="GREEN BEANS" renk={RENK.yesil} boyut={26} />
      </Kamera>

      {/* 1. cümle: ikinci mekanizma = lif */}
      <Cip t={t} bas={tIkinci} bitis={bitis1} x={1530} y={142} no="2" metin="SECOND MECHANISM" renk={RENK.yesil} harfAraligi={3} />
      <Baslik t={t} bas={tLif} bitis={bitis1} metin="FIBER" x={1530} y={298} boyut={210} renk={RENK.koyuYesil} hiza="orta" />
      <Cip t={t} bas={tZengin} bitis={bitis1} x={1530} y={462} ikon="onay" metin="RICH IN FIBER" renk={RENK.yesil} boyut={28} />

      {/* 2. cümle: büyüteç — lif su çeker, jel olur */}
      {lAl > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <defs>
            <clipPath id="lens31"><circle cx={cx} cy={cy} r={r} /></clipPath>
            <filter id="golge31" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#302822" floodOpacity="0.25" />
            </filter>
          </defs>
          <g opacity={lAl * pBag}>
            {[1, -1].map((k) => (
              <g key={k}>
                <line x1={F[0] + nx * r0 * k} y1={F[1] + ny * r0 * k} x2={cx + nx * r * k} y2={cy + ny * r * k}
                  stroke={RENK.kagitAcik} strokeWidth={8} strokeLinecap="round" opacity={0.85} />
                <line x1={F[0] + nx * r0 * k} y1={F[1] + ny * r0 * k} x2={cx + nx * r * k} y2={cy + ny * r * k}
                  stroke={RENK.murekkep} strokeWidth={3} strokeDasharray="12 9" />
              </g>
            ))}
            <circle cx={F[0]} cy={F[1]} r={r0} fill="none" stroke={RENK.kagitAcik} strokeWidth={9} />
            <circle cx={F[0]} cy={F[1]} r={r0} fill="none" stroke={RENK.koyuYesil} strokeWidth={4} />
          </g>
          <g transform={`translate(${cx} ${cy}) scale(${lSc}) translate(${-cx} ${-cy})`} opacity={lAl}>
            <circle cx={cx} cy={cy} r={r + 6} fill={RENK.kagitAcik} filter="url(#golge31)" />
            <g clipPath="url(#lens31)">
              <rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={RENK.kagitAcik} />
              <rect x={cx - r} y={cy - r} width={2 * r} height={2 * r} fill={RENK.yesil} opacity={0.06 + 0.2 * g} />
              {/* jel: lif çevresinde şişen yarı saydam hale */}
              {lifler.map((p, i) => (
                <polyline key={`h${i}`} points={p} fill="none" stroke={RENK.yesil} strokeWidth={6 + 50 * g} strokeLinecap="round"
                  strokeLinejoin="round" opacity={0.1 + 0.18 * g} />
              ))}
              {lifler.map((p, i) => (
                <polyline key={`l${i}`} points={p} fill="none" stroke={g > 0.5 ? RENK.koyuYesil : RENK.yesil} strokeWidth={5 + 4 * islak + 3 * g}
                  strokeLinecap="round" strokeLinejoin="round" />
              ))}
            </g>
            <circle cx={cx} cy={cy} r={r} fill="none" stroke={RENK.koyuYesil} strokeWidth={9} />
            <circle cx={cx} cy={cy} r={r + 7} fill="none" stroke={RENK.kagitAcik} strokeWidth={5} />
          </g>
          {damlalar}
        </svg>
      )}
      <Cip t={t} bas={K(1, "water") - 0.05} x={1262} y={160} metin="WATER" renk={RENK.lacivert} boyut={24}
        simge={<svg width={22} height={26} viewBox="-12 -17 24 28"><path d={damla(0, 0, 1)} fill="#fff" /></svg>} />
      <Cip t={t} bas={tJel} x={1190} y={252} ikon="onay" metin="GEL-LIKE MIXTURE" renk={RENK.yesil} boyut={26} />
      <Baslik t={t} bas={tBagirsak} metin="IN THE GUT" x={1360} y={326} boyut={32} renk={RENK.lacivert} hiza="sag" font="inter" aralik={4} />
    </>
  );
};

export default S31;
