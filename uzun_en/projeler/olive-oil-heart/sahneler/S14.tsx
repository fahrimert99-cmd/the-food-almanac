// Sahne 14 — Grafik: gruplarda kalp krizi, inme veya kalp ölümü oranı (meta.grafik). Çubuklar sayı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const bas = [K(0, "3.8") - 0.05, K(1, "3.4") - 0.05, K(1, "4.4") - 0.05];
  const renkler = [RENK.koyuYesil, RENK.altin, RENK.lacivert];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: bas[i] }));
  const aBas = eout(ilerle(t, 0.2, 0.6));
  const aAlt = eout(ilerle(t, K(0, "olive oil"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={202} boyut={74} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 264, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={300} y={440} w={1320} h={340} maks={5} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 890, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
