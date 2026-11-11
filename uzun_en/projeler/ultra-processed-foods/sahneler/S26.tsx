// Sahne 26 — Srour 2019: her +10 puan için göreli risk (meta.grafik). Görselsiz çubuk grafik.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "12 percent"), K(0, "13 percent"), K(0, "11 percent")].map((b) => b - 0.05);
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 1 ? RENK.koyuYesil : RENK.yesil, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "10"), 0.6));
  const aInk = eout(ilerle(t, K(0, "includes"), 0.5));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={42} />
      {/* "which includes stroke": üçüncü çubuğun altında not */}
      <div style={{ position: "absolute", left: GX + (GW / 3) * 2.5, top: GY + GH + 70, transform: `translate(-50%, ${(1 - aInk) * 10}px)`, opacity: aInk }}>
        <Hap metin="INCLUDES STROKE" renk={RENK.mercan} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 915, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S26;
