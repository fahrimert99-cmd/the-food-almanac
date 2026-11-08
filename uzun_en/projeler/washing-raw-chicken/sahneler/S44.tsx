// Sahne 44 — bağışıklığı zayıfsa doktora ya da eczacıya sor.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={K(0, "doctor")} capa={[853, 573]} konum={[560, 170]} metin="DOCTOR" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "pharmacist")} capa={[907, 380]} konum={[930, 170]} metin="PHARMACIST" renk={RENK.yesil} />
      </Kamera>
      <Liste t={t} x={1280} y={150} aralik={100} boyut={34} genislik={600} isaret="nokta" ogeler={[
        { bas: K(0, "weakened"), metin: "WEAKENED IMMUNE SYSTEM", renk: RENK.altin },
        { bas: K(0, "medicines"), metin: "MEDICINES THAT WEAKEN IT", renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(0, "ask")} satirlar={["SAFETY", "FIRST"]} x={1280} y={470} boyut={112} />
      <Not t={t} bas={K(0, "extra")} metin="Ask about extra precautions" x={1280} y={760} boyut={32} genislik={580} />
    </>
  );
};

export default S44;
