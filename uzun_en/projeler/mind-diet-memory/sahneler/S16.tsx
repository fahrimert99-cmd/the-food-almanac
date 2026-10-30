// Sahne 16 — Üç kase: Akdeniz, DASH ve MIND skorları
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Ortu, RENK, SP, VurguRozet, kameraYolu, einout, eout, ilerle,
  kelimeZamani, pop, sol } from "../kutuphane";

// Hap etiketi (ekran koordinatı, pop ile gelir)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30, bitis = 1e9,
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

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 20, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kam}>
        <Etiket t={t} bas={K(0, "Mediterranean")} capa={[387, 520]} konum={[387, 220]} metin="MEDITERRANEAN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "DASH")} capa={[960, 470]} konum={[960, 130]} metin="DASH" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "MIND")} capa={[1533, 500]} konum={[1533, 190]} metin="MIND" renk={RENK.yesil} />
        <Pil t={t} bas={K(1, "top-scoring")} x={387} y={905} metin="ONLY TOP SCORERS" renk={RENK.altin} boyut={28} />
        <Pil t={t} bas={K(1, "top-scoring") + 0.25} x={960} y={905} metin="ONLY TOP SCORERS" renk={RENK.altin} boyut={28} />
        <Pil t={t} bas={K(2, "moderate")} x={1533} y={905} metin="EVEN MODERATE" renk={RENK.yesil} boyut={28} />
      </Kamera>
    </>
  );
};

export default S16;
