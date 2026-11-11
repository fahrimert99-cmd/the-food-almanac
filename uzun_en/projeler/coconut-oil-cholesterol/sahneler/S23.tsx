// Sahne 23 — Khaw 2018: LDL farkları (mg/dL), meta.grafik gerçek değerleriyle.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const bas = [K(0, "16") - 0.1, K(0, "15") - 0.1, K(1, "nearly") - 0.1];
  const renk = [RENK.mercan, RENK.mercan, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renk[i], bas: bas[i] }));
  const a = eout(ilerle(t, 0.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={300} y={460} w={1320} h={340} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: eout(ilerle(t, 1.0, 0.6)), fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S23;
