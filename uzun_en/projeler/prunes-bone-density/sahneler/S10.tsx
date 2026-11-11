// Sahne 10 — bölüm kartı: "The Prune Study" (Penn State).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/14", kirp: [330, 330, 1200, 982] },
  { gorsel: "tam/15", kirp: [150, 250, 1030, 910] },
  { gorsel: "tam/16", kirp: [100, 200, 1000, 875] },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "Penn State"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        PENN STATE
      </div>
    </>
  );
};

export default S10;
