// Sahne 16 — Maioli sonucu: ilk saatte daha düşük glikoz ve insülin (şematik, ILLUSTRATIVE).
import React from "react";
import { BaslikBlok, Hap, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, INTER, ANTON } from "../kutuphane";

const CX = 960, CY = 110, CW = 900, CH = 400;          // kart
const AX = 1030, AB = 420, AW = 780, AH = 190;        // eksen: sol, taban, genişlik, yükseklik
const mx = (m: number) => AX + (m / 180) * AW;
// temsili yükselip inen eğri (tepe ~45 dk); gerçek veri DEĞİL
const f = (m: number, a: number) => a * (m / 45) * Math.exp(1 - m / 45);
const yy = (m: number, a: number) => AB - f(m, a) * AH * 0.9;
const yol = (a: number, son: number) => {
  const p: string[] = [];
  for (let m = 0; m <= son; m += 3) p.push(`${mx(m).toFixed(1)},${yy(m, a).toFixed(1)}`);
  return p.join(" ");
};

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aK = eout(ilerle(t, K(0, "glucose") - 0.2, 0.6));
  const cz = eout(ilerle(t, K(0, "glucose") + 0.2, 2.2));
  const son = 180 * cz;
  const a30 = eout(ilerle(t, K(0, "thirty"), 0.5));
  const aSp = eout(ilerle(t, K(0, "smaller."), 0.6));
  const aA = eout(ilerle(t, K(0, "sixty"), 0.5));
  const [si, ai] = pop(t, K(1, "insulin"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 10, 1860])} />
      <BaslikBlok t={t} bas={K(0, "sourdough,") - 0.2} satirlar={["LOWER IN", "THE FIRST HOUR"]} x={70} y={170} boyut={92}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: CX, top: CY, width: CW, height: CH, opacity: aK, background: "rgba(252,248,236,0.94)",
        border: `3px solid ${RENK.lacivert}`, borderRadius: 24, boxShadow: "0 12px 30px rgba(48,40,34,0.18)" }} />
      <div style={{ position: "absolute", left: CX + 28, top: CY + 18, opacity: aK, display: "flex", gap: 14, alignItems: "center",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert, letterSpacing: 2 }}>
        BLOOD GLUCOSE
        <span style={{ fontSize: 20, color: RENK.altin, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "3px 14px" }}>ILLUSTRATIVE</span>
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aK}>
          <polyline points={`${AX},${AB - AH - 10} ${AX},${AB} ${AX + AW + 10},${AB}`} fill="none" stroke={RENK.murekkep} strokeWidth={4} />
          {[0, 30, 60].map((m) => (
            <text key={m} x={mx(m)} y={AB + 36} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 600, fontSize: 24, fill: RENK.lacivert }}>{m} min</text>
          ))}
        </g>
        {/* 30 ve 60. dk işaretleri + ilk saat aralığı */}
        <rect x={mx(0)} y={AB - AH - 4} width={(mx(60) - mx(0)) * aSp} height={AH + 4} fill={RENK.altin} opacity={0.13} />
        <line x1={mx(30)} y1={AB} x2={mx(30)} y2={AB - AH - 4} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="10 8" opacity={a30} />
        <line x1={mx(60)} y1={AB} x2={mx(60)} y2={AB - AH - 4} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="10 8" opacity={aA} />
        {son > 0 && <polyline points={yol(1, son)} fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />}
        {son > 0 && <polyline points={yol(0.7, son)} fill="none" stroke={RENK.altin} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />}
        <circle cx={mx(30)} cy={yy(30, 0.7)} r={11 * a30} fill={RENK.altin} stroke="#fff" strokeWidth={3} />
      </svg>
      <div style={{ position: "absolute", left: CX + 28, top: CY + 62, opacity: cz > 0.3 ? 1 : 0, display: "flex", gap: 34,
        fontFamily: INTER, fontWeight: 800, fontSize: 24 }}>
        <span style={{ color: RENK.altin }}>● SOURDOUGH</span>
        <span style={{ color: RENK.mercan }}>● YEAST BREAD</span>
      </div>
      <div style={{ position: "absolute", left: CX + 28, top: CY + CH + 24, transform: `scale(${si})`, transformOrigin: "0 50%", opacity: ai,
        display: "flex", alignItems: "center", gap: 14 }}>
        <Hap metin="INSULIN: LOWER AT 30 MIN" renk={RENK.yesil} boyut={30} />
        <span style={{ display: "flex", transform: "rotate(90deg)" }}><IkonYol ad="ok" boyut={40} renk={RENK.yesil} kalinlik={8} /></span>
      </div>
    </>
  );
};

export default S16;
