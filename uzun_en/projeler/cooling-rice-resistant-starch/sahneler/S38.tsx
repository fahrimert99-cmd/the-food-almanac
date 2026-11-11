// Sahne 38 — uzun vadeli kanıt yok: takvim, A1C, tek öğün.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLong = K(0, "long-term"), tMonths = K(0, "months"), tA1c = K(0, "A1C"), t3 = K(0, "three-month"), tOne = K(1, "one-meal");
  const son = tOne - 0.4;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tLong} bitis={son} capa={[700, 220]} konum={[290, 90]} metin="NO LONG-TERM TRIALS" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tMonths} bitis={son} capa={[620, 400]} konum={[230, 480]} metin="MONTHS" renk={RENK.altin} />
        <Etiket t={t} bas={tOne} capa={[960, 650]} konum={[1020, 900]} metin="ONE MEAL" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={tA1c} bitis={son} vurgu="A1C" x={1650} y={170} renk={RENK.koyuYesil} genislik={300} />
      <Not t={t} bas={t3} bitis={son} metin="THREE-MONTH AVERAGE" x={1650} y={340} hiza="orta" boyut={28} agirlik={800} />
      <Baslik t={t} bas={K(1, "not the same")} metin="NOT THE SAME" x={1860} y={170} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S38;
