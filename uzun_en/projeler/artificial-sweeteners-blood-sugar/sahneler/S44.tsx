// Sahne 44 — ilişki, nedensellik değil: terazi. Sağda kinetik başlık, teraziye iki etiket.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        <Etiket t={t} bas={K(1, "sugar-free")} capa={[300, 560]} konum={[330, 130]} metin="SUGAR-FREE CHOICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "events")} capa={[1110, 590]} konum={[1240, 830]} metin="EVENTS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "association")} metin="LINK," x={1840} y={260} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "metabolically")} metin="METABOLICALLY UNWELL PEOPLE MAY CHOOSE DIFFERENTLY" x={1840} y={430} hiza="sag" genislik={640} boyut={34} agirlik={700} />
      <Baslik t={t} bas={K(1, "cannot")} metin="NOT CAUSE" x={1840} y={640} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S44;
