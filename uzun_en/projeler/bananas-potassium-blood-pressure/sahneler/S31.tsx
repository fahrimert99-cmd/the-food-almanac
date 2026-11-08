// Sahne 31 — görselsiz çubuk grafik (meta.grafik): potasyumlu tuz ikamesi, Neal 2021. Her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 520, GW = 1320, GH = 330;

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const ifadeler = ["14 percent", "13 percent", "12 percent"];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 1 ? RENK.koyuYesil : RENK.yesil, bas: K(0, ifadeler[i]) - 0.05 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "regular salt"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sR, aR] = pop(t, K(0, "the substitute"), 0.5);
  const baslik = g.baslik.toUpperCase();
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={baslik} x={156} y={222} boyut={Math.min(80, Math.floor(2600 / Math.max(10, baslik.length)))} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 346, transform: `scale(${sR})`, transformOrigin: "0% 50%", opacity: aR,
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "7px 26px", whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        SALT SUBSTITUTE VS. REGULAR SALT
      </div>
      <CubukGrafik t={t} bas={1.2} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={16} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S31;
