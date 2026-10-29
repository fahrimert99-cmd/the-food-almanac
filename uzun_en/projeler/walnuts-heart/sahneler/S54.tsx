// Sahne 54 — özet: LDL düşüşü.
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

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMod = K(1, "modest");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1780])} />
      <Baslik t={t} bas={K(0, "pooled")} metin="POOLED TRIALS" x={70} y={110} boyut={56} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "two-year")} metin="WAHA, 2 YEARS" x={70} y={180} boyut={56} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "daily")} capa={[1000, 300]} konum={[1180, 120]} metin="DAILY WALNUTS" renk={RENK.altin} bitis={K(0, "4")} />
      <VurguRozet t={t} bas={K(0, "4")} vurgu="4–6" not="mg/dL lower LDL" x={1560} y={130} genislik={380} />
      <Hp t={t} bas={K(0, "without")} x={1620} y={410} metin="NO WEIGHT GAIN" renk={RENK.yesil} boyut={27} />
      <Hp t={t} bas={tMod} x={1620} y={510} metin="MODEST, BUT REAL" renk={RENK.altin} boyut={27} />
    </>
  );
};

export default S54;
