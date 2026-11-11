// Sahne 39 — bölüm kartı: "Cooking with olive oil" (PART 4).
import React from "react";
import { BolumKarti, Ikon, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Bölüm görselleri: kusursuz 4:3 kırpımlar (40: tava+sürahi, 41: süzgeç, 42: fırın)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [60, 100, 1360, 1075] },
  { gorsel: "tam/41", kirp: [100, 60, 900, 660] },
  { gorsel: "tam/42", kirp: [60, 40, 1160, 865] },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "safe"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* altyazının altındaki boşlukta tek senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 790, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 18 }}>
        <Ikon t={t} bas={K(1, "safe")} ad="soru" x={50} y={50} boyut={84} zemin={RENK.altin} />
        <div style={{ marginLeft: 112, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
          padding: "12px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
          whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>EXTRA VIRGIN OLIVE OIL</div>
      </div>
    </>
  );
};

export default S39;
