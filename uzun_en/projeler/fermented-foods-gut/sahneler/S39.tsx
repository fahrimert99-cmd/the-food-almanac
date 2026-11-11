// Sahne 39 — grafik: yoğurt türüne göre medyan toplam şeker (100 g). Her çubuk türü söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const baslar = [K(0, "5 grams") - 0.05, K(1, "Fruit") - 0.05, K(1, "flavored") - 0.05, K(1, "organic") - 0.05, K(1, "dessert") - 0.05];
  const renkler = [RENK.yesil, RENK.altin, RENK.altin, RENK.altin, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "median"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={60} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={20} />
      <Not t={t} bas={K(0, "lactose")} metin="MOSTLY NATURAL LACTOSE" x={GX + GW / 10} y={525} hiza="orta" genislik={300} boyut={26} agirlik={800} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S39;
