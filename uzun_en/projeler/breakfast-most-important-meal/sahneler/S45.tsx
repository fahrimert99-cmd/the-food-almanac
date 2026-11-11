// Sahne 45 — yemekle ya da yemekten önce: iki sütun (tost tarafı / su bardağı tarafı), ortada ilaçlar.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFark = K(1, "difference"), tSkip = K(1, "skip");
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740]);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={pencere}>
        <Etiket t={t} bas={K(0, "medicines")} bitis={K(0, "before") + 0.3} capa={[960, 895]} konum={[960, 470]} metin="MEDICINES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "food,")} capa={[540, 650]} konum={[540, 500]} metin="TOAST" renk={RENK.yesil} boyut={24} />
      </Kamera>
      <Baslik t={t} bas={K(0, "with")} metin="WITH FOOD" x={500} y={250} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(0, "before")} metin="BEFORE FOOD" x={1380} y={250} boyut={96} renk={RENK.altin} hiza="orta" />
      <Baslik t={t} bas={tFark} bitis={tSkip - 0.1} metin="THE DIFFERENCE MATTERS" x={960} y={115} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tSkip} metin="IF YOU SKIP BREAKFAST" x={960} y={115} boyut={64} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S45;
