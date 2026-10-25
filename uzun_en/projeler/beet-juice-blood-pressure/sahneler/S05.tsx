// Sahne 5 — pancar nitratça zengin: toprak, kök, yapraklı yeşillikler.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1740])}>
        <Etiket t={t} bas={K(0, "deep red")} bitis={3.6} capa={[440, 700]} konum={[900, 560]} metin="BEETROOT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "soil")} bitis={9.0} capa={[1000, 800]} konum={[1250, 900]} metin="SOIL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "greens")} capa={[600, 250]} konum={[900, 130]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(0, "plants")} kaynak={[480, 880]} hedef={[440, 640]} adet={18} aralik={0.12} omur={1.6}
          yayilma={200} hedefYayilma={80} kavis={-60} tohum="nit" />
      </Kamera>
      <Baslik t={t} bas={K(0, "Beets")} metin="BEETS" x={1860} y={250} boyut={118} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "rich")} metin="ARE RICH IN" x={1860} y={372} boyut={118} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "dietary")} metin="NITRATE" x={1860} y={494} boyut={118} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S05;
