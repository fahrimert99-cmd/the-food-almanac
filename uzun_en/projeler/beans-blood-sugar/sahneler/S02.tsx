// Sahne 2 — karşılaştırma grubu da iyileşti; fasulye ne ekledi?
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const gec = K(1, "what") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(1, "beans")} capa={[400, 470]} konum={[330, 392]} metin="THE BEANS" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: karşılaştırma grubu */}
      <Baslik t={t} bas={K(0, "comparison")} bitis={gec} metin="COMPARISON" x={70} y={140} boyut={86} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "group")} bitis={gec} metin="GROUP" x={70} y={240} boyut={86} renk={RENK.altin} />
      <Ikon t={t} bas={K(0, "improved")} bitis={gec} ad="onay" x={430} y={225} boyut={86} />
      <Baslik t={t} bas={K(0, "improved")} bitis={gec} metin="IMPROVED TOO" x={70} y={330} boyut={50} renk={RENK.koyuYesil} />
      {/* 2. cümle: başlık */}
      <Baslik t={t} bas={K(1, "what")} metin={b.satirlar[0]} x={70} y={140} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "beans")} metin={b.satirlar[1]} x={70} y={252} boyut={96} renk={RENK.koyuYesil} />
    </>
  );
};

export default S02;
