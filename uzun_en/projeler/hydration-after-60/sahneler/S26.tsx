// Sahne 26 — grafik (meta.grafik): kadın 2.7 L, erkek 3.7 L toplam su (yeterli alım). Her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 420, GW = 1320, GH = 340;

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const baslar = [K(0, "2.7") - 0.05, K(0, "3.7") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i ? RENK.koyuYesil : RENK.yesil, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "adequate intake"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const oz = [{ ifade: "91", metin: "91 OZ" }, { ifade: "125", metin: "125 OZ" }];
  const gw = GW / cubuklar.length;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={60} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={4.2} />
      {oz.map((o, i) => {
        const [sc, al] = pop(t, K(0, o.ifade), 0.5);
        return (
          <div key={o.metin} style={{ position: "absolute", left: GX + gw * (i + 0.5), top: GY + GH + 76, transform: `translate(-50%, 0) scale(${sc})`,
            opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "6px 24px",
            fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>{o.metin}</div>
        );
      })}
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S26;
