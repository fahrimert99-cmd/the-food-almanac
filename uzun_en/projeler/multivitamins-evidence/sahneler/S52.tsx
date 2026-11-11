// Sahne 52 — özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: şişe+bardak, fidan+şişe, masa
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/47", kirp: [490, 120, 1450, 840] },
  { gorsel: "tam/50", kirp: [560, 100, 1520, 820] },
  { gorsel: "tam/51", kirp: [20, 200, 980, 920] },
];

const S52: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S52;
