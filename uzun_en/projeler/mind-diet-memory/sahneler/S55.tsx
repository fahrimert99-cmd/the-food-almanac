// Sahne 55 — kale, yaban mersini, ceviz: basit ve sürdürülebilir alışkanlıklar.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKale = K(0, "leafy greens"), tBeri = K(0, "berries"), tDesen = K(0, "a pattern");
  const tBahis = K(1, "reasonable bet"), tGaranti = K(1, "not a guarantee");
  const cik1 = tBeri - 0.15, cik2 = tDesen - 0.15;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [20, 40, 1800], [90, 70, 1700])} />
      <AltSis a={0.5} />
      {/* 1. vuruş: yeşillikler */}
      <Etiket t={t} bas={tKale} bitis={cik1} capa={[590, 480]} konum={[420, 130]} metin="LEAFY GREENS" renk={RENK.yesil} />
      <Baslik t={t} bas={tKale + 0.2} bitis={cik1} metin="A DAY" x={620} y={140} boyut={110} renk={RENK.koyuYesil} />
      {/* 2. vuruş: yaban mersini */}
      <Etiket t={t} bas={tBeri} bitis={cik2} capa={[1080, 590]} konum={[940, 230]} metin="BERRIES" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBeri + 0.2} bitis={cik2} metin="A FEW TIMES A WEEK" x={940} y={110} boyut={64} hiza="orta" renk={RENK.lacivert} />
      {/* 3. vuruş: sürdürülebilir düzen */}
      <Baslik t={t} bas={tDesen} bitis={tBahis - 0.1} metin="A PATTERN" x={960} y={170} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tDesen + 0.25} bitis={tBahis - 0.1} metin="YOU CAN KEEP" x={960} y={270} boyut={70} renk={RENK.altin} hiza="orta" />
      {/* 4. vuruş: temkinli kapanış */}
      <Baslik t={t} bas={tBahis} metin="A REASONABLE BET" x={960} y={170} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tGaranti} metin="NOT A GUARANTEE" x={960} y={270} boyut={70} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S55;
