// Sahne 9 — öğün sonrası tepeler birikir → ortalama → HbA1c rozeti (şematik, sayı yok).
import React from "react";
import { ANTON, Etiket, INTER, Kamera, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const X0 = 890, Y0 = 560, W = 420;
// 4 öğün tepesi: [merkez, yükseklik]
const TEPELER: [number, number][] = [[0.14, 120], [0.38, 165], [0.62, 135], [0.86, 160]];
const yol = () => {
  let d = `M ${X0} ${Y0}`;
  TEPELER.forEach(([c, h]) => {
    const x = X0 + W * c;
    d += ` C ${x - 38} ${Y0}, ${x - 40} ${Y0 - h}, ${x} ${Y0 - h} C ${x + 40} ${Y0 - h}, ${x + 38} ${Y0}, ${x + 70} ${Y0}`;
  });
  return d;
};

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTepe = K(0, "peaks"), tAy = K(1, "months"), tOrt = K(1, "average"), tTest = K(1, "test"), tHb = K(1, "HbA1c");
  const bitis = tTest - 0.1;
  const pEks = eout(ilerle(t, 0.5, 0.6)) * sol(t, bitis);
  const p = einout(ilerle(t, tTepe - 0.5, 2.2));
  const pOrt = einout(ilerle(t, tOrt, 0.9));
  const [sa, aa] = pop(t, tAy, 0.5);
  const [so, ao] = pop(t, tOrt + 0.5, 0.5);
  const yOrt = Y0 - 78;
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tTest} capa={[430, 770]} konum={[430, 690]} metin="THE TEST" renk={RENK.altin} />
      </Kamera>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pEks}>
          <rect x={X0 - 60} y={Y0 - 290} width={W + 130} height={390} rx={22} fill="#FCF8EC" opacity={0.93} />
          <line x1={X0 - 10} y1={Y0 + 8} x2={X0 + W + 50} y2={Y0 + 8} stroke={RENK.lacivert} strokeWidth={3} opacity={0.6} />
          <text x={X0 - 10} y={Y0 - 245} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, fill: RENK.lacivert, letterSpacing: 2 }}>AFTER-MEAL PEAKS</text>
          <text x={X0 + W + 50} y={Y0 - 245} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 20, fill: RENK.gri, letterSpacing: 3 }}>ILLUSTRATIVE</text>
          <path d={yol()} fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round"
            pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
          <line x1={X0 - 10} y1={yOrt} x2={X0 - 10 + (W + 60) * pOrt} y2={yOrt} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="16 10" />
          <g transform={`translate(${X0 - 10} ${Y0 + 52}) scale(${so})`} opacity={ao}>
            <text style={{ fontFamily: ANTON, fontSize: 30, fill: RENK.lacivert, letterSpacing: 1 }}>- - AVERAGE</text>
          </g>
          <g transform={`translate(${X0 + W + 50} ${Y0 + 52}) scale(${sa})`} opacity={aa}>
            <text textAnchor="end" style={{ fontFamily: ANTON, fontSize: 30, fill: RENK.altin, letterSpacing: 1 }}>MONTHS →</text>
          </g>
        </g>
      </svg>
      <VurguRozet t={t} bas={tHb} vurgu="HbA1c" not="your average blood sugar over about three months"
        x={1070} y={270} genislik={560} boyut={130} renk={RENK.koyuYesil} />
    </>
  );
};

export default S09;
