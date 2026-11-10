// Sahne 60 — özet bölüm kartı (RECAP); kısa sahne, yalnızca kart.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/61", kirp: [330, 150, 1530, 1050] },
  { gorsel: "tam/62", kirp: [200, 60, 1400, 960] },
  { gorsel: "tam/63", kirp: [150, 0, 1590, 1080] },
];

const S60: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S60;
