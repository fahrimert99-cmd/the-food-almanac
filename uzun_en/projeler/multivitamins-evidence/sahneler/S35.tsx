// Sahne 35 — BÖLÜM 4 kartı: B12 ve D vitamini.
import React from "react";
import { BolumKarti, Hap, SP, kelimeZamani, pop } from "../kutuphane";

const Chip: React.FC<{ t: number; bas: number; x: number; metin: string; renk: string }> = ({ t, bas, x, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: 830, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/36", kirp: [260, 110, 1460, 1010] },
        { gorsel: "tam/37", kirp: [330, 40, 1530, 940] },
        { gorsel: "tam/38", kirp: [100, 100, 1100, 850] },
      ]} />
      <Chip t={t} bas={K(1, "B12") - 0.1} x={140} metin="VITAMIN B12" renk="#CC5842" />
      <Chip t={t} bas={K(1, "D.") - 0.1} x={520} metin="VITAMIN D" renk="#B8862B" />
    </>
  );
};

export default S35;
