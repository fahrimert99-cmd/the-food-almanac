// Sahne 42 — bölüm kartı: The honest part
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/43", kirp: [300, 280, 1260, 1000] },
    { gorsel: "tam/44", kirp: [500, 300, 1460, 1020] },
  ]} />
);

export default S42;
