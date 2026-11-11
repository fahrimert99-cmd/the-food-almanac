// Sahne 15 — ana sonuç: 386 (balık yağı) vs 419 (plasebo). Görselsiz çubuk grafik (meta.grafik).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 420, GY = 470, GW = 1080, GH = 330;

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "386") - 0.05, K(0, "419") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.altin : RENK.gri, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "main result"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sL, aL] = pop(t, K(0, "heart attack"), 0.55);
  const [sC, aC] = pop(t, K(1, "could be chance"), 0.6);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 342, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 26px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        HEART ATTACK, STROKE OR HEART DEATH
      </div>
      <CubukGrafik t={t} bas={baslar[0] + 0.05} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={500} />
      <div style={{ position: "absolute", left: 1620, top: 560, transform: `translate(-50%,0) scale(${sC})`, opacity: aC, textAlign: "center",
        background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26, padding: "12px 22px", width: 330,
        fontFamily: INTER, fontWeight: 800, fontSize: 28, lineHeight: 1.25, letterSpacing: 1, color: RENK.lacivert,
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>GAP COULD BE CHANCE</div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S15;
