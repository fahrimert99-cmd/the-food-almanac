// Sahne 3 — videonun iki sorusu. Buzdolabı solda, sağ boş alanda alt alta iki soru.
import React from "react";
import { Baslik, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "much");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1820])} />
      <Ikon t={t} bas={t1 - 0.2} ad="soru" x={1195} y={390} zemin={RENK.altin} />
      <Baslik t={t} bas={t1 - 0.15} metin="HOW MUCH?" x={1860} y={390} boyut={124} hiza="sag" renk={RENK.lacivert} />
      <Ikon t={t} bas={K(0, "to") - 0.2} ad="onay" x={1195} y={560} zemin={RENK.yesil} />
      <Baslik t={t} bas={K(0, "to") - 0.15} metin="HOW SAFE?" x={1860} y={560} boyut={124} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
