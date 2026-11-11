// Sahne 17 — bölüm kartı: "Group by group" (PART 2).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: gruplar sahnelerinden kusursuz 4:3 kırpımlar (18, 20, 21)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [100, 200, 1180, 1010] },
  { gorsel: "tam/20", kirp: [0, 200, 1066, 1000] },
  { gorsel: "tam/21", kirp: [330, 150, 1530, 1050] },
];

const S17: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S17;
