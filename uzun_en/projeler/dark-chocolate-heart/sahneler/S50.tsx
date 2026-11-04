// Sahne 50 — şekersiz kakao: süt ya da yulaf ezmesiyle
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tToz = K(1, "Unsweetened"), tSut = K(1, "warm milk"), tPick = K(2, "Pick"), tMetal = K(3, "metal");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1760])}>
        <Etiket t={t} bas={tToz} bitis={tPick - 0.1} capa={[1360, 400]} konum={[1580, 150]} metin="UNSWEETENED COCOA" renk={RENK.altin} />
        <Etiket t={t} bas={tSut} bitis={tPick - 0.1} capa={[790, 400]} konum={[400, 160]} metin="WARM MILK OR OATMEAL" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tPick} satirlar={["NOT PROCESSED WITH ALKALI"]} x={960} y={110} boyut={76} hiza="orta"
        renkler={[RENK.koyuYesil]} bitis={tMetal - 0.1} />
      <BaslikBlok t={t} bas={tMetal} satirlar={["METAL TESTS WERE OF BARS"]} x={960} y={110} boyut={76} hiza="orta"
        renkler={[RENK.lacivert]} />
    </>
  );
};

export default S50;
