// Sahne 29 — bacak kasları glukozu çeker: yürüyüş görseli + glukoz kesiti
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "may still work");
  const tT2 = K(0, "type 2");
  const tKas = K(1, "leg muscles");
  const tGlu = K(1, "glucose");
  const tMeal = K(1, "right when");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={K(0, "walking")} bitis={tKas - 0.2} capa={[640, 780]} konum={[900, 860]} metin="WALKING" renk={RENK.yesil} />
        <Etiket t={t} bas={tKas} capa={[650, 420]} konum={[950, 520]} metin="LEG MUSCLES" renk={RENK.yesil} />
        <Etiket t={t} bas={tGlu} capa={[1470, 610]} konum={[1470, 700]} metin="GLUCOSE" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle: başlık + not (boş kâğıt alanı) */}
      <BaslikBlok t={t} bas={tBaslik} bitis={tKas - 0.3} satirlar={["MAY STILL", "WORK"]} x={820} y={190} boyut={84} />
      <Not t={t} bas={tT2} bitis={tKas - 0.3} metin="Insulin working less well, as in type 2 diabetes" x={820} y={390} genislik={340} boyut={30} />
      {/* glukoz kasa akar */}
      <Parcaciklar t={t} bas={tKas + 0.6} kaynak={[1250, 560]} hedef={[700, 440]} adet={26} tohum="s29" />
      <Ikon t={t} bas={tMeal} bitis={tMeal + 99} ad="saat" x={870} y={250} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={tMeal + 0.1} metin="RIGHT WHEN THE MEAL IS ARRIVING" x={940} y={200} genislik={240} boyut={32} agirlik={800} />
    </>
  );
};

export default S29;
