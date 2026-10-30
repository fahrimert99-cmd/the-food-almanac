// Sahne 3 — Vaat: kaç tane, kim dikkat etmeli.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1800])}>
        <Etiket t={t} bas={K(0, "amount")} capa={[400, 420]} konum={[860, 230]} metin="THE AMOUNT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.1} metin="BY THE END" x={1860} y={290} boyut={30} hiza="sag" font="inter" aralik={8} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "amount") - 0.1} metin={b.satirlar[0]} x={1860} y={390} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "who") - 0.1} metin={b.satirlar[1]} x={1860} y={510} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
