// Sahne 24 — metformin kullananlara B12 testi önerisi: doktor masası, sağda boş kâğıt alanında başlıklar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSonuc = K(0, "researchers"), tRutin = K(0, "routine"), tMet = K(0, "metformin");
  const tSor = K(1, "ask"), tDr = K(1, "doctor"), tSeviye = K(1, "checking");
  const gec = K(1, "if") - 0.1; // ilk grup burada solar
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [90, 80, 1740])}>
        {/* ölçüm cihazı ekranındaki bozuk yazıyı örten küçük yama */}
        <div style={{ position: "absolute", left: 814, top: 662, width: 76, height: 40, borderRadius: 6, background: "#A9B7A8" }} />
        <Etiket t={t} bas={tMet} bitis={gec} capa={[925, 700]} konum={[1230, 640]} metin="METFORMIN" renk={RENK.mercan} />
        <Etiket t={t} bas={tDr} capa={[150, 712]} konum={[640, 400]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={tSonuc} bitis={gec} metin="THE RESEARCHERS' CONCLUSION" x={1860} y={190} boyut={30} renk={RENK.altin}
        hiza="sag" font="inter" agirlik={800} aralik={4} />
      <BaslikBlok t={t} bas={tRutin} bitis={gec} satirlar={["ROUTINE", "B12 TESTING"]} x={1860} y={300} boyut={96} hiza="sag" />
      <Not t={t} bas={K(0, "considered")} bitis={gec} metin="should be considered" x={1860} y={500} hiza="sag" boyut={38} renk={RENK.gri} />
      {/* 2. cümle */}
      <BaslikBlok t={t} bas={tSor} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={300} boyut={104} hiza="sag" />
      <Not t={t} bas={tSeviye} metin="checking your level" x={1860} y={560} hiza="sag" boyut={42} />
      <Ikon t={t} bas={tSeviye + 0.3} ad="onay" x={1760} y={680} zemin={RENK.yesil} />
    </>
  );
};

export default S24;
