// Sahne 11 — öğün sonrası tepeler aylar içinde ortalama kan şekerine eklenir (HbA1c); onları yumuşatmak bu yüzden önemli.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, kis, random, sol } from "../kutuphane";

// Görsel (tam/11): solda pirinç mikroskop (x 140–560), büyüteç halkasında kırmızı kan hücresi + altın glukoz noktaları
// (merkez ~705,480), masada kapaklı kan tüpleri (x 575–780, y 700–840), yeşil tabakta kırmızı diskler. Sağ yarı (x > 1000)
// boş duvar: şema ve başlık oraya. Kusur yok (sahte yazı / imza / bozuk anatomi görülmedi).

// Şematik öğün sonrası tepeler (eksenlerde sayı yok): her öğün bir tepe; m = öğün birimi.
const TAU = 0.2;
const tepe = (u: number, tau: number) => (u <= 0 ? 0 : (u / tau) * Math.exp(1 - u / tau));
const GENLIK = Array.from({ length: 24 }, (_, k) => 0.68 + 0.32 * random(`s11-tepe-${k}`));
const deger = (m: number, olcek: number, tau: number) => {
  let v = 0;
  for (let k = Math.max(0, Math.floor(m - 0.25) - 4); k <= Math.floor(m - 0.25); k++) v += GENLIK[k] * olcek * tepe(m - k - 0.25, tau);
  return v;
};
const N0 = 4.2, N1 = 9; // görünen öğün sayısı: önce birkaç gün, "over months" ile sıkışır
const ORT = Array.from({ length: 601 }, (_, i) => deger((N1 * i) / 600, 1, TAU)).reduce((a, b) => a + b, 0) / 601;

