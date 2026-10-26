// Sahne 4 — kanal adı + B12 ne yapar.
import React from "react";
import { Baslik, Kamera, MARKA, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780]);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={p} />
      <Baslik t={t} bas={K(0, "The Food")} metin={MARKA.filigran} x={1860} y={215} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "vitamin")} metin="VITAMIN B12" x={1860} y={335} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "actually")} metin="WHAT IT ACTUALLY DOES" x={1860} y={400} hiza="sag" boyut={34} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S04;
