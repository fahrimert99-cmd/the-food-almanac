// Sahne 18 — bölüm kartı: CDC verisi (PART 3).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/19", kirp: [560, 200, 1560, 950] },
  { gorsel: "tam/22", kirp: [150, 180, 1110, 900] },
  { gorsel: "tam/23", kirp: [300, 100, 1500, 1000] },
];

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Centers"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 850, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        CDC · WHICH FOODS MATTER MOST
      </div>
    </>
  );
};

export default S18;
