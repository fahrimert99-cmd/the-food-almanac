// Sahne 34 — terazi: sarımsağın 8–9 puanı bir diyet değişikliğiyle aynı aralıkta.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrials = K(1, "small trials");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(0, "garlic's")} bitis={tTrials - 0.2} capa={[570, 540]} konum={[200, 560]} metin="GARLIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "major diet")} bitis={tTrials - 0.2} capa={[1380, 580]} konum={[1700, 460]} metin="DIET CHANGE" renk={RENK.yesil} />
        <Etiket t={t} bas={tTrials} capa={[470, 440]} konum={[300, 330]} metin="SMALL TRIALS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "different products")} capa={[360, 650]} konum={[320, 430]} metin="DIFFERENT PRODUCTS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "one carefully")} capa={[1500, 540]} konum={[1610, 330]} metin="ONE CONTROLLED STUDY" renk={RENK.koyuYesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "eight")} vurgu="8–9" not="points, like a major diet change" x={330} y={770} genislik={480} boyut={84} />
    </>
  );
};

export default S34;
