// Sahne 21 — Pişmiş sebzelerde antioksidan aktivite arttı; yumuşak doku bileşikleri salar.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRose = K(0, "rose"), tPisen = K(0, "cooked"), tYum = K(0, "softer"), tSal = K(0, "releases");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1860])}>
        <Etiket t={t} bas={tPisen} bitis={tYum - 0.1} capa={[640, 590]} konum={[900, 400]} metin="COOKED" renk={RENK.mercan} />
        <Etiket t={t} bas={tYum} capa={[640, 590]} konum={[900, 400]} metin="SOFTER TISSUE" renk={RENK.altin} />
        <Etiket t={t} bas={tSal} capa={[1380, 260]} konum={[1090, 200]} metin="RELEASES COMPOUNDS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.15} metin="ANTIOXIDANT ACTIVITY" x={70} y={110} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={tRose} metin="ROSE" x={70} y={190} boyut={96} renk={RENK.koyuYesil} />
    </>
  );
};

export default S21;
