// Sahne 5 — bölüm kartı: kahve ve hidrasyon (mitin kaynağı).
import React from "react";
import { BolumKarti, Ikon, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm 1 görselleri: temiz 4:3 kırpımlar (6: böbrekler+fincan, 7: böbrek-bardak-fincan, 8: kitaplar+lamba)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/08", kirp: [0, 20, 1060, 815] },
  { gorsel: "tam/06", kirp: [180, 60, 1480, 1035] },
  { gorsel: "tam/07", kirp: [330, 30, 1730, 1080] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "isn't made up"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0% 50%", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
        borderRadius: 999, padding: "10px 28px 10px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep }}>
        <Ikon t={t} bas={K(1, "isn't made up") + 0.1} ad="onay" x={30} y={30} boyut={44} />
        <span style={{ marginLeft: 44 }}>THE IDEA ISN'T MADE UP</span>
      </div>
    </>
  );
};

export default S05;
