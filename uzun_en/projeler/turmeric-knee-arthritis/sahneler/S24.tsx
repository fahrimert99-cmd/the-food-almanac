// Sahne 24 — BÖLÜM 3 kartı: 15 denemenin birleşimi.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/25", kirp: [100, 80, 1100, 830] },
    { gorsel: "tam/26", kirp: [300, 130, 1400, 955] },
    { gorsel: "tam/28", kirp: [100, 30, 1500, 1080] },
  ]} />
);

export default S24;
