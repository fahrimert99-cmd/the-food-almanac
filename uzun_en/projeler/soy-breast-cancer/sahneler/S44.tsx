// Sahne 44 — iyi desteklenen bulgular.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1790])}>
        <Etiket t={t} bas={K(0, "soy")} bitis={K(0, "has") + 0.8} capa={[600, 690]} konum={[560, 900]} metin="TOFU" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "well")} satirlar={["WELL", "SUPPORTED"]} x={1860} y={170} boyut={118} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} isaret="onay" x={1240} y={470} aralik={104} boyut={32} genislik={640} ogeler={[
        { bas: K(0, "higher"), metin: "NO HIGHER RISK" },
        { bas: K(0, "recurrence."), metin: "NO HIGHER RECURRENCE" },
        { bas: K(1, "lower"), metin: "LOWER RECURRENCE", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S44;
