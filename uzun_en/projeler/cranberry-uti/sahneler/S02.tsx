// Sahne 2 — bakım evi köşesi: herkes için değil
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(0, "care homes")} capa={[560, 480]} konum={[1450, 640]} metin="CARE HOME" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "juice")} capa={[250, 553]} konum={[250, 280]} metin="STORE JUICE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "older adults")} satirlar={b.satirlar} x={1860} y={330} boyut={96} hiza="sag" />
      <Not t={t} bas={K(0, "catch")} metin="Store juice comes with a catch." x={1860} y={780} hiza="sag" genislik={520} boyut={34} />
    </>
  );
};

export default S02;
