// Sahne 52 — bölüm kartı: özet (RECAP).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: fincan, terazi ve masa sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/53", kirp: [540, 330, 1380, 960] },
  { gorsel: "tam/54", kirp: [250, 330, 850, 780] },
  { gorsel: "tam/55", kirp: [330, 180, 1130, 780] },
];

const S52: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S52;
