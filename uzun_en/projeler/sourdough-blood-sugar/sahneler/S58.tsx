// Sahne 58 — bölüm kartı: Recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// 4:3 kusursuz kırpımlar (60: alttaki sayı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/59", kirp: [180, 170, 1380, 1070] },
  { gorsel: "tam/60", kirp: [100, 80, 1300, 980] },
  { gorsel: "tam/61", kirp: [560, 100, 1760, 1000] },
];

const S58: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S58;
