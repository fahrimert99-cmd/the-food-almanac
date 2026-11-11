// Sahne 41 — D vitamini: önerilen miktar ve üst sınır.
import React from "react";
import { Baslik, Kamera, RENK, SP, VurguRozet, Ikon, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1780])} />
      <Baslik t={t} bas={K(0, "Vitamin")} metin="VITAMIN D" x={1860} y={170} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "second")} metin="THE SECOND ONE" x={1860} y={275} boyut={46} renk={RENK.altin} hiza="sag" font="inter" aralik={4} />
      <VurguRozet t={t} bas={K(1, "600")} vurgu="600 IU" not="THROUGH AGE 70" x={1230} y={400} renk={RENK.yesil} genislik={340} boyut={84} />
      <Ikon t={t} bas={K(1, "and")} ad="ok" x={1435} y={470} boyut={64} zemin={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "800")} vurgu="800 IU" not="AFTER THAT" x={1640} y={400} renk={RENK.koyuYesil} genislik={340} boyut={84} />
      <VurguRozet t={t} bas={K(2, "4,000")} vurgu="4,000 IU" not="UPPER LIMIT FOR ADULTS" x={1440} y={680} renk={RENK.altin} genislik={560} boyut={84} />
    </>
  );
};

export default S41;
