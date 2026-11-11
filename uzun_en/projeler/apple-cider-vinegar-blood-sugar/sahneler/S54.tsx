// Sahne 54 — toplu incelemeler: ılımlı etki; küçük, kısa denemeler, çok düşük kesinlik. Solda üst boşlukta yazılar.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS2 = K(1, "but") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "pooled")} bitis={tS2} capa={[900, 540]} konum={[920, 330]} metin="POOLED REVIEWS" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "modest")} bitis={tS2} metin="MODEST EFFECT" x={110} y={125} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "bigger")} bitis={tS2} metin="BIGGER IN PEOPLE WITH" x={114} y={205} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={110} y={262} aralik={84} boyut={38} isaret="nokta" genislik={640} ogeler={[
        { bas: K(0, "diabetes"), metin: "DIABETES", renk: RENK.yesil, bitis: tS2 },
        { bas: K(0, "prediabetes"), metin: "PREDIABETES", renk: RENK.yesil, bitis: tS2 },
      ]} />
      <Liste t={t} x={110} y={130} aralik={84} boyut={38} isaret="nokta" genislik={640} ogeler={[
        { bas: K(1, "small"), metin: "SMALL TRIALS", renk: RENK.altin },
        { bas: K(1, "short"), metin: "SHORT TRIALS", renk: RENK.altin },
      ]} />
      <VurguRozet t={t} bas={K(1, "very")} vurgu="VERY LOW" not="CERTAINTY OF THE EVIDENCE" x={340} y={330} renk={RENK.mercan} genislik={480} />
    </>
  );
};

export default S54;
