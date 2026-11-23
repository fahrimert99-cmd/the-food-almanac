// Sahne 20 — 1. gün: üç doz da mide bulantısını azalttı (ŞEMATİK).
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tB = K(0, "nausea"), tBest = K(1, "half a gram"), tHigh = K(2, "highest dose");
  // şematik çubuklar: sayı yok, yalnızca göreli yükseklik
  const C = [
    { ad: "0.5 G", h: 0.82, bas: K(0, "ginger") + 0.4, renk: RENK.yesil },
    { ad: "1 G", h: 0.82, bas: K(0, "ginger") + 0.7, renk: RENK.yesil },
    { ad: "1.5 G", h: 0.56, bas: K(0, "ginger") + 1.0, renk: RENK.altin },
  ];
  const x0 = 1180, w = 640, yb = 800, hh = 300;
  const aE = eout(ilerle(t, tB + 0.3, 0.5));
  const aBest = eout(ilerle(t, tBest, 0.5));
  const aHigh = eout(ilerle(t, tHigh, 0.5));
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 100, 1800], [50, 130, 1700])}>
        <Etiket t={t} bas={K(0, "ginger")} capa={[300, 640]} konum={[260, 360]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
      <BaslikBlok t={t} bas={tB - 0.3} satirlar={b.satirlar} x={1860} y={160} boyut={92} hiza="sag" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aE}>
          <line x1={x0 - 20} x2={x0 + w + 20} y1={yb} y2={yb} stroke={RENK.murekkep} strokeWidth={4} />
          <text x={x0 - 20} y={yb - hh - 70} style={{ fontFamily: INTER, fontWeight: 700, fontSize: 26, fill: RENK.lacivert }}>DROP IN NAUSEA VS PLACEBO</text>
        </g>
        {C.map((c, i) => {
          const p = eout(ilerle(t, c.bas, 0.8));
          const bw = 150, cx = x0 + 100 + i * 220;
          const hi = (i < 2 ? aBest : aHigh);
          return (
            <g key={i}>
              <rect x={cx - bw / 2} y={yb - c.h * hh * p} width={bw} height={c.h * hh * p} rx={10} fill={c.renk}
                stroke={i < 2 ? RENK.altin : RENK.mercan} strokeWidth={6 * hi} />
            </g>
          );
        })}
      </svg>
      {C.map((c, i) => (
        <div key={i} style={{ position: "absolute", left: x0 + 100 + i * 220, top: yb + 14, transform: "translateX(-50%)", opacity: eout(ilerle(t, c.bas, 0.4)),
          fontFamily: ANTON, fontSize: 44, color: RENK.lacivert, whiteSpace: "nowrap" }}>{c.ad}</div>
      ))}
      <div style={{ position: "absolute", left: x0 + 100 - 100, top: 490, width: 420, textAlign: "center", opacity: aBest, fontFamily: INTER, fontWeight: 800,
        fontSize: 30, color: RENK.altin, transform: `translateY(${(1 - aBest) * 10}px)` }}>BIGGEST DROPS</div>
      <div style={{ position: "absolute", left: x0 + 100 + 440 - 125, top: 575, width: 250, textAlign: "center", opacity: aHigh, fontFamily: INTER, fontWeight: 800,
        fontSize: 30, color: RENK.mercan, transform: `translateY(${(1 - aHigh) * 10}px)` }}>NOT BETTER</div>
      <div style={{ position: "absolute", left: x0 - 20, top: yb + 86, opacity: aE, fontFamily: INTER, fontWeight: 800, fontSize: 24,
        letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE · NOT TO SCALE</div>
    </>
  );
};

export default S20;
