// Sahne 21 — iki dakikalık hafif yürüyüşler: glikoz yükselişi -%24, insülin -%23
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSit = K(0, "sitting"), tLight = K(0, "light"), t24 = K(0, "24"), t23 = K(0, "23");
  const tMov = K(1, "movement,"), tOften = K(1, "often,"), tMeas = K(1, "measurable");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={tSit} bitis={3.0} capa={[1650, 640]} konum={[1420, 480]} metin="SITTING" renk={RENK.mercan} />
        <Etiket t={t} bas={tLight} capa={[1230, 800]} konum={[1130, 690]} metin="LIGHT WALKS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tLight + 0.2} satirlar={b.satirlar} x={140} y={200} boyut={120} />
      <VurguRozet t={t} bas={t24 - 0.1} vurgu={b.vurgu!} not="GLUCOSE RISE" x={310} y={440} genislik={400} boyut={104} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t23 - 0.1} vurgu="–23%" not="INSULIN" x={730} y={440} genislik={400} boyut={104} renk={RENK.altin} />
      <Baslik t={t} bas={tMov} metin="A LITTLE MOVEMENT," x={140} y={760} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={tOften} metin="OFTEN" x={140} y={838} boyut={64} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tMeas} metin="= MEASURABLE DIFFERENCE" x={140} y={916} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S21;
