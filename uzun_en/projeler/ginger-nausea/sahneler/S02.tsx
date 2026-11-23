// Sahne 2 — tek semptom, ginger ale'de neredeyse hiç zencefil yok
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAle = K(1, "ginger");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1800])}>
        <Etiket t={t} bas={tAle} capa={[460, 330]} konum={[880, 300]} metin="GINGER ALE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "almost")} capa={[290, 800]} konum={[230, 600]} metin="REAL GINGER" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "symptom") - 0.1} bitis={tAle - 0.15} satirlar={["ONE SYMPTOM,", "NOT ANOTHER"]} x={1860} y={400} boyut={100} hiza="sag" />
      <Not t={t} bas={K(1, "almost")} metin="ALMOST NONE OF IT" x={1860} y={400} boyut={64} hiza="sag" genislik={900} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S02;
