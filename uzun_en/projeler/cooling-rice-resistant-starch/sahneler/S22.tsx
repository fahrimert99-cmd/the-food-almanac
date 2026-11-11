// Sahne 22 — Lu 2017: üç pirinç için glukoz yanıtı çubukları (gerçek değerler, meta.grafik).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const bas = [K(0, "regular white"), K(0, "a third"), K(0, "42")];
  const renk = [RENK.mercan, RENK.altin, RENK.yesil];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renk[i], bas: bas[i] }));
  const a = eout(ilerle(t, 0.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={204} boyut={70} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 262, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 32,
        color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={0.5} cubuklar={cubuklar} x={300} y={560} w={1320} h={300} />
      <VurguRozet t={t} bas={bas[1] + 0.7} vurgu="≈ ⅓ LOWER" not="fresh parboiled" x={960} y={370} renk={RENK.altin} genislik={420} boyut={74} />
      <VurguRozet t={t} bas={bas[2] + 0.7} vurgu="–42%" not="chilled + reheated" x={1380} y={370} renk={RENK.yesil} genislik={380} boyut={74} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 942, textAlign: "center", opacity: eout(ilerle(t, 1.0, 0.6)),
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S22;
