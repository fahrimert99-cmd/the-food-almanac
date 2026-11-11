// Sahne 27 — bölüm kartı: Kefir vs yogurt.
import React from "react";
import { INTER, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "straight"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/28", kirp: [150, 160, 1010, 805] },
        { gorsel: "tam/29", kirp: [120, 230, 1000, 890] },
        { gorsel: "tam/31", kirp: [260, 60, 1300, 840] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "12px 30px 12px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2 }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
        STRAIGHT AT THE GUT
      </div>
    </>
  );
};

export default S27;
