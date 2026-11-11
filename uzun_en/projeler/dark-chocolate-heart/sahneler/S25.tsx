// Sahne 25 — 130/80 -> 128/78: küçük ama gerçek
import React from "react";
import { ANTON, Baslik, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, eout, ilerle } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al, background: renk, color: "#fff",
      borderRadius: 18, padding: "8px 30px", fontFamily: ANTON, fontSize: 70, letterSpacing: 2, whiteSpace: "nowrap", boxShadow: "0 10px 24px rgba(48,40,34,0.25)" }}>{metin}</div>
  );
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOld = K(1, "130"), tNew = K(1, "128"), tReal = K(2, "Real,");
  const pOk = eout(ilerle(t, tNew - 0.1, 0.5));
  const [sr, ar] = pop(t, tReal, 0.55);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 40, 1800])} />
      <Baslik t={t} bas={0.1} bitis={tOld - 0.1} metin="THAT IS SMALL" x={100} y={150} boyut={96} renk={RENK.koyuYesil} />
      <Kutu t={t} bas={tOld - 0.1} metin="130 / 80" renk={RENK.lacivert} x={330} y={150} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <path d="M 560 150 L 690 150 M 660 120 L 695 150 L 660 180" fill="none" stroke={RENK.lacivert} strokeWidth={9} strokeLinecap="round"
          strokeLinejoin="round" strokeDasharray={1} pathLength={1} strokeDashoffset={1 - pOk} />
      </svg>
      <Kutu t={t} bas={tNew - 0.1} metin="≈ 128 / 78" renk={RENK.yesil} x={940} y={150} />
      <div style={{ position: "absolute", left: 1560, top: 910, transform: `translate(-50%,-50%) scale(${sr})`, opacity: ar, background: RENK.lacivert,
        borderRadius: 999, padding: "10px 34px", color: "#fff", fontFamily: ANTON, fontSize: 52, letterSpacing: 2, whiteSpace: "nowrap" }}>
        REAL, BUT MODEST
      </div>
    </>
  );
};

export default S25;
