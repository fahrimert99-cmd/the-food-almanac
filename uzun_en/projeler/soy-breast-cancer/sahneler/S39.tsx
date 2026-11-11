// Sahne 39 — sıcak basması grafiği (meta.grafik)
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 170, GY = 480, GW = 900, GH = 330;

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "21 percent") - 0.05, K(0, "26 percent") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.koyuYesil, bas: baslar[i] }));
  const aAlt = eout(ilerle(t, K(0, "Compared"), 0.6));
  const [sP, aP] = pop(t, K(0, "placebo,"), 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * eout(ilerle(t, 0.2, 0.6)), background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={210} boyut={68} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 266, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 335, transform: `scale(${sP})`, transformOrigin: "0% 50%", opacity: aP,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "7px 24px",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap",
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>VS PLACEBO</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={32} />
      <VurguRozet t={t} bas={K(0, "54")} vurgu="54 MG" not="median isoflavones a day" x={1480} y={470} genislik={440} boyut={120} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S39;
