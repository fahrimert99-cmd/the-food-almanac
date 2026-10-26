import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 4 — marka girişi, sonra B12 ne yapar
const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1720])} />
      <Baslik t={t} bas={K(0, "Food")} bitis={K(1, "Let's") - 0.1} metin="THE FOOD ALMANAC" x={1860} y={230} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "start")} metin="LET'S START WITH" x={1860} y={150} hiza="sag" boyut={38} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(1, "vitamin")} metin="VITAMIN B12" x={1860} y={260} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "actually")} metin="WHAT IT DOES" x={1860} y={380} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S04;
