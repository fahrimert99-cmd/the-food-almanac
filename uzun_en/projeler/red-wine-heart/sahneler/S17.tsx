// Sahne 17 — BÖLÜM 3 kartı: büyük derleme.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: 4:3 kırpımlar (kitap + kadeh, ilk yardım çantası, tek kadeh)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [440, 330, 1440, 1080] },
  { gorsel: "tam/21", kirp: [100, 100, 1300, 1000] },
  { gorsel: "tam/16", kirp: [60, 90, 860, 690] },
];

const S17: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S17;
