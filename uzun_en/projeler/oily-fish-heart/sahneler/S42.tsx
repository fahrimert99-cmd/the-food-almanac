// Sahne 42 — bölüm kartı: Civa ve konserve (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 43: balık tezgâhı, 44: konserve rafı, 45: porsiyon tabağı (kusursuz 4:3 kırpımlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/43", kirp: [100, 100, 1100, 850] },
  { gorsel: "tam/44", kirp: [250, 100, 1450, 1000] },
  { gorsel: "tam/45", kirp: [250, 130, 1350, 955] },
];

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "avoid"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 26px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>WHY PEOPLE AVOID FISH</div>
    </>
  );
};

export default S42;
