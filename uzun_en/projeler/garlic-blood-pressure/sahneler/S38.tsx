// Sahne 38 — üçüncü sınır: küçük denemeler, karışık ürün ve dozlar, yazarın kendi denemeleri.
import React from "react";
import { AltSis, Baslik, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKucuk = K(0, "small"), tAlti = K(0, "six"), tHavuz = K(0, "pooled"), tFarkli = K(0, "different"), tDoz = K(0, "doses");
  const tYazar = K(1, "four"), tBit = K(1, "reviewer") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <AltSis a={0.7} />
      <Baslik t={t} bas={tKucuk} bitis={tHavuz - 0.2} metin="SMALL TRIALS" x={1840} y={120} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tAlti} vurgu="AS FEW AS 6" not="people in a group" x={420} y={40} boyut={72} genislik={520} />
      <Not t={t} bas={tHavuz} bitis={tBit} metin="POOLED" x={1840} y={40} hiza="sag" boyut={30} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={tFarkli} bitis={tBit} metin="DIFFERENT PRODUCTS" x={1840} y={150} boyut={64} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tDoz - 0.3} bitis={tBit} metin="AND DOSES" x={1840} y={220} boyut={64} hiza="sag" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tYazar} vurgu="4 TRIALS" not="run by the reviewer herself" x={1500} y={105} boyut={72} genislik={520} />
    </>
  );
};
export default S38;
