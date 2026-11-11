// Sahne 52 — Özet: bal çoğunlukla şeker; GI 61 vs 65; 1 yemek kaşığı 64 kcal, 17 g şeker.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHoney = K(0, "honey"), tMostly = K(0, "mostly"), t61 = K(1, "61"), t65 = K(1, "65"), t64 = K(1, "64"), t17 = K(1, "17");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tHoney} bitis={t61 - 0.1} capa={[1400, 560]} konum={[1700, 480]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={t61} capa={[1400, 560]} konum={[1700, 480]} metin="GI ≈ 61" renk={RENK.altin} />
        <Etiket t={t} bas={t65} capa={[560, 700]} konum={[480, 540]} metin="TABLE SUGAR · GI 65" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={tMostly} metin="MOSTLY SUGAR" x={100} y={140} boyut={104} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t64} vurgu="64" not="CALORIES / TBSP" x={290} y={250} genislik={360} renk={RENK.altin} />
      <VurguRozet t={t} bas={t17} vurgu="17 G" not="SUGAR / TBSP" x={700} y={250} genislik={360} renk={RENK.altin} />
    </>
  );
};

export default S52;
