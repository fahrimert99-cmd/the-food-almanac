// Sahne 28 — bölüm kartı: NutriNet-Santé kohortu.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/29", kirp: [200, 340, 1100, 1015] },
    { gorsel: "tam/30", kirp: [0, 60, 1100, 885] },
    { gorsel: "tam/25", kirp: [100, 100, 1000, 775] },
  ]} />
);

export default S28;
