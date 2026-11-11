// Sahne 2 — tek etiket, iki çok farklı yiyecek: karşılaştırma diyagramı.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, INTER, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KARTLAR = [
  { ad: "SODA", x: 520, ifade: "soda", renk: RENK.mercan },
  { ad: "WHOLE GRAIN BREAD", x: 1400, ifade: "whole grain", renk: RENK.yesil },
];

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBirles = K(0, "together");
  const tFark = K(0, "very differently");
  const pOrtu = eout(ilerle(t, 0, 0.5));
  const pBag = einout(ilerle(t, tBirles - 0.1, 0.6));
  const pAyr = eout(ilerle(t, tFark - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [100, 90, 1720])} />
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: 0.93 * pOrtu }} />
      <Baslik t={t} bas={K(0, "label")} metin="ONE LABEL" x={960} y={170} boyut={120} renk={RENK.lacivert} hiza="orta" />
      {KARTLAR.map((k) => {
        const [sc, al] = pop(t, K(0, k.ifade), 0.55);
        return (
          <div key={k.ad} style={{ position: "absolute", left: k.x, top: 450, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
            width: 680, padding: "40px 10px", textAlign: "center", background: RENK.kagitAcik, border: `5px solid ${k.renk}`,
            borderRadius: 26, boxShadow: "0 12px 30px rgba(48,40,34,0.18)", fontFamily: ANTON, fontSize: 68, color: k.renk, whiteSpace: "nowrap" }}>
            {k.ad}
          </div>
        );
      })}
      {/* "together": iki kartı birleştiren ayraç */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <path d="M 520 290 L 520 250 L 1400 250 L 1400 290" fill="none" stroke={RENK.altin} strokeWidth={6} strokeLinecap="round"
          pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pBag} />
        <path d="M 960 250 L 960 232" stroke={RENK.altin} strokeWidth={6} strokeLinecap="round" opacity={pBag} />
      </svg>
      {/* "very differently": ≠ ve başlık */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }} opacity={eout(ilerle(t, tFark, 0.4))}>
        <path d="M 930 425 H 990 M 930 470 H 990 M 995 405 L 925 490" stroke={RENK.altin} strokeWidth={12} strokeLinecap="round" />
      </svg>
      <div style={{ opacity: pAyr }}>
        <Baslik t={t} bas={K(0, "research")} metin="TREATED VERY DIFFERENTLY" x={960} y={730} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
        <div style={{ position: "absolute", left: 660, width: 600, top: 805, height: 5, background: RENK.altin, transform: `scaleX(${pAyr})` }} />
      </div>
      <div style={{ position: "absolute", left: 0, top: 880, width: 1920, textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 5, color: RENK.gri, opacity: pAyr }}>IN THE RESEARCH</div>
    </>
  );
};

export default S02;
