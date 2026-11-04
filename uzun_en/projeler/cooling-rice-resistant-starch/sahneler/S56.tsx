// Sahne 56 — özet kartı (RECAP).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (pirinç kasesi, tabak, telefon+sensör)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/57", kirp: [200, 330, 1200, 1080] },
  { gorsel: "tam/52", kirp: [330, 90, 1530, 990] },
  { gorsel: "tam/55", kirp: [380, 100, 1480, 925] },
];

const S56: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S56;
