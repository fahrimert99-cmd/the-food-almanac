// Sahne 48 — "Processed with alkali" ifadesini etiketten bulma
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(1, "ingredient"), tIfade = K(2, "processed"), tDut = K(3, "Dutched"), tSec = K(3, "choose");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1760])}>
        <Etiket t={t} bas={tListe} bitis={tIfade - 0.1} capa={[700, 330]} konum={[1180, 170]} metin="INGREDIENT LIST" renk={RENK.altin} />
        <Etiket t={t} bas={tDut} bitis={tSec} capa={[560, 560]} konum={[1230, 800]} metin="DUTCHED" renk={RENK.mercan} />
        <Etiket t={t} bas={tSec} capa={[700, 820]} konum={[1280, 800]} metin="CHOOSE WITHOUT IT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tIfade} satirlar={["PROCESSED", "WITH ALKALI"]} x={1860} y={300} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tIfade + 0.6} metin="the phrase to look for" x={1860} y={500} hiza="sag" />
    </>
  );
};

export default S48;
