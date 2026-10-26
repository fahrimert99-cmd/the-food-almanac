// Sahne 52 — özet kartı
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/53", kirp: [500, 180, 1620, 1020] },
    { gorsel: "tam/54", kirp: [360, 120, 1560, 1020] },
    { gorsel: "tam/55", kirp: [250, 150, 1450, 1050] },
  ]} />
);

export default S52;
