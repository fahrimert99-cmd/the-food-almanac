// Sahne 13 — VITAL sonucu: 769 / 782 kırık sayısı, ardından oran çubukları (100 = fark yok) ve "fark yok" kapanışı.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop, sol } from "../kutuphane";

const GX = 300, GY = 520, GW = 1320, GH = 300, MAKS = 120;

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const tSon = K(2, "No");
  const baslar = [K(1, "Total,"), K(1, "non-spine"), K(1, "hip")].map((x) => x - 0.05);
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: RENK.lacivert, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const aRef = eout(ilerle(t, baslar[0], 0.6));
  const yRef = GY + GH - (100 / MAKS) * GH;
  const kartlar = [
    { bas: K(0, "769"), sayi: "769", ad: "ON VITAMIN D", renk: RENK.altin, x: 260 },
    { bas: K(0, "782"), sayi: "782", ad: "ON PLACEBO", renk: RENK.lacivert, x: 1020 },
  ];
  const [sF, aF] = pop(t, tSon, 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 34,
        color: RENK.lacivert }}>{g.alt}</div>
      {/* 1. cümle: iki kırık sayısı */}
      {kartlar.map((k) => {
        const [sc, al] = pop(t, k.bas, 0.55);
        const a = al * sol(t, K(0, "placebo") + 0.55, 0.3);
        if (a <= 0) return null;
        return (
          <div key={k.sayi} style={{ position: "absolute", left: k.x, top: 430, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
            display: "flex", alignItems: "baseline", gap: 14, whiteSpace: "nowrap" }}>
            <span style={{ fontFamily: ANTON, fontSize: 170, lineHeight: 1, color: k.renk }}>{k.sayi}</span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert }}>{k.ad}</span>
          </div>
        );
      })}
      {/* 100 = fark yok çizgisi */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={GX} x2={GX + GW} y1={yRef} y2={yRef} stroke={RENK.mercan} strokeWidth={3.5} strokeDasharray="16 10" opacity={aRef} />
      </svg>
      <div style={{ position: "absolute", left: GX + GW + 14, top: yRef - 16, opacity: aRef, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        color: RENK.mercan, whiteSpace: "nowrap" }}>100 = NO DIFFERENCE</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      {/* kapanış */}
      <div style={{ position: "absolute", left: 960, top: 366, transform: `translate(-50%, 0) scale(${sF})`, opacity: aF, display: "flex",
        alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`,
        borderRadius: 999, padding: "10px 30px 10px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.koyuYesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={28} renk="#fff" kalinlik={7} />
        </span>
        <span style={{ fontFamily: ANTON, fontSize: 44, letterSpacing: 1.5, color: RENK.koyuYesil }}>NO MEANINGFUL DIFFERENCE</span>
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S13;
