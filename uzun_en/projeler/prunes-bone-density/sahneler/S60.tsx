// Sahne 60 — özet: dikkat edilecekler. Kasedeki erik üzerinde üç etiket, sonra ilaç kutusu.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCatch = K(0, "catches"), tSor = K(0, "sorbitol"), tSug = K(0, "sugar"), tPot = K(0, "potassium"), tVit = K(0, "vitamin"), tWar = K(0, "warfarin");
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Etiket t={t} bas={tSor} bitis={tVit - 0.1} capa={[430, 490]} konum={[330, 190]} metin="SORBITOL" renk={RENK.altin} />
        <Etiket t={t} bas={tSug} bitis={tVit - 0.1} capa={[570, 390]} konum={[640, 190]} metin="SUGAR" renk={RENK.mercan} />
        <Etiket t={t} bas={tPot} bitis={tVit - 0.1} capa={[780, 430]} konum={[950, 190]} metin="POTASSIUM" renk={RENK.yesil} />
        <Etiket t={t} bas={tVit} capa={[700, 470]} konum={[640, 190]} metin="VITAMIN K" renk={RENK.yesil} />
        <Etiket t={t} bas={tWar} capa={[1480, 770]} konum={[1580, 540]} metin="WARFARIN" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tCatch} metin="THE CATCHES" x={1860} y={170} boyut={90} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S60;
