// Sahne 50 — günün erken saatlerinde iç: pencere görseli, yanlarda boş kâğıt
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={K(2, "most of")} capa={[770, 760]} konum={[400, 560]} metin="MOST BY LATE AFTERNOON" renk={RENK.yesil} boyut={24} />
        <Etiket t={t} bas={K(2, "evening")} capa={[1190, 740]} konum={[1660, 640]} metin="NOT IN THE EVENING" renk={RENK.mercan} boyut={24} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "Front-load")} satirlar={["FRONT-LOAD", "YOUR DAY"]} x={1860} y={250} boyut={84} hiza="sag" />
      <Ikon t={t} bas={K(2, "so you")} ad="carpi" x={1400} y={780} zemin={RENK.mercan} boyut={72} />
      <Not t={t} bas={K(2, "catching")} metin="NO EVENING CATCH-UP" x={1860} y={760} boyut={28} hiza="sag" agirlik={800} genislik={420} />
    </>
  );
};
export default S50;
