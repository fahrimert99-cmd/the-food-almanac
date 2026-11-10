// Sahne 7 — laboratuvar masası: hipotez ve randomize çalışmalar
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "fewer");
  const t2 = K(1, "randomized");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "trials")} capa={[607, 580]} konum={[300, 400]} metin="CRANBERRY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "trials") + 0.3} capa={[1293, 580]} konum={[1640, 520]} metin="CLEAR DRINK" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "hypothesis")} bitis={t1 - 0.2} metin="ONLY A HYPOTHESIS" x={60} y={160} boyut={90} renk={RENK.mercan} />
      <Baslik t={t} bas={t1} bitis={t2 - 0.2} metin="FEWER INFECTIONS?" x={60} y={160} boyut={90} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={t2} satirlar={["RANDOMIZED", "TRIALS"]} x={1860} y={190} boyut={84} hiza="sag" />
    </>
  );
};

export default S07;
