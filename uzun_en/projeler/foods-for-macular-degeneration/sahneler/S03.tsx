// Sahne 3 — tabak: sol üst boş kâğıtta söz verilen iki konu.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1760])}>
        <Etiket t={t} bas={K(0, "on your plate")} capa={[780, 640]} konum={[1000, 200]} metin="SPINACH" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "who needs")} metin="WHO NEEDS PILLS?" x={110} y={170} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "what belongs")} metin="WHAT BELONGS ON YOUR PLATE" x={110} y={290} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
