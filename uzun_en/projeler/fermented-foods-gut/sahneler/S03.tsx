// Sahne 3 — kaşık ve kase; "dikkatli cevap" sağ altta.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas + 0.5;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "yogurt")} bitis={cikis} capa={[950, 640]} konum={[1500, 720]} metin="YOGURT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kefir")} bitis={cikis} capa={[330, 570]} konum={[330, 260]} metin="KEFIR" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(1, "honest")} metin="THE HONEST ANSWER" x={1860} y={765} boyut={30} font="inter" aralik={5} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "more careful")} metin="MORE CAREFUL" x={1860} y={840} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "than the")} metin="THAN THE HEADLINES" x={1860} y={915} boyut={56} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S03;
