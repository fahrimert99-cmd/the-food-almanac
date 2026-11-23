// Sahne 51 — tek bir vaka raporu: neden kanıt değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAge = K(0, "80-year-old"), tGin = K(0, "ginger"), tRep = K(1, "single report"), tPh = K(1, "reason");
  const tSup = K(1, "supplements");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 110, 1680])}>
        <Etiket t={t} bas={tGin} bitis={10.9} capa={[740, 880]} konum={[1230, 900]} metin="GINGER + CINNAMON" renk={RENK.altin} />
        <Etiket t={t} bas={tSup} capa={[470, 820]} konum={[1100, 770]} metin="SUPPLEMENTS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="MEMORIAL SLOAN KETTERING" bas={0.1} bitis={10.9} />
      <VurguRozet t={t} bas={tAge} vurgu="80-YEAR-OLD" not="man on a blood thinner" x={1480} y={190} genislik={520} boyut={76} bitis={10.9} />
      <BaslikBlok t={t} bas={tRep} satirlar={s.meta.baslik!.satirlar} x={1860} y={280} boyut={96} hiza="sag" />
      <Not t={t} bas={tPh} metin="PHARMACISTS ASK ABOUT SUPPLEMENTS" x={1860} y={520} hiza="sag" boyut={38} agirlik={800} genislik={560} />
    </>
  );
};

export default S51;
