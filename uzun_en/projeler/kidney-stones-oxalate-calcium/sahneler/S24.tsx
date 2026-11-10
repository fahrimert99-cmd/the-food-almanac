// Sahne 24 — bağlantı, kanıt değil: iki yol aynı köprüye çıkar (deney + kohortlar).
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYol = K(1, "But") - 0.1;
  const tNext = K(2, "Next");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "trial")} capa={[400, 560]} konum={[330, 380]} metin="TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "cohorts")} capa={[1530, 590]} konum={[1640, 400]} metin="BIG COHORTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "same way")} capa={[960, 400]} konum={[960, 640]} metin="SAME DIRECTION" renk={RENK.koyuYesil} />
      </Kamera>
      <AltSis a={0.8} />
      <Baslik t={t} bas={K(0, "observational")} bitis={tYol} metin="LINK, NOT PROOF" x={960} y={95} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tNext} metin="NEXT: THE REASON WHY" x={960} y={85} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S24;
