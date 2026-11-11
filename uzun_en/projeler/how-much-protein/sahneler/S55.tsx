// Sahne 55 — özet kartı: "THE TAKEAWAY" (RECAP).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (56: sağ tabak, 57: masa, 58: stetoskop ve tabak; defterden uzak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/56", kirp: [980, 380, 1780, 980] },
  { gorsel: "tam/57", kirp: [260, 180, 1260, 930] },
  { gorsel: "tam/58", kirp: [1000, 100, 1760, 670] },
];

const S55: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S55;
