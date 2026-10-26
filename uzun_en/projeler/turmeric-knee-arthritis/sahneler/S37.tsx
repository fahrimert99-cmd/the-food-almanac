// Sahne 37 — mutfak zerdeçalı: çalışmalar köri kaşığını test etmedi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])}>
        <Etiket t={t} bas={K(0, "kitchen turmeric")} bitis={c[1].bas - 0.1} capa={[1000, 790]} konum={[1500, 860]} metin="KITCHEN TURMERIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Cooking")} bitis={c[2].bas - 0.1} capa={[520, 490]} konum={[1130, 330]} metin="COOKING WITH IT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "pinch of spice")} capa={[1000, 770]} konum={[1500, 640]} metin="A PINCH OF SPICE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(2, "in your")} metin="IN YOUR" x={1860} y={200} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "curry")} metin="CURRY?" x={1860} y={325} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "curry") + 0.35} metin={s.meta.baslik?.not?.toUpperCase() ?? ""} x={1860} y={400} hiza="sag" boyut={28} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S37;
