// Sahne 3 — raf: suyu, kapsül, ilaç uyarısı
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "juice")} capa={[560, 420]} konum={[230, 380]} metin="JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "capsules")} capa={[1113, 440]} konum={[1580, 300]} metin="CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "medicine")} capa={[1150, 560]} konum={[1560, 470]} metin="MEDICINE WARNING" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "who")} metin="WHO IT MAY HELP" x={960} y={80} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S03;
