// Sahne 13 — bölüm kartı: "The limit disappears" (2015 rehberleri).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: 14 (masa, sepet), 15 (yumurta ve defter; ölçü kabı dışarıda), 16 (tabak)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/14", kirp: [100, 300, 1100, 1050] },
  { gorsel: "tam/15", kirp: [700, 300, 1700, 1050] },
  { gorsel: "tam/16", kirp: [700, 150, 1700, 900] },
];

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "Why"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "10px 30px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 3 }}>
        <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="soru" boyut={34} renk="#fff" />
        </span>
        WHY?
      </div>
    </>
  );
};

export default S13;
