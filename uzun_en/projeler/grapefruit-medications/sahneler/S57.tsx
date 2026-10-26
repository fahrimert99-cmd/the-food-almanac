// Sahne 57 — özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/58", kirp: [1100, 160, 1820, 700] },
    { gorsel: "tam/59", kirp: [600, 540, 1320, 1080] },
    { gorsel: "tam/60", kirp: [700, 300, 1700, 1050] },
  ]} />
);

export default S57;
