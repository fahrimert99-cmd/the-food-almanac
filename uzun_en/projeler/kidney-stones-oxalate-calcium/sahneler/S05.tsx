// S05 — böbrek gravürü: kalsiyum + oksalat kristali
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCa = K(0, "calcium"), tKr = K(0, "crystal"), tCa2 = K(0, "when"), tPl = K(0, "plant"), tUr = K(0, "your urine");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={w}>
        <Etiket t={t} bas={tKr} bitis={tCa2 - 0.3} capa={[523, 609]} konum={[1050, 170]} metin="HARD CRYSTAL" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "calcium meets") } capa={[1110, 560]} konum={[1560, 600]} metin="CALCIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tPl} capa={[800, 830]} konum={[1560, 800]} metin="PLANT OXALATE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tCa} satirlar={["CALCIUM", "+ OXALATE"]} x={1860} y={190} boyut={110} hiza="sag"
        renkler={[RENK.altin, RENK.yesil]} adim={0.48} />
      <Not t={t} bas={tUr} metin="forms in your urine" x={1860} y={420} hiza="sag" boyut={34} />
    </>
  );
};

export default S05;
