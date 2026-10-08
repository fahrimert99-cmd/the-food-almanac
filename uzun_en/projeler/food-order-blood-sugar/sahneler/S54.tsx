// Sahne 54 — bölüm kartı: "The takeaway" (RECAP). Kısa sahne ("Let's recap."): yalnızca kart + iki görsel.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

// Kart görselleri: bölümün kusursuz 4:3 kırpımları (56'daki anatomi bozuk yazılı olduğu için kullanılmadı)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [400, 30, 1480, 840] },
  { gorsel: "tam/57", kirp: [420, 120, 1700, 1080] },
];

const S54: React.FC<SP> = (p) => <BolumKarti {...p} gorseller={GORSELLER} />;
export default S54;
