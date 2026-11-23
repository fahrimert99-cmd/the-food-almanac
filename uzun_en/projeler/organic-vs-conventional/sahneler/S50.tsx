// Sahne 50 — Raf fiyatlarını karşılaştır: iki kasa + %7–%60 aralık çizgisi
import React from "react";
import { ANTON, Etiket, INTER, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X7 = 581, X60 = 1500, YC = 195;

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(0, "Three"), tPr = K(1, "prices"), t7 = K(2, "7"), t60 = K(2, "60"), tUSDA = K(2, "USDA");
  const tLit = K(2, "little"), tLot = K(2, "a lot"), tSo = K(2, "so");
  const [sc, al] = pop(t, tOne, 0.5);
  const pCiz = einout(ilerle(t, t7 + 0.2, t60 - t7 + 0.2));
  const [s7, a7] = pop(t, t7, 0.5);
  const [s60, a60] = pop(t, t60, 0.5);
  const [sl, aL] = pop(t, tLit, 0.45);
  const [sL, aLot] = pop(t, tLot, 0.45);
  const aU = eout(ilerle(t, tUSDA, 0.5));
  const hap = (x: number, m: string, renk: string, sk: number, a: number) => (
    <div style={{ position: "absolute", left: x, top: 232, transform: `translateX(-50%) scale(${sk})`, opacity: a, background: renk, color: "#fff",
      borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, whiteSpace: "nowrap" }}>{m}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1800])}>
        <Etiket t={t} bas={tPr} bitis={tSo} capa={[573, 713]} konum={[573, 850]} metin="PRICE TAG" renk={RENK.altin} />
        <Etiket t={t} bas={tPr + 0.15} bitis={tSo} capa={[1329, 713]} konum={[1329, 850]} metin="PRICE TAG" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 56, top: 56, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 54, transform: `scale(${sc})`, opacity: al }}>3</div>
      <div style={{ position: "absolute", left: 200, top: 100, opacity: aU, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.gri }}>PREMIUM · USDA</div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pCiz > 0 && <line x1={X7} y1={YC} x2={X7 + (X60 - X7) * pCiz} y2={YC} stroke={RENK.lacivert} strokeWidth={8} strokeLinecap="round" strokeDasharray="1 0" />}
        <circle cx={X7} cy={YC} r={16 * s7} fill={RENK.yesil} opacity={a7} />
        <circle cx={X60} cy={YC} r={16 * s60} fill={RENK.mercan} opacity={a60} />
      </svg>
      <div style={{ position: "absolute", left: X7, top: 72, transform: `translateX(-50%) scale(${s7})`, opacity: a7, fontFamily: ANTON, fontSize: 84, color: RENK.yesil }}>7%</div>
      <div style={{ position: "absolute", left: X60, top: 72, transform: `translateX(-50%) scale(${s60})`, opacity: a60, fontFamily: ANTON, fontSize: 84, color: RENK.mercan }}>60%</div>
      {hap(X7, "LITTLE EXTRA", RENK.yesil, sl, aL)}
      {hap(X60, "A LOT", RENK.mercan, sL, aLot)}
    </>
  );
};

export default S50;
