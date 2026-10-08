// Sahne 51 — özet kartı (RECAP): önceki sahnelerden üç görsel.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: 50 (ayakkabı + tabak), 53 (kas), 54 (park yolu; sol alt yazı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/54", kirp: [560, 300, 1520, 1020] },
  { gorsel: "tam/53", kirp: [560, 100, 1360, 700] },
  { gorsel: "tam/50", kirp: [1000, 200, 1760, 770] },
];

const S51: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S51;
