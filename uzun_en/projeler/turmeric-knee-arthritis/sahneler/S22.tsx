// Sahne 22 — görselsiz çubuk grafik: ağrı ilacını azaltanların oranı (curcumin %37, placebo %13).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 420, GY = 470, GW = 1080, GH = 330;

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // her çubuk kendi sayısı söylendiğinde yükselir (meta sırası: placebo, curcumin)
  const baslar = [K(0, "13 percent") - 0.05, K(0, "37 percent") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 1 ? RENK.koyuYesil : RENK.gri, bas: baslar[i] }));
  const tMore = K(0, "More people"), tMed = K(0, "medicine:");
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, tMore, 0.6));
  const [sL, aL] = pop(t, tMed, 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 342, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`, borderRadius: 999,
        padding: "9px 26px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.koyuYesil }} />
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil }}>SHARE WHO CUT BACK</span>
      </div>
      <CubukGrafik t={t} bas={baslar[1]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={42} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S22;
