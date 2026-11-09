// Sahne 35 — "No salt added" ≠ sodyumsuz; porsiyon boyutu: iki porsiyon = sayılar iki katı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(0, "No salt added"), tStill = K(1, "still contain"), tServ = K(2, "serving size"), tTwo = K(3, "two servings"), tDbl = K(3, "double");
  const tEnd = K(2, "watch") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [200, 40, 1560], [290, 70, 1380])}>
        <Etiket t={t} bas={tServ} capa={[1247, 640]} konum={[1400, 300]} metin="ONE SERVING" renk={RENK.mercan} />
        <Etiket t={t} bas={tTwo} capa={[890, 560]} konum={[600, 250]} metin="2 SERVINGS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tNo} bitis={tEnd} metin="NO SALT ADDED" x={960} y={95} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tStill} bitis={tEnd} metin="CAN STILL CONTAIN SODIUM" x={960} y={175} boyut={50} renk={RENK.mercan} hiza="orta" />
      <VurguRozet t={t} bas={tDbl} vurgu="× 2" not="DOUBLE THE NUMBERS" x={1700} y={620} genislik={360} boyut={110} renk={RENK.altin} />
    </>
  );
};
export default S35;
