// Sahne 13 — Baranski 2014 meta-analizi: çubuk grafik (meta.grafik verisi).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop, sol } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const t2014 = K(0, "2014"), t343 = K(0, "343"), tAnt = K(1, "antioxidant");
  const bas = [K(2, "19") - 0.6, K(2, "higher,") + 0.3, K(2, "50") - 0.6, K(2, "percent,") - 0.1, K(2, "69") - 0.8];
  const renkler = [RENK.yesil, RENK.altin, RENK.koyuYesil, RENK.altin, RENK.yesil];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: bas[i] }));
  const a = eout(ilerle(t, 0.2, 0.6));
  const [sc, al] = pop(t, t2014, 0.5);
  const [sp2, al2] = pop(t, tAnt, 0.5);
  const aK = eout(ilerle(t, K(2, "Phenolic"), 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 360, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="2014 META-ANALYSIS · BARANSKI" renk={RENK.altin} boyut={28} />
      </div>
      <VurguRozet t={t} bas={t343} bitis={bas[0] - 0.2} vurgu="343" not="PUBLICATIONS" x={960} y={500} genislik={420} boyut={110} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 960, top: 760, transform: `translate(-50%,0) scale(${sp2})`, opacity: al2 * sol(t, bas[0] - 0.2) }}>
        <Hap metin="MORE ANTIOXIDANT PLANT COMPOUNDS" renk={RENK.yesil} boyut={30} />
      </div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={300} y={480} w={1320} h={320} maks={80} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 905, textAlign: "center", opacity: aK, fontFamily: INTER, fontWeight: 500,
        fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S13;
