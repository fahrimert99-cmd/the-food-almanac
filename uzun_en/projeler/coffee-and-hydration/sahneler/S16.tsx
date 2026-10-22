// Sahne 16 — BÖLÜM 3: 24 saatlik idrar hacmi (meta.grafik). Her çubuk sayısı söylenince büyür; sonda eşitlik çizgisi.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 500, GW = 1320, GH = 330, MAKS = 3000;

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(0, "2,409") - 0.05, K(0, "2,428") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.altin : RENK.lacivert, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "daily"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  // eşitlik çizgisi: kahve çubuğunun tepesinden suya doğru
  const yEs = GY + GH - (2409 / MAKS) * GH;
  const pEs = eout(ilerle(t, K(1, "essentially"), 0.7));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={2.0} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={MAKS} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={GX + 40} x2={GX + 40 + (GW - 80) * pEs} y1={yEs} y2={yEs} stroke={RENK.mercan} strokeWidth={4} strokeDasharray="16 10" />
      </svg>
      <VurguRozet t={t} bas={K(0, "2.4")} vurgu="≈ 2.4 L" not="either way" x={1620} y={130} genislik={360} boyut={80}
        bitis={K(1, "no difference") - 0.1} />
      <VurguRozet t={t} bas={K(1, "no difference")} vurgu="≈ SAME" not="essentially no difference" x={1620} y={130} genislik={360}
        boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S16;
