// Sahne 36 — BÖLÜM 5 kartı: kimlere yardım eder, sınırlar.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/38", kirp: [240, 100, 1240, 850] },
    { gorsel: "tam/39", kirp: [1000, 400, 1800, 1000] },
    { gorsel: "tam/40", kirp: [200, 330, 1200, 1080] },
  ]} />
);

export default S36;
