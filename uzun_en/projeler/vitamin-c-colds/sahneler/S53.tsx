// Sahne 53 — bölüm kartı: "Recap".
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: 46 (üç tepsi), 49 (meyve suyu, hap, çay), 52 (kar ve termos)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/46", kirp: [0, 215, 1100, 1040] },
  { gorsel: "tam/49", kirp: [60, 100, 1100, 880] },
  { gorsel: "tam/52", kirp: [200, 60, 1480, 1020] },
];

const S53: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S53;
