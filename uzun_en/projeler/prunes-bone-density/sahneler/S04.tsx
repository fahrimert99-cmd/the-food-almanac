// Sahne 4 — Kanal tanıtımı + taze erik / kuru erik.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "what")} bitis={s.sure} capa={[545, 450]} konum={[300, 230]} metin="FRESH PLUM" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "prune")} bitis={K(1, "handful") - 0.1} capa={[1450, 640]} konum={[1700, 420]} metin="DRIED PLUM" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "handful")} capa={[1560, 670]} konum={[1640, 860]} metin="A HANDFUL" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.0} bitis={s.cumleler[1].bas - 0.1} metin={MARKA.ad.toUpperCase()} x={70} y={150} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
