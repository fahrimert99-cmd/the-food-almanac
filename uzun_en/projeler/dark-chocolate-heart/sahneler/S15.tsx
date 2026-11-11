// Sahne 15 — meta.grafik: eksiksiz sonuçların sadece KD ölümünde anlamlı olduğu çubuk grafik.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop, sol } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "result"), K(2, "Heart attacks"), K(2, "strokes"), K(2, "significant") + 0.4];
  const cubuklar = g.cubuklar.map((b, i) => ({ ...b, renk: i === 3 ? RENK.koyuYesil : RENK.altin, bas: baslar[i] ?? baslar[3] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.6, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  // üç not hapı sırayla: aralık, şans, anlamsızlık
  const notlar = [
    { bas: K(0, "no effect"), bit: c[1].bas, metin: "RANGE INCLUDED NO EFFECT", renk: RENK.altin },
    { bas: K(1, "chance"), bit: c[2].bas - 0.1, metin: "MAIN RESULT: COULD BE CHANCE", renk: RENK.mercan },
    { bas: K(2, "not significant"), bit: 1e9, metin: "HEART ATTACK, STROKE: NOT SIGNIFICANT", renk: RENK.altin },
  ];
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={64} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 276, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 30, color: RENK.lacivert }}>{g.alt}</div>
      {notlar.map((n, i) => {
        const [sc, al] = pop(t, n.bas, 0.5);
        const a = al * sol(t, n.bit);
        if (a <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 160, top: 340, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
            display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${n.renk}`, borderRadius: 999,
            padding: "8px 26px 8px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
            <span style={{ width: 22, height: 22, borderRadius: "50%", background: n.renk }} />
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep }}>{n.metin}</span>
          </div>
        );
      })}
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={32} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S15;
