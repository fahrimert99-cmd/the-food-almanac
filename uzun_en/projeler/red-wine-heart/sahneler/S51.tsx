// Sahne 51 — bölüm kartı: recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/52", kirp: [150, 300, 1090, 1005] },
  { gorsel: "tam/54", kirp: [60, 150, 1200, 1005] },
];

const S51: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S51;
