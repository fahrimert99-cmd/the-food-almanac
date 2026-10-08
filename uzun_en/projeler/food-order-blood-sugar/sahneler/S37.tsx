// Sahne 37 — bölüm kartı: "Who it helps most / And where the evidence runs out".
// Görseller bölümün sahnelerinden kusursuz 4:3 kırpımlar; alt yazının altında iki soru hapı (tek senkron öğe).
import React from "react";
import { BolumKarti, IkonYol, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// kırpımlar: 38 = salata (bıçak ağzındaki sahte yazı ve eller dışarıda), 39 = pencere önündeki adam (bozuk el dışarıda),
// 40 = şişe + tabak (sahte yazılı kâğıtlar dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/38", kirp: [600, 510, 1320, 1050] },
  { gorsel: "tam/39", kirp: [440, 120, 1120, 630] },
  { gorsel: "tam/40", kirp: [60, 360, 980, 1050] },
];

const SoruHapi: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex", alignItems: "center", gap: 14,
      whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
      padding: "8px 26px 8px 8px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="soru" boyut={30} renk="#fff" kalinlik={6} />
      </span>
      {metin}
    </div>
  );
};

const S37: React.FC<SP> = (p) => {
  const { t, s } = p;
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti {...p} gorseller={GORSELLER} />
      {/* iki soru: kimlere yarıyor? / ne bilmiyoruz? */}
      <div style={{ position: "absolute", left: 140, top: 812, transform: "translateY(-50%)", display: "flex", gap: 22 }}>
        <SoruHapi t={t} bas={K(1, "who actually") - 0.05} metin="WHO BENEFITS?" renk={RENK.yesil} />
        <SoruHapi t={t} bas={K(1, "what don't we know") - 0.05} metin="WHAT WE DON'T KNOW" renk={RENK.altin} />
      </div>
    </>
  );
};

export default S37;
