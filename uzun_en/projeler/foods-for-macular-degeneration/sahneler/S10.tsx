// Sahne 10 — lutein + zeaxanthin besinden gelir: yeşillikler ve yumurta sarısı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1640])}>
        <Etiket t={t} bas={K(1, "spinach")} capa={[1190, 575]} konum={[1480, 470]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "kale")} capa={[540, 330]} konum={[560, 90]} metin="KALE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "egg yolk")} capa={[940, 595]} konum={[1180, 830]} metin="EGG YOLK" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "nutrients")} satirlar={b.satirlar} x={1860} y={170} boyut={88} hiza="sag" />
      <Not t={t} bas={K(1, "Leafy")} metin={b.not ?? ""} x={1860} y={170 + 2 * 99 + 6} hiza="sag" genislik={560} boyut={32} />
    </>
  );
};

export default S10;
