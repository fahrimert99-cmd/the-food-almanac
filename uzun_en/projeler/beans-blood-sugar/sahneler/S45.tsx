// Sahne 45 — Adım 4: pirinç/makarna/patatesin bir kısmını baklagille değiştir
import React from "react";
import { ANTON, AdimAkisi, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tSwap = K(1, "Swap");
  const tRep = K(2, "Replace");
  const tKeep = K(3, "keep");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        {/* 2. cümle: pirinç → fasulye */}
        <Etiket t={t} bas={K(2, "rice,")} bitis={7.0} capa={[800, 540]} konum={[640, 880]} metin="RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "beans")} bitis={7.0} capa={[1140, 570]} konum={[1290, 880]} metin="BEANS" renk={RENK.yesil} />
        {/* 3. cümle: tüm yeme düzeni */}
        <Etiket t={t} bas={K(3, "whole")} capa={[330, 580]} konum={[330, 900]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "eating")} capa={[1590, 520]} konum={[1590, 900]} metin="CHICKEN" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 30, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        transform: `scale(${sc})`, opacity: al }}>4</div>
      {/* üst şerit: başlık → değişim akışı → karbonhidrat notu */}
      <Baslik t={t} bas={tSwap} bitis={tRep - 0.1} metin="SWAP, DON'T PILE ON" x={190} y={78} boyut={68} renk={RENK.koyuYesil} />
      <div style={{ opacity: sol(t, tKeep - 0.2) }}>
        <AdimAkisi t={t} x={960} y={78} boyut={28} numarali={false} adimlar={[
          { bas: tRep, metin: "PART OF THE RICE", renk: RENK.altin },
          { bas: K(2, "beans"), metin: "BEANS OR LENTILS", renk: RENK.yesil },
        ]} />
      </div>
      <Baslik t={t} bas={tKeep} metin="KEEP TOTAL CARBS IN CHECK" x={960} y={78} boyut={62} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S45;
