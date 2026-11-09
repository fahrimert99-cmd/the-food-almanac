// Sahne 27 — Sınırlama: defter = öz bildirim, sofra tuzu %5–6 dışarıda; sonuç: paketli + restoran yemeği.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSelf = K(0, "self-reported"), tLeft = K(0, "left out"), tFive = K(0, "five to six");
  const tPack = K(2, "Packaged"), tRest = K(2, "restaurant");
  const pPanel = eout(ilerle(t, tPack - 0.15, 0.6));
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={tSelf} bitis={tLeft - 0.1} capa={[667, 600]} konum={[800, 130]} metin="SELF-REPORTED MEALS" renk={RENK.altin} />
        <Etiket t={t} bas={tPack} capa={[1253, 450]} konum={[1100, 110]} metin="PACKAGED FOOD" renk={RENK.mercan} />
        <Etiket t={t} bas={tRest} capa={[1480, 800]} konum={[1640, 230]} metin="RESTAURANT FOOD" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={tFive} bitis={tPack - 0.2} vurgu="5–6%" not="TABLE SALT, LEFT OUT" x={330} y={120} genislik={420} boyut={110} />
      <Panel a={pPanel} taraf="sol" genislik={860} />
      <BaslikBlok t={t} bas={tPack + 0.1} satirlar={["MOST SODIUM", "COMES FROM"]} x={70} y={330} boyut={92}
        renkler={[RENK.lacivert, RENK.lacivert]} />
      <BaslikBlok t={t} bas={tPack + 0.55} satirlar={["PACKAGED +", "RESTAURANT"]} x={70} y={560} boyut={92}
        renkler={[RENK.mercan, RENK.mercan]} />
    </>
  );
};
export default S27;
