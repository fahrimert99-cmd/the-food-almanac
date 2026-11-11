// Sahne 21 — 5. yılda düşük / sınırda B12: plasebo ve metformin çubukları.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const a = eout(ilerle(t, 0.2, 0.6));
  const bas = [K(0, "2.3") - 0.05, K(0, "4.3") - 0.05, K(1, "9.5") - 0.05, K(1, "19.1") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({
    etiket: i % 2 ? "Metformin" : "Placebo", deger: c.deger, metin: c.metin, renk: i % 2 ? RENK.altin : RENK.yesil, bas: bas[i],
  }));
  const aG = [eout(ilerle(t, 0.8, 0.5)), eout(ilerle(t, K(1, "counting") - 0.1, 0.5))];
  const x = 300, w = 1320, gw = w / 4;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={190} boyut={64} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 246, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={x} y={430} w={w} h={330} />
      {[["LOW B12", 0], ["LOW OR BORDERLINE", 1]].map(([ad, i]) => (
        <div key={ad as string} style={{ position: "absolute", left: x + gw * 2 * (i as number), width: gw * 2, top: 836, textAlign: "center", opacity: aG[i as number],
          fontFamily: ANTON, fontSize: 40, letterSpacing: 2, color: RENK.lacivert }}>
          <div style={{ height: 4, width: gw * 1.7, background: RENK.altin, margin: "0 auto 10px" }} />{ad}
        </div>
      ))}
      <div style={{ position: "absolute", left: 0, right: 0, top: 920, textAlign: "center", opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S21;
