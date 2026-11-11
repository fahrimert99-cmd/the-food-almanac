// Sahne 59 — bölüm kartı: Recap
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// 4:3 kırpımlar: 60 (brokoli köşeleri dışarıda), 61, 62
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/60", kirp: [480, 160, 1480, 910] },
  { gorsel: "tam/61", kirp: [140, 100, 1140, 850] },
  { gorsel: "tam/62", kirp: [330, 100, 1230, 775] },
];

const S59: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S59;
