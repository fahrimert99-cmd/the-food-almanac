// Sahne 3 — gazsız bir fincan
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const gec = K(0, "without") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        <Etiket t={t} bas={K(0, "cup")} bitis={gec + 0.4} capa={[1000, 780]} konum={[1500, 700]} metin="A CUP A DAY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.1} bitis={gec} metin="BY THE END," x={1860} y={250} boyut={56} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "you'll")} bitis={gec} metin="YOU'LL KNOW" x={1860} y={340} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "without")} metin={b.satirlar[0]} x={1860} y={290} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "the gas") } metin={b.satirlar[1]} x={1860} y={406} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
