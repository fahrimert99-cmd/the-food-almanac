// Sahne 2 — İki kase: iki kat prune daha iyi değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 70, 1920], [60, 100, 1800])}>
        <Etiket t={t} bas={0.05} capa={[400, 590]} konum={[400, 400]} metin="50 G" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "double")} capa={[1450, 540]} konum={[1450, 400]} metin="DOUBLE: 100 G" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "work")} metin="NOT BETTER" x={960} y={85} boyut={100} hiza="orta" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "catches")} metin="AND THERE ARE CATCHES" x={960} y={170} boyut={46} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};

export default S02;
