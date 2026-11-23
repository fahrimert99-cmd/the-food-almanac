// Sahne 51 — adım 1: yiyecek ve belirti günlüğü.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800]);
  const tY = K(2, "Write") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kam}>
        <Etiket t={t} bas={K(1, "food and symptom diary")} bitis={tY} capa={[520, 520]} konum={[300, 170]} metin="FOOD & SYMPTOM DIARY" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "what you ate")} bitis={K(3, "Then") - 0.2} capa={[1300, 640]} konum={[1380, 860]} metin="WHAT YOU ATE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "how you felt")} bitis={K(3, "Then") - 0.2} capa={[560, 700]} konum={[420, 900]} metin="HOW YOU FELT" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "One.")} bitis={K(3, "Then") - 0.1} metin="STEP ONE" x={1860} y={150} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "two weeks")} bitis={tY} vurgu="2 WEEKS" not="before changing anything" x={1000} y={40} genislik={420} boyut={84} />
      <Baslik t={t} bas={K(3, "bring it")} metin="BRING IT TO YOUR DOCTOR" x={960} y={110} boyut={70} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};
export default S51;
