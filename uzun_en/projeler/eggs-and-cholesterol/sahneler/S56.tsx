// Sahne 56 — bölüm kartı: "Recap".
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kusursuz 4:3 kırpımlar (55: sağ alttaki imza dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [100, 100, 1100, 850] },
  { gorsel: "tam/55", kirp: [100, 100, 1300, 1000] },
  { gorsel: "tam/51", kirp: [1020, 215, 1860, 845] },
];

const S56: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S56;
