// Sahne 11 — WHO'nun ana tavsiyesinin dışında kalan tatlandırıcı ailesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFam = K(0, "family"), tWho = K(0, "World Health"), tLeft = K(0, "left out"), tSep = K(1, "separate");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [200, 20, 1560], [260, 70, 1420])} />
      <Etiket t={t} bas={tFam} bitis={tLeft - 0.2} capa={[1020, 520]} konum={[1500, 520]} metin="ONE SWEETENER FAMILY" renk={RENK.altin} />
      <BaslikBlok t={t} bas={tWho} satirlar={["WORLD HEALTH", "ORGANIZATION"]} x={90} y={330} boyut={66} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={tLeft} capa={[1130, 200]} konum={[1520, 170]} metin="LEFT OUT OF ADVICE" renk={RENK.mercan} />
      <Etiket t={t} bas={tSep} capa={[1190, 860]} konum={[1530, 800]} metin="SEPARATE STORY" renk={RENK.yesil} />
    </>
  );
};

export default S11;
