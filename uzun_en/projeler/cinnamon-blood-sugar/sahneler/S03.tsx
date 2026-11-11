// Sahne 3 — iki tarçın demeti ve terazi; üstte iki soru.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "buy")} capa={[600, 540]} konum={[470, 250]} metin="WHICH ONE?" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "much")} capa={[1560, 600]} konum={[1720, 400]} metin="HOW MUCH?" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "which cinnamon")} metin="WHICH CINNAMON" x={60} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "how much")} metin="HOW MUCH IS TOO MUCH?" x={60} y={200} boyut={56} renk={RENK.mercan} />
    </>
  );
};

export default S03;
