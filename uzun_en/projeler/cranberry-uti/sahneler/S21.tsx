// Sahne 21 — işlem sonrası enfeksiyon: üst şerit başlık, sol not sütunu, sağda rozet.
import React from "react";
import { Baslik, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(0, "after a") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])} />
      <Baslik t={t} bas={K(0, "third")} bitis={bit} metin="THIRD GROUP" x={70} y={80} boyut={66} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "after a")} metin="AFTER A BLADDER PROCEDURE" x={70} y={80} boyut={62} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "such as")} metin="such as radiation treatment" x={70} y={130} genislik={560} boyut={32} agirlik={700} />
      <Not t={t} bas={K(1, "six")} metin="6 trials" x={70} y={430} genislik={270} boyut={34} agirlik={800} />
      <Not t={t} bas={K(1, "1,434")} metin="1,434 people" x={70} y={480} genislik={270} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "53")} vurgu="–53%" not="lower risk" x={1740} y={170} genislik={280} boyut={84} />
    </>
  );
};

export default S21;
