// Sahne 10 — bölüm kartı: "The big review" (PART 1).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (11: kitap masası, 12: kavanoz, 15: terazi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/11", kirp: [330, 160, 1530, 1060] },
  { gorsel: "tam/12", kirp: [180, 150, 1080, 825] },
  { gorsel: "tam/15", kirp: [340, 100, 1580, 1030] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Cochrane"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="COCHRANE REVIEW" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S10;
