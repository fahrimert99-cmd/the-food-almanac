// Sahne 50 — bölüm kartı: dört kullanım yolu
import React from "react";
import { ANTON, BolumKarti, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/51", kirp: [60, 160, 1200, 1015] },
        { gorsel: "tam/52", kirp: [260, 0, 1620, 1020] },
        { gorsel: "tam/53", kirp: [150, 60, 1350, 960] },
      ]} />
      {/* "four" sözcüğüyle dört numara */}
      <div style={{ position: "absolute", left: 140, top: 780, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n, i) => {
          const [sc, al] = pop(t, tDort + i * 0.3, 0.5);
          return (
            <div key={n} style={{ width: 76, height: 76, borderRadius: "50%", background: i % 2 ? RENK.altin : RENK.lacivert, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 44,
              transform: `scale(${sc})`, opacity: al, boxShadow: "0 8px 20px rgba(48,40,34,0.2)" } as React.CSSProperties}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S50;
