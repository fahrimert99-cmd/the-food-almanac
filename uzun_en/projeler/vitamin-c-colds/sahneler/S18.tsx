// Sahne 18 — on günlük soğuk algınlığı: %8 kısalma bir günden az. Sağda 10 günlük kutu şeridi.
import React from "react";
import { Baslik, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, background: RENK.kagitAcik,
      border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 34px", fontFamily: INTER, fontWeight: 800, fontSize: 34,
      letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOn = K(0, "ten-day"), tAz = K(1, "less than"), tMild = K(2, "symptoms"), tReal = K(3, "real effect"), tDaily = K(3, "daily use");
  const pLast = eout(ilerle(t, tAz + 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Baslik t={t} bas={tOn} metin="A TEN-DAY COLD" x={1160} y={190} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tAz} metin="LESS THAN A DAY" x={1160} y={290} boyut={84} renk={RENK.koyuYesil} />
      {Array.from({ length: 10 }, (_, i) => {
        const [sc, al] = pop(t, tOn + 0.12 * i, 0.4);
        const son = i === 9;
        const x = 1160 + (i % 5) * 118, y = 400 + Math.floor(i / 5) * 118;
        return (
          <div key={i} style={{ position: "absolute", left: x, top: y, width: 100, height: 100, borderRadius: 14, opacity: al, transform: `scale(${sc})`,
            background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, overflow: "hidden", boxShadow: "0 6px 16px rgba(48,40,34,0.14)",
            fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {i + 1}
            {son && <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100 * 0.8 * pLast, background: RENK.mercan, opacity: 0.35 }} />}
          </div>
        );
      })}
      <Hap t={t} bas={tMild} bitis={tReal - 0.2} x={1500} y={730} metin="SOMEWHAT MILDER" renk={RENK.altin} />
      <Hap t={t} bas={tReal} x={1500} y={730} metin="REAL BUT MODEST" renk={RENK.koyuYesil} />
      <Hap t={t} bas={tDaily} x={1500} y={830} metin="WITH DAILY USE" renk={RENK.yesil} />
    </>
  );
};

export default S18;
