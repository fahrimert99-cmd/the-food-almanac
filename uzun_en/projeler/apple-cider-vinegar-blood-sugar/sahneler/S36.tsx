// Sahne 36 — yanlış olan: karbonhidratı silmez, tatlıyı dengelemez, tedavinin yerini tutmaz. Pasta solda, çarpılı liste sağda.
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFalse = K(0, "false"), tNot = K(1, "does not"), tCarb = K(1, "carbohydrates"), tCancel = K(1, "cancel out"), tDessert = K(1, "dessert");
  const tReplace = K(2, "replace");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 80, 1800], [60, 120, 1700])}>
        <Etiket t={t} bas={tDessert - 0.2} capa={[480, 560]} konum={[900, 330]} metin="LARGE DESSERT" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <AltSis a={0.7} yukseklik={140} />
      <Not t={t} bas={0.2} metin="SO WHAT IS FALSE?" x={1860} y={140} hiza="sag" boyut={34} agirlik={800} renk={RENK.altin} genislik={700} bitis={tNot - 0.1} />
      <BaslikBlok t={t} bas={tNot} satirlar={["NOT A", "SUBSTITUTE"]} x={1860} y={190} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} isaret="carpi" x={1150} y={520} aralik={96} boyut={32} genislik={720} ogeler={[
        { bas: tCarb, metin: "CARBS DON'T DISAPPEAR", renk: RENK.mercan },
        { bas: tCancel, metin: "DOESN'T CANCEL A DESSERT", renk: RENK.mercan },
        { bas: tReplace - 0.4, metin: "NOT A DIABETES TREATMENT", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S36;
