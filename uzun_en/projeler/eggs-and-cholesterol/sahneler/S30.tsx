// Sahne 30 — meta-analiz grafiği: ekstra yumurta başına risk oranı (meta.grafik).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, sayac } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const tMil = K(0, "1.7"), tPer = K(1, "For each extra egg"), tRatio = K(1, "risk ratio");
  const aMil = eout(ilerle(t, tMil, 0.5)), aGraf = eout(ilerle(t, tPer, 0.6));
  const X = 300, Y = 420, W = 1320, H = 420, MAKS = 1.3;
  const y1 = Y + H - (1 / MAKS) * (H - 40);
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.koyuYesil : RENK.gri, bas: i === 0 ? tRatio : 13.3 + (i - 1) * 0.2 }));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      {/* 1. cümle: toplam kişi sayısı */}
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * eout(ilerle(t, 0.2, 0.6)), opacity: 1 - aGraf, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} bitis={tPer} metin="EARLIER STUDIES, COMBINED" x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 300, opacity: aMil * (1 - aGraf), fontFamily: INTER, fontWeight: 800, fontSize: 44, color: RENK.altin }}>
        {sayac(t, tMil, 1.7, 1.0, 1)} million people</div>
      {/* 2. cümle: grafik */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 150, height: 330, opacity: aGraf, background: RENK.kagit }} />
      <div style={{ opacity: aGraf }}>
        <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200, background: RENK.altin }} />
        <Baslik t={t} bas={tPer} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
        <div style={{ position: "absolute", left: 160, top: 284, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      </div>
      <CubukGrafik t={t} bas={tRatio} cubuklar={cubuklar} x={X} y={Y + 40} w={W} h={H - 40} maks={MAKS} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aGraf }}>
        <line x1={X} x2={X + W} y1={y1} y2={y1} stroke={RENK.mercan} strokeWidth={3} strokeDasharray="14 10" />
      </svg>
      <div style={{ position: "absolute", left: 0, right: 0, top: 930, textAlign: "center", opacity: eout(ilerle(t, 1.0, 0.6)), fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S30;
