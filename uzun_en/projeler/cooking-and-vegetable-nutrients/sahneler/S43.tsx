// Sahne 43 — ıspanak kasesi: takviye çalışması, ıspanak değil
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <Baslik t={t} bas={K(0, "supplement")} bitis={3.6} metin="A SUPPLEMENT TRIAL" x={70} y={110} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "not")} bitis={3.6} metin="NOT A SPINACH TRIAL" x={70} y={190} boyut={66} renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "spinach.")} bitis={3.6} capa={[1070, 560]} konum={[1560, 330]} metin="SPINACH" renk={RENK.yesil} />
      <Baslik t={t} bas={K(1, "can't")} bitis={8.7} metin="NO PROMISE" x={1860} y={170} boyut={92} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(1, "cooked")} bitis={8.7} metin="COOKED OR RAW, FOR YOUR EYES" x={1860} y={250} hiza="sag" boyut={30} agirlik={800} />
      <Baslik t={t} bas={K(2, "nourishing")} metin="STILL NOURISHING" x={1800} y={170} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <Ikon t={t} bas={K(2, "still")} ad="onay" x={1170} y={160} boyut={84} />
    </>
  );
};
export default S43;
