// Sahne 53 — bölüm kartı: Recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: 56 (pancar + bardak), 54 (bardak + yapraklar), 52 (tabak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/56", kirp: [380, 230, 1280, 905] },
  { gorsel: "tam/54", kirp: [880, 120, 1780, 795] },
  { gorsel: "tam/52", kirp: [200, 130, 1100, 805] },
];

const S53: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S53;
