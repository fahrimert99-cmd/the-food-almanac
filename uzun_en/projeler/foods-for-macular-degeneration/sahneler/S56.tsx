// Sahne 56 — görme değişirse yemek değil muayene (telefon + takvim + ıspanak kasesi).
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVizyon = K(0, "vision");
  const tYemek = K(0, "food");
  const tBulanik = K(1, "Blurred");
  const tBook = K(1, "book");
  const tNot = K(1, "not");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={tYemek} bitis={tBulanik} capa={[1400, 760]} konum={[1640, 800]} metin="A FOOD FIX" renk={RENK.altin} />
        <Etiket t={t} bas={tBook} bitis={tNot - 0.1} capa={[1330, 330]} konum={[1230, 100]} metin="BOOK AN EYE EXAM" renk={RENK.yesil} />
        <Etiket t={t} bas={tNot} capa={[1400, 760]} konum={[1640, 800]} metin="NOT A NEW DIET" renk={RENK.mercan} />
      </Kamera>
      {/* üst boş kâğıt alanında başlıklar */}
      <BaslikBlok t={t} bas={tVizyon} satirlar={["VISION CHANGES?"]} x={80} y={90} boyut={84} bitis={tBulanik - 0.15} renkler={[RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tBulanik} satirlar={["BLURRED OR DIM SPOTS"]} x={80} y={90} boyut={84} renkler={[RENK.koyuYesil]} />
    </>
  );
};
export default S56;
