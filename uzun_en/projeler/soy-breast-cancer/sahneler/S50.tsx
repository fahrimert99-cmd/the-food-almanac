// Sahne 50 — desteklenmeyen iddia: tofu + fare (hayvan deneyleri). Başlık solda üstte, etiketler nesnelerde.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.15;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740]);
  const tH = K(1, "human studies");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={p}>
        <Etiket t={t} bas={K(0, "soy foods")} bitis={cik} capa={[700, 520]} konum={[300, 880]} metin="SOY FOODS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "animal experiments")} bitis={tH - 0.1} capa={[1250, 640]} konum={[1560, 860]} metin="ANIMAL EXPERIMENTS" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={0.05} bitis={cik} metin="WHAT'S NOT SUPPORTED" x={70} y={100} boyut={34} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(0, "proven")} bitis={cik} metin="A PROVEN RISK" x={66} y={190} boyut={104} renk={RENK.mercan} />
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "concentrated")} bitis={tH - 0.1} metin="CONCENTRATED ISOFLAVONES" x={70} y={110} boyut={50} renk={RENK.lacivert} />
      <Baslik t={t} bas={tH} metin="HUMAN STUDIES" x={70} y={100} boyut={34} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(1, "haven't backed")} metin="HAVEN'T BACKED IT UP" x={66} y={190} boyut={86} renk={RENK.koyuYesil} />
    </>
  );
};

export default S50;
