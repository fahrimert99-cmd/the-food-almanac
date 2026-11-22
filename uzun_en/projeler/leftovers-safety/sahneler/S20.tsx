// Sahne 20 — Grafik: Listeria'nın ikiye katlanma süresi sıcaklığa göre (meta.grafik, gerçek değerler).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const bas = [K(1, "94"), K(2, "21"), K(3, "11")].map((x) => x - 0.1);
  const renkler = [RENK.yesil, RENK.altin, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: bas[i] }));
  const aB = eout(ilerle(t, 0.2, 0.6));
  const aAlt = eout(ilerle(t, K(0, "grew") , 0.6));
  const [sd, ad] = pop(t, K(1, "doubled"), 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aB, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 346, transform: `scale(${sd})`, transformOrigin: "0% 50%", opacity: ad,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "7px 24px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        SHORTER BAR = FASTER GROWTH
      </div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={300} y={500} w={1320} h={310} maks={105} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S20;
