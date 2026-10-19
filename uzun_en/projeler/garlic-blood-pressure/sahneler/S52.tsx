// Sahne 52 — bölüm kartı: Recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// 4:3 kırpımlar: tabak, bitki kasesi + şişe, kesme tahtası
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/50", kirp: [100, 100, 1180, 910] },
  { gorsel: "tam/54", kirp: [300, 150, 1380, 960] },
  { gorsel: "tam/55", kirp: [560, 150, 1760, 1050] },
];

const S52: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S52;
