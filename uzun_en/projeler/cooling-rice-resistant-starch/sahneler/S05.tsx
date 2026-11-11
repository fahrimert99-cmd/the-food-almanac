// Sahne 5 — nişasta = glukoz zinciri. Solda yiyecek etiketleri, sağda başlık ve akış listesi.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitisBaslik = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        <Etiket t={t} bas={K(0, "Rice")} bitis={c[1].bas - 0.1} capa={[820, 640]} konum={[1130, 560]} metin="RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "potatoes")} bitis={c[1].bas - 0.1} capa={[385, 545]} konum={[190, 400]} metin="POTATOES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "bread")} bitis={c[1].bas - 0.1} capa={[1000, 800]} konum={[1250, 760]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "long chains")} bitis={c[2].bas - 0.1} capa={[790, 230]} konum={[1090, 200]} metin="LONG CHAINS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "glucose")} capa={[570, 465]} konum={[1010, 420]} metin="SINGLE GLUCOSE" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(2, "passes")} kaynak={[570, 480]} hedef={[1300, 640]} adet={14} aralik={0.14} kavis={-120} tohum="s05" />
      </Kamera>
      <Baslik t={t} bas={K(0, "starch") - 0.2} bitis={bitisBaslik} metin="STARCH" x={1860} y={330} boyut={112} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "glucose")} bitis={bitisBaslik} metin="→ GLUCOSE" x={1860} y={450} boyut={112} hiza="sag" renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={1300} y={400} aralik={100} boyut={34} genislik={580} ogeler={[
        { bas: K(2, "snip") - 0.1, metin: "ENZYMES SNIP CHAINS" },
        { bas: K(2, "glucose"), metin: "GLUCOSE → BLOOD", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S05;
