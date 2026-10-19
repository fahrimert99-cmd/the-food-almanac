// Sahne 12 — grafik: plaseboya göre düşen puanlar (Ried 2016). Her çubuk sayısı söylendiğinde yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 500, GW = 1320, GH = 330;

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const baslar = [K(0, "five") - 0.1, K(0, "two") - 0.1, K(1, "nine") - 0.1, K(1, "six") - 0.1];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i < 2 ? RENK.yesil : RENK.koyuYesil, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const gw = GW / 4;
  const gruplar = [
    { bas: K(0, "everyone,"), metin: "EVERYONE", renk: RENK.yesil, cx: GX + gw },
    { bas: K(1, "high"), metin: "PEOPLE WITH HIGH BP", renk: RENK.koyuYesil, cx: GX + gw * 3 },
  ];
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {gruplar.map((p) => {
        const [sc, al] = pop(t, p.bas, 0.5);
        return (
          <div key={p.metin} style={{ position: "absolute", left: p.cx, top: 385, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
            background: RENK.kagitAcik, border: `3px solid ${p.renk}`, borderRadius: 999, padding: "8px 26px", whiteSpace: "nowrap",
            fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: p.renk, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{p.metin}</div>
        );
      })}
      <CubukGrafik t={t} bas={baslar[0] + 0.1} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={10} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S12;
