// Sahne 36 — yiyecek günlük ihtiyacı karşılar: eksik C gerçek sorun; bir bardak su / bütün portakal.
import React from "react";
import { BaslikBlok, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 20, 1740], [10, 40, 1640])} />
      <BaslikBlok t={t} bas={K(0, "food")} satirlar={["FOOD COVERS", "YOUR DAILY NEED"]} x={1860} y={170} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "Falling")} metin="FALLING SHORT IS A REAL PROBLEM" x={1860} y={420} hiza="sag" boyut={36} agirlik={800} genislik={640} />
      <Liste t={t} ogeler={[{ bas: K(1, "glass of juice"), metin: "A GLASS OF JUICE" }, { bas: K(1, "whole orange"), metin: "A WHOLE ORANGE" }]}
        x={1190} y={560} isaret="onay" boyut={38} genislik={660} aralik={90} />
      <Not t={t} bas={K(1, "close to")} metin="CLOSE TO OR ABOVE THE RECOMMENDED AMOUNT" x={1190} y={770} boyut={34} agirlik={800} genislik={640} renk={RENK.koyuYesil} />
    </>
  );
};

export default S36;
