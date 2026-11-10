// Sahne 22 — Buzdolabı: alışkanlık; kalite tarihi güvenlik kuralı gibi kullanılıyor; tek bir sayı.
import React from "react";
import { Baslik, Hap, IkonYol, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHabit = K(0, "habit"), tQual = K(1, "describe quality"), tSafe = K(1, "safety rule"), tNum = K(2, "one number");
  const bitis1 = tNum - 0.3;
  const pill = (bas: number, y: number, m: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return al <= 0 ? null : (
      <div style={{ position: "absolute", left: 1660, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al * sol(t, bitis1) }}>
        <Hap metin={m} renk={renk} boyut={32} />
      </div>
    );
  };
  const aOk = eout(ilerle(t, tSafe - 0.2, 0.4)) * sol(t, bitis1);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])} />
      <Baslik t={t} bas={tHabit - 0.2} bitis={bitis1} metin="THE HABIT" x={1860} y={210} boyut={96} hiza="sag" renk={RENK.lacivert} />
      {pill(tQual, 380, "QUALITY DATE", RENK.altin)}
      <div style={{ position: "absolute", left: 1660, top: 430, transform: `translateX(-50%) rotate(90deg)`, opacity: aOk }}>
        <IkonYol ad="ok" boyut={56} renk={RENK.lacivert} />
      </div>
      {pill(tSafe, 540, "SAFETY RULE", RENK.mercan)}
      <Baslik t={t} bas={tNum} metin="ONE NUMBER" x={1860} y={210} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tNum + 0.5} metin="TO KEEP NEAR YOUR FRIDGE" x={1860} y={270} hiza="sag" boyut={26} agirlik={800} />
    </>
  );
};

export default S22;
