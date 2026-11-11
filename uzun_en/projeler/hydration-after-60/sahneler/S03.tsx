// Sahne 3 — Videonun vaadi: ne kadar, ne sayılır, ne zaman.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={pen}>
        <Etiket t={t} bas={K(0, "what counts")} bitis={K(0, "when")} capa={[840, 420]} konum={[1160, 170]} metin="WATER" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "what counts") + 0.3} bitis={K(0, "when")} capa={[420, 620]} konum={[250, 440]} metin="SOUP" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "what counts") + 0.6} bitis={K(0, "when")} capa={[1280, 585]} konum={[1590, 430]} metin="TEA" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "how much")} metin="HOW MUCH?" x={90} y={170} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "when to")} metin="WHEN?" x={1830} y={170} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
