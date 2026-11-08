// Sahne 5 — beş kase: baklagil ailesi; etiketler, başlık, sağda ürün listesi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const son = K(1, "dried") - 0.2; // etiketler listeden önce çekilir
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [50, 60, 1750])}>
        <Etiket t={t} bas={K(0, "Beans,")} bitis={son} capa={[733, 330]} konum={[740, 150]} metin="BEANS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "lentils")} bitis={son} capa={[700, 545]} konum={[1100, 800]} metin="LENTILS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "chickpeas")} bitis={son} capa={[1000, 410]} konum={[1130, 190]} metin="CHICKPEAS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "dried")} bitis={son} capa={[420, 380]} konum={[400, 170]} metin="DRIED PEAS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "one food")} satirlar={b.satirlar} x={1860} y={230} boyut={96} hiza="sag" />
      <Not t={t} bas={K(0, "legumes")} metin="LEGUMES · PULSES" x={1860} y={440} boyut={34} hiza="sag" renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="nokta" x={1450} y={560} aralik={68} boyut={34} genislik={420} ogeler={[
        { bas: K(1, "dried,"), metin: "DRIED", renk: RENK.altin },
        { bas: K(1, "canned,"), metin: "CANNED", renk: RENK.altin },
        { bas: K(1, "soups,"), metin: "SOUPS", renk: RENK.altin },
        { bas: K(1, "chili"), metin: "CHILI", renk: RENK.altin },
        { bas: K(1, "hummus"), metin: "HUMMUS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S05;
