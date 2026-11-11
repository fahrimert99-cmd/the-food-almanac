// Sahne 23 — glikoz tolerans testi: kolundaki sensör, sade sıvı bardağı, saat. Şematik yanıt eğrisi (ILLUSTRATIVE).
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMon = K(0, "glucose monitors"), tTest = K(0, "tolerance"), tSug = K(0, "standard"), tResp = K(0, "response");
  const pE = eout(ilerle(t, tResp, 2.2));
  const [sk, ak] = pop(t, tResp, 0.5);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1760])}>
        <Etiket t={t} bas={tMon} bitis={5.5} capa={[420, 413]} konum={[760, 230]} metin="GLUCOSE MONITOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSug} bitis={8.0} capa={[870, 470]} konum={[1130, 190]} metin="SUGAR SOLUTION" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tTest} bitis={9.9} metin="GLUCOSE TOLERANCE TEST" x={960} y={95} boyut={64} hiza="orta" renk={RENK.koyuYesil} />
      {/* şematik yanıt eğrisi: sayı yok */}
      <div style={{ position: "absolute", left: 1480, top: 140, width: 400, height: 260, opacity: ak, transform: `scale(${sk})`,
        transformOrigin: "50% 50%", background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 18,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <svg width={400} height={260} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={30} y1={190} x2={370} y2={190} stroke={RENK.murekkep} strokeWidth={3} opacity={0.5} />
          <path d="M 30 180 C 110 180, 130 70, 200 70 C 270 70, 290 170, 370 176" fill="none" stroke={RENK.yesil} strokeWidth={9}
            strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pE} />
        </svg>
        <div style={{ position: "absolute", left: 0, right: 0, top: 205, textAlign: "center", fontFamily: INTER, fontWeight: 800,
          fontSize: 22, letterSpacing: 2, color: RENK.lacivert }}>BODY'S RESPONSE</div>
        <div style={{ position: "absolute", left: 16, top: 12, fontFamily: INTER, fontWeight: 800, fontSize: 16, letterSpacing: 3,
          color: RENK.gri }}>ILLUSTRATIVE</div>
      </div>
    </>
  );
};

export default S23;
