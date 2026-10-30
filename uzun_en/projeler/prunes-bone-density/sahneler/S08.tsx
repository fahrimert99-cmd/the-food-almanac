// Sahne 8 — Polifenoller ve K vitamini (~60 µg / 100 g).
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPrat = s.cumleler[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "polyphenols")} bitis={K(0, "vitamin") - 0.1} capa={[640, 430]} konum={[1400, 230]} metin="POLYPHENOLS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "vitamin")} bitis={tPrat} metin="VITAMIN K" x={1860} y={170} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "60")} bitis={tPrat} vurgu="≈ 60 µG" not="per 100 grams of prunes" x={1640} y={250} genislik={440} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "practical")} metin="PRACTICAL PART" x={1860} y={140} boyut={30} hiza="sag" font="inter" aralik={8} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "why")} metin="WHY IT MATTERS" x={1860} y={230} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "certain")} metin="if you take certain medicines" x={1860} y={310} hiza="sag" boyut={38} renk={RENK.mercan} />
    </>
  );
};

export default S08;
