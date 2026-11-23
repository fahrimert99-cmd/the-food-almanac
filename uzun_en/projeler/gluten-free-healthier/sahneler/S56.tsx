// Sahne 56 — özet bölüm kartı (RECAP)
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: ekmek+kalp, raf+glukometre, tabak+ekmek
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/57", kirp: [330, 40, 1663, 1040] },
  { gorsel: "tam/58", kirp: [150, 60, 1483, 1060] },
  { gorsel: "tam/59", kirp: [400, 200, 1573, 1080] },
];

const S56: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S56;
