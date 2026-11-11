// Sahne 29 — genel sonuç: üstte başlık, tofu etiketi, sağda onay maddeleri ve sonuç.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(2, "overall");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Baslik t={t} bas={K(0, "one thing")} bitis={tSon - 0.2} metin="ONE NOTABLE THING" x={120} y={140} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "soy")} capa={[740, 560]} konum={[330, 400]} metin="SOY FOODS" renk={RENK.yesil} />
      <Liste t={t} isaret="onay" x={1460} y={130} aralik={72} boyut={26} genislik={430}
        ogeler={[
          { bas: K(1, "risk"), metin: "NO HIGHER RISK" },
          { bas: K(1, "recurrence."), metin: "NO HIGHER RECURRENCE" },
        ]} />
      <BaslikBlok t={t} bas={tSon} satirlar={["NEUTRAL", "OR PROTECTIVE"]} x={1860} y={440} boyut={62} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S29;
