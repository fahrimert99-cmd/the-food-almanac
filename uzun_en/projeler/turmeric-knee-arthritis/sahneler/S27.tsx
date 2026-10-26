// Sahne 27 — denemeler birbiriyle uyuşmadı: zayıf yöntem, farklı ürün/doz, altı ay sınırı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 90, 1800])}>
        <Etiket t={t} bas={K(1, "products")} capa={[560, 330]} konum={[1100, 260]} metin="DIFFERENT PRODUCTS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "trials")} satirlar={["THE TRIALS", "DISAGREE"]} x={1860} y={150} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.4} />
      <Liste t={t} x={1060} y={430} aralik={104} boyut={38} isaret="nokta" genislik={820} ogeler={[
        { bas: K(1, "weak"), metin: "WEAK METHODS", renk: RENK.mercan },
        { bas: K(1, "doses"), metin: "DIFFERENT DOSES", renk: RENK.altin },
        { bas: K(1, "none"), metin: "NONE LONGER THAN 6 MONTHS", renk: RENK.lacivert },
      ]} />
    </>
  );
};

export default S27;
