// Sahne 46 — üç: belirtiler. Başlık ve belirti listesi sağ boşlukta.
import React from "react";
import { BaslikBlok, Kamera, kameraYolu, Liste, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1760])} />
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik!.satirlar} x={1000} y={200} boyut={120} />
      <Liste t={t} x={1000} y={480} aralik={100} boyut={44} isaret="nokta" genislik={860}
        ogeler={[
          { bas: K(1, "numb"), metin: "NUMB OR TINGLING", renk: RENK.altin },
          { bas: K(1, "balance"), metin: "BALANCE TROUBLE", renk: RENK.altin },
          { bas: K(1, "new"), metin: "NEW MEMORY PROBLEMS", renk: RENK.altin },
        ]} />
      <Not t={t} bas={K(2, "strict")} metin="STRICT VEGETARIANS AND VEGANS: ASK TOO" x={1000} y={800} boyut={36} genislik={900}
        agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S46;
