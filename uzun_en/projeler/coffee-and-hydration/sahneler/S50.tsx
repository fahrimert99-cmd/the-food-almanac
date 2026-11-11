// Sahne 50 — güvenlik notu: başlık + iki grup madde, steteskop ve fincan etiketleri.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gecis = K(2, "And") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(1, "ask")} bitis={gecis} capa={[400, 600]} konum={[330, 830]} metin="ASK YOUR PROVIDER" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "caffeine")} capa={[800, 430]} konum={[1040, 300]} metin="CAFFEINE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "safety") - 0.1} satirlar={["SAFETY", "FIRST"]} x={1860} y={190} boyut={120} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1120} y={470} aralik={92} boyut={36} genislik={740} ogeler={[
        { bas: K(1, "pregnant,"), metin: "PREGNANT", bitis: gecis, renk: RENK.altin },
        { bas: K(1, "trying"), metin: "TRYING TO BECOME PREGNANT", bitis: gecis, renk: RENK.altin },
        { bas: K(1, "breastfeeding,"), metin: "BREASTFEEDING", bitis: gecis, renk: RENK.altin },
      ]} />
      <Liste t={t} isaret="nokta" x={1120} y={470} aralik={92} boyut={36} genislik={740} ogeler={[
        { bas: K(2, "condition"), metin: "MEDICAL CONDITION", renk: RENK.yesil },
        { bas: K(2, "medication,"), metin: "TAKING MEDICATION", renk: RENK.yesil },
      ]} />
      <Not t={t} bas={K(2, "ask")} metin="Ask whether caffeine suits you" x={1860} y={800} hiza="sag" genislik={740} boyut={36} agirlik={800} />
    </>
  );
};

export default S50;
