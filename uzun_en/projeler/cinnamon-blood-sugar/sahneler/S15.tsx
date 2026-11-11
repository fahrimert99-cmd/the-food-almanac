// Sahne 15 — A1C: yalnızca ~0,16 puan düşüş, aralık sıfırı içeriyor. Şematik sıfır çizgisi (ILLUSTRATIVE).
import React from "react";
import { ANTON, BaslikBlok, Hap, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const AY = 740;
const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t016 = K(0, "0.16"), tRange = K(0, "range of possible"), tZero = K(0, "zero"), tVar = K(1, "varied a lot"), tTrial = K(1, "trial to trial");
  const pEks = eout(ilerle(t, tRange, 0.5));
  const pBant = eout(ilerle(t, tRange + 0.2, 1.4));
  const [sZ, aZ] = pop(t, tZero, 0.5);
  const [sD, aD] = pop(t, tRange + 0.3, 0.5);
  const [sV, aV] = pop(t, tVar, 0.5);
  const [sT, aT] = pop(t, tTrial, 0.5);
  const noktalar = [1230, 1330, 1460, 1560, 1640, 1740];
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760])} />
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik?.satirlar ?? []} x={1130} y={140} boyut={88} renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={t016} vurgu="0.16" not="PERCENTAGE POINTS" x={1480} y={360} genislik={440} renk={RENK.altin} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pEks}>
          <line x1={1160} x2={1860} y1={AY} y2={AY} stroke={RENK.lacivert} strokeWidth={4} strokeLinecap="round" />
          <line x1={1510} x2={1510} y1={AY - 70} y2={AY + 40} stroke={RENK.mercan} strokeWidth={5} strokeDasharray="10 8" />
        </g>
        <rect x={1260} y={AY - 20} width={500 * pBant} height={40} rx={20} fill={RENK.altin} opacity={0.8} />
        <g transform={`translate(1510 ${AY + 88}) scale(${sZ})`} opacity={aZ}>
          <text textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 52, fill: RENK.mercan }}>0</text>
        </g>
        <g transform={`translate(1450 ${AY}) scale(${sD})`} opacity={aD}>
          <circle r={15} fill={RENK.koyuYesil} stroke="#fff" strokeWidth={4} />
        </g>
        {noktalar.map((x, i) => (
          <circle key={i} cx={x} cy={AY - 70 - (i % 3) * 28} r={9} fill={RENK.lacivert} opacity={0.75 * aV * (aV > 0 ? 1 : 0)}
            transform={`translate(0 ${(1 - sV) * -20})`} />
        ))}
      </svg>
      <div style={{ position: "absolute", left: 1160, top: AY + 130, transform: `scale(${sT})`, transformOrigin: "0 50%", opacity: aT }}>
        <Hap metin="VARIED TRIAL TO TRIAL" renk={RENK.lacivert} />
      </div>
      <div style={{ position: "absolute", left: 1860, top: AY + 150, transform: "translateX(-100%)", opacity: pEks,
        fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
    </>
  );
};
export default S15;
