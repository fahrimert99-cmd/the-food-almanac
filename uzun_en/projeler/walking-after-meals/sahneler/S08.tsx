// Sahne 8 — sağlıklı eğri vs. tip 2 / prediyabet eğrisi (şematik) + hücre etiketi.
import React from "react";
import { BaslikBlok, Etiket, INTER, ANTON, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X0 = 170, Y0 = 890, GEN = 880;

// Şematik eğri: yükselir, tepe yapar, tabana döner (sayı yok)
const egri = (tepe: number, uzun: number) => {
  const a = X0, b = X0 + GEN * 0.18, c = X0 + GEN * (0.34 + 0.1 * uzun), d = X0 + GEN * (0.62 + 0.32 * uzun), e = X0 + GEN;
  return `M ${a} ${Y0} C ${b} ${Y0}, ${b} ${Y0 - tepe}, ${c} ${Y0 - tepe} C ${d} ${Y0 - tepe}, ${d - 80} ${Y0 - 6}, ${e} ${Y0 - 6}`;
};

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKan = K(0, "blood sugar"), tSaglikli = K(0, "healthy");
  const tT2 = K(1, "type 2"), tHucre = K(1, "cells"), tBuyuk = K(1, "bigger");
  const pEks = eout(ilerle(t, tKan, 0.6));
  const p1 = einout(ilerle(t, tKan + 0.2, 2.6));
  const p2 = einout(ilerle(t, tT2 + 0.2, 3.2));
  const [sh, ah] = pop(t, tSaglikli, 0.5);
  const [st, at] = pop(t, tT2, 0.5);
    return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1790])}>
        <Etiket t={t} bas={tKan} bitis={tT2 - 0.2} capa={[640, 520]} konum={[640, 370]} metin="BLOOD SUGAR" renk={RENK.altin} />
        <Etiket t={t} bas={tHucre} capa={[1560, 640]} konum={[1560, 790]} metin="LESS RESPONSIVE CELL" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tBuyuk} satirlar={["HIGHER", "AND LONGER"]} x={70} y={160} boyut={92}
        renkler={[RENK.mercan, RENK.lacivert]} />
      {/* şematik grafik (örnek, sayı yok) */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pEks}>
          <rect x={X0 - 40} y={Y0 - 205} width={GEN + 80} height={265} rx={20} fill="#FCF8EC" opacity={0.92} />
          <line x1={X0} y1={Y0 + 8} x2={X0 + GEN} y2={Y0 + 8} stroke={RENK.lacivert} strokeWidth={3} opacity={0.6} />
          <line x1={X0} y1={Y0 + 8} x2={X0} y2={Y0 - 150} stroke={RENK.lacivert} strokeWidth={3} opacity={0.6} />
          <text x={X0 + GEN} y={Y0 - 172} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, fill: RENK.gri, letterSpacing: 3 }}>ILLUSTRATIVE</text>
          <text x={X0 - 14} y={Y0 - 70} transform={`rotate(-90 ${X0 - 14} ${Y0 - 70})`} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 20, fill: RENK.lacivert, letterSpacing: 2 }}>BLOOD SUGAR</text>
          <text x={X0 + GEN} y={Y0 + 40} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, fill: RENK.lacivert, letterSpacing: 2 }}>AFTER A MEAL →</text>
        </g>
        <path d={egri(70, 0)} fill="none" stroke={RENK.yesil} strokeWidth={10} strokeLinecap="round" pathLength={1}
          strokeDasharray={1} strokeDashoffset={1 - p1} />
        <path d={egri(135, 1)} fill="none" stroke={RENK.mercan} strokeWidth={10} strokeLinecap="round" pathLength={1}
          strokeDasharray={1} strokeDashoffset={1 - p2} />
        <g transform={`translate(${X0 + 20} ${Y0 - 172}) scale(${sh})`} opacity={ah}>
          <circle cx={0} cy={-8} r={9} fill={RENK.yesil} />
          <text x={20} y={0} style={{ fontFamily: ANTON, fontSize: 30, fill: RENK.yesil, letterSpacing: 1 }}>HEALTHY</text>
        </g>
        <g transform={`translate(${X0 + 230} ${Y0 - 172}) scale(${st})`} opacity={at}>
          <circle cx={0} cy={-8} r={9} fill={RENK.mercan} />
          <text x={20} y={0} style={{ fontFamily: ANTON, fontSize: 30, fill: RENK.mercan, letterSpacing: 1 }}>TYPE 2 / PREDIABETES</text>
        </g>
      </svg>
    </>
  );
};

export default S08;
