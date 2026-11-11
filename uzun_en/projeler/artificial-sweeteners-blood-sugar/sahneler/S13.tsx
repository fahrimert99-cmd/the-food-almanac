// Sahne 13 — Nichol 2018 meta-analizi: 29 deneme, 741 kişi, dört tatlandırıcı.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2018 = K(0, "2018,"), tNichol = K(0, "Nichol"), t29 = K(0, "29"), t741 = K(0, "741"), tRand = K(0, "randomized");
  const tSw = K(1, "sweeteners"), tAsp = K(1, "aspartame,"), tSac = K(1, "saccharin,"), tStev = K(1, "stevioside,"), tSuc = K(1, "sucralose.");
  const bit = tSw - 0.2;
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 70, 1780])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={t2018} bitis={bit} metin="2018" x={1860} y={230} boyut={110} renk={RENK.altin} hiza="sag" />
      <Not t={t} bas={tNichol} bitis={bit} metin="LED BY ALEXANDER NICHOL" x={1860} y={310} boyut={34} agirlik={800} hiza="sag" />
      <Baslik t={t} bas={t29} bitis={bit} metin="29 TRIALS" x={1860} y={480} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={t741} bitis={bit} metin="741 PEOPLE" x={1860} y={600} boyut={110} renk={RENK.koyuYesil} hiza="sag" />
      <Etiket t={t} bas={tRand} bitis={bit} capa={[430, 330]} konum={[820, 120]} metin="RANDOMIZED TRIALS" renk={RENK.altin} />
      {/* ikinci cümle: dahil edilen tatlandırıcılar */}
      <Baslik t={t} bas={tSw} metin="SWEETENERS INCLUDED" x={1150} y={250} boyut={64} renk={RENK.lacivert} />
      <Liste t={t} x={1150} y={330} aralik={100} boyut={42} isaret="nokta" genislik={640} ogeler={[
        { bas: tAsp, metin: "ASPARTAME", renk: RENK.altin },
        { bas: tSac, metin: "SACCHARIN", renk: RENK.mercan },
        { bas: tStev, metin: "STEVIOSIDE", renk: RENK.yesil },
        { bas: tSuc - 0.1, metin: "SUCRALOSE", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S13;
