// Sahne 38 — Dürüst sınır: büyük ABD çalışmaları yağ türlerini ayırmadı; sızma ile rafine kıyaslanamıyor.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAm = K(1, "American"), tCant = K(2, "can't");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(2, "extra virgin")} capa={[760, 650]} konum={[400, 560]} metin="EXTRA VIRGIN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "refined")} capa={[1190, 650]} konum={[1520, 560]} metin="REFINED" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "honest")} satirlar={["THE HONEST", "LIMIT"]} x={60} y={210} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={K(1, "could not")} bitis={tCant - 0.2} satirlar={["COULD NOT", "TELL THEM APART"]} x={1860} y={210} boyut={80} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={tCant} metin="WE CAN'T SAY" x={1860} y={210} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S38;
