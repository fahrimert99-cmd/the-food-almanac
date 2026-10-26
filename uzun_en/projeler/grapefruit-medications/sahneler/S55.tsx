// Sahne 55 — Adım 4: daha güvenli lezzet — portakal, sudaki limon; "narenciyeyi tutarsın, endişeyi bırakırsın".
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [40, 0, 1840], [100, 40, 1720]);
  const tPort = K(2, "orange");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={pencere}>
        <Etiket t={t} bas={tPort} capa={[845, 640]} konum={[820, 190]} metin="ORANGE AT BREAKFAST" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(2, "lemon")} capa={[1230, 470]} konum={[1500, 430]} metin="LEMON IN WATER" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.0} bitis={tPort - 0.1} metin="STEP 4" x={140} y={80} boyut={32} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(1, "Swap")} bitis={tPort - 0.1} metin="SWAP IN A SAFER FLAVOR" x={140} y={165} boyut={90} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "keep")} metin="KEEP THE CITRUS." x={1860} y={175} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(3, "lose")} metin="LOSE THE WORRY." x={1860} y={270} boyut={80} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S55;
