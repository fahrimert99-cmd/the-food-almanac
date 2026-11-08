// Sahne 57 — bölüm kartı: özet (recap).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/58", kirp: [380, 80, 1700, 1070] },
    { gorsel: "tam/55", kirp: [440, 100, 1640, 1000] },
    { gorsel: "tam/54", kirp: [340, 100, 1640, 1075] },
  ]} />
);
export default S57;
