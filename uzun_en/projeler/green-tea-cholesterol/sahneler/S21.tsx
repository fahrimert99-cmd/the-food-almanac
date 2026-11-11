// Sahne 21 — 12 ayda LDL değişimi: ekstre −%4,1, plasebo +%0,9; toplam kolesterol −%2,1.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, INTER, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const a = eout(ilerle(t, 0.2, 0.6));
  const y0 = 520, ol = 70;           // sıfır çizgisi ve piksel/yüzde
  const bw = 230;
  const sut = [
    { cx: 640, deger: -4.1, metin: "−4.1%", renk: RENK.yesil, bas: K(0, "4.1") - 0.1, ad: g.cubuklar[0].etiket },
    { cx: 1140, deger: 0.9, metin: "+0.9%", renk: RENK.mercan, bas: K(0, "0.9") - 0.1, ad: g.cubuklar[1].etiket },
  ];
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 130, height: 6, width: 200 * a, background: RENK.altin }} />
      <Baslik t={t} bas={0.2} metin="LDL CHOLESTEROL AFTER 12 MONTHS" x={156} y={202} boyut={70} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 258, opacity: a, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={a}>
          <line x1={340} x2={1440} y1={y0} y2={y0} stroke={RENK.murekkep} strokeWidth={4} />
          <text x={324} y={y0 + 10} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 28, fill: RENK.lacivert }}>0%</text>
        </g>
        {sut.map((c, i) => {
          const p = eout(ilerle(t, c.bas, 0.9));
          const h = Math.abs(c.deger) * ol * p;
          return <rect key={i} x={c.cx - bw / 2} y={c.deger < 0 ? y0 : y0 - h} width={bw} height={h} rx={10} fill={c.renk} />;
        })}
      </svg>
      {sut.map((c, i) => {
        const [sc, al] = pop(t, c.bas + 0.7, 0.5);
        const top = c.deger < 0 ? y0 - 120 : y0 - Math.abs(c.deger) * ol - 120;
        return (
          <React.Fragment key={i}>
            <div style={{ position: "absolute", left: c.cx, top, transform: `translate(-50%,0) scale(${sc})`, opacity: al, fontFamily: ANTON,
              fontSize: 84, lineHeight: "100px", color: c.renk, whiteSpace: "nowrap" }}>{c.metin}</div>
            <div style={{ position: "absolute", left: c.cx, top: 830, transform: "translateX(-50%)", opacity: eout(ilerle(t, c.bas - 0.1, 0.4)),
              fontFamily: INTER, fontWeight: 800, fontSize: 32, color: RENK.lacivert, whiteSpace: "nowrap" }}>{c.ad}</div>
          </React.Fragment>
        );
      })}
      <VurguRozet t={t} bas={K(1, "2.1")} vurgu="−2.1%" not="total cholesterol" x={1670} y={420} genislik={380} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 900, textAlign: "center", opacity: a, fontFamily: INTER, fontWeight: 500,
        fontSize: 24, color: RENK.gri }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};
export default S21;
