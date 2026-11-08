// Sahne 22 — görselsiz çubuk grafik (meta.grafik): alt grup sonuçları ve genel ortalama; az sayıda karşılaştırma.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 430, GW = 1320, GH = 330;
const SAYILAR = ["20", "5", "2"]; // meta.kaynak: 20, 5 and 2 comparisons

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const renkler = [RENK.gri, RENK.altin, RENK.koyuYesil];
  const baslar = [K(0, "overall"), K(0, "subgroup"), K(0, "results")];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.6, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sD, aD] = pop(t, K(1, "dramatic") - 0.1, 0.5);
  const tAz = K(2, "few trials") - 0.1;
  const gw = GW / Math.max(1, cubuklar.length);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={baslar[1]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={40} />
      {/* "dramatik görünüyor" rozeti */}
      {aD > 0 && (
        <div style={{ position: "absolute", left: 1500, top: 330, transform: `translate(-50%, -50%) scale(${sD})`, opacity: aD, display: "flex",
          alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `4px solid ${RENK.altin}`, borderRadius: 999,
          padding: "10px 30px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert,
          boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
          <span style={{ width: 50, height: 50, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="uyari" boyut={30} renk="#fff" />
          </span>
          LOOK DRAMATIC
        </div>
      )}
      {/* her çubuğun altında karşılaştırma sayısı (meta.kaynak) */}
      {SAYILAR.map((n, i) => {
        const [sc, al] = pop(t, tAz + i * 0.25, 0.5);
        if (al <= 0) return null;
        const cx = GX + gw * (i + 0.5);
        const sade = n === "20";
        const renk = sade ? RENK.gri : RENK.mercan;
        return (
          <div key={n} style={{ position: "absolute", left: cx, top: GY + GH + 66, transform: `translateX(-50%) scale(${sc})`, opacity: al,
            whiteSpace: "nowrap", border: `3px solid ${renk}`, background: RENK.kagitAcik, borderRadius: 999, padding: "4px 20px",
            fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: sade ? RENK.lacivert : RENK.mercan }}>
            {n} COMPARISONS
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S22;
