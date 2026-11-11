// Sahne 46 — bölüm kartı: How to read a package (PART 6).
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 47'den iki 4:3 kırpım (su/çay/bardak ve sürahi/süt şişesi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/47", kirp: [120, 330, 1120, 1080] },
  { gorsel: "tam/47", kirp: [850, 330, 1850, 1080] },
];

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const adim = ["1", "2", "3", "4", "5"];
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", gap: 14 }}>
        {adim.map((n, i) => {
          const [sc, al] = pop(t, K(1, "Five") + i * 0.14, 0.4);
          return (
            <div key={n} style={{ width: 62, height: 62, borderRadius: "50%", background: i === 0 ? RENK.altin : RENK.kagitAcik,
              border: `3px solid ${RENK.altin}`, color: i === 0 ? "#fff" : RENK.murekkep, display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 30, opacity: al, transform: `scale(${sc})`,
              boxShadow: "0 6px 16px rgba(48,40,34,0.14)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};
export default S46;
