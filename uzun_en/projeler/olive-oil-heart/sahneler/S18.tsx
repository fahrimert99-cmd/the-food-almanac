// Sahne 18 — geri çekilen makale: dosya + iki protokol sapması
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tIlk = K(0, "retracted"), tProt = K(0, "protocol"), tBir = K(1, "without"), tSite = K(1, "one");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1760])}>
        <Etiket t={t} bas={K(0, "first")} capa={[590, 450]} konum={[330, 130]} metin="FIRST PAPER" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tIlk} satirlar={b.satirlar} x={1860} y={620} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tProt} metin="PROTOCOL DEVIATIONS" x={1860} y={175} hiza="sag" boyut={36} agirlik={800} renk={RENK.altin} />
      <Liste t={t} x={1020} y={240} aralik={96} boyut={38} isaret="carpi" genislik={790}
        ogeler={[
          { bas: tBir, metin: "SOME NOT RANDOMIZED", renk: RENK.mercan },
          { bas: tSite, metin: "SITE TABLES INCONSISTENT", renk: RENK.mercan },
        ]} />
    </>
  );
};

export default S18;
