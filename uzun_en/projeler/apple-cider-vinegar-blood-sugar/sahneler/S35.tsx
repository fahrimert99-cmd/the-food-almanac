// Sahne 35 — dozlar ve ürünler farklı: şişeler, tabletler, kaşık. Sağ üstte 15–20 g rozeti.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoses = K(0, "doses"), tApple = K(1, "apple"), tWhite = K(1, "white"), tWine = K(1, "wine"), tTab = K(1, "tablets");
  const t15 = K(2, "15"), tOne = K(2, "one to two");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1840], [40, 30, 1760])}>
        <Etiket t={t} bas={tApple} capa={[307, 640]} konum={[420, 110]} metin="APPLE CIDER" renk={RENK.mercan} boyut={28} />
        <Etiket t={t} bas={tWhite} capa={[827, 640]} konum={[1000, 130]} metin="WHITE" renk={RENK.lacivert} boyut={28} />
        <Etiket t={t} bas={tWine} capa={[580, 700]} konum={[580, 200]} metin="WINE" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tTab} capa={[1170, 700]} konum={[1250, 430]} metin="TABLETS" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={tOne} capa={[1600, 780]} konum={[1500, 560]} metin="1–2 TABLESPOONS" renk={RENK.altin} boyut={28} />
      </Kamera>
      <AltSis a={0.7} yukseklik={140} />
      <Baslik t={t} bas={tDoses} metin="DOSES & PRODUCTS" x={1860} y={150} boyut={70} renk={RENK.lacivert} hiza="sag" bitis={tApple + 1.1} />
      <VurguRozet t={t} bas={t15 - 0.1} vurgu="15–20 G" not="was a common dose" x={1560} y={120} genislik={420} />
    </>
  );
};

export default S35;
