// Sahne 4 — marka girişi + "cinnamon nedir" başlığı; dal ve kabuk etiketleri.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMarka = K(0, "Food");
  const tBaslik = K(1, "cinnamon");
  const tEtiket = K(1, "actually");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [110, 80, 1700])}>
        <Etiket t={t} bas={tEtiket} capa={[560, 560]} konum={[230, 880]} metin="THE TREE" renk={RENK.yesil} />
        <Etiket t={t} bas={tEtiket + 0.45} capa={[1530, 540]} konum={[1660, 380]} metin="THE BARK" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tMarka - 0.1} bitis={tBaslik - 0.1} metin={MARKA.ad.toUpperCase()} x={100} y={150} boyut={72} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["WHAT IS", "CINNAMON?"]} x={100} y={130} boyut={80}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S04;
