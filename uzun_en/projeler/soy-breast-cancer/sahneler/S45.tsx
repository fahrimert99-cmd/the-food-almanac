// Sahne 45 — belirsiz olan: nedensellik.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Baslik t={t} bas={K(0, "uncertain:")} metin="UNCERTAIN" x={100} y={210} boyut={130} renk={RENK.altin} />
      <Not t={t} bas={K(0, "whether")} metin="WHETHER SOY ACTUALLY CAUSES THE BENEFIT" x={100} y={300} genislik={520} boyut={36} agirlik={800} />
      <Liste t={t} isaret="sayi" x={1330} y={380} aralik={104} boyut={28} genislik={550} ogeler={[
        { bas: K(1, "Healthier"), metin: "HEALTHIER HABITS", renk: RENK.altin },
        { bas: K(1, "differences"), metin: "TREATMENT DIFFERENCES", renk: RENK.altin },
        { bas: K(1, "how"), metin: "HOW INTAKE WAS MEASURED", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S45;
