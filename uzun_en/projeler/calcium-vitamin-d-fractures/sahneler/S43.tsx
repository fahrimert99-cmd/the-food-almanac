// Sahne 43 — yoğurt, peynir ve hap kavanozu: önce besin; haplar riskleriyle gelir.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYemek = K(0, "food"), tHap = K(0, "pills"), tSoru = K(0, "directly");
  const tIlk = K(1, "food"), tRisk = K(1, "risks");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [80, 60, 1700])}>
        <Etiket t={t} bas={tYemek} capa={[640, 760]} konum={[560, 900]} metin="FOOD CALCIUM" renk={RENK.yesil} />
        <Etiket t={t} bas={tHap} capa={[1360, 740]} konum={[1380, 900]} metin="PILLS" renk={RENK.mercan} />
      </Kamera>
      <Ikon t={t} bas={tSoru} ad="soru" x={1135} y={470} boyut={100} zemin={RENK.lacivert} />
      <Baslik t={t} bas={tIlk} metin="FOOD FIRST" x={140} y={150} boyut={116} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tRisk} ad="uyari" x={1740} y={300} boyut={96} zemin={RENK.mercan} />
      <Not t={t} bas={tRisk + 0.2} metin="THE RISKS" x={1740} y={370} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S43;
