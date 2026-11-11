// Sahne 53 — özet: fincan ortada; solda "hafif diüretik" + koşullar, sağda "alışma".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gecis = K(1, "Regular") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <BaslikBlok t={t} bas={K(0, "mild") - 0.2} satirlar={["MILD", "DIURETIC"]} x={70} y={190} boyut={104} />
      <Liste t={t} isaret="nokta" x={70} y={470} aralik={86} boyut={32} genislik={480} ogeler={[
        { bas: K(0, "large"), metin: "LARGE DOSES", renk: RENK.altin },
        { bas: K(0, "rarely"), metin: "RARELY HAVE IT", renk: RENK.altin },
      ]} />
      <Etiket t={t} bas={K(0, "Caffeine")} bitis={gecis} capa={[960, 440]} konum={[1250, 330]} metin="CAFFEINE" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "Regular")} satirlar={["REGULAR", "DRINKERS ADAPT"]} x={1860} y={170} boyut={84} hiza="sag" />
      <Not t={t} bas={K(1, "shrinks.")} metin="EFFECT SHRINKS" x={1860} y={400} hiza="sag" genislik={700} boyut={44} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S53;
