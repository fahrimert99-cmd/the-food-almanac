// Sahne 14 — görselsiz çubuk grafik (meta.grafik): en üst üçte bir −53%, orta üçte bir −35%.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 380, GY = 450, GW = 1160, GH = 340;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const ust = g.cubuklar.find((c) => c.metin.includes("53"))!, orta = g.cubuklar.find((c) => c.metin.includes("35"))!;
  const cubuklar = [
    { ...ust, renk: RENK.koyuYesil, bas: K(0, "53") - 0.05 },
    { ...orta, renk: RENK.yesil, bas: K(1, "35") - 0.05 },
  ];
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "bottom third") - 0.2, 0.6));
  const [sL, aL] = pop(t, K(0, "top third"), 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 342, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "9px 26px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>
        MIND SCORE: TOP THIRD vs. BOTTOM THIRD
      </div>
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={GX} y={GY + 40} w={GW} h={GH} maks={65} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 890, textAlign: "center", opacity: aKay, fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
