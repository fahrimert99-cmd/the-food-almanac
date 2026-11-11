// Sahne 31 — Hollanda tipi işleme: alkali, renk, flavanol
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlk = K(0, "treated"), tDutch = K(0, "Dutch"), tColor = K(1, "color"), tFlav = K(1, "flavanol");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <Etiket t={t} bas={tAlk} bitis={tDutch - 0.2} capa={[520, 430]} konum={[960, 300]} metin="TREATED WITH ALKALI" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tDutch} bitis={tColor - 0.2} satirlar={["DUTCH-", "PROCESSED"]} x={1860} y={200} boyut={110} hiza="sag" />
      <Etiket t={t} bas={tColor} bitis={tFlav - 0.2} capa={[1260, 790]} konum={[1260, 560]} metin="COLOR CHANGES" renk={RENK.altin} />
      <Baslik t={t} bas={tFlav} metin="FLAVANOL CONTENT" x={1860} y={220} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S31;
