// Sahne 42 — kalsiyum ve sıvı.
import React from "react";
import { Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [60, 20, 1800], [140, 70, 1640])} />
      <Etiket t={t} bas={K(0, "calcium")} bitis={9.4} capa={[910, 600]} konum={[910, 330]} metin="CALCIUM FOODS" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "oxalate")} bitis={9.4} capa={[1400, 560]} konum={[1400, 150]} metin="OXALATE FOODS" renk={RENK.mercan} />
      <Ikon t={t} bas={K(0, "helps")} bitis={12.9} ad="onay" x={1130} y={400} />
      <Etiket t={t} bas={K(1, "fluid")} capa={[445, 560]} konum={[445, 900]} metin="ENOUGH FLUID" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "most")} x={910} y={130} hiza="orta" metin="THE MOST BASIC STEP" boyut={40} agirlik={800} />
    </>
  );
};

export default S42;
