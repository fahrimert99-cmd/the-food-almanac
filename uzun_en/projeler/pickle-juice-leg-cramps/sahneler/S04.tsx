// Sahne 4 — kanal tanıtımı + "gece krampı nedir" girişi
import React from "react";
import { Baslik, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const tSwap = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 36, 1780])} />
      <Baslik t={t} bas={0.1} bitis={tSwap} metin="THIS IS" x={70} y={130} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "The")} bitis={tSwap} metin={MARKA.ad.toUpperCase()} x={66} y={235} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={c[1].bas} metin="LET'S START" x={70} y={130} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(1, "what")} metin="WHAT IS A" x={66} y={215} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "night")} metin="NIGHT CRAMP?" x={66} y={320} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S04;
