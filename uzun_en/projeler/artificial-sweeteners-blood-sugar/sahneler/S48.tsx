// Sahne 48 — sınırlar: kısa testler, küçük gruplar, uzun çalışma çağrısı. Kum saati + büyüteç.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(2, "called") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(1, "short")} bitis={bit} capa={[1250, 400]} konum={[960, 230]} metin="SHORT TESTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "lab")} bitis={bit} capa={[907, 740]} konum={[780, 450]} metin="LAB MARKERS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "erythritol")} bitis={bit} capa={[1560, 700]} konum={[1650, 330]} metin="ERYTHRITOL" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={K(0, "limits")} bitis={bit} metin="THE LIMITS ARE REAL" x={110} y={110} boyut={46} agirlik={800} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(2, "no")} bitis={bit} ad="carpi" x={150} y={290} boyut={80} zemin={RENK.mercan} />
      <Not t={t} bas={K(2, "no")} bitis={bit} metin="NO TRIAL SHOWS THAT ERYTHRITOL CAUSES HEART ATTACKS OR STROKES" x={215} y={250} genislik={400} boyut={30} agirlik={700} />
      <Baslik t={t} bas={K(2, "called")} metin="NEEDS" x={110} y={150} boyut={116} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "longer")} metin="LONGER STUDIES" x={110} y={275} boyut={116} renk={RENK.koyuYesil} />
    </>
  );
};

export default S48;
