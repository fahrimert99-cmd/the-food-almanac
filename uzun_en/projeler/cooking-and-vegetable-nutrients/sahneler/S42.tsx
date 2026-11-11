// Sahne 42 — 5 yıl sonuç: %29 ve %31
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1760])} />
      <Baslik t={t} bas={K(0, "five")} metin="5 YEARS" x={1860} y={225} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "29")} vurgu="29%" not="LUTEIN GROUP" x={1400} y={400} genislik={290} boyut={92} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(0, "31")} vurgu="31%" not="PLACEBO GROUP" x={1710} y={400} genislik={290} boyut={92} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "progressed")} metin="PROGRESSED TO ADVANCED DISEASE" x={1555} y={640} hiza="orta" boyut={28} agirlik={800} genislik={520} />
      <Etiket t={t} bas={K(0, "lutein")} capa={[347, 300]} konum={[347, 130]} metin="LUTEIN" renk={RENK.yesil} boyut={28} />
      <Etiket t={t} bas={K(0, "placebo")} capa={[747, 330]} konum={[840, 130]} metin="PLACEBO" renk={RENK.mercan} boyut={28} />
      <Baslik t={t} bas={K(1, "not")} metin="NO CLEAR GAIN" x={1860} y={810} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "statistically")} metin="NOT STATISTICALLY SIGNIFICANT" x={1860} y={870} hiza="sag" boyut={30} agirlik={800} />
    </>
  );
};
export default S42;
