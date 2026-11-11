// Sahne 55 — özet bölüm kartı (RECAP): bölümden üç kusursuz görsel kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// 4:3 kırpımlar: bardak + çay, masadaki bardak, böbrekler (kusursuz bölgeler)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/56", kirp: [330, 150, 1130, 750] },
  { gorsel: "tam/58", kirp: [300, 300, 1000, 825] },
  { gorsel: "tam/57", kirp: [300, 260, 1100, 860] },
];

const S55: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S55;
