// Sahne 8 — araştırmanın üç grubu: üç nesne, üç etiket.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(0, "and laboratory") - 0.2;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780]);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={p}>
        <Etiket t={t} bas={K(0, "large trial")} capa={[520, 560]} konum={[520, 150]} metin="1 · LARGE TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "short trials")} capa={[920, 545]} konum={[940, 180]} metin="2 · BLOOD PRESSURE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "laboratory tests")} capa={[1330, 560]} konum={[1520, 260]} metin="3 · LAB TESTS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "products")} capa={[1330, 770]} konum={[1640, 500]} metin="PRODUCTS WE BUY" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "three groups") - 0.1} bitis={K(0, "large trial") + 0.3} metin="THREE GROUPS OF RESEARCH" x={110} y={110} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S08;
