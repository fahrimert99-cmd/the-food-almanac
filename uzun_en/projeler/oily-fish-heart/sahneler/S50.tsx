// Sahne 50 — "Four": balığı takas olarak koy (sandviç yerine)
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])} >
        <Etiket t={t} bas={K(2, "deli")} capa={[1400, 470]} konum={[1500, 760]} metin="DELI MEAT SANDWICH" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "rather")} capa={[640, 700]} konum={[640, 930]} metin="FISH INSTEAD" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "four")} metin="FOUR" x={110} y={72} boyut={56} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "make")} metin="MAKE FISH" x={110} y={146} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "a swap") } metin="A SWAP" x={110} y={232} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "simply")} metin="swap it in, don't just add it" x={1860} y={880} hiza="sag" boyut={32} />
    </>
  );
};
export default S50;
