// Sahne 23 — torbadaki ad, vücutta olanı öngörmeyebilir
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tName = K(0, "name"), tMay = K(0, "may"), tBody = K(0, "body"), tBack = K(1, "come"), tShop = K(1, "shopping");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1680])}>
        <Etiket t={t} bas={tName} capa={[700, 720]} konum={[1180, 760]} metin="NAME ON THE BAG" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tMay} bitis={tBack - 0.2} satirlar={["THE NAME MAY", "NOT PREDICT"]} x={1860} y={200} boyut={104} hiza="sag" />
      <Not t={t} bas={K(0, "happens")} bitis={tBack - 0.2} metin="what happens in your body" x={1860} y={440} boyut={44} hiza="sag" genislik={760} agirlik={800} />
      <BaslikBlok t={t} bas={tShop} satirlar={["SHOPPING", "SECTION"]} x={1860} y={200} boyut={104} hiza="sag" />
      <Ikon t={t} bas={tBack} ad="ok" x={1200} y={290} zemin={RENK.lacivert} />
    </>
  );
};
export default S23;
