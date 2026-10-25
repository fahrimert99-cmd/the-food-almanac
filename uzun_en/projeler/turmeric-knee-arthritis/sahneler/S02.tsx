// Sahne 2 — kapsül ile mutfak baharatı farkı; emilim zorluğu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const son = K(0, "hard") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "capsules")} bitis={son} capa={[1000, 840]} konum={[1450, 780]} metin="CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kitchen")} bitis={son} capa={[480, 680]} konum={[900, 470]} metin="KITCHEN SPICE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "hard")} satirlar={b.satirlar} x={1860} y={230} boyut={120} hiza="sag" />
    </>
  );
};

export default S02;
