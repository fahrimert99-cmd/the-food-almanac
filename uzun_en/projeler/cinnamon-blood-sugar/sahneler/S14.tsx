// Sahne 14 — Açlık glukozu –25 mg/dL; belirsizlik aralığı 9–41 sayı doğrusunda.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// sayı doğrusu: 0–50 mg/dL -> x 1200–1840
const AX = (v: number) => 1200 + (v / 50) * 640;
const AY = 800;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t25 = K(0, "25"), tRange = K(1, "range of likely"), t9 = K(1, "9"), t41 = K(1, "41");
  const pEks = eout(ilerle(t, tRange, 0.5));
  const pBant = eout(ilerle(t, t9 - 0.1, 0.9));
  const [sN, aN] = pop(t, tRange + 0.3, 0.5);
  const [s9, a9] = pop(t, t9, 0.4);
  const [s41, a41] = pop(t, t41, 0.4);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1740])}>
        <Etiket t={t} bas={t25} capa={[880, 560]} konum={[900, 400]} metin="CINNAMON" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik?.satirlar ?? []} x={1180} y={140} boyut={90} />
      <VurguRozet t={t} bas={t25} vurgu="–25" not="MG/DL ON AVERAGE" x={1520} y={340} genislik={420} renk={RENK.koyuYesil} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pEks}>
          <line x1={AX(0)} x2={AX(50)} y1={AY} y2={AY} stroke={RENK.lacivert} strokeWidth={4} strokeLinecap="round" />
          <text x={AX(25)} y={AY - 100} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, fill: RENK.lacivert }}>LIKELY TRUE VALUES</text>
        </g>
        <rect x={AX(9)} y={AY - 20} width={(AX(41) - AX(9)) * pBant} height={40} rx={20} fill={RENK.altin} opacity={0.85} />
        <g transform={`translate(${AX(25)} ${AY}) scale(${sN})`} opacity={aN}>
          <circle r={16} fill={RENK.koyuYesil} stroke="#fff" strokeWidth={4} />
        </g>
        <g transform={`translate(${AX(9)} ${AY + 62}) scale(${s9})`} opacity={a9}>
          <text textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 48, fill: RENK.lacivert }}>9</text>
        </g>
        <g transform={`translate(${AX(41)} ${AY + 62}) scale(${s41})`} opacity={a41}>
          <text textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 48, fill: RENK.lacivert }}>41</text>
        </g>
      </svg>
    </>
  );
};
export default S14;
