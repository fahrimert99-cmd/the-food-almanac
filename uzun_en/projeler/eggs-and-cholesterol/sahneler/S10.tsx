// Sahne 10 — iki ayrı soru: yenen kolesterol → kan kolesterolü → kalp hastalığı.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [90, 190, 1740])}>
        <Etiket t={t} bas={K(1, "eat")} capa={[380, 760]} konum={[400, 560]} metin="CHOLESTEROL YOU EAT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "blood")} capa={[1690, 640]} konum={[1380, 600]} metin="BLOOD CHOLESTEROL" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "question") - 0.1} metin="TWO QUESTIONS" x={960} y={170} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Liste t={t} x={470} y={290} aralik={96} boyut={38} genislik={980}
        ogeler={[
          { bas: K(1, "does"), metin: "DOES BLOOD CHOLESTEROL RISE?", renk: RENK.altin },
          { bas: K(2, "does that"), metin: "DOES IT MEAN MORE HEART DISEASE?", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S10;
