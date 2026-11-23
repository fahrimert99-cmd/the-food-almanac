// S38 — sıcak fincan: sakinlik gerçek
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        <Baslik t={t} bas={K(0, "not a bad thing")} bitis={K(1, "the calm") - 0.2} metin="NOT A" x={110} y={150} boyut={110} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "not a bad thing") + 0.18} bitis={K(1, "the calm") - 0.2} metin="BAD THING" x={110} y={265} boyut={110} renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "cup of tea")} bitis={K(1, "the calm") - 0.1} capa={[800, 520]} konum={[330, 480]} metin="A CUP OF TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "the calm")} bitis={K(1, "even if")} capa={[1387, 275]} konum={[1640, 190]} metin="THE CALM IS REAL" renk={RENK.yesil} />
        <Ikon t={t} bas={K(1, "can't say")} ad="soru" x={560} y={330} zemin={RENK.altin} boyut={86} bitis={K(1, "chamomile") - 0.2} />
        <Etiket t={t} bas={K(1, "chamomile")} capa={[920, 560]} konum={[420, 330]} metin="HOW MUCH IS CHAMOMILE?" renk={RENK.altin} />
      </Kamera>
    </>
  );
};
export default S38;
