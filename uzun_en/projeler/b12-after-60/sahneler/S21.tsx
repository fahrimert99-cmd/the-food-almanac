// Sahne 21 — grafik: 5. yılda düşük / sınırda B12 payı, plasebo ve metformin. Her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 500, GW = 1320, GH = 310;

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const sayilar: [number, string][] = [[0, "2.3"], [0, "4.3"], [1, "9.5"], [1, "19.1"]];
  const plasebo = RENK.koyuYesil, metformin = RENK.altin;
  const cubuklar = g.cubuklar.map((c, i) => ({
    ...c, etiket: "", renk: i % 2 ? metformin : plasebo, bas: K(sayilar[i][0], sayilar[i][1]) - 0.05,
  }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.8, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const gw = GW / 4;
  const [s1, a1] = pop(t, K(0, "metformin"), 0.5);
  const [s2, a2] = pop(t, K(0, "placebo"), 0.5);
  const [s3, a3] = pop(t, K(1, "borderline"), 0.5);
  const grup = (ad: string, cx: number, a: number) => (
    <div style={{ position: "absolute", left: cx, top: GY + GH + 20, transform: "translateX(-50%)", opacity: a, whiteSpace: "nowrap",
      fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert }}>{ad}</div>
  );
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={68} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 276, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 34,
        color: RENK.lacivert }}>{g.alt}</div>
      {/* gösterge */}
      <div style={{ position: "absolute", left: 160, top: 360, transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
        <Hap metin="PLACEBO" renk={plasebo} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 400, top: 360, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
        <Hap metin="METFORMIN" renk={metformin} boyut={26} />
      </div>
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={24} />
      {grup("LOW B12", GX + gw, eout(ilerle(t, cubuklar[0].bas, 0.5)))}
      {grup("LOW OR BORDERLINE", GX + gw * 3, a3)}
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S21;
