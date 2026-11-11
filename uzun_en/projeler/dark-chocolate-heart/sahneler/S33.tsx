// Sahne 33 — görselsiz çubuk grafik (meta.grafik): doğal → ağır işlenmiş kakao, mg flavanol/g.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 380, GW = 1320, GH = 400;

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [0.4, K(0, "14") - 0.05, K(1, "8") - 0.05, K(2, "4") - 0.05];
  const renkler = [RENK.koyuYesil, RENK.yesil, RENK.altin, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 100, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={168} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 232, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={0.4} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={40} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 890, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S33;
