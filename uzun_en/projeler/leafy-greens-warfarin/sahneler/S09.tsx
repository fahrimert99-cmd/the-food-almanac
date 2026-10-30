// Sahne 9 — dalga hedef bandın içinde: çok düşük / çok yüksek / sabit.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLow = K(0, "low,"), tHigh = K(1, "high,"), tTests = K(2, "tests"), tGoal = K(2, "goal");
  const pAlt = eout(ilerle(t, tLow, 0.7)), pUst = eout(ilerle(t, tHigh, 0.7));
  const pBant = eout(ilerle(t, tTests, 0.8));
  const [sc, al] = pop(t, tTests, 0.5);
  const aKlinik = al * sol(t, tGoal - 0.15);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 90, 1780])}>
        {/* hedef bant ve iki sınır çizgisi */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <rect x={60} y={345} width={1180} height={283} fill={RENK.yesil} opacity={0.13 * pBant} />
          <line x1={60} x2={60 + 1180 * pAlt} y1={628} y2={628} stroke={RENK.mercan} strokeWidth={4} strokeDasharray="16 10" />
          <line x1={60} x2={60 + 1180 * pUst} y1={345} y2={345} stroke={RENK.mercan} strokeWidth={4} strokeDasharray="16 10" />
        </svg>
        <Etiket t={t} bas={tLow} bitis={tGoal} capa={[900, 628]} konum={[880, 740]} metin="TOO LOW: CLOT RISK" renk={RENK.mercan} />
        <Etiket t={t} bas={tHigh} bitis={tGoal} capa={[640, 345]} konum={[640, 240]} metin="TOO HIGH: BLEEDING RISK" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1560, top: 300, transform: `translate(-50%, -50%) scale(${sc})`, opacity: aKlinik }}>
        <Hap metin="TESTS + DOSE CHANGES" renk={RENK.altin} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={tGoal} satirlar={["STEADY", "NOT ZERO"]} x={1860} y={380} boyut={118} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S09;
