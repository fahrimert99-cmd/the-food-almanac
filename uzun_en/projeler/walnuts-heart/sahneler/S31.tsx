// Sahne 31 — ALA ve lif: hipotez, kanıtlanmış yol değil. Ceviz soldan, açıklama sağda.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAla = K(0, "ALA"), tLif = K(0, "fiber,"), tHip = K(1, "hypothesis,"), tYol = K(1, "proven pathway");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1760])} />
      <Etiket t={t} bas={tAla} capa={[1010, 300]} konum={[900, 560]} metin="ALA" renk={RENK.altin} />
      <Etiket t={t} bas={tLif} capa={[1330, 430]} konum={[1500, 860]} metin="FIBER" renk={RENK.yesil} />
      <Baslik t={t} bas={tHip} metin="STILL A HYPOTHESIS" x={160} y={110} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={tYol} metin="not a proven pathway" x={160} y={170} boyut={36} />
    </>
  );
};

export default S31;
