// Sahne 54 — adım 4: tam tahılları koru; sağda boş kâğıt alanı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860]);
  const tG = K(3, "If you") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kam}>
        <Etiket t={t} bas={K(2, "brown rice")} bitis={tG} capa={[560, 700]} konum={[1480, 780]} metin="BROWN RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "quinoa")} bitis={tG} capa={[1000, 570]} konum={[1480, 590]} metin="QUINOA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "buckwheat")} bitis={tG} capa={[1000, 400]} konum={[1480, 400]} metin="BUCKWHEAT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(3, "whole wheat")} capa={[700, 200]} konum={[1500, 230]} metin="WHOLE WHEAT BREAD" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "whole grains")} bitis={K(2, "If") + 1.0} satirlar={["KEEP YOUR", "WHOLE GRAINS"]} x={1300} y={260} boyut={92}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};
export default S54;
