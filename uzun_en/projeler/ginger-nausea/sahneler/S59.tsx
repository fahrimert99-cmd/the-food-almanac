// Sahne 59 — bölüm kartı: Recap.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (60 zencefil+fincan, 61 üçlü grup, 62 hap kutusu)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/60", kirp: [60, 330, 960, 1005] },
  { gorsel: "tam/61", kirp: [300, 120, 1500, 1020] },
  { gorsel: "tam/62", kirp: [100, 200, 1100, 950] },
];

const S59: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S59;
