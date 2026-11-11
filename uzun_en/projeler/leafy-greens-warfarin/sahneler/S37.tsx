// Sahne 37 — Sabit doz (solda) ile INR hedefine göre ayarlanan doz (sağda): iki yarım kare.
import React from "react";
import { Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, Baslik } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFix = K(1, "fixed doses"), tWar = K(1, "warfarin doses"), tInr = K(1, "INR target");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [60, 130, 1800])}>
        <Etiket t={t} bas={tFix} bitis={tWar - 0.2} capa={[250, 560]} konum={[330, 800]} metin="FIXED DOSES" renk={RENK.yesil} />
        <Etiket t={t} bas={tWar} capa={[1170, 620]} konum={[1090, 890]} metin="WARFARIN" renk={RENK.altin} />
        <Etiket t={t} bas={tInr} capa={[1560, 640]} konum={[1560, 880]} metin="ADJUSTED TO INR TARGET" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "big trials")} bitis={K(1, "These") - 0.1} metin="THE BIG TRIALS" x={960} y={160} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(1, "These")} metin="FIXED VS ADJUSTED" x={960} y={160} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S37;
