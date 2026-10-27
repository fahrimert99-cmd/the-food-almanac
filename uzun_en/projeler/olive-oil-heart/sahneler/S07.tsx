import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 7 — İspanyol çalışması ile ABD çalışmaları: iki şişe, iki boş kâğıt köşesi.
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "extra virgin")} bitis={K(1, "American")} capa={[800, 600]} konum={[330, 440]} metin="EXTRA VIRGIN" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Spanish")} bitis={K(1, "American") - 0.1} metin="SPANISH TRIAL" x={60} y={170} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "American")} metin="US STUDIES" x={1860} y={170} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "separate")} metin="TYPES NOT SEPARATED" x={1860} y={270} boyut={56} hiza="sag" renk={RENK.mercan} />
    </>
  );
};
export default S07;
