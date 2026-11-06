// Sahne 57 — özet bölüm kartı
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/58", kirp: [180, 250, 1180, 1000] },
    { gorsel: "tam/59", kirp: [450, 250, 1450, 1000] },
    { gorsel: "tam/60", kirp: [230, 230, 1230, 980] },
  ]} />
);

export default S57;
