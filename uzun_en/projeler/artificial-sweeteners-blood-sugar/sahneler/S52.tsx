// Sahne 52 — Nokta 2: normal sodanın yerine diyet; ADA, ılımlılık ve kısa vade.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSwap = K(1, "swapping"), tReg = K(1, "regular"), tSugar = K(1, "sugar");
  const tAda = K(2, "ADA"), tCal = K(2, "calories"), tCarb = K(2, "carbohydrates"), tMod = K(2, "moderation"), tShort = K(2, "short");
  const tFade = tAda - 0.15;
  const [sp, ap] = pop(t, tAda, 0.5);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [60, 60, 1760])}>
        <Etiket t={t} bas={tReg} bitis={tFade} capa={[610, 420]} konum={[1230, 250]} metin="REGULAR SODA" renk={RENK.mercan} />
        <Etiket t={t} bas={tSugar} bitis={tFade} capa={[900, 660]} konum={[1250, 470]} metin="SUGAR" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0} metin="POINT 2" x={1860} y={640} boyut={34} renk={RENK.altin} hiza="sag" font="inter" agirlik={800} aralik={6} />
      <BaslikBlok t={t} bas={tSwap} satirlar={["A SWAP,", "IN MODERATION"]} x={1860} y={730} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* ADA listesi */}
      <div style={{ position: "absolute", left: 1180, top: 150, opacity: ap, transform: `scale(${sp})`, transformOrigin: "0 50%" }}>
        <Hap metin="THE ADA SAYS" renk={RENK.lacivert} boyut={30} />
      </div>
      <Liste t={t} x={1180} y={240} aralik={92} boyut={36} isaret="onay" genislik={680} ogeler={[
        { bas: tCal - 0.1, metin: "CUTS CALORIES" },
        { bas: tCarb - 0.1, metin: "CUTS CARBOHYDRATES" },
        { bas: tMod - 0.1, metin: "IN MODERATION", renk: RENK.altin },
        { bas: tShort - 0.1, metin: "FOR THE SHORT TERM", renk: RENK.altin },
      ]} />
    </>
  );
};
export default S52;
