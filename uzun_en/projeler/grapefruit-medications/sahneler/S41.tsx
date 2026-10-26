// Sahne 41 — FDA önerisi: "asla yemeyin" değil, eczacıya sorun.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gec = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 70, 1740])}>
        <Etiket t={t} bas={K(0, "grapefruit.")} bitis={gec} capa={[150, 770]} konum={[420, 400]} metin="GRAPEFRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "grapefruit")} capa={[300, 840]} konum={[430, 460]} metin="GRAPEFRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "medicine.")} capa={[735, 760]} konum={[1000, 560]} metin="YOUR MEDICINE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "uncertainty")} bitis={K(0, "FDA's")} metin="THE UNCERTAINTY" x={1860} y={250} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      {/* 1. vuruş: FDA tavsiyesi */}
      <Baslik t={t} bas={K(0, "FDA's")} bitis={gec} metin="FDA ADVICE" x={1860} y={250} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "simply")} bitis={gec} metin="NOT SIMPLY" x={1860} y={340} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "never")} bitis={gec} metin="“NEVER EAT”" x={1860} y={450} boyut={96} renk={RENK.mercan} hiza="sag" />
      {/* 2. vuruş: eczacıya sor */}
      <Baslik t={t} bas={K(1, "ask")} metin="ASK YOUR" x={1860} y={340} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "pharmacist")} metin="PHARMACIST" x={1860} y={456} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S41;
