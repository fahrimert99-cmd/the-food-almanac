// Sahne 11 — görselsiz çubuk grafik (meta.grafik): kaynatma sonrası ortalama kayıp. Her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // çubuk sırası: folat, C vitamini, lutein, beta-karoten; sayılar anlatımda farklı sırada geçer
  const ifadeler = ["68 percent", "51 percent", "15 percent", "9 percent"];
  const renkler = [RENK.mercan, RENK.mercan, RENK.altin, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: K(1, ifadeler[i]) - 0.05 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.9, 0.6));
  const aKay = eout(ilerle(t, 1.6, 0.6));
  const [sL, aL] = pop(t, K(0, "cost"), 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 346, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL }}>
        <Hap metin="BOILING COST THE MOST" renk={RENK.mercan} boyut={26} />
      </div>
      <CubukGrafik t={t} bas={cubuklar[1]?.bas ?? 4} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={80} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S11;
