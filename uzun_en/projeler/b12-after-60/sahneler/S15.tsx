// Sahne 15 — çubuk grafik: düşük B12 payı (38 / 21 / 15). Her çubuk sayısı söylendiğinde yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // anlatım sırası: gastrit 38, asit baskılayıcı 21, ikisi de yok 15
  const sira = [
    { ad: "Atrophic gastritis", ifade: "38 percent", renk: RENK.mercan },
    { ad: "Acid reducer", ifade: "21 percent", renk: RENK.altin },
    { ad: "Neither", ifade: "15 percent", renk: RENK.yesil },
  ];
  const cubuklar = sira.flatMap((o) => {
    const b = g.cubuklar.find((x) => x.etiket === o.ad);
    return b ? [{ ...b, renk: o.renk, bas: K(1, o.ifade) - 0.05 }] : [];
  });
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.5, 0.6));
  const aKay = eout(ilerle(t, c[1].bas, 0.6));
  const [sp, ap] = pop(t, K(0, "about"), 0.5);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* 1. cümle: asit baskılayıcı almayanlarda atrofik gastrit oranı */}
      <VurguRozet t={t} bas={K(0, "15 percent")} bitis={c[1].bas - 0.1} vurgu="ABOUT 15%" x={960} y={500} genislik={880} boyut={130}
        renk={RENK.koyuYesil} not="HAD ATROPHIC GASTRITIS · NOT TAKING ACID REDUCERS" />
      <CubukGrafik t={t} bas={cubuklar[0]?.bas ?? 5} cubuklar={cubuklar} x={300} y={470} w={1320} h={330} maks={45} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S15;
