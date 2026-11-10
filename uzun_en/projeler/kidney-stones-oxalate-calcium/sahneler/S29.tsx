// Sahne 29 — emilen oksalat payı: çubuk grafik (Liebman & Chai 1997, gerçek veri)
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const renkler = [RENK.mercan, RENK.yesil, RENK.koyuYesil];
  const bas = [K(0, "18") - 0.05, K(1, "8") - 0.05, K(2, "7") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: bas[i] }));
  const aE = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  const aRef = eout(ilerle(t, K(1, "carbonate"), 0.6));
  // grafik geometrisi: x=300 w=1320 y=440 h=360, maks = 18.3*1.15
  const yRef = 440 + 360 - (18.3 / (18.3 * 1.15)) * 360;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aE, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aE, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={300} x2={300 + 1320 * aRef} y1={yRef} y2={yRef} stroke={RENK.mercan} strokeWidth={3.5} strokeDasharray="14 10" opacity={0.8 * aRef} />
      </svg>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={300} y={440} w={1320} h={360} />
      <Not t={t} bas={K(1, "with")} metin="WITH 300 MG CALCIUM" x={1180} y={420} boyut={26} renk={RENK.yesil} hiza="orta" agirlik={800} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: aK, fontFamily: INTER, fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};
export default S29;
