// Sahne 4 — büyüteç: asıl soru ve "kanıtlara bakacağız".
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={K(0, "question")} bitis={K(1, "dehydrate") + 0.6} capa={[640, 280]} konum={[1060, 150]} metin="THE QUESTION" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "Does coffee") - 0.1} satirlar={["DOES COFFEE", "DEHYDRATE YOU?"]} x={1860} y={400} boyut={100} hiza="sag" />
      <Baslik t={t} bas={K(2, "trials")} metin="TRIALS," x={1860} y={690} boyut={72} renk={RENK.yesil} hiza="sag" />
      <Baslik t={t} bas={K(2, "not the")} metin="NOT RUMORS" x={1860} y={770} boyut={72} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S04;
