// S38 — bölüm kartı: kanıtın sınırları
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/39", kirp: [200, 300, 920, 840] },
    { gorsel: "tam/37", kirp: [100, 180, 1100, 930] },
    { gorsel: "tam/36", kirp: [500, 100, 1700, 1000] },
  ]} />
);
export default S38;
