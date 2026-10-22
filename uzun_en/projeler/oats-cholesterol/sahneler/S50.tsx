// Sahne 50 — özet bölüm kartı: 3 sahneden kırpımlarla.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/51", kirp: [330, 100, 1530, 1000] },
    { gorsel: "tam/52", kirp: [170, 70, 1490, 1060] },
    { gorsel: "tam/53", kirp: [240, 0, 1680, 1080] },
  ]} />
);

export default S50;
