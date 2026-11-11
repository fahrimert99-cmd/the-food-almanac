// Sahne 4 — açık ders kitabı: göz çizimi solda, marka adı ve "okuyan kısım".
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "your eye")} capa={[400, 560]} konum={[540, 110]} metin="YOUR EYE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} bitis={K(1, "Let's") + 0.4} metin={MARKA.ad.toUpperCase()} x={110} y={115} boyut={72} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "does the")} metin="THE PART THAT READS" x={110} y={905} boyut={60} renk={RENK.lacivert} />
    </>
  );
};

export default S04;
