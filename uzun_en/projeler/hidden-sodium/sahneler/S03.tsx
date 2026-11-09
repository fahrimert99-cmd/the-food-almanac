// Sahne 3 — videonun yol haritası: sepet + etiketler
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(0, "top sources")} capa={[600, 430]} konum={[300, 220]} metin="TOP SOURCES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "read a label")} capa={[935, 340]} konum={[1340, 220]} metin="READ A LABEL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "blood pressure")} capa={[1390, 745]} konum={[1500, 520]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "By") + 0.1} metin="BY THE END, YOU'LL KNOW" x={60} y={100} boyut={30} renk={RENK.koyuYesil} hiza="sol" font="inter" aralik={4} />
    </>
  );
};

export default S03;
