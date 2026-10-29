// Sahne 55 — beyin sonuçları kesin değil.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Konumlu, pop ile gelen hap
const Hp: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30,
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

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [100, 80, 1720])} />
      <Baslik t={t} bas={K(0, "brain")} metin="BRAIN RESULTS:" x={960} y={80} boyut={64} renk={RENK.lacivert} hiza="orta" bitis={2.4} />
      <Baslik t={t} bas={K(0, "not")} metin="NOT CONCLUSIVE" x={960} y={165} boyut={84} renk={RENK.mercan} hiza="orta" bitis={2.4} />
      <Etiket t={t} bas={K(1, "memory")} capa={[800, 430]} konum={[330, 200]} metin="MAIN MEMORY SCORE" renk={RENK.altin} />
      <Hp t={t} bas={K(1, "no")} x={330} y={290} metin="NO DIFFERENCE" renk={RENK.mercan} />
      <Hp t={t} bas={K(1, "possible")} x={1500} y={140} metin="POSSIBLE BENEFIT, ONE GROUP" renk={RENK.altin} boyut={27} />
      <Hp t={t} bas={K(1, "after-the-fact")} x={1500} y={235} metin="AFTER-THE-FACT ANALYSIS" renk={RENK.lacivert} boyut={27} />
    </>
  );
};

export default S55;
