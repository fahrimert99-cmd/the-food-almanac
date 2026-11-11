// Sahne 26 — yüksek vs normal tansiyon, kanıt kalitesi orta
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; ust: string; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, ust, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a, background: RENK.lacivert,
      borderRadius: 22, padding: "10px 34px", textAlign: "center", whiteSpace: "nowrap", boxShadow: "0 10px 24px rgba(48,40,34,0.25)" }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 4, color: RENK.altin }}>{ust}</div>
      <div style={{ fontFamily: "Anton", fontSize: 54, letterSpacing: 2, color: renk }}>{metin}</div>
    </div>
  );
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHigh = K(0, "high blood pressure"), tNorm = K(0, "normal"), tBord = K(0, "borderline");
  const tMod = K(1, "moderate"), tDis = K(1, "disagreed");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [150, 90, 1640])} />
      <Etiket t={t} bas={tHigh} bitis={tBord} capa={[1330, 420]} konum={[1540, 190]} metin="HIGH BP: LARGER DROP" renk={RENK.mercan} />
      <Etiket t={t} bas={tNorm} bitis={tBord} capa={[390, 520]} konum={[420, 330]} metin="NORMAL BP" renk={RENK.yesil} />
      <Baslik t={t} bas={tBord} bitis={tMod - 0.2} metin="BORDERLINE DIFFERENCE" x={560} y={170} boyut={80} hiza="orta" renk={RENK.koyuYesil} />
      <Pil t={t} bas={tMod - 0.1} bitis={tDis - 0.2} ust="REVIEWERS' RATING" metin="MODERATE QUALITY" renk="#fff" x={960} y={850} />
      <Pil t={t} bas={tDis - 0.1} ust="WHY" metin="TRIALS DISAGREED" renk="#fff" x={960} y={850} />
    </>
  );
};

export default S26;
