// Sahne 5 — aynı bitki, katekinler: dal ve fincanlar etiketlenir, sağ üstte başlık.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyni = K(0, "same plant");
  const tFerm = K(1, "not fermented");
  const tKat = K(1, "catechins");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1780])}>
        <Etiket t={t} bas={K(0, "Green")} bitis={tAyni - 0.2} capa={[560, 740]} konum={[1010, 490]} metin="GREEN TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "black")} bitis={tAyni - 0.2} capa={[1500, 740]} konum={[1500, 500]} metin="BLACK TEA" renk={RENK.mercan} />
        <Etiket t={t} bas={tAyni} bitis={tFerm - 0.2} capa={[610, 400]} konum={[1300, 300]} metin="SAME PLANT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tFerm} bitis={tKat - 0.3} capa={[560, 740]} konum={[1100, 480]} metin="NOT FERMENTED" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tKat - 0.1} metin="CATECHINS" x={1860} y={210} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tKat + 0.3} metin={s.meta.baslik!.not!} x={1860} y={300} hiza="sag" genislik={820} />
    </>
  );
};

export default S05;
