// Sahne 35 — Porter 2021 grafiği (meta.grafik): güçlendirilmiş gıda sık / seyrek, iki grup.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani } from "../kutuphane";

const GX = 300, GY = 400, GW = 1320, GH = 320;

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const bas = [K(0, "five or more"), K(0, "five or more") + 0.9, K(1, "30"), K(1, "50")];
  const adlar = ["5+ A WEEK", "LESS OFTEN", "5+ A WEEK", "LESS OFTEN"];
  const renk = [RENK.yesil, RENK.mercan, RENK.yesil, RENK.mercan];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, etiket: adlar[i], renk: renk[i], bas: bas[i] - 0.05 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "fortified"), 0.6));
  const aG1 = eout(ilerle(t, bas[0], 0.5));
  const aG2 = eout(ilerle(t, K(1, "atrophic"), 0.5));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const grup = (a: number, x0: number, x1: number, ad: string) => (
    <>
      <div style={{ position: "absolute", left: x0, top: 800, width: x1 - x0, height: 4, background: RENK.altin, opacity: a }} />
      <div style={{ position: "absolute", left: x0, top: 814, width: x1 - x0, textAlign: "center", opacity: a, fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.lacivert }}>{ad}</div>
    </>
  );
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={bas[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={56} />
      {grup(aG1, 370, 890, "NEITHER")}
      {grup(aG2, 1030, 1550, "ATROPHIC GASTRITIS")}
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S35;
