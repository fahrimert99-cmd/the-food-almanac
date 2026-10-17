// Sahne 9 — terazi: sarımsak, sebze ve ilaç yan yana (sonra karşılaştırılacak).
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 60, 1760])} />
      <Baslik t={t} bas={K(0, "every")} metin="EVERY POINT" x={110} y={108} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "counts.")} metin="COUNTS" x={110} y={206} boyut={92} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "garlic's")} capa={[470, 540]} konum={[215, 425]} metin="GARLIC" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "diet")} capa={[1330, 480]} konum={[1640, 290]} metin="DIET CHANGES" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "medication,")} capa={[1620, 780]} konum={[1600, 905]} metin="MEDICATION" renk={RENK.lacivert} />
    </>
  );
};

export default S09;
