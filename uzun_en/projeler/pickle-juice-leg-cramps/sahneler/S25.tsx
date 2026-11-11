// Sahne 25 — bölüm kartı: "The honest part" (PART 3).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden 4:3 kırpımlar (26 tezgâh, 27 bardak ve elektrot, 30 büyüteç)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/26", kirp: [130, 180, 1330, 1080] },
  { gorsel: "tam/27", kirp: [200, 30, 1600, 1080] },
  { gorsel: "tam/30", kirp: [250, 80, 1550, 1055] },
];

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "night"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 28px 10px 14px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="soru" boyut={28} renk="#fff" kalinlik={7} />
        </span>
        YOUR NIGHT CRAMPS?
      </div>
    </>
  );
};

export default S25;
