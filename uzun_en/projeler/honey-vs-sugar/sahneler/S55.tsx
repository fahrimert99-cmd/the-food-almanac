// Sahne 55 — bal şeker yerine geçerse: tadını çıkar, ölç, say; kavanozdan mucize bekleme.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHoney = K(0, "honey");
  const tEnjoy = K(0, "enjoy");
  const tMeasure = K(0, "measure");
  const tCount = K(0, "count");
  const tMiracle = K(1, "miracle");
  const tJar = K(1, "jar");
  const son = s.cumleler[1].bas - 0.05;
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [60, 70, 1740])} />
      {/* bal kavanozu ve fincan */}
      <Etiket t={t} bas={tHoney} bitis={son} capa={[400, 560]} konum={[760, 330]} metin="HONEY" renk={RENK.altin} />
      {/* 1. cümle: üç kısa başlık */}
      <Baslik t={t} bas={tEnjoy} bitis={son} metin="ENJOY IT" x={1860} y={150} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tMeasure} bitis={son} metin="MEASURE IT" x={1860} y={250} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tCount} bitis={son} metin="COUNT IT" x={1860} y={350} boyut={88} hiza="sag" renk={RENK.koyuYesil} />
      {/* 2. cümle: mucize yok */}
      <Baslik t={t} bas={tMiracle - 0.1} metin="NO MIRACLE" x={1860} y={200} boyut={104} hiza="sag" renk={RENK.mercan} />
      <Etiket t={t} bas={tJar} capa={[400, 600]} konum={[780, 470]} metin="THE JAR" renk={RENK.altin} />
    </>
  );
};

export default S55;
