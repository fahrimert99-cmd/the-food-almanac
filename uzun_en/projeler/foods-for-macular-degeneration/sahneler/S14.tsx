// Sahne 14 — Wu 2015 sonucu: en yüksek beşte bir vs en düşük. Önce beşte bir şeması (ILLUSTRATIVE), sonra çubuk grafik.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 480, GW = 1320, GH = 330;
const BX = 520, BY = 800, BAR = 150, ARA = 60; // beşte bir şeması

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const tYuksek = K(0, "highest"), tFifth = K(0, "fifth"), tDusuk = K(0, "lowest,"), tLut = K(0, "lutein");
  const tCubuk = K(0, "41 percent") - 0.05, tCubuk2 = K(1, "35 percent") - 0.05;
  const tSemaSon = K(0, "advanced") - 0.2;
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.koyuYesil : RENK.yesil, bas: i === 0 ? tCubuk : tCubuk2 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, tYuksek, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const aSema = eout(ilerle(t, tYuksek - 0.2, 0.4)) * (1 - eout(ilerle(t, tSemaSon, 0.5)));
  const [sH, aH] = pop(t, tFifth, 0.5);
  const [sL, aL] = pop(t, tDusuk, 0.5);
  const [sT, aT] = pop(t, tLut, 0.5);
  const etiket = (sc: number, al: number, x: number, y: number, m: string, r: string) => (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,0) scale(${sc})`, opacity: al * aSema, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${r}`, borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800,
      fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{m}</div>
  );
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={66} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* beşte bir şeması: artan alım basamakları (ILLUSTRATIVE) */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aSema }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const p = eout(ilerle(t, tYuksek + 0.1 + i * 0.18, 0.5));
          const h = (90 + i * 50) * p;
          const renk = i === 4 ? RENK.koyuYesil : i === 0 ? RENK.altin : RENK.yesil;
          const vurgu = i === 4 ? 1 : i === 0 ? eout(ilerle(t, tDusuk, 0.4)) : 0.45;
          return <rect key={i} x={BX + i * (BAR + ARA)} y={BY - h} width={BAR} height={h} rx={10} fill={renk} opacity={0.35 + 0.65 * vurgu} />;
        })}
        <line x1={BX - 20} x2={BX + 5 * BAR + 4 * ARA + 20} y1={BY} y2={BY} stroke={RENK.murekkep} strokeWidth={4} />
      </svg>
      {etiket(sH, aH, BX + 4 * (BAR + ARA) + BAR / 2, 395, "HIGHEST FIFTH", RENK.koyuYesil)}
      {etiket(sL, aL, BX + BAR / 2, 620, "LOWEST FIFTH", RENK.altin)}
      <div style={{ position: "absolute", left: BX + 2.5 * BAR + 2 * ARA - 60, top: BY + 24, transform: `scale(${sT})`, opacity: aT * aSema,
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>LUTEIN + ZEAXANTHIN INTAKE</div>
      <div style={{ position: "absolute", left: 160, top: 352, opacity: aSema * aBas, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</div>
      {/* çubuk grafik */}
      <CubukGrafik t={t} bas={tCubuk} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={50} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S14;
