// Sahne 26 — ibuprofen/diklofenak karşısında fark küçük ve anlamlı değil; yan etkiler plasebodan fazla değil.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = K(0, "the pooled") - 0.15, b2 = K(1, "In") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(0, "painkillers")} bitis={b1} capa={[1240, 500]} konum={[1600, 560]} metin="PAINKILLERS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "side")} capa={[1260, 610]} konum={[1620, 660]} metin="SIDE EFFECTS" renk={RENK.yesil} />
      </Kamera>
      <Liste t={t} x={1470} y={150} aralik={90} boyut={34} isaret="nokta" genislik={420} ogeler={[
        { bas: K(0, "ibuprofen"), bitis: b1, metin: "IBUPROFEN", renk: RENK.mercan },
        { bas: K(0, "diclofenac"), bitis: b1, metin: "DICLOFENAC", renk: RENK.mercan },
      ]} />
      <BaslikBlok t={t} bas={K(0, "small")} bitis={b2} satirlar={["SMALL", "DIFFERENCE"]} x={1860} y={170} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "statistically")} bitis={b2} metin="NOT STATISTICALLY SIGNIFICANT" x={1860} y={400} hiza="sag" genislik={430} boyut={32} agirlik={800} renk={RENK.altin} />
      <Ikon t={t} bas={K(1, "no more")} ad="onay" x={1530} y={190} />
      <BaslikBlok t={t} bas={K(1, "side")} satirlar={["NO MORE", "COMMON"]} x={1860} y={340} boyut={92} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "placebo")} metin="than placebo" x={1860} y={560} hiza="sag" boyut={38} />
    </>
  );
};

export default S26;
