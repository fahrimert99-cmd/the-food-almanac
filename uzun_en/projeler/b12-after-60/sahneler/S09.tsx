// Sahne 9 — sorun yemekte değil, emilimde: balık, süt, yumurta ve mide.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAz = K(0, "eating too little"), tEmilim = K(1, "absorbing"), tMide = K(2, "stomach"), tGel = K(2, "comes in");
  const tSonra = K(3, "Later");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        <Etiket t={t} bas={tAz} bitis={3.3} capa={[640, 760]} konum={[420, 590]} metin="FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tMide} capa={[1670, 400]} konum={[1330, 560]} metin="STOMACH" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={tGel} kaynak={[1000, 700]} hedef={[1670, 400]} adet={26} aralik={0.12} omur={1.6} tohum="b12" />
      </Kamera>
      {/* 1-2. cümle: sorun ne değil / ne */}
      <Baslik t={t} bas={tAz - 0.2} bitis={3.3} metin="NOT EATING" x={140} y={140} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tAz} bitis={3.3} metin="TOO LITTLE" x={140} y={250} boyut={100} renk={RENK.mercan} />
      <Baslik t={t} bas={tEmilim} bitis={6.4} metin="ABSORBING IT" x={140} y={200} boyut={116} renk={RENK.koyuYesil} />
      {/* son cümle: haber */}
      <Not t={t} bas={tSonra} metin="LATER IN THE VIDEO" x={140} y={100} boyut={30} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(3, "pill")} metin="A PILL CAN WORK" x={140} y={190} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "even when")} metin="EVEN WHEN FOOD DOESN'T" x={140} y={282} boyut={60} renk={RENK.koyuYesil} />
    </>
  );
};

export default S09;
