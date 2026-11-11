// Sahne 43 — Bölüm 6 kartı: gece uyanmak.
import React from "react";
import { BolumKarti, Ikon, Not, RENK, SP, INTER, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "waking"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/44", kirp: [70, 120, 1030, 840] },
        { gorsel: "tam/45", kirp: [65, 320, 985, 1010] },
        { gorsel: "tam/46", kirp: [50, 60, 970, 750] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 16, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "10px 28px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width={30} height={30} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="#fff" strokeWidth="2.4" /><path d="M12 7v5l3 2" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" /></svg>
        </span>
        WAKING UP AT NIGHT
      </div>
    </>
  );
};
export default S43;
