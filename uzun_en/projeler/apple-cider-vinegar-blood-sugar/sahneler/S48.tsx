// Sahne 48 — 2. ipucu: nişastalı öğünle birlikte. Sağ boş kâğıtta başlık, nesnelere etiketler.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(3, "we");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        {/* sirke bardağı */}
        <Etiket t={t} bas={K(2, "vinegar")} bitis={tSon} capa={[520, 420]} konum={[930, 300]} metin="VINEGAR" renk={RENK.altin} />
        {/* ekmek: yemek */}
        <Etiket t={t} bas={K(2, "food")} bitis={tSon} capa={[230, 610]} konum={[170, 440]} metin="THE FOOD" renk={RENK.mercan} boyut={26} />
        {/* saat: saatler önce */}
        <Etiket t={t} bas={K(3, "hours")} capa={[880, 700]} konum={[1430, 700]} metin="HOURS EARLIER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(3, "on its own")} capa={[560, 330]} konum={[1400, 380]} metin="ON ITS OWN" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={290} boyut={92} hiza="sag" bitis={tSon} />
      <Ikon t={t} bas={K(3, "on its own") + 0.5} ad="soru" x={1690} y={380} boyut={80} zemin={RENK.altin} />
    </>
  );
};

export default S48;
