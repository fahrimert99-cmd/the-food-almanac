// Sahne 33 — dondurulmuş ürünün sınırları: doku, sos, tereyağı, tuz
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800])} />
      <Baslik t={t} bas={K(0, "limits")} bitis={K(1, "Long") - 0.1} metin="LIMITS TESTS MISS" x={960} y={130} boyut={104} hiza="orta" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "soften")} capa={[420, 520]} konum={[400, 130]} metin="SOFTER TEXTURE" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "sauces")} capa={[1500, 650]} konum={[1640, 180]} metin="ADDED SAUCES" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "butter")} capa={[1150, 650]} konum={[1230, 110]} metin="BUTTER" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "salt")} capa={[985, 885]} konum={[985, 780]} metin="SALT" renk={RENK.lacivert} />
    </>
  );
};

export default S33;
