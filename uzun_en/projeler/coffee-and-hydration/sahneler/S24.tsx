// Sahne 24 — 4 saatlik idrar miktarı çubuk grafiği (Maughan 2016).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const bas = [K(0, "1,337") - 0.5, K(1, "oral") + 0.3, K(1, "Milk") + 0.1, K(1, "Milk") + 0.5];
  const renk = [RENK.lacivert, RENK.yesil, RENK.altin, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renk[i], bas: bas[i] }));
  const a = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  const X = 220, Y = 440, W = 1200, H = 360, M = 1500;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={74} renk={RENK.koyuYesil} />
      <Not t={t} bas={0.9} metin={g.alt} x={160} y={284} boyut={34} agirlik={500} />
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={X} y={Y} w={W} h={H} maks={M} />
      <VurguRozet t={t} bas={K(1, "1,040")} vurgu="1,040–1,050" not="grams · milk and oral rehydration" x={1660} y={520}
        genislik={400} boyut={58} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: aK, fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S24;
