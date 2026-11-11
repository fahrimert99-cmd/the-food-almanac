// Sahne 33 — bölüm kartı: kalp rehberliği.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/35", kirp: [560, 100, 1360, 700] },
    { gorsel: "tam/32", kirp: [430, 90, 1530, 915] },
  ]} />
);

export default S33;
