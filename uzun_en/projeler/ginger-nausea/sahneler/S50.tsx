// Sahne 50 — standart ürün yok: farklı ürünler, dozlar, programlar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProb = K(0, "practical problem"), tProd = K(1, "products,"), tDoz = K(1, "doses"), tSch = K(1, "schedules,");
  const tStd = K(1, "standardized"), tPrec = K(2, "precise");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 60, 1800], [60, 100, 1620])}>
        {/* kapsül kavanozundaki anlamsız etiket yazısı örtülür */}
        <div style={{ position: "absolute", left: 1066, top: 598, width: 196, height: 192, borderRadius: 10, background: "#F4F0E6" }} />
        <Etiket t={t} bas={tProd} bitis={8.6} capa={[560, 800]} konum={[900, 905]} metin="FRESH ROOT" renk={RENK.yesil} />
        <Etiket t={t} bas={tDoz} bitis={8.6} capa={[1140, 700]} konum={[1500, 860]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <Not t={t} bas={tProb} metin="A PRACTICAL PROBLEM" x={1860} y={190} hiza="sag" boyut={30} renk={RENK.altin} agirlik={800} bitis={8.6} />
      <Liste t={t} isaret="nokta" x={1440} y={290} aralik={78} boyut={28} genislik={440}
        ogeler={[
          { bas: tProd, metin: "DIFFERENT PRODUCTS", renk: RENK.altin, bitis: 8.6 },
          { bas: tDoz, metin: "DIFFERENT DOSES", renk: RENK.altin, bitis: 8.6 },
          { bas: tSch, metin: "DIFFERENT SCHEDULES", renk: RENK.altin, bitis: 8.6 },
        ]} />
      <BaslikBlok t={t} bas={tStd} satirlar={s.meta.baslik!.satirlar} x={1860} y={300} boyut={92} hiza="sag" />
      <Not t={t} bas={tPrec} metin="PRECISE ADVICE IS HARD" x={1860} y={560} hiza="sag" boyut={36} renk={RENK.mercan} agirlik={800} genislik={420} />
    </>
  );
};

export default S50;
