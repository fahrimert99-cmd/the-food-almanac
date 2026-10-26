// Sahne 51 — bölüm kartı: özet (RECAP).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (52: imza dışarıda, 53: "1857" dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/52", kirp: [700, 40, 1620, 730] },
  { gorsel: "tam/53", kirp: [520, 150, 1380, 795] },
  { gorsel: "tam/54", kirp: [330, 150, 1490, 1020] },
];

const S51: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;
export default S51;
