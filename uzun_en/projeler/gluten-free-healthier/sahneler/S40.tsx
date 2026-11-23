// Sahne 40 — ekmek/tahıl farksız, işlenmiş etlerde %87 "gluten-free" etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFark = K(0, "no significant");
  const tYuzde = K(1, "87");
  const tEt = K(1, "processed meats");
  const tBaslik = K(2, "unlikely");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1840])} >
        {/* ekmek: ilk cümle */}
        <Etiket t={t} bas={0.1} bitis={4.6} capa={[667, 440]} konum={[760, 250]} metin="BREAD" renk={RENK.altin} />
        {/* işlenmiş et: tahta üstündeki sosisler */}
        <Etiket t={t} bas={tEt} capa={[400, 550]} konum={[330, 830]} metin="PROCESSED MEATS" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={tFark} bitis={4.6} metin="NO SIGNIFICANT DIFFERENCE IN RATING" x={1500} y={300} hiza="orta" genislik={560} boyut={40} agirlik={800} />
      <VurguRozet t={t} bas={tYuzde} vurgu="87%" not="of processed meats labeled gluten-free" x={1500} y={230} renk={RENK.mercan} genislik={470} />
      <Baslik t={t} bas={tBaslik} metin="NOT" x={1500} y={680} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tBaslik + 0.18} metin="HEALTHIER" x={1500} y={790} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S40;