const CX0 = 1090, CX1 = 1530, CYT = 236, CYB = 540, TABAN = CYB - 28, H = 232;
const NOKTA = 360;

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1790]);
  const tTepe = K(0, "after-meal peaks"), tAy = K(0, "over months"), tOrt = K(0, "average blood sugar");
  const tTest = K(0, "a test"), tHb = K(0, "HbA1c"), tYum = K(1, "soften them");
  const aE = eout(ilerle(t, tTepe - 0.1, 0.5));
  const pc = eout(ilerle(t, tTepe + 0.1, 2.1));
  const n = N0 + (N1 - N0) * einout(ilerle(t, tAy - 0.05, 1.6));
  const pS = einout(ilerle(t, tYum - 0.1, 1.1));
  const xs = (m: number) => CX0 + (m / n) * (CX1 - CX0);
  const ys = (v: number) => TABAN - v * H;
  const yol = (olcek: number, tau: number, son: number) => {
    const out: string[] = [];
    for (let i = 0; i <= NOKTA; i++) {
      const m = Math.min(son, (n * i) / NOKTA);
      out.push(`${xs(m).toFixed(1)},${ys(deger(m, olcek, tau)).toFixed(1)}`);
      if (m >= son) break;
    }
    return out.join(" ");
  };
  const ortBitis = tYum - 0.75;
  const pOrt = eout(ilerle(t, tOrt - 0.05, 0.7)) * sol(t, ortBitis);
  const yOrt = ys(ORT);
  const aAy = eout(ilerle(t, tAy, 0.5));
  const aYum = eout(ilerle(t, tYum + 0.35, 0.5));
  const aBolme = eout(ilerle(t, tHb + 0.3, 0.5));
  return (
    <>
      <Kamera gorsel="tam/11" pencere={pen}>
        <Etiket t={t} bas={tTest} bitis={tYum - 1.2} capa={[677, 785]} konum={[975, 637]} metin="BLOOD TEST" renk={RENK.mercan} />
      </Kamera>
      {/* sağ sütun: tepeler şeması */}
      <Baslik t={t} bas={tTepe - 0.1} metin="AFTER-MEAL PEAKS" x={CX0} y={172} boyut={30} renk={RENK.altin} font="inter" aralik={5} />
      <div style={{ position: "absolute", left: 1556, top: 153, opacity: aE, fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999,
        padding: "5px 16px" }}>ILLUSTRATIVE</div>
      {aE > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <filter id="s11golge" x="-20%" y="-50%" width="140%" height="200%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#302822" floodOpacity="0.22" />
            </filter>
          </defs>
          <g opacity={aE}>
            <polyline points={`${CX0},${CYT - 10} ${CX0},${CYB} ${CX1 + 16},${CYB}`} fill="none" stroke={RENK.murekkep} strokeWidth={3.5}
              strokeOpacity={0.6} />
            <line x1={CX0} y1={TABAN} x2={CX1} y2={TABAN} stroke="#787882" strokeOpacity={0.7} strokeWidth={2.5} strokeDasharray="9 9" />
            <text x={CX0 - 22} y={(CYT + CYB) / 2} transform={`rotate(-90 ${CX0 - 22} ${(CYT + CYB) / 2})`} textAnchor="middle"
              style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri }}>blood sugar</text>
          </g>
          {/* özgün tepeler (yumuşatınca soluk iz olarak kalır) */}
          {pc > 0 && (
            <polyline points={yol(1, TAU, n * pc)} fill="none" stroke={RENK.mercan} strokeWidth={7 - 2.5 * pS} strokeLinecap="round"
              strokeLinejoin="round" opacity={1 - 0.62 * pS} filter={pS < 0.5 ? "url(#s11golge)" : undefined} />
          )}
          {pc < 1 && pc > 0 && (
            <circle cx={xs(n * pc)} cy={ys(deger(n * pc, 1, TAU))} r={10} fill={RENK.mercan} stroke="#fff" strokeWidth={3.5} />
          )}
          {/* yumuşatılmış tepeler */}
          {pS > 0 && (
            <polyline points={yol(1 - 0.5 * pS, TAU * (1 + 0.5 * pS), n)} fill="none" stroke={RENK.yesil} strokeWidth={7}
              strokeLinecap="round" strokeLinejoin="round" opacity={kis(pS * 3)} filter="url(#s11golge)" />
          )}
          {/* ortalama çizgisi (tepelerin üstünde, kâğıt haleli) */}
          {pOrt > 0 && (
            <g opacity={pOrt}>
              <line x1={CX0} y1={yOrt} x2={CX0 + (CX1 - CX0) * Math.min(1, pOrt * 1.4)} y2={yOrt} stroke={RENK.kagitAcik} strokeWidth={11}
                strokeOpacity={0.85} strokeLinecap="round" />
              <line x1={CX0} y1={yOrt} x2={CX0 + (CX1 - CX0) * Math.min(1, pOrt * 1.4)} y2={yOrt} stroke={RENK.altin} strokeWidth={5}
                strokeDasharray="16 10" />
            </g>
          )}
        </svg>
      )}
      <div style={{ position: "absolute", right: 1920 - CX1, top: CYB + 14, opacity: aAy, transform: `translateX(${(1 - aAy) * -16}px)`,
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.lacivert, whiteSpace: "nowrap" }}>OVER MONTHS →</div>
      {pOrt > 0 && (
        <div style={{ position: "absolute", left: CX1 + 30, top: yOrt - 20, opacity: kis(pOrt * 1.5 - 0.4), fontFamily: INTER, fontWeight: 800,
          fontSize: 30, letterSpacing: 1.5, lineHeight: "40px", color: RENK.altin, whiteSpace: "nowrap" }}>AVERAGE</div>
      )}
      {aYum > 0 && (
        <div style={{ position: "absolute", left: CX1 + 30, top: ys(0.42) - 20, opacity: aYum, transform: `translateX(${(1 - aYum) * -14}px)`,
          fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, lineHeight: "40px", color: RENK.yesil, whiteSpace: "nowrap" }}>
          SOFTER PEAKS</div>
      )}
      {/* HbA1c başlığı + tanım (alt sağ) */}
      <Baslik t={t} bas={tHb - 0.05} metin="HbA1c" x={CX0 - 6} y={820} boyut={132} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1438, top: 768, width: 5, height: 104 * aBolme, borderRadius: 3, background: RENK.altin }} />
      <Not t={t} bas={tHb + 0.3} metin={s.meta.baslik?.not ?? "your average blood sugar over about three months"} x={1462} y={770}
        boyut={32} genislik={410} />
    </>
  );
};


export default S11;
