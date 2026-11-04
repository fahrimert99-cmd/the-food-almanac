// Sahne 53 — bölüm kartı: özet
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/54", kirp: [240, 0, 1680, 1080] },
    { gorsel: "tam/55", kirp: [440, 180, 1640, 1080] },
    { gorsel: "tam/50", kirp: [400, 150, 1600, 1050] },
  ]} />
);

export default S53;
