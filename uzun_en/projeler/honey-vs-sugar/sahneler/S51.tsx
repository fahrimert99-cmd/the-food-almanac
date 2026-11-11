// Sahne 51 — Özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/47", kirp: [880, 230, 1880, 980] },
    { gorsel: "tam/52", kirp: [240, 100, 1500, 1045] },
    { gorsel: "tam/48", kirp: [140, 100, 1420, 1060] },
  ]} />
);

export default S51;
