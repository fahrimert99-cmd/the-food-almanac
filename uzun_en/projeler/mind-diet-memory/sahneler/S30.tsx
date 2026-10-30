// Sahne 30 — grafik (meta.grafik): iki grupta da genel biliş puanı arttı.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(1, "0.2") - 0.05, K(1, "0.17") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.koyuYesil : RENK.altin, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "went"), 0.6));
  const [sL, aL] = pop(t, K(0, "both"), 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={70} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 342, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL }}>
        <Hap metin="BOTH GROUPS IMPROVED" renk={RENK.yesil} boyut={26} />
      </div>
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={300} y={470} w={1320} h={330} maks={0.25} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};
export default S30;
