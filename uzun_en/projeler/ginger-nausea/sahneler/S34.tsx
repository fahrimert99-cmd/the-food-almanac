// Sahne 34 — kapsül ve çiğneme tabletleri: etiketteki miligramı oku.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "Capsules")} capa={[700, 820]} konum={[1260, 870]} metin="CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "number")} capa={[590, 420]} konum={[1520, 200]} metin="THE NUMBER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "just the word")} capa={[560, 300]} konum={[1520, 330]} metin="NOT JUST THE WORD" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "milligrams") - 0.1} satirlar={["READ THE", "MILLIGRAMS"]} x={1520} y={640} boyut={108} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S34;
