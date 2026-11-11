// Sahne 33 — Bağırsak: kürkümin zor emilir; sağda başlık ve üç neden.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800]);
  const pPan = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/33" pencere={pencere}>
        <Etiket t={t} bas={K(1, "very little")} capa={[655, 533]} konum={[700, 70]} metin="VERY LITTLE GETS THROUGH" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={900} />
      <BaslikBlok t={t} bas={K(0, "hard for")} satirlar={["HARD TO", "ABSORB"]} x={1070} y={220} boyut={110} />
      <Liste t={t} x={1070} y={500} aralik={104} boyut={36} genislik={760} ogeler={[
        { bas: K(1, "poor uptake"), metin: "POOR UPTAKE", renk: RENK.mercan },
        { bas: K(1, "quick breakdown"), metin: "QUICK BREAKDOWN", renk: RENK.mercan },
        { bas: K(1, "fast removal"), metin: "FAST REMOVAL", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S33;
