// Sahne 8 — fermente gıda tanımı; kavanoz, mikroplar, yoğurt kasesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "microbial")} bitis={c[1].bas - 0.2} capa={[870, 200]} konum={[790, 62]} metin="MICROBES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "yogurt")} capa={[1230, 590]} konum={[1590, 540]} metin="YOGURT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Fermented")} adim={0.5} satirlar={["FERMENTED", "FOODS"]} x={1860} y={150} boyut={96} hiza="sag" />
      <Not t={t} bas={K(0, "made")} bitis={c[1].bas - 0.2} metin="MADE THROUGH DESIRED MICROBIAL GROWTH" x={1860} y={370} hiza="sag" boyut={36} genislik={560} />
      <Not t={t} bas={K(1, "Bacteria")} bitis={K(1, "tang") - 0.2} metin="BACTERIA OR YEASTS CHANGE THE FOOD" x={1860} y={370} hiza="sag" boyut={36} genislik={560} />
      <Liste t={t} x={1370} y={625} aralik={80} boyut={32} genislik={500} isaret="nokta" ogeler={[
        { bas: K(1, "tang"), metin: "TANG", renk: RENK.altin },
        { bas: K(1, "thick"), metin: "THICK TEXTURE", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S08;
