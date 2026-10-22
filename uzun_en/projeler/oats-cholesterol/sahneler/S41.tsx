// Sahne 41 — sade yulaf ile şekerle kaplı yulafın karşılaştırması.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWatch = K(1, "sugar"), tFiber = K(0, "fiber");
  const [sc, al] = pop(t, tFiber, 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])} />
      <Etiket t={t} bas={K(0, "buried")} bitis={tWatch - 0.2} capa={[1380, 430]} konum={[1500, 190]} metin="BURIED IN SWEETENER" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "plain")} bitis={tWatch - 0.2} capa={[540, 420]} konum={[520, 190]} metin="PLAIN OATS" renk={RENK.yesil} />
      {al > 0 && t < tWatch - 0.2 && (
        <div style={{ position: "absolute", left: 960, top: 540, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="SAME FIBER" renk={RENK.altin} boyut={30} />
        </div>
      )}
      <Baslik t={t} bas={tWatch} metin="WATCH THE SUGAR" x={960} y={115} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={K(1, "oats")} capa={[1330, 330]} konum={[1560, 250]} metin="SUGAR" renk={RENK.mercan} />
    </>
  );
};

export default S41;
