// Sahne 51 — bölüm kartı: "Practical tips" (PART 5).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar (52: tabak+bardak, 53: tepsi, 54: paket+meyve suyu)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/52", kirp: [90, 190, 1090, 940] },
  { gorsel: "tam/53", kirp: [30, 180, 1230, 1080] },
  { gorsel: "tam/54", kirp: [110, 130, 1110, 880] },
];

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "doctor"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 720, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: RENK.yesil, flex: "none" }} />
        ASK YOUR DOCTOR
      </div>
    </>
  );
};

export default S51;
