// Sahne 14 — grafik: ilk saatte kan şekeri artışı (su / sıvı sirke / tabletler).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330, MAKS = 6.2;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const renkler = [RENK.lacivert, RENK.yesil, RENK.mercan, RENK.altin];
  const baslar = [K(0, "rise was") - 0.1, K(0, "liquid") - 0.1, K(1, "Whole") - 0.05, K(1, "tablets") + 0.1];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const t31 = K(0, "31");
  const tAlt = K(0, "first hour");
  const tDaha = K(1, "no better");
  const aAlt = eout(ilerle(t, tAlt, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const aCizgi = eout(ilerle(t, baslar[1] + 0.9, 0.6));
  const ySu = GY + GH - (g.cubuklar[0].deger / MAKS) * GH;
  const [sc, al] = pop(t, tDaha, 0.5);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * eout(ilerle(t, 0.25, 0.6)), background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      {/* su düzeyi: sıvı sirke çubuğunun farkı görünsün */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aCizgi }}>
        <line x1={562} x2={562 + 140 * aCizgi} y1={ySu} y2={ySu} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="12 10" opacity={0.7} />
      </svg>
      <VurguRozet t={t} bas={t31} vurgu="−31%" not="vs. water" x={1500} y={130} genislik={360} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: GX + GW / 6 * 5 - 330, top: 345, transform: `scale(${sc})`, opacity: al, transformOrigin: "50% 50%" }}>
        <Hap metin="NO BETTER THAN WATER" renk={RENK.mercan} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
