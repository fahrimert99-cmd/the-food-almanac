// Sahne 47 — bölüm kartı: "How to use it" (PART 9), dört ipucu.
import React from "react";
import { BolumKarti, INTER, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/48", kirp: [280, 300, 1180, 975] },
  { gorsel: "tam/50", kirp: [290, 100, 1550, 1045] },
  { gorsel: "tam/52", kirp: [240, 60, 1540, 1035] },
];

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t4 = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* dört küçük numara: "four" söylenince sırayla */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", alignItems: "center", gap: 20 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, t4 + 0.18 * (n - 1), 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 70, height: 70, borderRadius: "50%",
              background: n === 4 ? RENK.altin : RENK.lacivert, color: "#fff", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 40, boxShadow: "0 6px 16px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.lacivert,
          opacity: pop(t, t4 + 0.8, 0.45)[1], marginLeft: 10 }}>PRACTICAL TIPS</span>
      </div>
    </>
  );
};

export default S47;
