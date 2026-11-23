// Sahne 54 — bölüm kartı: özet
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/49", kirp: [0, 100, 1100, 925] },
    { gorsel: "tam/52", kirp: [0, 150, 1100, 975] },
    { gorsel: "tam/53", kirp: [300, 300, 1100, 900] },
  ]} />
);

export default S54;
