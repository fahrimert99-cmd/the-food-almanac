// Sahne 6 — NOVA sistemi: dört kasa, işlenme oku. 
import React from "react";
import { ANTON, Baslik, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KASALAR = [263, 727, 1203, 1657];

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tCik = c[1].bas - 0.1;
  const tOk = K(1, "foods");
  const pOk = eout(ilerle(t, tOk, 1.4));
  const [sn, an] = pop(t, K(1, "not by"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 110, 1800])} />
      {/* 1. cümle */}
      <Baslik t={t} bas={K(0, "NOVA")} bitis={tCik} metin="THE NOVA" x={960} y={100} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "NOVA") + 0.18} bitis={tCik} metin="SYSTEM" x={960} y={190} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "researchers")} bitis={tCik} metin="DEVELOPED BY RESEARCHERS IN BRAZIL" x={960} y={256} boyut={32} agirlik={800} hiza="orta" renk={RENK.altin} />
      {/* 2. cümle: işlenme oku ve 4 grup */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <defs>
          <linearGradient id="nova" gradientUnits="userSpaceOnUse" x1="263" y1="0" x2="1657" y2="0"><stop offset="0" stopColor={RENK.yesil} /><stop offset="1" stopColor={RENK.mercan} /></linearGradient>
        </defs>
        <line x1={263} y1={215} x2={263 + 1394 * pOk} y2={215} stroke="url(#nova)" strokeWidth={14} strokeLinecap="round" />
        {pOk > 0.98 && <path d="M 1625 185 L 1670 215 L 1625 245" fill="none" stroke={RENK.mercan} strokeWidth={14} strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
      <Baslik t={t} bas={K(1, "industrial")} metin="MORE INDUSTRIAL PROCESSING" x={960} y={150} boyut={52} renk={RENK.lacivert} hiza="orta" />
      {KASALAR.map((x, i) => {
        const [sc, al] = pop(t, K(1, "industrial") + 0.12 * i, 0.45);
        return (
          <div key={i} style={{ position: "absolute", left: x - 40, top: 255, width: 80, height: 80, borderRadius: "50%", transform: `scale(${sc})`, opacity: al,
            background: i === 3 ? RENK.mercan : RENK.lacivert, color: "#fff", fontFamily: ANTON, fontSize: 46, display: "flex",
            alignItems: "center", justifyContent: "center", border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 6px 16px rgba(48,40,34,0.25)" }}>{i + 1}</div>
        );
      })}
      <div style={{ position: "absolute", left: 960, top: 60, transform: `translate(-50%, -50%) scale(${sn})`, opacity: an, display: "flex", alignItems: "center", gap: 12,
        background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 24px 8px 14px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>
        <IkonYol ad="carpi" boyut={32} renk={RENK.mercan} />NOT CALORIES OR NUTRIENTS
      </div>
    </>
  );
};

export default S06;
