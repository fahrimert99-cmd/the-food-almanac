// Sahne 19 — BÖLÜM 3 kartı: hipertansiyonlu kişiler.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/20", kirp: [940, 330, 1700, 900] },
    { gorsel: "tam/22", kirp: [200, 150, 1260, 945] },
    { gorsel: "tam/24", kirp: [1000, 330, 1840, 960] },
  ]} />
);

export default S19;
