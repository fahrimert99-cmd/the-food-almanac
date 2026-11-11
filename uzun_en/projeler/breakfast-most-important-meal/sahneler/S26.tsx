// Sahne 26 — ikinci öğün etkisi: kısa süreli dalgalanma; diyabette daha yüksek, sağlıklıda daha az.
import React from "react";
import { AltSis, Baslik, Etiket, Hap, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kis, pop, sol } from "../kutuphane";
// Açılan hap: x,y = merkez
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; boyut?: number }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

// Temsili dalga (yalnızca şekil): taban y=480, tepe yüksekliği h
const dalga = (h: number, p: number) => {
  const pts: string[] = [];
  for (let i = 0; i <= 60 * p; i++) {
    const x = 170 + (i / 60) * 700, u = (x - 470) / 130;
    pts.push(`${x.toFixed(1)},${(480 - h * Math.exp(-u * u)).toFixed(1)}`);
  }
  return pts.join(" ");
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = s.cumleler[1].bas - 0.1;
  const aTaban = eout(ilerle(t, t1, 0.5));
  const pTall = eout(ilerle(t, K(1, "taller"), 1.4));
  const pLow = eout(ilerle(t, K(2, "it may"), 1.2));
  const aKart = eout(ilerle(t, t1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [110, 120, 1700])}>
        <Etiket t={t} bas={K(1, "lunch")} capa={[860, 900]} konum={[1090, 760]} metin="LUNCH" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "second-meal")} bitis={t1} metin="SECOND-MEAL EFFECT" x={90} y={150} boyut={104} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(0, "real,")} bitis={t1} metin="LOOKS REAL" x={330} y={290} renk={RENK.yesil} />
      <Pil t={t} bas={K(0, "short-term")} bitis={t1} metin="SHORT-TERM SWING" x={760} y={290} renk={RENK.altin} />
      {/* temsili dalga kartı */}
      <div style={{ position: "absolute", left: 100, top: 130, width: 840, height: 440, borderRadius: 26, background: "rgba(252,248,236,0.94)",
        border: `3px solid ${RENK.lacivert}`, opacity: aKart, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ position: "absolute", right: 22, top: 16, fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 2, color: RENK.altin,
          border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "4px 16px" }}>ILLUSTRATIVE</div>
        <div style={{ position: "absolute", left: 30, top: 16, fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>BLOOD SUGAR AFTER LUNCH</div>
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={170} y1={480} x2={870} y2={480} stroke={RENK.lacivert} strokeWidth={4} opacity={aTaban} />
        {pTall > 0 && <polyline points={dalga(250, pTall)} fill="none" stroke={RENK.mercan} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />}
        {pLow > 0 && <polyline points={dalga(70, pLow)} fill="none" stroke={RENK.yesil} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
      <Pil t={t} bas={K(1, "diabetes,")} metin="DIABETES: TALLER SWING" x={700} y={290} renk={RENK.mercan} boyut={26} />
      <Pil t={t} bas={K(2, "healthy")} metin="HEALTHY: MATTERS LESS" x={640} y={520} renk={RENK.yesil} boyut={26} />
    </>
  );
};
export default S26;
