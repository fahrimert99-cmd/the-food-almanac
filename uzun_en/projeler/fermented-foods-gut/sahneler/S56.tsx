// Sahne 56 — bölüm kartı: Recap (THE TAKEAWAY).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (57: kase + bardak, 58: terazi, 59: kahvaltı kasesi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/57", kirp: [330, 250, 1260, 947] },
  { gorsel: "tam/58", kirp: [240, 60, 1440, 960] },
  { gorsel: "tam/59", kirp: [200, 20, 1600, 1070] },
];

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "recap"), 0.45);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazı altı boşlukta tek senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.altin }} />
        QUICK RECAP
      </div>
    </>
  );
};

export default S56;
