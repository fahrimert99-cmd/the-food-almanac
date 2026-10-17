// Sahne 54 — özet: diyet aralığında, tedaviye ek, kalp krizi gösterilmedi, çiğ/pişmiş test edilmedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHeart = K(0, "nobody"), tRaw = K(1, "Raw");
  const bit = tRaw - 0.1;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(0, "diet")} bitis={bit} capa={[1100, 680]} konum={[1000, 900]} metin="DIET CHANGE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "add-on")} bitis={bit} capa={[1470, 720]} konum={[1600, 900]} metin="ADD-ON TO TREATMENT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "garlic")} capa={[430, 520]} konum={[190, 760]} metin="RAW GARLIC" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tHeart} bitis={bit} satirlar={["HEART ATTACKS:", "NOT SHOWN"]} x={80} y={130} boyut={84}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={tRaw} satirlar={["RAW AND COOKED:", "NOT TESTED"]} x={80} y={130} boyut={84}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S54;
