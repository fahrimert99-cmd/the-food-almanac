// Sahne 42 — Buğdaydan yapılan sourdough gluten içerir: çölyak için güvenli değil.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [150, 120, 1700])} />
      <Etiket t={t} bas={K(0, "sourdough")} capa={[1450, 560]} konum={[1700, 460]} metin="SOURDOUGH" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "wheat")} capa={[1000, 300]} konum={[820, 150]} metin="WHEAT" renk={RENK.yesil} />
      <Baslik t={t} bas={K(0, "gluten")} metin="CONTAINS" x={70} y={190} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "gluten") + 0.15} metin="GLUTEN" x={70} y={290} boyut={96} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "isn't safe")} metin="NOT SAFE FOR" x={74} y={400} boyut={44} renk={RENK.mercan} font="inter" />
      <Baslik t={t} bas={K(0, "celiac")} metin="CELIAC DISEASE" x={70} y={470} boyut={72} renk={RENK.mercan} />
    </>
  );
};

export default S42;
