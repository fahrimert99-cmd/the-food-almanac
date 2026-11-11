// Sahne 16 — bir ipucu, kanıt değil: 15 sağlıklı kişi, tek pirinç türü, sınırda anlamlılık.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={K(1, "fifteen")} capa={[1330, 480]} konum={[1450, 200]} metin="15 HEALTHY ADULTS" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "one kind")} capa={[800, 440]} konum={[1010, 210]} metin="ONE KIND OF RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "barely")} capa={[1170, 790]} konum={[980, 905]} metin="BARELY SIGNIFICANT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "hint")} metin="A HINT," x={70} y={140} boyut={100} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "not")} metin="NOT PROOF" x={70} y={250} boyut={100} renk={RENK.mercan} />
    </>
  );
};

export default S16;
