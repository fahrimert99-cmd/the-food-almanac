// Sahne 2 — "The catch": bir denemede etki yok, banyo alışkanlığı faydayı azaltabilir.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1760])}>
        <Etiket t={t} bas={K(0, "bathroom")} capa={[370, 640]} konum={[820, 300]} metin="BATHROOM HABIT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "But") + 0.1} metin="THE CATCH" x={1860} y={190} boyut={120} renk={RENK.mercan} hiza="sag" />
      <Ikon t={t} bas={K(0, "no")} ad="carpi" x={1100} y={455} zemin={RENK.mercan} boyut={84} />
      <Not t={t} bas={K(0, "no")} metin="ONE TRIAL, TREATED PATIENTS" x={1170} y={410} boyut={40} agirlik={800} />
      <Not t={t} bas={K(0, "no")} metin="NO EFFECT AT ALL" x={1170} y={462} boyut={40} agirlik={800} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "cancel")} metin="MAY CANCEL PART OF THE BENEFIT" x={1860} y={620} boyut={40} agirlik={800} hiza="sag" />
    </>
  );
};

export default S02;
