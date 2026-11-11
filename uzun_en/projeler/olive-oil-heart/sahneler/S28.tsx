// Sahne 28 — meta.grafik: ölüm riskinde düşüş (5 çubuk), her çubuk söylendiği anda yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 260, GY = 440, GW = 1400, GH = 340;

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const ifadeler = ["lower risks", "total deaths", "cancer deaths", "respiratory", "most strongly"];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 4 ? RENK.koyuYesil : RENK.yesil, bas: K(0, ifadeler[i]) - 0.05 }));
  const aAlt = eout(ilerle(t, 0.5, 0.6)), aKay = eout(ilerle(t, 1.5, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * eout(ilerle(t, 0.2, 0.6)), background: RENK.altin }} />
      <Baslik t={t} bas={0.25} metin={g.baslik.toUpperCase()} x={156} y={210} boyut={84} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 274, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={0.5} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={34} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 890, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S28;
