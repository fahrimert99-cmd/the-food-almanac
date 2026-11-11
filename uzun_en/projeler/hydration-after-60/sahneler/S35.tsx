// Sahne 35 — Görselsiz çubuk grafik (meta.grafik): serbest vs. sınırlı grup, medyan sıvı alımı. Fark ≈ 1 bardak.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 240, GY = 440, GW = 1000, GH = 350, MAKS = 2200;

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const b1 = K(0, "1,764") - 0.05, b2 = K(0, "1,488") - 0.05;
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.altin, bas: i === 0 ? b1 : b2 }));
  const tAlt = K(0, "no limit"), tFark = K(1, "differed"), tCup = K(1, "a cup");
  const aBas = eout(ilerle(t, 0.25, 0.6)), aAlt = eout(ilerle(t, tAlt, 0.6)), aKay = eout(ilerle(t, 1.2, 0.6));
  const yTop = (d: number) => GY + GH - (d / MAKS) * GH;
  const gw = GW / 2, cx1 = GX + gw * 0.5, cx2 = GX + gw * 1.5;
  const pFark = eout(ilerle(t, tFark, 0.7));
  const y1 = yTop(1764), y2 = yTop(1488);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={66} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 276, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={b1} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      {/* fark: serbest grubun seviyesinden sınırlı gruba kesikli çizgi + ayraç */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pFark}>
          <line x1={cx1 + 110} x2={cx2 - 118} y1={y1} y2={y1} stroke={RENK.murekkep} strokeWidth={3} strokeDasharray="10 8" />
          <line x1={cx2 - 130} x2={cx2 - 130} y1={y1} y2={y2} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
          <line x1={cx2 - 142} x2={cx2 - 118} y1={y1} y2={y1} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
          <line x1={cx2 - 142} x2={cx2 - 118} y1={y2} y2={y2} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
        </g>
      </svg>
      <VurguRozet t={t} bas={tCup} vurgu="≈ 1 CUP" not="DIFFERENCE BETWEEN GROUPS" x={1560} y={470} genislik={460} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S35;
