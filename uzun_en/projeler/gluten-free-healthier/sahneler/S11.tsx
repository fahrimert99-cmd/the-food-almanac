// Sahne 11 — çölyak dışı gluten duyarlılığı.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tG = K(0, "non-celiac");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1740])}>
        <Etiket t={t} bas={K(1, "belly")} capa={[520, 580]} konum={[1000, 480]} metin="BELLY PAIN" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "third")} metin="THE THIRD" x={1150} y={120} boyut={50} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tG} satirlar={["GLUTEN", "SENSITIVITY"]} x={1150} y={230} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1150} y={540} aralik={92} boyut={34} genislik={700} isaret="nokta" ogeler={[
        { bas: K(1, "belly"), metin: "BELLY PAIN", renk: RENK.mercan },
        { bas: K(1, "tiredness"), metin: "TIREDNESS", renk: RENK.mercan },
        { bas: K(1, "negative"), metin: "CELIAC TEST NEGATIVE", renk: RENK.lacivert },
      ]} />
      <Ikon t={t} bas={K(1, "damaged")} ad="onay" x={1190} y={870} zemin={RENK.yesil} boyut={80} />
      <Baslik t={t} bas={K(1, "damaged")} metin="INTESTINE NOT DAMAGED" x={1250} y={870} boyut={40} font="inter" agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S11;
