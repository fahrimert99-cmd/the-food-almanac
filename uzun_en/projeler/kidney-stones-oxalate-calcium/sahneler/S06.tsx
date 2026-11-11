// S06 — ıspanak sepeti: oksalat bitkilerde, ıspanak %40+
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPl = K(0, "many"), tSp = K(1, "spinach"), t40 = K(1, "40"), tAny = K(1, "more than any");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800]);
  const son = tSp - 0.2;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={w}>
        <Etiket t={t} bas={tPl} bitis={son} capa={[400, 313]} konum={[900, 150]} metin="ALMONDS" renk={RENK.altin} />
        <Etiket t={t} bas={tPl + 0.35} bitis={son} capa={[867, 773]} konum={[1380, 800]} metin="BEET" renk={RENK.mercan} />
        <Etiket t={t} bas={tPl + 0.7} bitis={son} capa={[1000, 787]} konum={[1380, 900]} metin="POTATO" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tSp} metin="SPINACH" x={1230} y={220} boyut={130} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t40} vurgu="40%+" not="of the oxalate in the diets studied" x={1520} y={340} genislik={520} boyut={130} renk={RENK.yesil} />
      <Not t={t} bas={tAny} metin="more than any other food" x={1520} y={640} hiza="orta" boyut={36} genislik={560} agirlik={800} />
    </>
  );
};

export default S06;
