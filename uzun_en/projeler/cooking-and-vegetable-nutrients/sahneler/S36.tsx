// Sahne 36 — BÖLÜM 3 kartı: Spinach, eyes and limits.
import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap rozeti: x = sol kenar (sag ise sağ kenar)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number; sag?: boolean }> = ({
  t, bas, x, y, metin, renk, boyut = 28, bitis = 1e9, sag = false,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", top: y, ...(sag ? { right: 1920 - x } : { left: x }), opacity: a, transform: `scale(${sc})`, transformOrigin: sag ? "100% 50%" : "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

import { BolumKarti } from "../kutuphane";
const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/37", kirp: [400, 130, 1400, 880] },
        { gorsel: "tam/38", kirp: [40, 150, 1040, 900] },
        { gorsel: "tam/40", kirp: [420, 120, 1420, 870] },
      ]} />
      <Pil t={t} bas={K(1, "spinach")} x={140} y={800} metin="SPINACH CLAIM" renk={RENK.yesil} boyut={30} />
    </>
  );
};
export default S36;
