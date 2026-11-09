// Sahne 30 — ilginç bir ipucu, kanıt değil.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "brine")} capa={[830, 880]} konum={[1700, 760]} metin="PICKLE BRINE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "clue")} metin="A CLUE," x={60} y={190} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "not")} metin="NOT" x={60} y={285} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "proof")} metin="PROOF" x={60} y={380} boyut={84} renk={RENK.mercan} />
      <Ikon t={t} bas={K(0, "three")} ad="saat" x={1700} y={300} zemin={RENK.lacivert} />
      <Not t={t} bas={K(0, "three") + 0.15} metin="AT 3 A.M.?" x={1700} y={370} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S30;
