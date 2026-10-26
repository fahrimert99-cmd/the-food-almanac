// Sahne 30 — bölüm kartı (PART 4): bölümden üç görsel kartı + altta küçük senkron hap.
import React from "react";
import { BolumKarti, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, K(0, "payoff"), 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/34", kirp: [900, 380, 1780, 1040] },
        { gorsel: "tam/31", kirp: [20, 520, 720, 1045] },
        { gorsel: "tam/32", kirp: [880, 270, 1780, 945] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, opacity: a, transform: `translateY(${(1 - a) * 12}px)`, display: "flex",
        alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "8px 26px 8px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
        PAYOFF OF THE EARLIER CLUE
      </div>
    </>
  );
};

export default S30;
