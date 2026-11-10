// Sahne 17 — bölüm kartı: büyük kohort çalışmaları. Altta tek senkron öğe: erkek sayacı.
import React from "react";
import { BolumKarti, INTER, ANTON, RENK, SP, eout, ilerle, kelimeZamani, pop, sayac } from "../kutuphane";

// 4:3 kırpımlar: 19 (süt ürünleri), 20 (yoğurt + takvim), 18 (masa lambası)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/18", kirp: [200, 0, 1600, 1050] },
  { gorsel: "tam/19", kirp: [0, 100, 1200, 1000] },
  { gorsel: "tam/20", kirp: [310, 60, 1610, 1035] },
];

const bin = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(0, "45,619");
  const [sc, al] = pop(t, tSayi - 0.1, 0.5);
  const aYas = eout(ilerle(t, K(0, "aged"), 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
          display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik,
          border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 28px 8px 24px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ fontFamily: ANTON, fontSize: 52, color: RENK.koyuYesil, minWidth: 150 }}>{bin(sayac(t, tSayi, 45619, 1.4))}</span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, opacity: 1 }}>MEN</span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.altin, opacity: aYas }}>· AGED 40–75</span>
        </div>
      )}
    </>
  );
};

export default S17;
