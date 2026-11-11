// Sahne 26 — REDUCE-IT sonucu: 17.2% vs 22.0% (meta.grafik)
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 480, GW = 1320, GH = 330;

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "17.2") - 0.05, K(0, "22.0") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.gri, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.9, 0.6));
  const [sH, aH] = pop(t, K(0, "4.9"), 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 350, transform: `scale(${sH})`, transformOrigin: "0% 50%", opacity: aH }}>
        <Hap metin="MEDIAN 4.9 YEARS" renk={RENK.altin} boyut={26} />
      </div>
      <CubukGrafik t={t} bas={baslar[0] + 0.05} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={30} />
      <VurguRozet t={t} bas={K(1, "25")} vurgu="25%" not="LOWER RISK" x={960} y={560} renk={RENK.koyuYesil} genislik={340} boyut={96} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S26;
