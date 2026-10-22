// Sahne 42 — şekersiz lezzet: kâse üzerindeki malzemeler sırayla etiketlenir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <BaslikBlok t={t} bas={K(0, "flavor")} satirlar={s.meta.baslik!.satirlar} x={1860} y={790} boyut={96} hiza="sag" />
      <Etiket t={t} bas={K(1, "Berries")} capa={[775, 418]} konum={[1330, 200]} metin="BERRIES" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "banana")} capa={[690, 345]} konum={[1330, 300]} metin="SLICED BANANA" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "nuts")} capa={[830, 470]} konum={[1330, 400]} metin="CHOPPED NUTS" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "cinnamon")} capa={[1000, 390]} konum={[1330, 500]} metin="CINNAMON" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "plain")} capa={[960, 810]} konum={[1330, 640]} metin="PLAIN YOGURT" renk={RENK.yesil} />
    </>
  );
};

export default S42;
