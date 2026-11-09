// Sahne 19 — görselsiz çubuk grafik (meta.grafik): göreli risk, 1.00 = fark yok.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 260, GY = 450, GW = 1400, GH = 330, MAKS = 1.5;

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "7 percent"), K(1, "5 percent"), K(2, "19 percent"), K(2, "35 percent")].map((b) => b - 0.15);
  const renkler = [RENK.yesil, RENK.altin, RENK.mercan, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.2, 0.6));
  const aAlt = eout(ilerle(t, 0.5, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const aRef = eout(ilerle(t, 0.9, 0.7));
  const [sn, an] = pop(t, K(0, "not statistically") - 0.1, 0.5);
  const yRef = GY + GH - (1 / MAKS) * GH;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.25} metin={g.baslik.toUpperCase()} x={156} y={200} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 258, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      {/* 1.00 başvuru çizgisi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aRef }}>
        <line x1={GX - 10} x2={GX + GW + 10} y1={yRef} y2={yRef} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="14 10" opacity={0.6} />
      </svg>
      <div style={{ position: "absolute", left: GX + GW + 16, top: yRef - 18, opacity: aRef, fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>1.00</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      <div style={{ position: "absolute", left: 1500, top: 330, transform: `translate(-50%,0) scale(${sn})`, opacity: an }}>
        <Hap metin="NS = NOT SIGNIFICANT" renk={RENK.altin} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 890, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S19;
