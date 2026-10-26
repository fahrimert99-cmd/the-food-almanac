// Sahne 43 — bölüm kartı: ne zaman test istenmeli (PART 6).
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar (44: kum saati ve şişe; 45: raf; 46: el ve defter)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/44", kirp: [830, 270, 1730, 945] },
  { gorsel: "tam/45", kirp: [0, 30, 640, 510] },
  { gorsel: "tam/46", kirp: [0, 280, 920, 970] },
];

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "ask your doctor"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="ASK ABOUT A B12 BLOOD TEST" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S43;
