// Sahne 32 — ikiye ayrılan patikalar: sonuçlar neden farklı? (tartışmalı)
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tE = c[1].bas - 0.2;
  const aK = eout(ilerle(t, K(1, "fats") - 0.3, 0.5));
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "two")} bitis={tE} capa={[400, 520]} konum={[330, 680]} metin="REDUCE-IT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "products")} bitis={tE} capa={[1480, 520]} konum={[1560, 680]} metin="STRENGTH" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 460, top: 20, width: 1000, height: 130, background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(0.95)} 0%, ${kagit(0.9)} 65%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "debated") - 0.2} metin="STILL DEBATED" x={960} y={85} boyut={92} hiza="orta" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 540, top: 740, width: 840, height: 210, borderRadius: 26, opacity: aK,
        background: kagit(0.96), border: `3px solid ${RENK.murekkep}`, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }} />
      <Liste t={t} isaret="nokta" x={590} y={775} boyut={32} aralik={60} genislik={760}
        ogeler={[
          { bas: K(1, "fats used"), metin: "DIFFERENT FATS USED", renk: RENK.yesil },
          { bas: K(1, "comparison oil"), metin: "DIFFERENT COMPARISON OIL", renk: RENK.altin },
          { bas: K(1, "nothing"), metin: "NOTHING IS SETTLED", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S32;
