// Sahne 56 — özet bölüm kartı
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/57", kirp: [250, 380, 1150, 1055] },
    { gorsel: "tam/52", kirp: [100, 160, 1100, 910] },
    { gorsel: "tam/50", kirp: [100, 180, 1100, 930] },
  ]} />
);
export default S56;
