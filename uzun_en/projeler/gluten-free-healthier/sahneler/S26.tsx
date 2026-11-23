// Sahne 26 — bölüm kartı: "Is gluten the culprit?" (PART 2).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 4:3 kırpımlar: 27 laboratuvar (haritalar dışarıda), 28 sofra, 29 ekmek + kek
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/27", kirp: [560, 380, 1460, 1055] },
  { gorsel: "tam/28", kirp: [60, 170, 1260, 1070] },
  { gorsel: "tam/29", kirp: [100, 300, 1000, 975] },
];

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "unwell"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="FEEL UNWELL · NO CELIAC DISEASE" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};

export default S26;
