// Sahne 23 — bölüm kartı: brokoli deneyi.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/24", kirp: [100, 250, 860, 820] },
    { gorsel: "tam/26", kirp: [1050, 280, 1850, 880] },
    { gorsel: "tam/27", kirp: [60, 100, 860, 700] },
  ]} />
);

export default S23;
