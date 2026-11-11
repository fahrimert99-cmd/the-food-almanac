// Sahne 2 — etki mütevazı, yanlış soğutma hasta edebilir. Sol üst/sağ üst boş kâğıt alanlarda iki başlık.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMutevazi = K(0, "modest");
  const tYanlis = K(0, "wrong");
  const tHasta = K(0, "sick");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "rice")} capa={[780, 470]} konum={[1010, 250]} metin="COOKED RICE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tMutevazi - 0.3} metin="MODEST" x={70} y={170} boyut={112} renk={RENK.lacivert} />
      <Baslik t={t} bas={tMutevazi - 0.15} metin="EFFECT" x={70} y={290} boyut={112} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tYanlis} metin="THE WRONG WAY" x={1860} y={190} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Ikon t={t} bas={tHasta} ad="uyari" x={1690} y={320} zemin={RENK.mercan} />
    </>
  );
};

export default S02;
