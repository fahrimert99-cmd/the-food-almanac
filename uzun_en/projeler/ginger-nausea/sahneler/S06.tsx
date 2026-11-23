// Sahne 6 — beş ürün, aynı ad
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(0, "fresh")} capa={[690, 800]} konum={[880, 910]} metin="FRESH ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "tea")} capa={[800, 430]} konum={[1060, 280]} metin="TEA BAGS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "chews,")} capa={[1100, 700]} konum={[1450, 600]} metin="CHEWS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "capsules")} capa={[310, 700]} konum={[170, 300]} metin="CAPSULES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "ale.") - 0.2} capa={[545, 240]} konum={[330, 140]} metin="GINGER ALE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "different")} satirlar={["SAME NAME,", "DIFFERENT THINGS"]} x={1860} y={140} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "matters")} metin="that difference matters later" x={1860} y={350} hiza="sag" genislik={640} boyut={38} agirlik={800} />
    </>
  );
};

export default S06;
