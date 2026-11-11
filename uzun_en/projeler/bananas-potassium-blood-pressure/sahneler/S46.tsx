// Sahne 46 — su hapları ve kişiye göre doz: üstte başlıklar, altta masa nesneleri.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPill = K(0, "water pills"), tLoss = K(0, "potassium loss"), tKisi = K(1, "person to person"), tEkip = K(1, "care team");
  const c = tKisi - 0.2;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tPill} bitis={c} capa={[1730, 830]} konum={[1640, 560]} metin="WATER PILLS" renk={RENK.altin} />
        <Etiket t={t} bas={tEkip} capa={[1000, 930]} konum={[1000, 650]} metin="CARE TEAM FOLLOWS IT" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={tLoss} bitis={c} metin="POTASSIUM LOSS" x={1000} y={240} boyut={110} renk={RENK.mercan} hiza="orta" />
      <Ikon t={t} bas={tLoss} bitis={c} ad="ok" x={1000} y={400} boyut={84} zemin={RENK.mercan} />
      <Baslik t={t} bas={K(1, "differs")} metin="PERSON TO PERSON" x={1000} y={240} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S46;
