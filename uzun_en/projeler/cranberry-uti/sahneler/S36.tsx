// S36 — denemelerde test edilmeyen ürünler
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOther = K(0, "Other cranberry"), tDried = K(0, "dried"), tBlend = K(0, "blended"), tNot = K(0, "weren't"), tSay = K(1, "can't say");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])} />
      <Baslik t={t} bas={tOther} bitis={5.3} metin="OTHER PRODUCTS" x={70} y={100} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin="NOT TESTED" x={70} y={100} boyut={92} renk={RENK.mercan} />
      <Etiket t={t} bas={tDried} bitis={7.0} capa={[640, 520]} konum={[400, 330]} metin="DRIED CRANBERRIES" renk={RENK.altin} />
      <Etiket t={t} bas={tBlend} bitis={7.0} capa={[1200, 400]} konum={[880, 190]} metin="BLENDED JUICES" renk={RENK.altin} />
      <Not t={t} bas={tSay} metin="We can't say they give the same benefit" x={76} y={200} genislik={760} boyut={36} />
    </>
  );
};
export default S36;
