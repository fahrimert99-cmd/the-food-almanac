// Sahne 61 — markette: FDA tanımı yok, etiketi oku, tam tahıl, sirke yok, makul porsiyon.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "enjoy sourdough")} capa={[1200, 400]} konum={[1100, 120]} metin="SOURDOUGH" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "FDA")} bitis={K(1, "So read") - 0.1} satirlar={["FDA STANDARD", "NEVER DEFINES", "SOURDOUGH"]} x={120} y={140} boyut={84} />
      <Liste t={t} x={110} y={120} aralik={92} boyut={34} isaret="sayi" genislik={640} ogeler={[
        { bas: K(1, "read the ingredients"), metin: "READ INGREDIENTS" },
        { bas: K(1, "whole grain"), metin: "LOOK FOR WHOLE GRAIN" },
        { bas: K(1, "vinegar"), metin: "NO ADDED VINEGAR", renk: RENK.mercan },
        { bas: K(1, "sensible portions"), metin: "SENSIBLE PORTIONS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S61;
