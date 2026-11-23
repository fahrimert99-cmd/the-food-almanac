// Sahne 37 — içindekiler listesinde "ginger" kelimesini ara; gazoz zencefil dozu değil.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyri = K(1, "but");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* 1. cümle: etiketi büyüteçle oku */}
        <Etiket t={t} bas={K(0, "ingredient")} bitis={tAyri} capa={[790, 640]} konum={[1500, 150]} metin="INGREDIENT LIST" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "ginger")} bitis={tAyri} capa={[1180, 640]} konum={[1500, 300]} metin="THE WORD “GINGER”" renk={RENK.altin} />
        {/* 2. cümle */}
        <Etiket t={t} bas={K(1, "fluids")} capa={[780, 380]} konum={[1500, 150]} metin="SIPPING FLUIDS HELPS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "ale")} capa={[790, 700]} konum={[1500, 330]} metin="NOT A GINGER DOSE" renk={RENK.mercan} />
      </Kamera>
    </>
  );
};

export default S37;
