// Sahne 26 — iki tabak: taze domates ve salça; aynı 23 mg likopen, 15 g mısır yağı ile.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIns = K(0, "people");
  const tYil = K(1, "1997");
  const tMg = K(1, "23");
  const tTaze = K(1, "fresh tomatoes");
  const tSalca = K(1, "tomato paste");
  const tYag = K(1, "15");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [160, 100, 1600])}>
        <Etiket t={t} bas={tTaze} capa={[480, 600]} konum={[400, 810]} metin="FRESH TOMATOES" renk={RENK.mercan} />
        <Etiket t={t} bas={tSalca} capa={[1400, 520]} konum={[1440, 810]} metin="TOMATO PASTE" renk={RENK.mercan} />
        <Etiket t={t} bas={tYag} capa={[980, 560]} konum={[960, 810]} metin="15 G CORN OIL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tIns} bitis={3.2} metin="PEOPLE TESTED" x={960} y={100} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tYil} />
      <VurguRozet t={t} bas={tMg} vurgu="23 MG" not="same lycopene dose" x={960} y={36} boyut={72} genislik={340} />
    </>
  );
};

export default S26;
