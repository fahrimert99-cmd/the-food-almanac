// Sahne 12 — grafik: pişmiş beyaz pirinçte dirençli nişasta (meta.grafik). Her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 440, GW = 1320, GH = 380;

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // her çubuk kendi sayısı söylenince büyür
  const baslar = [K(0, "0.64") - 0.05, K(1, "1.3") - 0.05, K(2, "1.65") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: [RENK.altin, RENK.yesil, RENK.koyuYesil][i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.2, 0.6));
  const aAlt = eout(ilerle(t, 0.6, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const tKat = K(2, "two");
  const [sc, al] = pop(t, tKat, 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={2.1} />
      {/* ≈2.5× rozeti: ilk çubuğun üstündeki boş alanda */}
      <VurguRozet t={t} bas={tKat} vurgu="≈ 2.5×" not="as much as fresh" x={520} y={380} genislik={330} boyut={84} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S12;
