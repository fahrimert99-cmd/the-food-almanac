// Sahne 27 — denemeler birbirini tutmuyor: zayıf yöntem, farklı ürün ve doz, en çok altı ay.
import React from "react";
import { BaslikBlok, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [0, 80, 1800])} />
      <BaslikBlok t={t} bas={K(0, "disagreed") - 0.3} satirlar={["THE TRIALS", "DISAGREE"]} x={1860} y={200} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1230} y={500} aralik={92} boyut={32} isaret="nokta" genislik={650} ogeler={[
        { bas: K(1, "weak"), metin: "WEAK METHODS", renk: RENK.altin },
        { bas: K(1, "products"), metin: "DIFFERENT PRODUCTS", renk: RENK.altin },
        { bas: K(1, "doses"), metin: "DIFFERENT DOSES", renk: RENK.altin },
        { bas: K(1, "none"), metin: "NONE LONGER THAN 6 MONTHS", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S27;
