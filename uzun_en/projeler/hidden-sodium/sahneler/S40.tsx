// Sahne 40 — Sistolik kan basıncı düşüşü: meta.grafik'teki gerçek sayılarla çubuk grafik.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 210, GY = 470, GW = 1500, GH = 330;

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "8 millimeters"), K(0, "7 lower"), K(1, "about 5")].map((x) => x - 0.05);
  const renkler = [RENK.yesil, RENK.koyuYesil, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "low-sodium"), 0.6));
  const [sc, al] = pop(t, K(0, "top blood pressure"), 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 346, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="TOP NUMBER" renk={RENK.yesil} boyut={24} />
      </div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={11} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S40;
