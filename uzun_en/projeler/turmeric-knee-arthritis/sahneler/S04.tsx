// Sahne 4 — kanal adı, ardından diz ve baharat.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [40, 0, 1840], [90, 30, 1740])}>
        <Etiket t={t} bas={K(1, "spice")} capa={[1250, 650]} konum={[1230, 890]} metin="TURMERIC" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} bitis={K(1, "start") + 0.1} metin={MARKA.filigran} x={100} y={200} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "knee")} metin="THE KNEE" x={100} y={185} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "with the spice") } metin="AND THE SPICE" x={100} y={280} boyut={88} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
