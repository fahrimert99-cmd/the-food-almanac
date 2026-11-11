// Sahne 10 — LDL nedir: tüp içindeki parçacıklar, damar duvarı, mg/dL.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPart = K(0, "particles");
  const tDuvar = K(1, "artery");
  const tMg = K(2, "milligrams");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tPart} bitis={tDuvar - 0.1} capa={[653, 419]} konum={[1000, 780]} metin="LDL PARTICLES" renk={RENK.altin} />
        <Etiket t={t} bas={tDuvar} capa={[505, 545]} konum={[1000, 780]} metin="ARTERY WALL" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={["LDL", "CHOLESTEROL"]} x={1860} y={260} boyut={100} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tMg - 0.1} metin="measured in mg/dL" x={1860} y={480} hiza="sag" boyut={42} agirlik={800} renk={RENK.altin} genislik={700} />
    </>
  );
};

export default S10;
