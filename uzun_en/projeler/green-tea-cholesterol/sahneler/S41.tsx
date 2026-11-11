// Sahne 41 — takviye alınıyorsa: yemekle birlikte, doktora söyle
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, IkonYol, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const AnimHap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t < bitis ? 1 : 0);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={28} /></div>;
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSup = K(0, "supplement"), tEmpty = K(1, "empty stomach"), tRaise = K(1, "raises"), tFood = K(1, "so take"), tDoc = K(2, "tell your doctor"), tLiv = K(2, "liver condition");
  const tOff = tFood - 0.15;
  const [sa, aa] = pop(t, tRaise - 0.1, 0.5);
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tSup} bitis={tEmpty} capa={[1160, 620]} konum={[1480, 760]} metin="SUPPLEMENT CAPSULES" renk={RENK.mercan} />
        <Etiket t={t} bas={tFood} bitis={tDoc} capa={[700, 680]} konum={[1100, 850]} metin="TAKE WITH FOOD" renk={RENK.yesil} />
      </Kamera>
      <AnimHap t={t} bas={tEmpty} bitis={tOff} metin="EMPTY STOMACH" renk={RENK.mercan} x={1610} y={300} />
      {aa > 0 && t < tOff && (
        <div style={{ position: "absolute", left: 1610 - 24, top: 350, opacity: aa, transform: `scale(${sa})`, display: "flex" }}>
          <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={48} renk={RENK.lacivert} /></span>
        </div>
      )}
      <AnimHap t={t} bas={tRaise} bitis={tOff} metin="MORE EGCG IN BLOOD" renk={RENK.altin} x={1610} y={450} />
      <BaslikBlok t={t} bas={tFood} satirlar={["WITH FOOD,", "NOT FASTING"]} x={1860} y={230} boyut={84} hiza="sag" />
      <Ikon t={t} bas={tDoc} ad="soru" x={1420} y={640} zemin={RENK.lacivert} />
      <AnimHap t={t} bas={tDoc} metin="TELL YOUR DOCTOR" renk={RENK.lacivert} x={1670} y={640} />
      <AnimHap t={t} bas={tLiv} metin="ANY LIVER CONDITION" renk={RENK.mercan} x={1640} y={740} />
    </>
  );
};

export default S41;
