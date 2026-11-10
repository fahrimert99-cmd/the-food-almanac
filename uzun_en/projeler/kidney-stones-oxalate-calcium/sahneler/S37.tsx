// Sahne 37 — bölüm kartı: Water, salt and protein (PART 5).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Su sahnelerinden kusursuz 4:3 kırpımlar (38: sürahi+bardak, 39: bardaklar, 40: bardak+defter)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/38", kirp: [120, 200, 1040, 890] },
  { gorsel: "tam/39", kirp: [0, 150, 880, 810] },
  { gorsel: "tam/40", kirp: [860, 480, 1660, 1080] },
];

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "water"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="FIRST LEVER: WATER" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S37;
