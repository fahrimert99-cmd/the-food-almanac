// Sahne 26 — bölüm kartı: resveratrol
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/27", kirp: [60, 200, 1020, 920] },
    { gorsel: "tam/28", kirp: [820, 130, 1780, 850] },
    { gorsel: "tam/27", kirp: [1020, 100, 1820, 700] },
  ]} />
);
export default S26;
