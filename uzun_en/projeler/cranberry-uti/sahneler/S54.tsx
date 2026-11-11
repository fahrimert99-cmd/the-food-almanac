// Sahne 54 — bölüm kartı: Recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: özet sahnelerinden 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [380, 60, 1580, 960] },
  { gorsel: "tam/57", kirp: [400, 100, 1600, 1000] },
  { gorsel: "tam/53", kirp: [380, 40, 1580, 940] },
];

const S54: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S54;
