// Sahne 35 — Porter 2021: güçlendirilmiş gıda sık/seyrek yenince düşük B12 payı (meta.grafik).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 260, GY = 365, GW = 1400, GH = 360;

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const bas = [K(0, "Irish") + 0.6, K(0, "lower") - 0.3, K(1, "30 percent") - 0.1, K(1, "50 percent") - 0.1];
  const renk = [RENK.yesil, RENK.altin, RENK.yesil, RENK.mercan];
  const kisa = ["OFTEN", "LESS OFTEN", "OFTEN", "LESS OFTEN"];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, etiket: kisa[i], renk: renk[i], bas: bas[i] }));
  const [sn, an] = pop(t, K(0, "Irish") + 0.3, 0.5);
  const aAlt = eout(ilerle(t, 0.5, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sc, al] = pop(t, K(1, "atrophic"), 0.5);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aAlt, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={55} />
      {/* eşleşmiş çubuk grupları */}
      {[{ ad: "NEITHER CONDITION", sc: sn, al: an, c: 0.25, r: RENK.yesil }, { ad: "WITH ATROPHIC GASTRITIS", sc, al, c: 0.75, r: RENK.mercan }].map((o) => (
        <div key={o.ad} style={{ position: "absolute", left: GX + GW * o.c, top: GY + GH + 84, transform: `translate(-50%,0) scale(${o.sc})`, opacity: o.al,
          fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, border: `3px solid ${o.r}`,
          background: RENK.kagitAcik, borderRadius: 999, padding: "8px 26px", whiteSpace: "nowrap" }}>{o.ad}</div>
      ))}
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S35;
