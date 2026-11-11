// Sahne 27 — görselsiz çubuk grafik (meta.grafik): salçadan sonra likopen zirvesi 2.5×, toplam 3.8×.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 420, GY = 450, GW = 1080, GH = 340, MAKS = 4.4;

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "2.5") - 0.05, K(0, "3.8") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.mercan : RENK.koyuYesil, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "lycopene"), 0.6));
  const aRef = eout(ilerle(t, K(0, "fresh tomatoes") - 0.2, 0.6)); // taze domates = 1× çizgisi
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const yRef = GY + GH - (1 / MAKS) * GH;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={1.2} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      {/* referans: taze domates = 1× */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aRef }}>
        <line x1={GX - 10} x2={GX + GW + 10} y1={yRef} y2={yRef} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="12 9" />
      </svg>
      <div style={{ position: "absolute", left: GX + GW + 30, top: yRef - 20, opacity: aRef, fontFamily: INTER, fontWeight: 800, fontSize: 24,
        letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>FRESH TOMATO = 1×</div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S27;
