// Sahne 50 — Genişletilmiş göz muayenesi: koltuk ortada, yazılar iki yanda.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, Not } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPlate = K(0, "isn't on your plate"), tEx = K(1, "dilated"), tAge = K(2, "over 55"), tAsk = K(2, "ask");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={tPlate} bitis={tEx} capa={[1230, 520]} konum={[1380, 330]} metin="NOT ON YOUR PLATE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tEx} satirlar={["DILATED", "EYE EXAM"]} x={70} y={330} boyut={100} />
      <VurguRozet t={t} bas={tAge} vurgu="OVER 55" not="" x={1670} y={300} genislik={340} boyut={80} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAsk} metin="Ask your eye doctor how often" x={1510} y={470} genislik={320} boyut={30} />
    </>
  );
};

export default S50;
