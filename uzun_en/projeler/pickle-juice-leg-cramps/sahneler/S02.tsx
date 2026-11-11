// Sahne 2 — laboratuvar krampı mı, gece krampı mı?
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840])}>
        <Etiket t={t} bas={K(1, "work")} capa={[1107, 585]} konum={[1450, 780]} metin="PICKLE JUICE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lab,")} metin="LAB CRAMPS" x={1860} y={330} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "young")} metin="IN YOUNG MEN" x={1860} y={405} hiza="sag" boyut={36} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "night")} metin="VS NIGHT CRAMPS" x={1860} y={520} boyut={80} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "wake")} metin="THE ONES THAT WAKE YOU UP" x={1860} y={595} hiza="sag" boyut={32} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S02;
