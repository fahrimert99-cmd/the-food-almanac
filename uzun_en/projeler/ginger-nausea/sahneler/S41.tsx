// Sahne 41 — kanama riski: takviye, varfarin, aspirin
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSup = K(0, "supplements"), tRisk = K(0, "risk"), tWar = K(1, "warfarin"), tAsp = K(1, "aspirin");
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 90, 1800], [40, 110, 1700])}>
        <Etiket t={t} bas={tSup} bitis={tRisk + 3.5} capa={[940, 560]} konum={[1300, 400]} metin="SUPPLEMENTS" renk={RENK.altin} />
        <Etiket t={t} bas={tWar} capa={[260, 500]} konum={[250, 215]} metin="WARFARIN" renk={RENK.mercan} />
        <Etiket t={t} bas={tAsp} capa={[600, 430]} konum={[640, 150]} metin="ASPIRIN" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tRisk} satirlar={["BLEEDING", "RISK?"]} x={1860} y={600} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};
export default S41;
