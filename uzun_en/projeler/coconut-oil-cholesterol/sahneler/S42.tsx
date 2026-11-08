// Sahne 42 — Kişisel yanıt: diyet, ilaçlar; statin / yüksek LDL varsa doktora ya da eczacıya danış.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(1, "ask"), tPh = K(1, "pharmacist");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={K(0, "diet")} bitis={4.6} capa={[300, 800]} konum={[560, 540]} metin="YOUR DIET" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "medicines")} bitis={4.8} capa={[1660, 830]} konum={[1500, 540]} metin="YOUR MEDICINES" renk={RENK.altin} />
        <Etiket t={t} bas={tPh} capa={[1250, 945]} konum={[1180, 640]} metin="DOCTOR OR PHARMACIST" renk={RENK.lacivert} />
      </Kamera>
      <Liste t={t} x={560} y={170} aralik={110} boyut={40} isaret="nokta" genislik={900}
        ogeler={[
          { bas: K(1, "statin"), metin: "TAKING A STATIN", renk: RENK.altin, bitis: tAsk - 0.2 },
          { bas: K(1, "LDL"), metin: "TOLD YOUR LDL IS HIGH", renk: RENK.mercan, bitis: tAsk - 0.2 },
        ]} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR", "DOCTOR"]} x={960} y={170} boyut={118} hiza="orta" />
    </>
  );
};

export default S42;
