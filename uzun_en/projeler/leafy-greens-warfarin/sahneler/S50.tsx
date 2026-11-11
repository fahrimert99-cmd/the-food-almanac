// Sahne 50 — İki: bir düzen seç, haftadan haftaya aynı miktar
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t3 = K(3, "about");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      <VurguRozet t={t} bas={K(0, "Two")} bitis={t3 - 0.2} vurgu="2" x={230} y={110} genislik={190} boyut={100} />
      <Baslik t={t} bas={K(1, "pattern")} bitis={t3 - 0.2} metin="PICK A PATTERN" x={1100} y={140} boyut={96} hiza="orta" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(2, "cooked")} bitis={t3 - 0.2} capa={[1500, 520]} konum={[1520, 340]} metin="COOKED GREENS" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(2, "salad")} bitis={t3 - 0.2} capa={[330, 520]} konum={[460, 340]} metin="DAILY SALAD" renk={RENK.altin} />
      <BaslikBlok t={t} bas={t3} satirlar={["SAME AMOUNT", "WEEK TO WEEK"]} x={1100} y={100} boyut={76} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S50;
