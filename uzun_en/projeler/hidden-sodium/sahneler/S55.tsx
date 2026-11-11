// Sahne 55 — büyük dört: yiyecek etiketleri, sonra üst şerit adımları
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30, bitis = 1e9,
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
  const tFour = K(1, "big four");
  const tEkmek = K(1, "bread,"), tDeli = K(1, "deli meat"), tCorba = K(1, "soup"), tPizza = K(1, "pizza");
  const tLow = K(2, "lower sodium"), tPort = K(2, "smaller portions"), tTop = K(2, "top sources");
  const E = tLow - 0.15; // etiketler bu anda çekilir
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tEkmek} bitis={E} capa={[1000, 400]} konum={[1000, 150]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={tDeli} bitis={E} capa={[350, 640]} konum={[300, 430]} metin="DELI MEAT" renk={RENK.mercan} />
        <Etiket t={t} bas={tCorba} bitis={E} capa={[593, 330]} konum={[330, 190]} metin="SOUP" renk={RENK.yesil} />
        <Etiket t={t} bas={tPizza} bitis={E} capa={[1650, 640]} konum={[1700, 450]} metin="PIZZA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tFour} bitis={E} metin="THE BIG FOUR" x={1860} y={150} boyut={80} hiza="sag" renk={RENK.koyuYesil} />
      <Pil t={t} bas={tLow} x={340} y={85} metin="LOWER SODIUM" renk={RENK.yesil} />
      <Pil t={t} bas={tPort} x={860} y={85} metin="SMALLER PORTIONS" renk={RENK.yesil} />
      <Pil t={t} bas={tTop} x={1400} y={85} metin="TOP SOURCES" renk={RENK.mercan} />
    </>
  );
};

export default S55;
