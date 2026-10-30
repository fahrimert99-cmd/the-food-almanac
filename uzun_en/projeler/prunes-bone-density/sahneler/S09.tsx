// Sahne 9 — videonun iki sorusu: kemik kaybı ve kabızlık (raf görseli).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(0, "Two questions"), tKemik = K(1, "bone loss"), tKabiz = K(2, "constipation");
  const tToz = K(2, "fiber powders");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1810])} />
      {/* sağ boş kâğıt alanında başlık */}
      <Baslik t={t} bas={tIki} metin="TWO" x={1880} y={190} boyut={68} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tIki + 0.18} metin="QUESTIONS" x={1880} y={270} boyut={68} renk={RENK.koyuYesil} hiza="sag" />
      {/* 1. soru: kâse */}
      <Etiket t={t} bas={tKemik} bitis={tKabiz - 0.1} capa={[960, 740]} konum={[1380, 840]} metin="1 · BONE LOSS" renk={RENK.yesil} />
      {/* 2. soru: kabızlık, sonra lif tozu kavanozu */}
      <Etiket t={t} bas={tKabiz} capa={[960, 740]} konum={[520, 850]} metin="2 · CONSTIPATION" renk={RENK.mercan} />
      <Etiket t={t} bas={tToz} capa={[660, 330]} konum={[1100, 560]} metin="FIBER POWDER" renk={RENK.altin} />
    </>
  );
};

export default S09;
