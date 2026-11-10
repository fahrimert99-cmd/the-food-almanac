// Sahne 58 — kapanış kartı: abone ol, sonra yalnızca eğitim amaçlı notu.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: kusursuz 4:3 kırpımlar (bardak + meyveler, bardak + hap şişesi)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/55", kirp: [460, 100, 1460, 850] },
  { gorsel: "tam/57", kirp: [500, 150, 1500, 900] },
];

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAbone = K(0, "subscribe"), tEgitim = K(1, "education");
  const [sc, al] = pop(t, tAbone, 0.5);
  const [sc2, al2] = pop(t, tEgitim, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex" }}>
        {/* tek öğe: önce abone ol, sonra eğitim notu */}
        {t < tEgitim ? (
          <div style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, background: RENK.lacivert, color: "#fff", borderRadius: 999,
            padding: "12px 32px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>SUBSCRIBE</div>
        ) : (
          <div style={{ transform: `scale(${sc2})`, transformOrigin: "0 50%", opacity: al2, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
            borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.lacivert,
            whiteSpace: "nowrap" }}>FOR EDUCATION ONLY</div>
        )}
      </div>
    </>
  );
};

export default S58;
