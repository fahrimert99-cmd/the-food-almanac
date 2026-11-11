// Sahne 57 — kapanış kartı: "Evidence over hype".
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (56: yalnızca ceviz, ölçek yazısı dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/01", kirp: [150, 150, 1230, 960] },
  { gorsel: "tam/55", kirp: [560, 200, 1700, 1055] },
  { gorsel: "tam/56", kirp: [440, 215, 960, 605] },
];

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "subscribe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.altin, flex: "none" }} />
        SUBSCRIBE
      </div>
    </>
  );
};

export default S57;
