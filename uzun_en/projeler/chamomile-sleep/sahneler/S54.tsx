// Sahne 54 — bölüm kartı: Recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: 55 (fincan+çiçek+ay), 56 (koltuk, fincan), 52 (lamba, defter, fincan) — kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [400, 60, 1400, 810] },
  { gorsel: "tam/56", kirp: [560, 100, 1360, 700] },
  { gorsel: "tam/52", kirp: [250, 40, 1450, 940] },
];

const S54: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S54;
