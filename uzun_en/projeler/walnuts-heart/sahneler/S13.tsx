// Sahne 13 — meta-analiz çubuk grafiği: LDL, toplam kolesterol, trigliserit, apo B.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const sirali = [1, 0, 2, 3].map((i) => g.cubuklar[i]);  // anlatım sırası: LDL önce
  const ifade = [K(0, "5.5"), K(1, "7"), K(1, "4.7"), K(1, "3.7")];
  const renkler = [RENK.koyuYesil, RENK.yesil, RENK.yesil, RENK.yesil];
  const cubuklar = sirali.map((c, i) => ({ ...c, renk: renkler[i], bas: ifade[i] - 0.6 }));
  const a = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={64} renk={RENK.koyuYesil} />
      <Not t={t} bas={0.8} metin={g.alt} x={160} y={284} boyut={34} agirlik={500} />
      <CubukGrafik t={t} bas={ifade[0] - 0.6} cubuklar={cubuklar} x={300} y={440} w={1320} h={360} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: aK, fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S13;
