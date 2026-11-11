// Sahne 40 — bölüm kartı: germe egzersizi kanıtı.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kusursuz 4:3 kırpımlar (41: yatak odası, 42: oturan kişi ve havlu, 45: yatak ve komodin)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/41", kirp: [60, 100, 1260, 1000] },
  { gorsel: "tam/42", kirp: [150, 0, 1350, 900] },
  { gorsel: "tam/45", kirp: [650, 120, 1850, 1020] },
];

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "simpler:"), 0.5);
  const [s2, a2] = pop(t, K(1, "stretching."), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
          <Hap metin="SIMPLE" renk={RENK.altin} boyut={28} />
        </div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
          <Hap metin="STRETCHING" renk={RENK.yesil} boyut={28} />
        </div>
      </div>
    </>
  );
};

export default S40;
