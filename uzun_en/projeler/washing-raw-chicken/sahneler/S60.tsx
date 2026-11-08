// Sahne 60 — özet bölüm kartı
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/61", kirp: [180, 40, 1380, 940] },
    { gorsel: "tam/57", kirp: [60, 360, 960, 1035] },
    { gorsel: "tam/62", kirp: [300, 80, 1400, 905] },
  ]} />
);
export default S60;
