// Sahne 57 — özet kartı: "A small, real effect" (RECAP).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (çay, tepsi, masa)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/58", kirp: [400, 80, 1600, 980] },
  { gorsel: "tam/52", kirp: [100, 150, 1300, 1050] },
  { gorsel: "tam/56", kirp: [380, 90, 1580, 990] },
];

const S57: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S57;
