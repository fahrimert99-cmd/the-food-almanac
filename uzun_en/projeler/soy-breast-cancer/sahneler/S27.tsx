// Sahne 27 — 3 mg ile 46 mg: solda yemek etiketleri, sağda çubuk grafik.
import React from "react";
import { Baslik, CubukGrafik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUs = K(1, "US"), tAbout1 = K(1, "about"), tAbout2 = K(2, "about");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1780])} />
      <Panel a={eout(ilerle(t, 0.1, 0.7))} taraf="sag" genislik={900} />
      <Etiket t={t} bas={K(0, "much")} capa={[480, 790]} konum={[300, 900]} metin="TOFU" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "soy")} capa={[360, 310]} konum={[230, 90]} metin="EDAMAME" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "eat")} capa={[780, 300]} konum={[900, 110]} metin="MISO" renk={RENK.altin} />
      <Baslik t={t} bas={tUs} metin="3 MG VS 46 MG" x={1500} y={220} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tUs + 0.35} metin="ISOFLAVONES A DAY, US VS SHANGHAI SURVIVORS" x={1500} y={280} hiza="orta" genislik={560} boyut={28} agirlik={800} />
      <CubukGrafik t={t} bas={tAbout1 - 0.2} x={1220} y={440} w={560} h={330}
        cubuklar={[
          { etiket: "US", deger: 3, metin: "3", renk: RENK.altin, bas: tAbout1 - 0.2 },
          { etiket: "SHANGHAI", deger: 46, metin: "46", renk: RENK.yesil, bas: tAbout2 - 0.2 },
        ]} />
    </>
  );
};

export default S27;
