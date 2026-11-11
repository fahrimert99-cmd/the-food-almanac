// Sahne 3 — Önce yemek, sonra hap: yoğurt, konserve, şişe.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoktor = K(0, "when doctors");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 100, 1920], [90, 150, 1740])}>
        <Etiket t={t} bas={K(0, "food")} capa={[400, 470]} konum={[330, 300]} metin="YOGURT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "before")} capa={[1000, 780]} konum={[1000, 900]} metin="CANNED SALMON" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "pills")} capa={[1453, 760]} konum={[1453, 900]} metin="PILLS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "you'll know")} bitis={tDoktor - 0.1} metin="BY THE END, YOU'LL KNOW" x={960} y={100} boyut={34} hiza="orta"
        font="inter" agirlik={800} aralik={5} renk={RENK.altin} />
      <Baslik t={t} bas={tDoktor} metin="WHEN DOCTORS PRESCRIBE" x={960} y={100} boyut={78} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
