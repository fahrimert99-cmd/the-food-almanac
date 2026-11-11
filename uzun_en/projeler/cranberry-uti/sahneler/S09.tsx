// Sahne 9 — asıl soru: sağ sütunda soru, sonra "kime?" ve üç ipucu
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tQ = K(1, "Can"), tWhom = K(1, "whom"), tAns = K(2, "answer");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1800])}>
        <Etiket t={t} bas={K(1, "cranberry")} bitis={tWhom - 0.3} capa={[790, 300]} konum={[560, 520]} metin="CRANBERRY JUICE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "real")} bitis={tQ - 0.2} satirlar={["THE REAL", "QUESTION"]} x={1860} y={560} boyut={96} hiza="sag" adim={0.3} />
      <Not t={t} bas={tQ + 0.2} bitis={tWhom - 0.3} metin="CAN IT LOWER THE CHANCE OF REPEAT INFECTIONS?" x={1860} y={500} boyut={38}
        hiza="sag" genislik={500} agirlik={800} />
      <Baslik t={t} bas={tWhom} bitis={tAns - 0.2} metin="FOR WHOM?" x={1860} y={620} boyut={96} hiza="sag" renk={RENK.mercan} />
      <Liste t={t} isaret="sayi" aralik={118} boyut={32} genislik={470} x={1390} y={500} ogeler={[
        { bas: K(2, "who"), metin: "WHO YOU ARE", renk: RENK.altin },
        { bas: K(2, "catch"), metin: "A CATCH IN THE JUICE AISLE", renk: RENK.mercan },
        { bas: K(2, "medicine"), metin: "A MEDICINE WARNING", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};
export default S09;
