// Sahne 17 — Çubuk grafik (meta.grafik): atma alışkanlığı ve düzenleme inancı, 2016 ve 2025.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // her çubuk kendi sayısı söylenince yükselir
  const baslar = [K(0, "37 percent"), K(0, "43 percent"), K(1, "36"), K(1, "44 percent")].map((x) => x - 0.05);
  const renkler = [RENK.lacivert, RENK.mercan, RENK.lacivert, RENK.altin];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 1.0, 0.6));
  const aKay = eout(ilerle(t, 1.4, 0.6));
  const gw = GW / 4;
  // grup başlıkları: çubuk çiftlerinin üstünde
  const aG1 = eout(ilerle(t, baslar[0] - 0.3, 0.5));
  const aG2 = eout(ilerle(t, baslar[2] - 0.3, 0.5));
  const grup = (a: number, cx: number, m: string) => (
    <div style={{ position: "absolute", left: cx, top: 400, transform: `translateX(-50%) translateY(${(1 - a) * 10}px)`, opacity: a,
      fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.altin, whiteSpace: "nowrap" }}>{m}</div>
  );
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={192} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 254, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      {grup(aG1, GX + gw, "TOSS FOOD NEAR ITS DATE")}
      {grup(aG2, GX + gw * 3, "THINK GOVERNMENT REGULATES")}
      {/* grafik gelmeden önce: anketin örneklemi */}
      <VurguRozet t={t} bas={K(0, "2,069")} bitis={baslar[0] - 0.3} vurgu="2,069" not="ADULTS SURVEYED · JANUARY 2025" x={960} y={500} genislik={620} boyut={110} />
      <CubukGrafik t={t} bas={baslar[0] + 0.05} cubuklar={cubuklar} x={GX} y={GY + 20} w={GW} h={GH} maks={50} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S17;
