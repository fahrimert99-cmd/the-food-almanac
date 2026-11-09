// Sahne 29 — grafik: 10 yılda akciğer kanseri olasılığı
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; metin: string; x: number }> = ({ t, bas, metin, x }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return <div style={{ position: "absolute", left: x, top: 846, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
    <Hap metin={metin} renk={RENK.lacivert} boyut={28} /></div>;
};

const S29: React.FC<SP> = ({ t, s }) => {
  const g = s.meta.grafik!;
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, 0.2, 0.6));
  const t82 = K(1, "82") - 0.05, t15 = K(2, "15") - 0.05;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={68} renk={RENK.koyuYesil} />
      <Not t={t} bas={0.8} metin={g.alt} x={160} y={284} boyut={32} agirlik={500} />
      <CubukGrafik t={t} bas={t82} x={300} y={440} w={1320} h={330} maks={95} aralik={t15 - t82} cubuklar={[
        { etiket: "Beta-carotene", deger: 82, metin: "+82%", renk: RENK.mercan },
        { etiket: "Lutein + zeaxanthin", deger: 15, metin: "+15% (n.s.)", renk: RENK.gri, bas: t15 },
      ]} />
      <Cip t={t} bas={K(1, "10")} metin="10-YEAR FOLLOW-UP" x={160} />
      <Cip t={t} bas={K(1, "3,882")} metin="3,882 PARTICIPANTS" x={600} />
      <Cip t={t} bas={K(2, "statistically")} metin="N.S. = NOT STATISTICALLY SIGNIFICANT" x={1050} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 912, textAlign: "center", opacity: eout(ilerle(t, 1.0, 0.6)), fontFamily: INTER,
        fontWeight: 500, fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S29;
