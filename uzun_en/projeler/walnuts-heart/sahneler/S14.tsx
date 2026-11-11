// Sahne 14 — kilo ve tansiyon farksız; kolesterol değişimi kilo bedeli olmadan.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "did not"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* kadran üstündeki küçük sahte işareti kapat */}
        <div style={{ position: "absolute", left: 600, top: 480, width: 90, height: 70, borderRadius: "50%",
          background: "radial-gradient(ellipse at center, #F4F1E8 0%, #F4F1E8 55%, rgba(244,241,232,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "weight")} capa={[420, 760]} konum={[330, 330]} metin="BODY WEIGHT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "pressure")} capa={[1180, 240]} konum={[900, 230]} metin="BLOOD PRESSURE" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "cholesterol")} capa={[1330, 790]} konum={[1540, 640]} metin="CHOLESTEROL CHANGE" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 100, transform: `translate(0, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NO SIGNIFICANT DIFFERENCE" renk={RENK.yesil} boyut={34} />
      </div>
      <BaslikBlok t={t} bas={K(1, "weight penalty")} satirlar={["NO WEIGHT", "PENALTY"]} x={1860} y={790} boyut={80} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S14;
