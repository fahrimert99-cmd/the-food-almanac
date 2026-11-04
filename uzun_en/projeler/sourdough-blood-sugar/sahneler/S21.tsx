// Sahne 21 — Mofidi: her çalışma aynı fikirde değil
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tM = K(1, "Mofidi"), tCom = K(1, "commercial"), tSpr = K(2, "Sprouted-grain"), tLow = K(2, "lowered"), tSour = K(3, "sourdough"), tNot = K(3, "not");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tSpr} capa={[1650, 770]} konum={[1560, 560]} metin="SPROUTED GRAIN" renk={RENK.yesil} />
        <Etiket t={t} bas={tSour} capa={[190, 770]} konum={[340, 560]} metin="SOURDOUGH" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={tM} />
      <BaslikBlok t={t} bas={0.05} bitis={tCom + 3.0} satirlar={s.meta.baslik!.satirlar} x={960} y={230} boyut={118} hiza="orta" />
      <Not t={t} bas={tCom} bitis={tSpr - 0.2} metin="COMMERCIAL BREADS · OVERWEIGHT AND OBESE MEN" x={960} y={450} boyut={36} hiza="orta" agirlik={800} />
      <Baslik t={t} bas={tLow} bitis={tSour - 0.1} metin="LOWERED GLUCOSE MOST" x={960} y={260} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <Ikon t={t} bas={tNot} ad="carpi" x={340} y={400} zemin={RENK.mercan} />
    </>
  );
};
export default S21;
