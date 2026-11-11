// Sahne 4 — kanal tanıtımı ve konu: üstte başlıklar, kekte etiket.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBas = K(1, "let's start");
  const tAnl = K(1, "means");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [130, 100, 1700])}>
        <Etiket t={t} bas={K(1, "ultra-processed")} capa={[760, 760]} konum={[380, 430]} metin="ULTRA-PROCESSED?" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "food almanac") - 0.15} bitis={c[1].bas - 0.1} metin={MARKA.ad.toUpperCase()} x={960} y={105} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tBas} bitis={tAnl - 0.1} metin="LET'S START" x={960} y={105} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tAnl} metin="WHAT IT MEANS" x={960} y={105} boyut={92} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S04;
