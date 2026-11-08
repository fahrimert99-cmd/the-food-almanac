// Sahne 14 — A1C düşüşü çubuk grafiği (meta.grafik): her çubuk sayısı söylendiğinde yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const ifade: [number, string][] = [[0, "half"], [1, "three tenths"], [2, "two tenths"]];
  const renkler = [RENK.yesil, RENK.altin, RENK.koyuYesil];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: K(ifade[i][0], ifade[i][1]) - 0.05 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sL, aL] = pop(t, K(0, "A1C"), 0.55);
  // fark çubuğu için köşeli ayraç vurgusu
  const [sF, aF] = pop(t, K(2, "gap"), 0.5);
  const gw = GW / Math.max(1, cubuklar.length);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={192} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 252, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 318, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "7px 24px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        A1C DROP · BIGGER = BETTER
      </div>
      <CubukGrafik t={t} bas={cubuklar[0]?.bas ?? 1} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={0.6} />
      {/* fark çubuğunun üstünde "gap" rozeti */}
      <div style={{ position: "absolute", left: GX + gw * 2.5, top: 540, transform: `translate(-50%, 0) scale(${sF})`, opacity: aF,
        background: RENK.koyuYesil, color: "#fff", borderRadius: 999, padding: "6px 22px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2 }}>THE GAP</div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
