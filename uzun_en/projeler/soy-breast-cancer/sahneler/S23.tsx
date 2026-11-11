// Sahne 23 — gözlemsel çalışma: bağ var, kanıt değil. Sağdaki boş kâğıt alanında başlık, karıştırıcı faktörler, soru.
import React from "react";
import { Baslik, Ikon, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "exercise") - 0.1, tV = K(1, "eat more vegetables") - 0.1, tQ = K(2, "how much");
  const bit = K(2, "In") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1830])} />
      <Baslik t={t} bas={K(0, "link,")} metin="A LINK," x={1860} y={190} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "not proof")} metin="NOT PROOF" x={1860} y={310} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1090} y={470} aralik={96} boyut={38} genislik={770}
        ogeler={[{ bas: tB, metin: "EXERCISE MORE", renk: RENK.altin, bitis: bit }, { bas: tV, metin: "EAT MORE VEGETABLES", renk: RENK.altin, bitis: bit }]} />
      <Ikon t={t} bas={tQ} ad="soru" x={1230} y={730} boyut={96} zemin={RENK.altin} />
      <Baslik t={t} bas={tQ + 0.1} metin="HOW MUCH SOY?" x={1860} y={730} boyut={84} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S23;
