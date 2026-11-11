// Sahne 50 — güvenlik notu: doktor masası ve boş koltuk.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "safety"), tNever = K(1, "never"), tTalk = K(2, "talk with"), tHelp = K(3, "help");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [90, 90, 1740])} />
      <BaslikBlok t={t} bas={tBas} satirlar={["SAFETY", "FIRST"]} x={960} y={190} boyut={170} hiza="orta" adim={0.25} />
      <Ikon t={tNever > 0 ? t : 0} bas={tNever} ad="carpi" x={600} y={560} boyut={84} zemin={RENK.mercan} bitis={tTalk - 0.2} />
      <Not t={t} bas={tNever + 0.15} metin="Never stop or change a heart medicine" x={670} y={532} boyut={46} agirlik={800}
        bitis={tTalk - 0.2} />
      <Etiket t={t} bas={tTalk} capa={[210, 640]} konum={[560, 420]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} boyut={32} />
      <Etiket t={t} bas={tHelp} capa={[1580, 690]} konum={[1440, 440]} metin="HELP IS AVAILABLE" renk={RENK.yesil} boyut={32} />
    </>
  );
};

export default S50;
