// Sahne 56 — adım 3: zencefilli gazoz bir içecektir, doz değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThree = K(0, "three"), tAle = K(0, "ginger ale"), tIng = K(1, "ingredient"), tDrink = K(1, "drink");
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 90, 1650])}>
        {/* kâğıttaki anlamsız yazı kâğıt tonu yamayla örtülür */}
        <div style={{ position: "absolute", left: 140, top: 748, width: 270, height: 100, borderRadius: 14, transform: "rotate(-7deg)",
          background: "#F2EBD7" }} />
        <Etiket t={t} bas={tAle} capa={[620, 420]} konum={[1000, 330]} metin="GINGER ALE" renk={RENK.altin} />
        <Etiket t={t} bas={tIng} capa={[330, 880]} konum={[800, 900]} metin="INGREDIENT LIST" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tThree} satirlar={s.meta.baslik!.satirlar} x={1860} y={290} boyut={96} hiza="sag" />
      <Not t={t} bas={tDrink} metin="A DRINK, NOT A DOSE" x={1860} y={520} hiza="sag" boyut={42} renk={RENK.mercan} agirlik={800} genislik={560} />
    </>
  );
};

export default S56;
