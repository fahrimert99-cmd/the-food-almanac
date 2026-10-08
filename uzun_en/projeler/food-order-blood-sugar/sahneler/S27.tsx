// Sahne 27 — bölüm kartı: "Why order matters" + üç mekanizma çipi.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: mide (28 sağ, temiz), lif (31 brokoli; imza dışarıda), bağırsak (34 sol; ok ucu ve beyin dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/28", kirp: [1280, 200, 1920, 680] },
  { gorsel: "tam/31", kirp: [20, 0, 1100, 810] },
  { gorsel: "tam/34", kirp: [0, 230, 624, 698] },
];

const CIPLER = [
  { metin: "STOMACH", renk: RENK.lacivert },
  { metin: "FIBER", renk: RENK.yesil },
  { metin: "GUT HORMONES", renk: RENK.altin },
];

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // "three main mechanisms" -> çipler sırayla; "work together" -> aralarında "+"
  const tUc = K(1, "three"), tBirlikte = K(1, "work together");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", alignItems: "center", gap: 12 }}>
        {CIPLER.map((c, i) => {
          const [sc, al] = pop(t, tUc + i * 0.24, 0.5);
          const [sp, ap] = pop(t, tBirlikte + i * 0.12, 0.45);
          return (
            <React.Fragment key={c.metin}>
              {i > 0 && (
                <span style={{ width: 34, textAlign: "center", transform: `scale(${sp})`, opacity: ap, fontFamily: INTER,
                  fontWeight: 800, fontSize: 40, color: RENK.altin }}>+</span>
              )}
              <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
                background: RENK.kagitAcik, border: `3px solid ${c.renk}`, borderRadius: 999, padding: "8px 22px 8px 9px",
                fontFamily: INTER, fontWeight: 800, fontSize: 27, letterSpacing: 1.5, color: RENK.murekkep,
                boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
                <span style={{ width: 38, height: 38, borderRadius: "50%", background: c.renk, color: "#fff", display: "flex",
                  alignItems: "center", justifyContent: "center", fontSize: 22 }}>{i + 1}</span>
                {c.metin}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default S27;
