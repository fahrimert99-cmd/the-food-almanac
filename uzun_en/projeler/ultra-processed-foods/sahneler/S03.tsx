// Sahne 3 — alışveriş sepeti solda, sağda iki vuruş.
import React from "react";
import { Baslik, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(0, "how to spot") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])} />
      <Baslik t={t} bas={K(0, "which ones")} bitis={gec} metin="WHICH ONES" x={1870} y={400} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "which ones") + 0.16} bitis={gec} metin="MATTER" x={1870} y={500} boyut={80} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={K(0, "how to spot")} metin="HOW TO SPOT" x={1870} y={400} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "how to spot") + 0.16} metin="THEM" x={1870} y={500} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "in the store")} metin="IN THE STORE" x={1870} y={600} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S03;
