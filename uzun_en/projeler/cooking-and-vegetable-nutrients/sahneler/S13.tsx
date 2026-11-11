// Sahne 13 — suda çözünen vitaminler suya gider; yağda çözünen pigmentler çok daha az kaybolur.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [80, 60, 1680])}>
        <Etiket t={t} bas={K(1, "water-soluble")} capa={[420, 520]} konum={[930, 175]} metin="WATER-SOLUBLE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "fat-soluble")} capa={[900, 420]} konum={[1330, 580]} metin="FAT-SOLUBLE" renk={RENK.yesil} />
      </Kamera>
      {/* sağdaki boş kâğıtta başlık */}
      <BaslikBlok t={t} bas={K(1, "big hit")} satirlar={["LOST TO", "THE WATER"]} x={1860} y={280} boyut={112} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "much less")} metin="lost much less" x={1860} y={650} hiza="sag" boyut={40} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S13;
