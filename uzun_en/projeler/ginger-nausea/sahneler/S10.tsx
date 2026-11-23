// Sahne 10 — grafik: 2006 meta-analizinde risk azalması (−31% / −39%), ardından tek yan etki.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 400, GY = 450, GW = 1120, GH = 320;

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const b0 = K(0, "31 percent") - 0.05, b1 = K(0, "39 percent") - 0.05;
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.koyuYesil, bas: i === 0 ? b0 : b1 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const tYan = K(1, "side effect");
  const [sY, aY] = pop(t, tYan, 0.55);
  const [sD, aD] = pop(t, K(1, "abdominal discomfort"), 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={200} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 258, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={b0} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={46} />
      {/* 2. cümle: tek yan etki */}
      <div style={{ position: "absolute", left: 960, top: 850, transform: `translate(-50%, 0) scale(${sY})`, opacity: aY,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "8px 28px 8px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="uyari" boyut={26} renk="#fff" kalinlik={7} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.murekkep }}>ONLY SIDE EFFECT REPORTED:</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.altin, opacity: aD }}>ABDOMINAL DISCOMFORT</span>
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 920, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500, fontSize: 22, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};
export default S10;
