// Sahne 50 — ONE: tarih kalite ipucudur.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSon = K(2, "USDA's");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])} />
      {/* vuruş 1: başlık */}
      <BolumBaslik t={t} bas={0.1} satirlar={b.satirlar} />
      {/* vuruş 2: üç tarih ifadesi */}
      <Liste t={t} isaret="nokta" x={1190} y={460} aralik={74} boyut={34} genislik={690} ogeler={[
        { bas: K(1, "best by"), metin: "BEST BY", renk: RENK.altin, bitis: tSon - 0.2 },
        { bas: K(1, "best if"), metin: "BEST IF USED BY", renk: RENK.altin, bitis: tSon - 0.2 },
        { bas: K(1, "sell by"), metin: "SELL BY", renk: RENK.altin, bitis: tSon - 0.2 },
      ]} />
      <Baslik t={t} bas={K(1, "quality hints")} bitis={tSon - 0.2} metin="= QUALITY HINTS" x={1190} y={720} boyut={44} renk={RENK.koyuYesil} font="inter" />
      {/* vuruş 3: USDA görüşü */}
      <Baslik t={t} bas={tSon} metin="THE USDA'S POSITION" x={1190} y={460} boyut={40} renk={RENK.altin} font="inter" aralik={2} />
      <Etiket t={t} bas={K(2, "ordinary foods")} bitis={K(2, "otherwise") - 0.2} capa={[470, 650]} konum={[800, 870]} metin="ORDINARY FOODS" renk={RENK.altin} />
      <Liste t={t} isaret="onay" x={1190} y={540} boyut={34} genislik={690} ogeler={[
        { bas: K(2, "wholesome"), metin: "WHOLESOME + SAFE", renk: RENK.yesil },
      ]} />
      <Liste t={t} isaret="carpi" x={1190} y={630} boyut={34} genislik={690} ogeler={[
        { bas: K(2, "thrown out"), metin: "TOSSED ONLY FOR THE DATE", renk: RENK.mercan },
      ]} />
    </>
  );
};

const BolumBaslik: React.FC<{ t: number; bas: number; satirlar: string[] }> = ({ t, bas, satirlar }) => (
  <BaslikBlok t={t} bas={bas} satirlar={satirlar} x={1860} y={250} boyut={92} hiza="sag" />
);

export default S50;
