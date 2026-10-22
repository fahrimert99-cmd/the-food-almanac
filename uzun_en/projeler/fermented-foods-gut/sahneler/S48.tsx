// Sahne 48 — "daha çok kültür daha iyi demek değil": yoğurt kabı solda, sağda yazılar.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "microbes")} capa={[853, 337]} konum={[1230, 300]} metin="MICROBE COUNT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "manufacture")} capa={[760, 600]} konum={[1230, 440]} metin="AT MANUFACTURE" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "more") - 0.1} bitis={3.5} satirlar={["MORE CULTURES", "IS NOT BETTER"]} x={1860} y={330} boyut={100} hiza="sag" />
      <Ikon t={t} bas={K(2, "inside")} ad="soru" x={1760} y={510} zemin={RENK.altin} />
      <BaslikBlok t={t} bas={K(2, "what")} satirlar={["WHAT THEY DO", "INSIDE YOUR GUT"]} x={1860} y={650} boyut={84} hiza="sag" />
    </>
  );
};

export default S48;
