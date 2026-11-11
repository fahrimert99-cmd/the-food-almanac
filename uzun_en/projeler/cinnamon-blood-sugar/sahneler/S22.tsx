// Sahne 22 — bölüm kartı: Why studies disagree.
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/23", kirp: [40, 60, 1240, 960] },
  { gorsel: "tam/24", kirp: [360, 90, 1560, 990] },
  { gorsel: "tam/26", kirp: [60, 120, 1260, 1020] },
];

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "disagree"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
        borderRadius: 999, padding: "10px 26px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 38, height: 38, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="soru" boyut={26} renk="#fff" kalinlik={7} />
        </span>
        RESULTS DISAGREE
      </div>
    </>
  );
};

export default S22;
