// Sahne 16 — günlük C vitamini: soğuk algınlığı sayısında net düşüş yok. Sağda başlık, kasede etiket.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrt = K(0, "most people"), tC = K(0, "vitamin C"), tYok = K(0, "did not");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])} />
      <Etiket t={t} bas={tC} capa={[780, 700]} konum={[1070, 760]} metin="ORANGES" renk={RENK.altin} />
      <BaslikBlok t={t} bas={tOrt} satirlar={["DAILY VITAMIN C"]} x={1110} y={300} boyut={92} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={tYok} satirlar={["NO CLEAR DROP"]} x={1110} y={410} boyut={92} renkler={[RENK.mercan]} />
    </>
  );
};

export default S16;
