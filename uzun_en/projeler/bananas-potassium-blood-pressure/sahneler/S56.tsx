// Sahne 56 — bölüm kartı: "Recap". Çok kısa; kart girişi yeterli.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/53", kirp: [260, 100, 1260, 850] },
  { gorsel: "tam/50", kirp: [440, 170, 1440, 920] },
  { gorsel: "tam/55", kirp: [440, 260, 1440, 1010] },
];

const S56: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S56;
