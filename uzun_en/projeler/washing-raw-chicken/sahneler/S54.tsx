// Sahne 54 — 20 saniye sabun: sağ boş kâğıtta başlık, nesne etiketleri
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(1, "seconds")} capa={[1033, 545]} konum={[1480, 560]} metin="20 SECONDS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "chicken,")} capa={[960, 700]} konum={[1480, 700]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "faucet,")} capa={[440, 240]} konum={[760, 75]} metin="FAUCET" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(1, "twenty")} metin="20 SECONDS" x={1860} y={190} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "twenty") + 0.2} metin="OF SOAP" x={1860} y={310} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "warm,")} metin="Warm, soapy water" x={1860} y={400} hiza="sag" genislik={640} />
      <Not t={t} bas={K(1, "before")} metin="Before the faucet, the fridge handle, or anything else" x={1860} y={830} hiza="sag" genislik={640} boyut={32} />
    </>
  );
};
export default S54;
