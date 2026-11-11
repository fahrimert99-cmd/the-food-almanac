// Sahne 19 — grafik: yüksek tansiyonda belirgin düşüş, normal tansiyonda sıfıra yakın (meta.grafik).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 520, GW = 1320, GH = 300;

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const bas = [K(0, "5.3") - 0.05, K(0, "3.1") - 0.05, K(1, "close to zero"), K(1, "close to zero") + 0.35];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i < 2 ? RENK.yesil : RENK.altin, bas: bas[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.9, 0.6));
  const aKay = eout(ilerle(t, 1.4, 0.6));
  const [s16, a16] = pop(t, K(0, "16"), 0.5);
  const [sY, aY] = pop(t, K(0, "high blood"), 0.5);
  const [sYb, aYb] = pop(t, K(0, "higher potassium") + 0.2, 0.5);
  const [sN, aN] = pop(t, K(1, "normal blood"), 0.5);
  const [sNb, aNb] = pop(t, K(1, "close to zero"), 0.5);
  const gw = GW / 4;
  const grp = (cx: number, sc: number, al: number, ad: string, alt: string, sc2: number, al2: number, renk: string) => (
    <div style={{ position: "absolute", left: cx - 300, width: 600, top: 400, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      <div style={{ transform: `scale(${sc})`, opacity: al }}><Hap metin={ad} renk={renk} boyut={26} /></div>
      <div style={{ transform: `scale(${sc2})`, opacity: al2, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: renk === RENK.yesil ? RENK.koyuYesil : RENK.lacivert }}>{alt}</div>
    </div>
  );
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={54} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 276, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 30, color: RENK.lacivert }}>{g.alt}</div>
      <div style={{ position: "absolute", left: 160, top: 336, transform: `scale(${s16})`, transformOrigin: "0% 50%", opacity: a16 }}>
        <Hap metin="16 STUDIES" renk={RENK.yesil} boyut={24} />
      </div>
      {grp(GX + gw, sY, aY, "HIGH BLOOD PRESSURE", "SIGNIFICANT", sYb, aYb, RENK.yesil)}
      {grp(GX + gw * 3, sN, aN, "NORMAL BLOOD PRESSURE", "NOT STATISTICALLY SIGNIFICANT", sNb, aNb, RENK.altin)}
      <CubukGrafik t={t} bas={1.4} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={7} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S19;
