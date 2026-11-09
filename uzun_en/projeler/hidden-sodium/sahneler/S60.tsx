// Sahne 60 — özet bölüm kartı
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/61", kirp: [300, 200, 1260, 920] },
    { gorsel: "tam/62", kirp: [60, 200, 1020, 920] },
    { gorsel: "tam/56", kirp: [100, 200, 1060, 920] },
  ]} />
);

export default S60;
