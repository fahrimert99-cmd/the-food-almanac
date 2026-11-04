// Sahne 8 — dürüst cevap: besin, sebze, yöntem; ardından yöntem etiketleri.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(1, "look")} capa={[400, 640]} konum={[330, 150]} metin="BOILING" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "methods")} capa={[780, 450]} konum={[800, 150]} metin="STEAMING" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "first")} capa={[1100, 590]} konum={[1100, 150]} metin="MICROWAVING" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "nutrient,")} metin="NUTRIENT" x={1860} y={330} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "vegetable")} metin="VEGETABLE" x={1860} y={450} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "method.")} metin="METHOD" x={1860} y={570} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S08;
