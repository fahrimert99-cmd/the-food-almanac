// Sahne 29 — bölüm kartı: MCT iddiası.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "true"), 0.55);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/30", kirp: [520, 100, 1720, 1000] },
        { gorsel: "tam/27", kirp: [240, 0, 1680, 1080] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 18, background: RENK.lacivert, borderRadius: 999, padding: "10px 34px 10px 12px",
        color: "#fff", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 3 }}>
        <span style={{ width: 56, height: 56, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width={34} height={34} viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth={6} strokeLinecap="round">
            <path d="M16 17 a8 8 0 1 1 11 7.5 c-2 1 -3 2.5 -3 5" /><circle cx="24" cy="37" r="0.8" />
          </svg>
        </span>
        IS THAT TRUE?
      </div>
    </>
  );
};

export default S29;
