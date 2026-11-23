// Sahne 6 — üç soru: besin, kalıntı, sağlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1780])}>
        <Etiket t={t} bas={K(0, "nutritious")} capa={[400, 420]} konum={[360, 150]} metin="NUTRIENTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "residue")} capa={[900, 400]} konum={[900, 110]} metin="RESIDUE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "health")} capa={[640, 760]} konum={[1230, 890]} metin="YOUR HEALTH" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} satirlar={["THREE", "QUESTIONS"]} x={1860} y={200} boyut={100} hiza="sag" />
      <Liste t={t} x={1220} y={480} aralik={110} boyut={34} genislik={640} isaret="sayi" ogeler={[
        { bas: 0.1, metin: "MORE NUTRITIOUS?", renk: RENK.yesil },
        { bas: K(1, "Two"), metin: "LESS PESTICIDE RESIDUE?", renk: RENK.mercan },
        { bas: K(2, "Three"), metin: "CHANGES YOUR HEALTH?", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S06;
