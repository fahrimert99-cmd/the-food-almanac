// Sahne 52 — Özet bölüm kartı
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/53", kirp: [500, 230, 1600, 1055] },
    { gorsel: "tam/54", kirp: [380, 60, 1540, 930] },
    { gorsel: "tam/55", kirp: [300, 170, 1500, 1070] },
  ]} />
);

export default S52;
