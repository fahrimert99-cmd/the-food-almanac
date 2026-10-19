// Sahne 44 — tek küçük çalışma, tek sıvı ürün; doktora danışın.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [160, 90, 1600])}>
        <Etiket t={t} bas={K(0, "small trial")} bitis={K(0, "liquid") - 0.1} capa={[960, 560]} konum={[960, 270]} metin="ONE SMALL TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "liquid")} bitis={K(1, "other") - 0.2} capa={[960, 530]} konum={[960, 270]} metin="ONE LIQUID PRODUCT" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "tell")} capa={[690, 700]} konum={[560, 330]} metin="TELL YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "other pills")} bitis={K(1, "doses.") + 1.0} metin="OTHER PILLS?" x={140} y={130} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "higher doses")} bitis={K(1, "doses.") + 1.0} metin="HIGHER DOSES?" x={140} y={240} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "before you")} metin="BEFORE YOU START" x={140} y={130} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};

export default S44;
