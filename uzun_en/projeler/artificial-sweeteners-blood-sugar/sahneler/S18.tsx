// Sahne 18 — özet: ilk saatlerde anlamlı yükseliş yok. Sol başlık, sağda düz çizgi (ILLUSTRATIVE).
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFirst = K(0, "first few"), tSw = K(0, "sweetener,"), tNo = K(0, "no meaningful"), tBs = K(0, "blood sugar");
  const pCizgi = eout(ilerle(t, tNo + 0.3, 1.2));
  const [sk, ak] = pop(t, tNo + 1.0, 0.5);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1760])}>
        <Etiket t={t} bas={tSw} capa={[790, 360]} konum={[300, 560]} metin="SWEETENER" renk={RENK.altin} />
        <Etiket t={t} bas={tBs} capa={[1230, 650]} konum={[1590, 560]} metin="BLOOD SUGAR" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={tFirst} satirlar={["FIRST FEW", "HOURS"]} x={80} y={200} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tNo} satirlar={["NO MEANINGFUL", "RISE"]} x={1860} y={190} boyut={78} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* düz çizgi: şematik, sayı yok */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1390} y1={470} x2={1860} y2={470} stroke={RENK.murekkep} strokeWidth={3} opacity={0.5 * ak} />
        <path d="M 1390 410 L 1860 410" fill="none" stroke={RENK.yesil} strokeWidth={11} strokeLinecap="round" pathLength={1}
          strokeDasharray={1} strokeDashoffset={1 - pCizgi} />
      </svg>
      <div style={{ position: "absolute", left: 1860, top: 486, transform: `translateX(-100%) scale(${sk})`, transformOrigin: "100% 0",
        opacity: ak, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S18;
