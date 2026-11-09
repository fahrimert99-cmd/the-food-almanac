// Sahne 36 — BÖLÜM 5 kartı: tuzu azaltmak işe yarıyor mu? (iki çalışmadan görseller)
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "Two trials"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/37", kirp: [240, 150, 1440, 1050] },
        { gorsel: "tam/38", kirp: [90, 60, 1230, 915] },
        { gorsel: "tam/44", kirp: [300, 120, 1500, 1020] },
      ]} />
      {/* altyazının altında tek küçük senkron öğe */}
      <div style={{ position: "absolute", left: 140, top: 790, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="2 TRIALS" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S36;
