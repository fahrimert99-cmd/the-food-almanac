// Sahne 39 — grafik: glutensiz makarna ve ekmekte daha az protein; makarna yarım yıldız düşük.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 170, GY = 440, GW = 860, GH = 340;
const YILDIZ = "M 0 -26 L 7.6 -8.4 26 -8 11.8 4.2 16.4 22 0 12.4 -16.4 22 -11.8 4.2 -26 -8 -7.6 -8.4 Z";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const baslar = [K(0, "52 percent") - 0.05, K(0, "32 percent") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.mercan : RENK.altin, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.6, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const tHalf = K(1, "half a star");
  const tRate = K(1, "five star");
  const [sp, ap] = pop(t, K(1, "Gluten-free"), 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={64} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={60} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
      {/* 2. cümle: sağ panelde sağlık yıldızı */}
      <div style={{ position: "absolute", left: 1200, top: 380, opacity: ap, transform: `scale(${sp})`, transformOrigin: "0% 50%", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>GLUTEN-FREE PASTA</div>
      <VurguRozet t={t} bas={tHalf} vurgu="≈ ½ STAR" not="lower on the 5-star health rating" x={1440} y={440} boyut={84} genislik={460} renk={RENK.mercan} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const [sc, al] = pop(t, tRate + 0.05 + i * 0.1, 0.45);
          return (
            <g key={i} transform={`translate(${1250 + i * 70} 730) scale(${sc})`} opacity={al}>
              <path d={YILDIZ} fill={RENK.altinAcik} stroke={RENK.altin} strokeWidth={3} strokeLinejoin="round" />
            </g>
          );
        })}
      </svg>
    </AbsoluteFill>
  );
};

export default S39;
