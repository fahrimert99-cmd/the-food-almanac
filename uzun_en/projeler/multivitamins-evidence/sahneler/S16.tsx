// Sahne 16 — iyi beslenmiş erkek doktorlar; sonuçlar kadınlara uymayabilir
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNour = K(0, "well-nourished"), tMay = K(1, "may not"), tWomen = K(1, "women,"), tLess = K(1, "less well");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      {/* 1. cümle: doktor etiketi (sol boş kâğıt) */}
      <Etiket t={t} bas={tNour} bitis={tMay - 0.2} capa={[830, 420]} konum={[250, 330]} metin="WELL-NOURISHED MEN" renk={RENK.yesil} boyut={26} />
      {/* 2. cümle: sağ boş kâğıtta kinetik başlık */}
      <Baslik t={t} bas={tMay} metin="MAY NOT APPLY" x={1880} y={250} boyut={66} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tWomen} metin="TO WOMEN" x={1880} y={326} boyut={66} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tLess} metin="OR PEOPLE LESS WELL NOURISHED" x={1880} y={380} hiza="sag" genislik={380} boyut={30} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S16;
