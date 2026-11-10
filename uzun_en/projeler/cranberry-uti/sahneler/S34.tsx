// S34 — kokteylin şekeri: 25 g, 23 g eklenmiş, ~6 çay kaşığı
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSugar = K(0, "sugar"), tCal = K(1, "110"), tGram = K(1, "25 grams"), tAdd = K(1, "23"), tSix = K(2, "six teaspoons");
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [0, 80, 1700])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Etiket t={t} bas={tSugar} bitis={4.7} capa={[480, 790]} konum={[1080, 800]} metin="SUGAR" renk={RENK.altin} />
      <Etiket t={t} bas={tCal} bitis={6.0} capa={[560, 420]} konum={[1090, 330]} metin="110 CALORIES" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tGram} satirlar={b.satirlar} x={1860} y={210} boyut={112} hiza="sag" />
      <Not t={t} bas={tGram + 0.5} metin="8 oz of one popular cranberry juice cocktail" x={1860} y={440} hiza="sag" genislik={640} boyut={30} />
      <VurguRozet t={t} bas={tAdd} vurgu="23 g" not="of it added" x={1560} y={520} genislik={360} boyut={84} renk={RENK.mercan} />
      <VurguRozet t={t} bas={tSix} vurgu="≈ 6 TEASPOONS" not="of sugar in one glass" x={1480} y={730} genislik={600} boyut={78} />
    </>
  );
};
export default S34;
