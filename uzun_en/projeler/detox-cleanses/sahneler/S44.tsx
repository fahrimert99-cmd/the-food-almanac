// Sahne 44 — bölüm kartı: karaciğere ne yardım eder
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/45", kirp: [0, 100, 1000, 850] },
    { gorsel: "tam/45", kirp: [900, 200, 1900, 950] },
  ]} />
);

export default S44;
