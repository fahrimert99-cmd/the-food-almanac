// Sahne 37 — Sınırlar: küçük değişimler, kan testi göstergeleri, yalnızca üç hafta; mekanizma, kanıtlanmış fayda değil.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSmall = K(0, "small,"), tHeart = K(0, "heart"), tMech = K(1, "mechanism,"), tNot = K(1, "not");
  const cik = K(1, "This") - 0.15;
  const [sc, al] = pop(t, tHeart, 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "blood")} bitis={cik} capa={[707, 420]} konum={[460, 150]} metin="BLOOD TEST MARKERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "three weeks")} bitis={cik} capa={[1173, 690]} konum={[1180, 470]} metin="ONLY 3 WEEKS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tSmall} bitis={cik} metin="SMALL CHANGES" x={1860} y={210} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <div style={{ position: "absolute", right: 60, top: 290, opacity: al * sol(t, cik), transform: `scale(${sc})`, transformOrigin: "100% 50%",
        display: "flex", alignItems: "center", gap: 16 }}>
        <Hap metin="NOT HEART ATTACKS" renk={RENK.mercan} boyut={32} />
        <div style={{ width: 76, height: 76, position: "relative" }}><Ikon t={t} bas={tHeart} ad="carpi" x={38} y={38} boyut={76} zemin={RENK.mercan} /></div>
      </div>
      <Baslik t={t} bas={tMech} metin="A MECHANISM," x={1860} y={210} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tNot} metin="NOT A PROVEN BENEFIT" x={1860} y={320} boyut={72} hiza="sag" renk={RENK.altin} />
    </>
  );
};

export default S37;
