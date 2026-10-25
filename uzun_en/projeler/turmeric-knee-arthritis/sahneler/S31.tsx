// Sahne 31 — muayene masası: zerdeçal en fazla ek destek; seçenekler için doktor ve fizyoterapist.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, RENK, SP, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={pen}>
        <Etiket t={t} bas={K(0, "turmeric")} bitis={c[1].bas - 0.1} capa={[907, 310]} konum={[900, 150]} metin="TURMERIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[813, 425]} konum={[330, 260]} metin="YOUR DOCTOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "other options")} capa={[1400, 430]} konum={[1650, 580]} metin="OTHER OPTIONS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(1, "medicines")} capa={[1070, 390]} konum={[1020, 150]} metin="YOUR MEDICINES" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "at most")} bitis={c[1].bas - 0.1} satirlar={["AT MOST,", "AN ADD-ON"]} x={70} y={150} boyut={86}
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.9} />
    </>
  );
};

export default S31;
