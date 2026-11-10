// Sahne 22 — grup grup çubuk grafik (meta.grafik); son çubuk belirsiz sonuç.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), g = s.meta.grafik!;
  const bas = [K(0, "side by side"), K(0, "three") + 0.1, K(0, "groups") + 0.3, K(1, "last bar")];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, bas: bas[i], renk: i === 3 ? RENK.gri : [RENK.yesil, RENK.koyuYesil, RENK.yesil][i] }));
  const a = eout(ilerle(t, 0.2, 0.6));
  const aU = eout(ilerle(t, K(1, "unclear") - 0.3, 0.5));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={190} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 250, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={260} y={420} w={1400} h={360} />
      <div style={{ position: "absolute", left: 260 + 1400 * 0.875, top: 610, transform: "translateX(-50%)", opacity: aU }}>
        <Hap metin="STATISTICALLY UNCLEAR" renk={RENK.gri} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 910, textAlign: "center", opacity: eout(ilerle(t, 1.0, 0.6)), fontFamily: INTER,
        fontWeight: 500, fontSize: 22, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S22;
