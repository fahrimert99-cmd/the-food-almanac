// Sahne 26 — test tüpleri, defter ve yumurta kasesi; sağ üstte başlıklar, sonra kişisel kan testi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tExtra = K(0, "extra"), tDeb = K(0, "debated"), tNot = K(0, "not"), tOwn = K(1, "your own"), tBlood = K(1, "blood test"), tMore = K(1, "more than");
  const bit = s.cumleler[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tBlood} capa={[880, 480]} konum={[1180, 400]} metin="YOUR BLOOD TEST" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle: ekstra LDL tartışmalı */}
      <Baslik t={t} bas={tExtra} bitis={bit} metin="EXTRA LDL" x={1840} y={190} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tDeb} bitis={bit} metin="STILL DEBATED" x={1840} y={302} boyut={96} renk={RENK.altin} hiza="sag" />
      <Not t={t} bas={tNot} bitis={bit} metin="NOT A FREE PASS" x={1840} y={400} hiza="sag" boyut={42} agirlik={800} renk={RENK.mercan} />
      {/* 2. cümle: kişisel kan testi */}
      <Baslik t={t} bas={tOwn} metin="YOUR OWN" x={960} y={70} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tOwn + 0.18} metin="BLOOD TEST" x={960} y={160} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tMore} metin="MATTERS MORE THAN ANY AVERAGE" x={960} y={238} hiza="orta" boyut={36} agirlik={800} />
    </>
  );
};

export default S26;
