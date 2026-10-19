// Sahne 51 — ÖZET kartı: bölümden üç görsel.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/52", kirp: [100, 240, 1060, 960] },
    { gorsel: "tam/54", kirp: [200, 120, 1360, 990] },
    { gorsel: "tam/55", kirp: [180, 150, 1280, 975] },
  ]} />
);

export default S51;
