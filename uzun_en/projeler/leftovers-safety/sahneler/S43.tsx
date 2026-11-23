// Sahne 43 — bölüm kartı: yaş ve risk (PART 5).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar: 44 (iki kişi), 46 (mide), 48 (buzdolabı)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [0, 120, 1000, 870] },
  { gorsel: "tam/46", kirp: [150, 60, 1150, 810] },
  { gorsel: "tam/48", kirp: [560, 40, 1560, 790] },
];

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "older"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="OLDER ADULTS" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};
export default S43;
