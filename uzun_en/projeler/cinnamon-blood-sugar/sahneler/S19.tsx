// Sahne 19 — Görselsiz çubuk grafik: A1C düşüşü (Crawford 2009). Çubuklar sayıları söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330, MAKS = 1;

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "0.37") - 0.05, K(0, "0.83") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 1 ? RENK.koyuYesil : RENK.altin, bas: baslar[i] }));
  const tFark = K(1, "gap");
  const tYarim = K(1, "half");
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const yUst = GY + GH - (0.83 / MAKS) * GH, yAlt = GY + GH - (0.37 / MAKS) * GH;
  const p = eout(ilerle(t, tFark, 0.7));
  const [, aOk] = pop(t, tFark, 0.4);
  const gw = GW / 2;
  const xS = GX + gw * 0.5 + 110, xE = GX + gw * 1.5 - 110, xO = (xS + xE) / 2;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      {/* iki çubuk tepesi arasındaki fark */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {aOk > 0 && (
          <g opacity={aOk}>
            <line x1={xS} y1={yUst} x2={xE} y2={yUst} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="10 8" />
            <line x1={xS} y1={yAlt} x2={xE} y2={yAlt} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="10 8" />
            <line x1={xO} y1={yUst + 4} x2={xO} y2={yUst + 4 + (yAlt - yUst - 8) * p} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
            {p > 0.95 && <path d={`M ${xO - 12} ${yAlt - 22} L ${xO} ${yAlt - 6} L ${xO + 12} ${yAlt - 22}`} fill="none" stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />}
          </g>
        )}
      </svg>
      <VurguRozet t={t} bas={tYarim} vurgu="≈ HALF" not="A POINT GAP" x={xO} y={330} renk={RENK.mercan} genislik={360} boyut={92} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S19;
