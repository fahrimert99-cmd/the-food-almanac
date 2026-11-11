// Sahne 43 — bölüm kartı: "What cinnamon can't do". Kartın altında iki senkron hap.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop, sol } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "supported,"), 0.5);
  const [s2, a2] = pop(t, K(1, "isn't"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/44", kirp: [300, 150, 1500, 1050] },
        { gorsel: "tam/45", kirp: [100, 150, 1300, 1050] },
        { gorsel: "tam/48", kirp: [260, 130, 1460, 1030] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 22 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}><Hap metin="SUPPORTED" renk={RENK.yesil} boyut={30} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 * sol(t, 1e9) }}><Hap metin="NOT SUPPORTED" renk={RENK.mercan} boyut={30} /></div>
      </div>
    </>
  );
};

export default S43;
