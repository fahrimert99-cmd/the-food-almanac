// Sahne 47 — bitkisel yağlar, takviyeler, eczacı
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEczaci = K(2, "pharmacist");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      <Baslik t={t} bas={K(0, "greens")} bitis={tEczaci - 0.2} metin="NOT ONLY GREENS" x={1860} y={150} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin="MEDLINEPLUS" bas={K(1, "MedlinePlus")} />
      <Etiket t={t} bas={K(1, "vegetable")} capa={[660, 700]} konum={[330, 330]} metin="VEGETABLE OILS" renk={RENK.altin} />
      <Baslik t={t} bas={tEczaci} metin="ASK YOUR PHARMACIST" x={1860} y={150} boyut={80} hiza="sag" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(2, "supplements")} capa={[1370, 720]} konum={[1610, 860]} metin="SUPPLEMENTS" renk={RENK.koyuYesil} />
    </>
  );
};

export default S47;
