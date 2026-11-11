// Sahne 50 — alışkanlık, hızlı çözüm değil.
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

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(2, "two");
  const tHab = K(3, "steady");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 70, 1700])} />
      <BaslikBlok t={t} bas={K(1, "long")} satirlar={["THINK", "LONG TERM"]} x={1180} y={220} boyut={110}
        renkler={[RENK.lacivert, RENK.koyuYesil]} bitis={tIki - 0.2} />
      <VurguRozet t={t} bas={tIki} vurgu="2 YEARS" not="of daily walnuts" x={1500} y={300} genislik={440} bitis={tHab - 0.3} />
      <Etiket t={t} bas={K(2, "daily")} capa={[560, 790]} konum={[1050, 900]} metin="DAILY WALNUTS" renk={RENK.altin} bitis={tHab - 0.3} />
      <BaslikBlok t={t} bas={tHab} satirlar={["A HABIT,", "NOT A QUICK FIX"]} x={1180} y={300} boyut={96}
        renkler={[RENK.koyuYesil, RENK.mercan]} />
    </>
  );
};

export default S50;
