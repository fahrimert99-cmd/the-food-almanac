// Sahne 22 — görselsiz çubuk grafik: ilaç azaltma oranı (Lopresti 2022). Çubuklar sayı söylendiğinde yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, KaynakEtiketi, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  // meta sırası: Placebo, Curcumin; anlatımda önce 37, sonra 13 geçer
  const baslar = [K(0, "13") - 0.05, K(0, "37") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 1 ? RENK.koyuYesil : RENK.altin, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "curcumin"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={K(0, "cut back")} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[1]} cubuklar={cubuklar} x={420} y={470} w={1080} h={330} maks={45} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S22;
