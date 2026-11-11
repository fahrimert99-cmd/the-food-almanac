// Sahne 44 — BÖLÜM kartı: ne zaman tedavi yazılır. Kartlar 45/46/47 görsellerinden.
import React from "react";
import { BolumKarti, Ikon, RENK, SP, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/45", kirp: [380, 120, 1480, 945] },
        { gorsel: "tam/46", kirp: [60, 40, 1000, 745] },
        { gorsel: "tam/47", kirp: [330, 150, 1260, 847] },
      ]} />
      <Ikon t={t} bas={K(0, "treatment")} ad="soru" x={200} y={820} boyut={90} zemin={RENK.altin} />
    </>
  );
};

export default S44;
