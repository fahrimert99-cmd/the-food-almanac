// Sahne 43 — güvenlik: ilaç.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [60, 100, 1680])} />
      <BaslikBlok t={t} bas={K(0, "medicine")} satirlar={b.satirlar} x={1860} y={190} boyut={104} hiza="sag" bitis={8.4} />
      <Etiket t={t} bas={K(1, "medicine,")} bitis={8.3} capa={[320, 520]} konum={[330, 300]} metin="BP MEDICINE" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(1, "beet")} bitis={8.3} capa={[700, 420]} konum={[1010, 250]} metin="BEET JUICE" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "replacement")} bitis={8.4} x={1860} y={470} hiza="sag" metin="NOT A REPLACEMENT" boyut={44} agirlik={800} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "nothing")} bitis={8.4} x={1860} y={545} hiza="sag" metin="NO CHANGE SUGGESTED" boyut={40} agirlik={800} />
      <Etiket t={t} bas={K(2, "doctor,")} capa={[880, 600]} konum={[1100, 790]} metin="TELL YOUR DOCTOR" renk={RENK.yesil} />
      <Ikon t={t} bas={K(2, "dizzy")} ad="uyari" x={1650} y={330} zemin={RENK.altin} boyut={110} />
      <Not t={t} bas={K(2, "dizzy")} x={1650} y={410} hiza="orta" metin="Dizzy or lightheaded?" boyut={42} agirlik={800} />
    </>
  );
};

export default S43;
