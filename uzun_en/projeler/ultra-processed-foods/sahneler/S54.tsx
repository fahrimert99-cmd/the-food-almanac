// Sahne 54 — Özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/50", kirp: [440, 200, 1540, 1025] },
    { gorsel: "tam/55", kirp: [200, 330, 1200, 1080] },
    { gorsel: "tam/52", kirp: [200, 300, 1200, 1050] },
  ]} />
);

export default S54;
