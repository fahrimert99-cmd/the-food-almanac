// Sahne 2 — saat + greyfurt: zamanı değiştirmek çözmez.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "Taking") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [110, 70, 1700])}>
        <Etiket t={t} bas={K(1, "pill")} capa={[460, 860]} konum={[460, 690]} metin="THE PILL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "time")} capa={[970, 700]} konum={[960, 170]} metin="TIME OF DAY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "there's")} bitis={bit} metin="BUT THERE'S" x={90} y={170} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "catch.")} bitis={bit} metin="A CATCH" x={90} y={285} boyut={104} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "doesn't")} metin="DOESN'T" x={90} y={170} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "fix")} metin="FIX IT" x={90} y={285} boyut={104} renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "it.")} ad="carpi" x={1560} y={250} zemin={RENK.mercan} />
    </>
  );
};

export default S02;
