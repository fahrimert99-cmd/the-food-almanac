// Sahne 17 — grafik: 12 ayda toplam kalça yoğunluğu kaybı, kontrol vs 50 g erik.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 420, GY = 440, GW = 1080, GH = 320;

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const tAlt = K(0, "percent change");
  const tKontrol = K(0, "no prunes"), tErik = K(0, "50 grams");
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.mercan : RENK.yesil, bas: (i === 0 ? tKontrol : tErik) - 0.1 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, tAlt, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sP, aP] = pop(t, tErik + 1.6, 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={K(0, "two numbers")} metin={g.baslik.toUpperCase()} x={156} y={206} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 266, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={tKontrol} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={1.3} />
      <div style={{ position: "absolute", left: GX + GW * 0.75, top: GY + GH + 70, transform: `translate(-50%, 0) scale(${sP})`, opacity: aP,
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
        borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.koyuYesil,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>SMALLER LOSS WITH PRUNES</div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S17;
