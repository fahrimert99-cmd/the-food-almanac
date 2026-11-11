// Sahne 50 — bölüm kartı: özet (THE TAKEAWAY).
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: kâse (51), terazi (52), kâse + steteskop (54); hepsi kusursuz 4:3 kırpım
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/51", kirp: [380, 150, 1580, 1050] },
  { gorsel: "tam/52", kirp: [360, 100, 1560, 1000] },
  { gorsel: "tam/54", kirp: [760, 160, 1660, 835] },
];

const S50: React.FC<SP> = ({ t, s }) => <BolumKarti t={t} s={s} gorseller={GORSELLER} />;

export default S50;
