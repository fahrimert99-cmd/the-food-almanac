// Sahne 3 — Kim haklı? Yumurta kolesterolce zengin ama "iyi" de olabilir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(2, "Both") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [120, 70, 1700])}>
        <Etiket t={t} bas={K(1, "rich in")} bitis={K(1, "doctor")} capa={[770, 330]} konum={[1380, 250]} metin="RICH IN CHOLESTEROL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "eggs are fine")} capa={[1260, 690]} konum={[1520, 480]} metin="EGGS ARE FINE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} bitis={tSoru} satirlar={["WHO IS", "RIGHT?"]} x={70} y={190} boyut={118} renkler={[RENK.lacivert, RENK.altin]} />
      <BaslikBlok t={t} bas={K(2, "Both")} satirlar={["BOTH CAN", "BE TRUE"]} x={70} y={190} boyut={118} renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S03;
