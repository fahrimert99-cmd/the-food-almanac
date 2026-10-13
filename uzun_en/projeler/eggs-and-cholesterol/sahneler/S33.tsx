// Sahne 33 — bölüm kartı: "A different answer" (JAMA 2019). Kısa sahne: yalnızca kart.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/34", kirp: [0, 450, 880, 1110] },
    { gorsel: "tam/39", kirp: [800, 130, 1760, 850] },
    { gorsel: "tam/35", kirp: [100, 300, 1100, 1050] },
  ]} />
);

export default S33;
