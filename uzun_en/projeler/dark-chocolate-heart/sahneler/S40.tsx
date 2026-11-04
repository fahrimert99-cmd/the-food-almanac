// Sahne 40 — 28 çikolata, 23'ü eşiğin üstünde
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "23"), tNot = K(0, "eating"), tOz = K(0, "one ounce"), tGr = K(0, "about");
  const tBes = K(1, "Five");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 60, 1700], [40, 80, 1620])}>
        <Etiket t={t} bas={tOz} bitis={tBes} capa={[440, 300]} konum={[900, 190]} metin="ONE OUNCE A DAY" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tGr} bitis={tBes} capa={[900, 690]} konum={[1180, 850]} metin="ABOUT 28 G" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tBas} bitis={tBes - 0.1} metin="23 OF 28" x={1860} y={210} boyut={170} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={tNot} bitis={tBes - 0.1} metin="bars over a precautionary level at one ounce a day" x={1860} y={310} hiza="sag" genislik={760} boyut={34} />
      <VurguRozet t={t} bas={tBes} vurgu="5 BARS" not="high in both metals" x={1500} y={150} renk={RENK.mercan} genislik={470} />
    </>
  );
};

export default S40;
