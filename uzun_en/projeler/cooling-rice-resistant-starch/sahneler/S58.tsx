// Sahne 58 — sınırlar: makarna, patates, diyabet; parboiled pirinç.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [90, 50, 1720])}>
        <Etiket t={t} bas={K(0, "pasta,")} bitis={K(0, "untested") - 0.2} capa={[900, 650]} konum={[860, 300]} metin="SMALLER EFFECT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "potatoes,")} bitis={K(0, "untested") - 0.2} capa={[1250, 430]} konum={[1250, 220]} metin="UNCLEAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "untested")} bitis={K(1, "In one") - 0.2} capa={[1560, 600]} konum={[1560, 215]} metin="UNTESTED" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "people")} bitis={K(1, "In one") - 0.2} capa={[1520, 500]} konum={[1170, 170]} metin="PEOPLE WITH DIABETES" renk={RENK.lacivert} boyut={26} />
        <Etiket t={t} bas={K(1, "parboiled")} capa={[450, 400]} konum={[560, 190]} metin="PARBOILED RICE" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "bigger")} vurgu="BIGGER" not="THAN COOLING" x={1330} y={110} genislik={340} boyut={80} renk={RENK.yesil} />
    </>
  );
};

export default S58;
