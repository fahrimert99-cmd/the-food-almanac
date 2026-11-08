// Sahne 2 — büyük derlemeler artış bulmadı; terazide iki bardak, "kim haklı?"
import React from "react";
import { Baslik, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 25, 1820])} />
      <Baslik t={t} bas={K(0, "larger")} metin="LARGER" x={70} y={110} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "reviews")} metin="REVIEWS" x={70} y={215} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "no")} metin="NO RISE" x={1860} y={200} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(1, "who")} ad="soru" x={960} y={560} boyut={150} zemin={RENK.altin} />
    </>
  );
};

export default S02;
