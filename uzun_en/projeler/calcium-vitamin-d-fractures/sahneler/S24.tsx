// Sahne 24 — Chapuy 1992: sağ boş kâğıt alanda rozet ve başlıklar, odaya iki etiket.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tName = K(0, "Marie Chapuy"), tN = K(0, "3,270"), tAge = K(0, "average age");
  const tNh = K(1, "nursing homes"), tApt = K(1, "apartment houses");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [30, 17, 1860], [80, 45, 1740])}>
        <Etiket t={t} bas={tNh} capa={[1100, 640]} konum={[1560, 800]} metin="NURSING HOMES" renk={RENK.lacivert} />
        <Etiket t={t} bas={tApt} capa={[760, 700]} konum={[1560, 890]} metin="APARTMENT HOUSES" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Not t={t} bas={tName} metin="Marie Chapuy and colleagues" x={1560} y={150} boyut={30} hiza="orta" genislik={560} agirlik={800} />
      <VurguRozet t={t} bas={tN} vurgu="3,270" not="women in care" x={1560} y={210} genislik={440} />
      <BaslikBlok t={t} bas={tAge} satirlar={["AVERAGE", "AGE 84"]} x={1560} y={540} boyut={100} hiza="orta" adim={K(0, "84") - tAge} />
    </>
  );
};

export default S24;
