// Sahne 52 — öğle/akşam: avuç içi porsiyon, mercimek ve eşleştirme.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pop: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPlant = K(1, "plant-based");
  const tPair = K(1, "pair");
  const tPalm = K(0, "size");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [30, 15, 1860], [100, 60, 1720])}>
        <Etiket t={t} bas={tPalm} bitis={tPlant - 0.2} capa={[700, 520]} konum={[640, 250]} metin="PALM-SIZED PORTION" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cup")} capa={[1280, 300]} konum={[1500, 170]} metin="COOKED LENTILS ≈ 18 G" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lunch")} bitis={tPlant - 0.2} metin="LUNCH + DINNER" x={80} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPlant} bitis={tPair - 0.2} metin="PLANT-BASED MEALS" x={80} y={110} boyut={84} renk={RENK.koyuYesil} />
      {/* eşleştirme: yoğurt, peynir, yumurta söylenirken */}
      <Pop t={t} bas={tPair} x={80} y={110} metin="PAIR WITH" renk={RENK.altin} boyut={32} />
      <Pop t={t} bas={K(1, "yogurt,")} x={80} y={190} metin="+ YOGURT" renk={RENK.yesil} />
      <Pop t={t} bas={K(1, "cheese")} x={340} y={190} metin="+ CHEESE" renk={RENK.yesil} />
      <Pop t={t} bas={K(1, "eggs.")} x={590} y={190} metin="+ EGGS" renk={RENK.yesil} />
    </>
  );
};

export default S52;
