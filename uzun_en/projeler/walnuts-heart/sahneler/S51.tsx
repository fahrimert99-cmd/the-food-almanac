// Sahne 51 — balık omega-3'ü ile ceviz farkı.
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

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [40, 90, 1840], [110, 130, 1700])} />
      <Baslik t={t} bas={K(1, "don't")} metin="DON'T COUNT ON WALNUTS" x={960} y={130} boyut={84} renk={RENK.mercan} hiza="orta" bitis={K(1, "fish") + 0.8} />
      <Etiket t={t} bas={K(1, "fish")} capa={[700, 520]} konum={[560, 270]} metin="FISH" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "walnuts")} capa={[1390, 540]} konum={[1500, 270]} metin="WALNUTS" renk={RENK.altin} />
      <Hp t={t} bas={K(2, "fish")} x={560} y={130} metin="FISH OR FISH OIL" renk={RENK.altin} />
      <Hp t={t} bas={K(2, "walnuts")} x={1260} y={130} metin="A DIFFERENT OMEGA-3" renk={RENK.yesil} />
    </>
  );
};

export default S51;
