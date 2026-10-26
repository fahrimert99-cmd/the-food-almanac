// Sahne 15 — grafik: düşük B12 durumunun payı (Porter 2021). Her çubuk sayısı söylendiğinde yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  // anlatım sırası: gastrit 38, asit baskılayıcı 21, ikisi de değil 15
  const baslar: Record<string, number> = { Neither: K(1, "15 percent") - 0.05, "Acid reducer": K(1, "21 percent") - 0.05,
    "Atrophic gastritis": K(1, "38 percent") - 0.05 };
  const cubuklar = g.cubuklar.map((c) => ({ ...c, bas: baslar[c.etiket],
    renk: c.etiket === "Atrophic gastritis" ? RENK.mercan : c.etiket === "Acid reducer" ? RENK.altin : RENK.yesil }));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, K(1, "Of those"), 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * eout(ilerle(t, 0.2, 0.6)), background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* 1. cümle: atrofik gastritli pay */}
      <VurguRozet t={t} bas={K(0, "15")} bitis={6.0} vurgu="~15%" not="HAD ATROPHIC GASTRITIS" x={960} y={470} genislik={620} boyut={150} renk={RENK.mercan} />
      <CubukGrafik t={t} bas={K(1, "38 percent") - 0.1} cubuklar={cubuklar} x={300} y={470} w={1320} h={330} maks={42} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500,
        fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S15;
