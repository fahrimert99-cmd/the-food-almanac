// Sahne 14 — meta.grafik: hindistan cevizi yağı vs tropik olmayan bitkisel yağlar; her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 320;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // çubuklar anlatımdaki sayılarla gelir; trigliserit son cümlede
  const baslar = [K(0, "15") - 0.05, K(0, "10,") - 0.05, K(0, "4.") - 0.05, K(1, "Triglycerides") - 0.05];
  const renkler = [RENK.lacivert, RENK.mercan, RENK.yesil, RENK.gri];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, metin: i === 3 ? "+2.4" : c.metin, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "coconut"), 0.6));
  const aNot = eout(ilerle(t, K(1, "clear"), 0.5));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={74} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={18} />
      <div style={{ position: "absolute", left: 1455, top: 866, transform: "translateX(-50%)", opacity: aNot, fontFamily: INTER, fontWeight: 800,
        fontSize: 26, letterSpacing: 2, color: RENK.gri, whiteSpace: "nowrap" }}>NOT CLEAR</div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
