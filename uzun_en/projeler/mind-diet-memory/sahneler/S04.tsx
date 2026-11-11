// Sahne 4 — bölüm açılışı: raf üzerinde MIND yiyecekleri, sağ üstte marka ve başlık.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMind = K(1, "MIND");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tMind} capa={[547, 467]} konum={[260, 400]} metin="OLIVE OIL" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tMind + 0.25} capa={[747, 440]} konum={[830, 235]} metin="WALNUTS" renk={RENK.altin} />
        <Etiket t={t} bas={tMind + 0.5} capa={[1053, 520]} konum={[1090, 335]} metin="BLUEBERRIES" renk={RENK.lacivert} />
        <Etiket t={t} bas={tMind + 0.75} capa={[1450, 600]} konum={[1640, 350]} metin="KALE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.4} bitis={K(1, "Let's") - 0.1} metin={MARKA.filigran} x={1860} y={175} boyut={52} font="inter" aralik={6}
        hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Let's")} metin="LET'S START WITH" x={1860} y={125} boyut={30} font="inter" aralik={6} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={tMind} metin="THE MIND DIET" x={1860} y={205} boyut={96} hiza="sag" renk={RENK.lacivert} />
    </>
  );
};

export default S04;
