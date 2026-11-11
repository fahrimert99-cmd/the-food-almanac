// Sahne 8 — AHA 2018 önerisi: haftada iki porsiyon, 3.5 oz.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800]);
  const gec = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kam}>
        <Etiket t={t} bas={K(1, "servings")} capa={[640, 500]} konum={[560, 170]} metin="ONE SERVING" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2018")} bitis={gec} metin="2018 ADVISORY" x={1860} y={330} boyut={30} hiza="sag" font="inter" aralik={5} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "one to two")} bitis={gec} metin="1–2 SEAFOOD" x={1860} y={410} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "meals")} bitis={gec} metin="MEALS A WEEK" x={1860} y={500} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "two servings")} metin="TWICE" x={1860} y={350} boyut={130} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "two servings") + 0.2} metin="A WEEK" x={1860} y={480} boyut={130} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "three and a half")} vurgu="3.5 OZ" not="per serving of non-fried fish" x={1640} y={600} genislik={420} />
    </>
  );
};
export default S08;
