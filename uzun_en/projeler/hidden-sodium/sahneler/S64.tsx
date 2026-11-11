// Sahne 64 — etiketi oku, tuzluğu değil; doktora sor.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S64: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/64" pencere={kameraYolu(t, s.sure, [150, 40, 1700], [190, 60, 1620])}>
        <Etiket t={t} bas={K(0, "label")} capa={[960, 330]} konum={[1500, 170]} metin="READ THE LABEL" renk={RENK.yesil} boyut={24} />
        <Etiket t={t} bas={K(0, "shaker")} capa={[985, 690]} konum={[1480, 470]} metin="NOT THE SHAKER" renk={RENK.mercan} boyut={24} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "doctor")} satirlar={["ASK YOUR DOCTOR"]} x={1860} y={770} boyut={84} hiza="sag" renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "sodium")} metin="WHAT SODIUM NUMBER IS RIGHT FOR YOU" x={1860} y={855} hiza="sag" boyut={30} agirlik={800} genislik={760} />
    </>
  );
};

export default S64;
