// S39 — küçük denemeler, körleme belirsiz, tanım farkları
import React from "react";
import { BaslikBlok, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSmall = K(0, "small"), tBlind = K(0, "participants"), tDef = K(1, "Definitions"), tDiffer = K(1, "differed");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])} />
      <BaslikBlok t={t} bas={tSmall} bitis={8.0} satirlar={["SMALL TRIALS"]} x={70} y={130} boyut={100} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tBlind} bitis={8.0} satirlar={["BLINDING UNCLEAR"]} x={70} y={245} boyut={100} renkler={[RENK.mercan]} />
      <Not t={t} bas={tBlind + 0.5} bitis={8.0} metin="participants and researchers" x={76} y={330} boyut={34} />
      <BaslikBlok t={t} bas={tDef} satirlar={["INFECTION", "DEFINED DIFFERENTLY"]} x={70} y={130} boyut={100} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tDiffer} metin="differed between trials" x={76} y={345} boyut={34} />
    </>
  );
};
export default S39;
