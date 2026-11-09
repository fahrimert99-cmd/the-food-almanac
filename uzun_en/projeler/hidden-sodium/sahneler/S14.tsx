// Sahne 14 — BÖLÜM 2 açılışı: sodyum nereden geldi? Görselsiz çubuk grafik (meta.grafik), her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 440, GW = 1320, GH = 380;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const ifadeler: [number, string][] = [[1, "71"], [2, "14"], [3, "6"], [3, "5"]];
  const cubuklar = g.cubuklar.map((c, i) => ({
    ...c, renk: i === 0 ? RENK.altin : RENK.yesil, bas: K(ifadeler[i][0], ifadeler[i][1]) - 0.05,
  }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.8, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={80} aralik={0.45} />
      {/* ilk çubuğun yanında: kim ekledi */}
      <Not t={t} bas={K(1, "by food makers")} metin="BY FOOD MAKERS & RESTAURANTS" x={620} y={520} boyut={32} agirlik={800} renk={RENK.altin} genislik={560} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
