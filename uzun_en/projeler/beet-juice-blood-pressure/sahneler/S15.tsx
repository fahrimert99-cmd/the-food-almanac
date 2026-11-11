// Sahne 15 — doz arttıkça sistolik düşüş (Bahadoran 2017).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const ifadeler = ["70", "250", "500"];
  const renkler = [RENK.yesil, RENK.koyuYesil, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: K(1, ifadeler[i]) - 0.05 }));
  const a = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={K(0, "dose")} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={70} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={300} y={440} w={1320} h={360} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: aK, fontFamily: INTER, fontWeight: 500,
        fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S15;
