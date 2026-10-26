// Sahne 51 — Özet bölüm kartı.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/52", kirp: [400, 100, 1600, 1000] },
    { gorsel: "tam/53", kirp: [560, 120, 1520, 840] },
    { gorsel: "tam/54", kirp: [300, 100, 1500, 1000] },
  ]} />
);

export default S51;
