// Sahne 55 — özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: 56 (bardak + kitaplar), 57 (organlar), 58 (sebze masası)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/56", kirp: [300, 130, 1500, 1030] },
  { gorsel: "tam/57", kirp: [500, 100, 1500, 850] },
  { gorsel: "tam/58", kirp: [560, 180, 1760, 1080] },
];

const S55: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S55;
