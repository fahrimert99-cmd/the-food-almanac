// Sahne 23 — İki kâğıt yığını: 2023'te iki meta-analiz, iki farklı sonuç. Başlık sağdaki boş kâğıtta.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik?.satirlar ?? ["TWO 2023", "ANSWERS"];
  const tTwo = K(1, "Two");
  const [sc, al] = pop(t, K(1, "different"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1760])} />
      <Etiket t={t} bas={K(0, "puzzle")} bitis={tTwo} capa={[840, 520]} konum={[1400, 700]} metin="THE PUZZLE" renk={RENK.altin} />
      <BaslikBlok t={t} bas={tTwo} satirlar={b} x={1230} y={210} boyut={120} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(1, "meta-analyses")} capa={[600, 250]} konum={[980, 140]} metin="ANALYSIS 1" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "meta-analyses") + 0.35} capa={[900, 780]} konum={[1180, 870]} metin="ANALYSIS 2" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1560, top: 560, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "10px 26px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 38, height: 38, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="soru" boyut={26} renk="#fff" kalinlik={7} />
        </span>
        DIFFERENT CONCLUSIONS
      </div>
    </>
  );
};

export default S23;
