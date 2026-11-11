// Sahne 2 — boş sandalyeler; sağdaki boş kâğıtta soru başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760]);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={w} sinirla={false}>
        <Etiket t={t} bas={K(0, "wine")} capa={[487, 680]} konum={[560, 470]} metin="RED WINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "non-drinker")} capa={[640, 800]} konum={[980, 700]} metin="NON-DRINKER?" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(1, "catch")} metin="THE CATCH" x={1000} y={250} boyut={36} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(1, "who")} metin="WHO COUNTS" x={996} y={350} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "non-drinker")} metin="AS A NON-DRINKER?" x={996} y={480} boyut={120} renk={RENK.koyuYesil} />
    </>
  );
};

export default S02;
