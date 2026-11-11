// Sahne 19 — 170 lb kişi için 77–93 g ile 62 g karşılaştırması (uzun yığın / kısa yığın)
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tKisi = K(0, "170");
  const tUzun = K(0, "77");
  const tKisa = K(0, "62");
  const tIzin = K(0, "official");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1820])} />
      <Panel a={1} taraf="sag" genislik={900} opak={1} />
      <Baslik t={t} bas={tKisi} metin="FOR A 170-POUND PERSON" x={1600} y={190} boyut={34} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={2} />
      <Etiket t={t} bas={tUzun} capa={[830, 300]} konum={[1180, 330]} metin="77–93 G" renk={RENK.koyuYesil} boyut={32} />
      <Etiket t={t} bas={tKisa} capa={[230, 600]} konum={[250, 440]} metin="62 G" renk={RENK.mercan} boyut={32} />
      <BaslikBlok t={t} bas={tKisa} satirlar={b.satirlar} x={1600} y={600} boyut={104} hiza="orta" renkler={[RENK.mercan, RENK.koyuYesil]} />
      <Not t={t} bas={tIzin} metin="62 g = official allowance" x={1600} y={810} hiza="orta" boyut={30} agirlik={800} />
    </>
  );
};

export default S19;
