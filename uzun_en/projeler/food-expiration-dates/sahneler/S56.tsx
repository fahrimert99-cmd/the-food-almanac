// Sahne 56 — bölüm kartı: "Recap".
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kırpımlar: 54 tenekesi+şişe, 55 süt kutusu+kase (termometre dışarıda), 57 yoğurt+teneke
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [0, 100, 1000, 850] },
  { gorsel: "tam/55", kirp: [200, 60, 1000, 660] },
  { gorsel: "tam/57", kirp: [820, 200, 1460, 680] },
];

const S56: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S56;
