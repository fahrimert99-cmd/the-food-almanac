// Sahne 5 — bölüm kartı: Fransız paradoksu.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 6 (peynir, kadeh, sucuk; etiketli yuvarlak peynir dışarıda), 7 (damar; imza dışarıda), 8 (harita kadeh)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [20, 460, 740, 1000] },
  { gorsel: "tam/07", kirp: [230, 560, 830, 1010] },
  { gorsel: "tam/08", kirp: [1000, 200, 1900, 875] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "1990s"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 810, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin }} />
        EARLY 1990s · FRANCE
      </div>
    </>
  );
};

export default S05;
