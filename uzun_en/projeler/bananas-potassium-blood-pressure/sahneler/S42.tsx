// Sahne 42 — BÖLÜM 5 kartı: güvenlik.
import React from "react";
import { BolumKarti, Hap, Ikon, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = K(1, "careful");
  const [sc, al] = pop(t, b, 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/43", kirp: [60, 230, 860, 830] },
        { gorsel: "tam/45", kirp: [120, 260, 1000, 920] },
        { gorsel: "tam/44", kirp: [120, 190, 880, 760] },
      ]} />
      <div style={{ position: "absolute", left: 140, top: 800, display: "flex", alignItems: "center", gap: 16, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Ikon t={t} bas={b} ad="uyari" x={46} y={30} boyut={72} zemin={RENK.altin} />
        <div style={{ marginLeft: 70 }}><Hap metin="BE CAREFUL" renk={RENK.altin} boyut={32} /></div>
      </div>
    </>
  );
};

export default S42;
