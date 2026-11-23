// Sahne 2 — iki sepet, büyüteç: iki sonuç neyi ölçtü?
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(0, "two results")} capa={[390, 500]} konum={[360, 100]} metin="FRENCH STUDY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "clash")} capa={[1420, 500]} konum={[1330, 90]} metin="STANFORD REVIEW" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "actually measured")} capa={[1010, 400]} konum={[960, 250]} metin="WHAT EACH MEASURED" renk={RENK.altin} />
      </Kamera>
    </>
  );
};

export default S02;
