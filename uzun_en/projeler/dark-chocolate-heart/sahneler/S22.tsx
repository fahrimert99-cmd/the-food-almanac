// Sahne 22 — bölüm kartı: Kan basıncı çalışmaları
import React from "react";
import { BolumKarti, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/24", kirp: [60, 130, 1260, 1030] },
        { gorsel: "tam/26", kirp: [150, 20, 1550, 1070] },
        { gorsel: "tam/23", kirp: [50, 100, 1250, 1000] },
      ]} />
      <Not t={t} bas={K(0, "best-studied")} metin="THE BEST-STUDIED EFFECT OF COCOA" x={140} y={800} boyut={34} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S22;
