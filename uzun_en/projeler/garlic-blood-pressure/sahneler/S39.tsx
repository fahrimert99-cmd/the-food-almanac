// Sahne 39 — "bir diş sarımsak ilacın yerini tutar" efsanesi ve kanıtın söylemedikleri.
import React from "react";
import { AltSis, Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDis = K(0, "clove"), tHap = K(0, "pills"), tIyi = K(0, "works"), tKanit = K(1, "evidence");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={tDis} bitis={tIyi - 0.1} capa={[740, 600]} konum={[290, 480]} metin="A CLOVE A DAY" renk={RENK.yesil} />
        <Etiket t={t} bas={tHap} bitis={tIyi - 0.1} capa={[1340, 620]} konum={[1640, 430]} metin="YOUR PILLS" renk={RENK.lacivert} />
      </Kamera>
      <AltSis a={0.7} />
      <Baslik t={t} bas={tIyi} bitis={tKanit - 0.2} metin="“WORKS AS WELL AS MEDICINE”" x={960} y={115} boyut={66} hiza="orta" renk={RENK.mercan} />
      <Ikon t={t} bas={tKanit} ad="carpi" x={150} y={115} boyut={86} zemin={RENK.mercan} />
      <Baslik t={t} bas={tKanit} metin="THE EVIDENCE DOESN'T SAY THAT" x={235} y={115} boyut={66} renk={RENK.lacivert} />
    </>
  );
};
export default S39;
