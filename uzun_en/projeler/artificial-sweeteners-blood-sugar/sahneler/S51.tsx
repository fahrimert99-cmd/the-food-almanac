// Sahne 51 — Nokta 1: suyu varsayılan yap (ADA).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMake = K(1, "make"), tAda = K(2, "American"), tWater = K(2, "water");
  const tSugary = K(2, "sugary"), tArt = K(2, "artificially"), tOver = K(2, "over");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [90, 50, 1740])}>
        <Etiket t={t} bas={tWater} capa={[700, 520]} konum={[250, 330]} metin="WATER" renk={RENK.yesil} />
        <Etiket t={t} bas={tSugary} capa={[1250, 330]} konum={[1570, 450]} metin="SUGARY" renk={RENK.mercan} />
        <Etiket t={t} bas={tArt} capa={[1330, 500]} konum={[1600, 550]} metin="SWEETENED" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0} metin="POINT 1" x={1860} y={170} boyut={34} renk={RENK.altin} hiza="sag" font="inter" agirlik={800} aralik={6} />
      <BaslikBlok t={t} bas={tMake} satirlar={["MAKE WATER", "YOUR DEFAULT"]} x={1860} y={240} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tAda} bitis={tWater - 0.1} metin="AMERICAN DIABETES ASSOCIATION" x={1860} y={400} hiza="sag" boyut={32}
        agirlik={800} renk={RENK.altin} genislik={440} />
      <Ikon t={t} bas={tOver} ad="onay" x={660} y={150} zemin={RENK.yesil} />
    </>
  );
};
export default S51;
