// Sahne 2 — muz küçük bir parça; potasyum bazıları için riskli.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBanana = K(0, "banana");
  const tCatch = K(0, "and");
  const tRisky = K(0, "risky");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [80, 110, 1640])}>
        <Etiket t={t} bas={tBanana} capa={[500, 700]} konum={[480, 330]} metin="ONE BANANA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tCatch} metin="THE CATCH" x={1250} y={230} boyut={140} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={tCatch + 0.5} metin="For some people, potassium is risky" x={1250} y={320} hiza="orta" boyut={34} />
      <Ikon t={t} bas={tRisky} ad="uyari" x={1640} y={230} zemin={RENK.mercan} />
    </>
  );
};

export default S02;
