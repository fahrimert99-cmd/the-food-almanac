// Sahne 43 — Goodrow 2006 çubuk grafik (meta.grafik): +26% lutein, +38% zeaksantin; kolesterol değişmedi.
import React from "react";
import { ANTON, AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const baslar = [K(0, "26 percent") - 0.05, K(0, "38 percent") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i ? RENK.koyuYesil : RENK.altin, bas: baslar[i] }));
  const tKol = K(1, "Cholesterol");
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "one egg"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [s1, a1] = pop(t, K(0, "randomized"), 0.5);
  const tOut = K(0, "26 percent") - 0.35;
  const aOut = 1 - eout(ilerle(t, tOut, 0.35));
  const STAT = [
    { v: "33", ad: "ADULTS OVER 60", bas: K(0, "33"), renk: RENK.lacivert },
    { v: "1 EGG", ad: "A DAY", bas: K(0, "one egg"), renk: RENK.altin },
    { v: "5", ad: "WEEKS", bas: K(0, "five weeks"), renk: RENK.koyuYesil },
  ];
  const [s3, a3] = pop(t, tKol, 0.55);
  const sol_ = eout(1 - ilerle(t, tKol - 0.25, 0.4));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 90, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={160} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 214, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* çalışma özeti hapları; kolesterol cümlesinde yerini kolesterol hapına bırakır */}
      <div style={{ position: "absolute", left: 160, top: 290, display: "flex", gap: 20, opacity: sol_ }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1, transformOrigin: "0 50%" }}><Hap metin="RANDOMIZED CROSSOVER" renk={RENK.lacivert} boyut={26} /></div>
      </div>
      <div style={{ position: "absolute", left: 160, top: 290, transform: `scale(${s3})`, opacity: a3, transformOrigin: "0 50%" }}>
        <Hap metin="CHOLESTEROL: NO SIGNIFICANT CHANGE" renk={RENK.yesil} boyut={26}
          style={{ gap: 14 }} />
      </div>
      {STAT.map((x, i) => {
        const [sc, al] = pop(t, x.bas, 0.55);
        return (
          <div key={i} style={{ position: "absolute", left: 480 + i * 480, top: 520, transform: `translate(-50%, 0) scale(${sc})`,
            opacity: al * aOut, textAlign: "center", background: "#FCF8EC", border: `4px solid ${x.renk}`, borderRadius: 26,
            padding: "14px 40px 20px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)", whiteSpace: "nowrap" }}>
            <div style={{ fontFamily: ANTON, fontSize: 120, lineHeight: 1.1, color: x.renk }}>{x.v}</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{x.ad}</div>
          </div>
        );
      })}
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={300} y={470} w={1320} h={330} maks={45} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S43;
