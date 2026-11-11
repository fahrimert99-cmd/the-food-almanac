// Sahne 43 — tedavi değildir: sağda başlık, telefona ve bardağa etiket.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Not t={t} bas={K(0, "firm")} metin="ONE FIRM POINT" x={1860} y={130} hiza="sag" genislik={560} boyut={36} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "Cranberry")} satirlar={["NOT A", "TREATMENT"]} x={1860} y={260} boyut={112} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "think")} metin="THINK YOU HAVE AN INFECTION?" x={1860} y={500} hiza="sag" genislik={560} boyut={38} agirlik={800} />
      <Etiket t={t} bas={K(2, "provider")} capa={[500, 640]} konum={[1560, 540]} metin="HEALTH CARE PROVIDER" renk={RENK.yesil} boyut={30} />
      <Etiket t={t} bas={K(2, "juice")} capa={[1190, 690]} konum={[1560, 850]} metin="NOT THE JUICE" renk={RENK.mercan} boyut={30} />
    </>
  );
};

export default S43;
