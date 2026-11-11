// Sahne 46 — küçük insan pilotu: 30 g eritritol, iki günden uzun süre. Bardak + cep saati.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1830])}>
        <Etiket t={t} bas={K(1, "30")} capa={[780, 560]} konum={[300, 600]} metin="30 G ERYTHRITOL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "more")} capa={[1330, 660]} konum={[1640, 400]} metin="MORE THAN 2 DAYS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "small")} metin="SMALL" x={70} y={190} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "human")} metin="HUMAN PILOT" x={70} y={300} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "ounce,")} metin="ABOUT AN OUNCE" x={90} y={690} boyut={32} agirlik={800} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "stayed")} metin="LEVELS STAYED ABOVE THE PLATELET-REACTIVITY POINT" x={1840} y={140} hiza="sag" genislik={470} boyut={32} agirlik={700} />
    </>
  );
};

export default S46;
