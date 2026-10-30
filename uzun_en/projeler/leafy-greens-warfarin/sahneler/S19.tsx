// Sahne 19 — Franco 2004: iki diyette ortalama INR (meta.grafik), her çubuk sayısı söylenince büyür
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const Hapcik: React.FC<{ t: number; bas: number; x: number; metin: string; renk: string }> = ({ t, bas, x, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: 392, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, background: renk,
      color: "#fff", borderRadius: 999, padding: "8px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, whiteSpace: "nowrap" }}>
      {metin}
    </div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const bas = [K(0, "2.6"), K(0, "3.3"), K(1, "3.1"), K(1, "2.8")].map((b) => b - 0.05);
  const renkler = [RENK.altin, RENK.mercan, RENK.altin, RENK.yesil];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: bas[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "low"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={76} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={4} />
      <Hapcik t={t} bas={K(0, "low vitamin K")} x={GX + GW * 0.25} metin="LOW VITAMIN K DIET" renk={RENK.mercan} />
      <Hapcik t={t} bas={K(1, "high vitamin K")} x={GX + GW * 0.75} metin="HIGH VITAMIN K DIET" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S19;
