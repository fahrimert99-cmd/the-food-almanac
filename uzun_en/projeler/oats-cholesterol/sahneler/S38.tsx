// Sahne 38 — bölüm kartı: Toppings.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/39", kirp: [240, 0, 1680, 1080] },
    { gorsel: "tam/40", kirp: [50, 200, 930, 860] },
    { gorsel: "tam/42", kirp: [60, 130, 1060, 880] },
  ]} />
);

export default S38;
