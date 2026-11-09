// Sahne 18 — %37 daha kısa: uzun turşu suyu bardağı ve kısa su bardağı karşılaştırması
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "water.")} capa={[680, 640]} konum={[1130, 700]} metin="PLAIN WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "pickle")} capa={[370, 420]} konum={[520, 200]} metin="PICKLE JUICE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "37")} metin="37% SHORTER" x={1860} y={330} boyut={150} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "than")} metin="THAN AFTER PLAIN WATER" x={1860} y={440} hiza="sag" boyut={34} agirlik={800} renk={RENK.altin} genislik={760} />
      <Not t={t} bas={K(1, "something")} metin="JUICE DID SOMETHING WATER DID NOT" x={1860} y={520} hiza="sag" boyut={30} agirlik={800} renk={RENK.lacivert} genislik={760} />
    </>
  );
};

export default S18;
