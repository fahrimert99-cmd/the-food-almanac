// Sahne 37 — tahminler; yoğurt + süt + somon ≈ 800 mg.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Baslik t={t} bas={K(0, "estimates")} bitis={bit} metin="ESTIMATES" x={960} y={150} boyut={120} renk={RENK.lacivert} hiza="orta" />
        <Etiket t={t} bas={K(0, "check")} bitis={bit} capa={[1590, 770]} konum={[1500, 900]} metin="CHECK YOUR LABEL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "yogurt,")} capa={[400, 640]} konum={[400, 890]} metin="YOGURT 310" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "glass")} capa={[860, 700]} konum={[860, 890]} metin="MILK 300" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "salmon")} capa={[1300, 710]} konum={[1250, 890]} metin="SALMON 180" renk={RENK.mercan} />
        <VurguRozet t={t} bas={K(1, "800")} vurgu="≈ 800 MG" not="milligrams from three foods" x={960} y={40} boyut={90} genislik={470} renk={RENK.koyuYesil} />
      </Kamera>
    </>
  );
};

export default S37;
