// Sahne 47 — bölüm kartı: "How to use it" (PART 6).
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 48 (yiyecekler), 50 (hap kutusu + portakal), 51 (pencere önü, imza dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/48", kirp: [60, 230, 1020, 950] },
  { gorsel: "tam/50", kirp: [480, 100, 1760, 1060] },
  { gorsel: "tam/51", kirp: [500, 90, 1700, 990] },
];

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "Four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* "Four practical points": dört numara */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, bas + (n - 1) * 0.2, 0.45);
          return (
            <div key={n} style={{ width: 76, height: 76, borderRadius: "50%", background: RENK.lacivert, color: "#fff", opacity: al,
              transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: ANTON, fontSize: 44, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S47;
