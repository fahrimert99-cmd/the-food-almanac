// Sahne 22 — grafik: ceviz grubu ve cevizsiz grup, 2 yıl sonra.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!, K = kelimeZamani(s);
  const ifade = ["4.4", "3.6", "6.1"], renk = [RENK.yesil, RENK.koyuYesil, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renk[i], bas: K(0, ifade[i]) - 0.5 }));
  const a = eout(ilerle(t, 0.2, 0.6)), aH = eout(ilerle(t, 1.6, 0.6)), aK = eout(ilerle(t, 1.0, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={56} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 276, opacity: aK, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 1760, top: 270, opacity: aH, transform: "translateX(-100%)" }}>
        <Hap metin="LOWER THAN WALNUT-FREE" renk={RENK.yesil} boyut={26} />
      </div>
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={300} y={440} w={1320} h={340} maks={7.6} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 890, textAlign: "center", opacity: aK, fontFamily: INTER, fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};
export default S22;
