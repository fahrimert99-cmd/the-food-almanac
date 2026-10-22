// Sahne 55 — fincan ve su bardağı: günde 400 mg sınırı, kahve sayılır, su en basiti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g1 = K(1, "Water") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])} />
      <BaslikBlok t={t} bas={K(0, "most")} bitis={g1} satirlar={["MOST HEALTHY", "ADULTS"]} x={1860} y={150} boyut={64} hiza="sag" adim={0.15} />
      <VurguRozet t={t} bas={K(0, "400")} bitis={g1} vurgu="400 MG" not="UP TO, PER DAY" x={1670} y={290} genislik={380} boyut={96} />
      <Etiket t={t} bas={K(0, "coffee")} bitis={g1} capa={[560, 440]} konum={[170, 250]} metin="COFFEE COUNTS" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "Water")} capa={[1230, 480]} konum={[1640, 400]} metin="WATER: SIMPLEST" renk={RENK.altin} />
    </>
  );
};

export default S55;
