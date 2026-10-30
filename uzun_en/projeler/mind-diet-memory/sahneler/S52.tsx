// Sahne 52 — özet bölüm kartı (çok kısa): önceki bölümlerden üç görsel.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/53", kirp: [340, 100, 1580, 1030] },
    { gorsel: "tam/54", kirp: [400, 60, 1520, 900] },
    { gorsel: "tam/47", kirp: [200, 130, 1400, 1030] },
  ]} />
);

export default S52;
