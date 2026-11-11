// Sahne 9 — potasyum + sodyum: kalp, muz ve iki kefeli terazi; sağda kinetik başlık.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 70, 1920], [90, 130, 1700])}>
        <Etiket t={t} bas={K(0, "heart")} capa={[440, 400]} konum={[900, 230]} metin="HEART" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "sodium,")} capa={[873, 800]} konum={[800, 700]} metin="SODIUM" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "sodium,") + 0.35} capa={[1133, 795]} konum={[1260, 700]} metin="POTASSIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Potassium")} metin="POTASSIUM" x={1860} y={250} boyut={118} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "mineral")} metin="a mineral every cell uses" x={1860} y={330} hiza="sag" boyut={36} />
      <Baslik t={t} bas={K(1, "sodium,")} metin="+ SODIUM" x={1860} y={430} boyut={118} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "balance")} metin="the balance between the two seems to matter for blood pressure"
        x={1860} y={510} hiza="sag" boyut={34} genislik={620} />
    </>
  );
};

export default S09;
