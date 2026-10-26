// Sahne 7 — çorba kaşığı baharat ile deney ekstresi aynı şey değil.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760]);
  const tShare = K(1, "small"), tSpoon = K(1, "spoonful"), tExt = K(1, "extracts"), tNot = K(1, "not");
  const tBack = K(2, "why");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pen}>
        <Etiket t={t} bas={tSpoon} bitis={tNot} capa={[700, 830]} konum={[1100, 890]} metin="SPOONFUL OF POWDER" renk={RENK.altin} />
        <Etiket t={t} bas={tExt} bitis={tBack - 0.3} capa={[960, 560]} konum={[1480, 640]} metin="TRIAL EXTRACT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.2} bitis={K(1, "curcumin") + 0.8} metin="A FIRST CATCH" x={1860} y={790} boyut={90} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tShare} bitis={tSpoon - 0.1} metin="ONLY A SMALL SHARE" x={1860} y={790} boyut={80} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={tShare + 0.2} bitis={tSpoon - 0.1} metin="curcumin, within the spice" x={1860} y={860} hiza="sag" boyut={32} renk={RENK.gri} />
      <VurguRozet t={t} bas={tNot} bitis={tBack - 0.3} vurgu="NOT" not="THE SAME THING" renk={RENK.mercan} x={1620} y={740} genislik={380} boyut={80} />
      <Baslik t={t} bas={tBack} metin="WHY IT MATTERS" x={1860} y={790} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S07;
