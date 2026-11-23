// Sahne 17 — Ham sayılar: en az / en çok glüten grubunun kalp hastalığı oranı (meta.grafik).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 410, GY = 440, GW = 1100, GH = 380, MAKS = 400;

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const b352 = K(1, "352") - 0.1, b277 = K(1, "277") - 0.1;
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.mercan : RENK.yesil, bas: i === 0 ? b352 : b277 }));
  const aBas = eout(ilerle(t, 0.2, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sW, aW] = pop(t, K(0, "looks worse"), 0.5);
  const pCiz = eout(ilerle(t, K(1, "277") + 0.5, 0.8));
  const ySeviye = GY + GH - (352 / MAKS) * GH;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={66} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "At first glance")} metin={g.alt} x={160} y={272} boyut={32} />
      {/* "looks worse" vurgusu: sol çubuğun üstünde */}
      <div style={{ position: "absolute", left: GX + GW / 4, top: 352, transform: `translate(-50%, -50%) scale(${sW})`, opacity: aW }}>
        <Hap metin="LOOKS WORSE" renk={RENK.mercan} boyut={26} />
      </div>
      <CubukGrafik t={t} bas={b352} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} aralik={0.4} />
      {/* iki çubuk arasındaki farkı gösteren kesikli seviye çizgisi (sayı yok) */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={GX + GW / 4 + 130} y1={ySeviye} x2={GX + GW / 4 + 130 + (GW / 2 - 130 + 110) * pCiz} y2={ySeviye}
          stroke={RENK.lacivert} strokeWidth={3.5} strokeDasharray="12 9" opacity={0.7} />
      </svg>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S17;
