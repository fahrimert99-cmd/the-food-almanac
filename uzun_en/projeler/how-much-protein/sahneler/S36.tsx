// Sahne 36 — grafik: 24 saatlik kas proteini sentezi, iki dağılım.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, 0.2, 0.6));
  const aK = eout(ilerle(t, 1.0, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={K(0, "24") - 0.1} metin={g.baslik.toUpperCase()} x={156} y={205} boyut={70} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 262, opacity: eout(ilerle(t, K(0, "muscle") , 0.6)), fontFamily: INTER, fontWeight: 500,
        fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={2.2} x={240} y={430} w={1000} h={380} maks={9}
        cubuklar={[
          { ...g.cubuklar[0], renk: RENK.mercan, bas: 2.2 },
          { ...g.cubuklar[1], renk: RENK.yesil, bas: K(0, "about") - 0.4 },
        ]} />
      <VurguRozet t={t} bas={K(0, "25")} vurgu="≈ +25%" not="EVEN PATTERN, 24 H" x={1560} y={480} genislik={420} boyut={104} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 890, textAlign: "center", opacity: aK, fontFamily: INTER, fontWeight: 500,
        fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S36;
