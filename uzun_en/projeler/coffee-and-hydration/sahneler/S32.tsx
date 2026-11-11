// Sahne 32 — tolerans: büyük dozda kısa artış, düzenli içicide çok küçük etki.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pP = eout(ilerle(t, 0.2, 0.7));
  const tUzun = K(2, "A");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "brief")} capa={[700, 300]} konum={[930, 170]} metin="BRIEF RISE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "large")} capa={[430, 480]} konum={[215, 215]} metin="LARGE DOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "much")} capa={[1040, 648]} konum={[1020, 790]} metin="MUCH SMALLER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "drink")} capa={[790, 690]} konum={[600, 880]} metin="REGULAR DRINKERS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={800} />
      <Baslik t={t} bas={K(0, "picture")} metin="TOLERANCE" x={1560} y={230} boyut={124} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "consistent.")} metin="A CONSISTENT PICTURE" x={1560} y={320} boyut={34} agirlik={800} hiza="orta" genislik={560} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "people")} bitis={tUzun - 0.1} metin="LARGE DOSE · RARELY HAVE CAFFEINE" x={1560} y={470} boyut={36} agirlik={800} hiza="orta" genislik={560} renk={RENK.mercan} />
      <Not t={t} bas={tUzun} metin="REGULAR COFFEE DRINKERS: MUCH SMALLER EFFECT" x={1560} y={470} boyut={36} agirlik={800} hiza="orta" genislik={560} renk={RENK.yesil} />
    </>
  );
};

export default S32;
