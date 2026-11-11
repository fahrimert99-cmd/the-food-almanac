// Sahne 45 — iki aynı jambon paketi ve soru işareti: "bilmiyoruz".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "We") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "before")} bitis={gec} capa={[690, 680]} konum={[260, 420]} metin="1 DAY BEFORE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "past")} bitis={gec} capa={[1250, 680]} konum={[1660, 420]} metin="1 DAY PAST" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "no study")} satirlar={["NO STUDY", "FOUND"]} x={1860} y={175} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "guess")} metin="SO WE WON'T GUESS" x={1860} y={350} hiza="sag" boyut={42} agirlik={800} />
    </>
  );
};

export default S45;
