// Sahne 2 — masa: ıspanak ve hap şişesi; "korelasyon" başlığı sağ üstte.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [70, 110, 1750])}>
        <Etiket t={t} bas={K(0, "pills")} capa={[1093, 620]} konum={[1640, 520]} metin="EYE PILLS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "association") - 0.1} satirlar={["ASSOCIATION,", "NOT PROOF"]} x={1860} y={150} boyut={100}
        hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "only some")} metin="HELP ONLY SOME PEOPLE" x={1860} y={350} hiza="sag" boyut={36} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S02;
