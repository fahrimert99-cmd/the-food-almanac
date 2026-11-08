// Sahne 3 — videonun sonunda neyi bilecekleri: iki madde + iki etiket.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEnd = K(0, "end");
  const tWhat = K(0, "what");
  const tWho = K(0, "who");
  const tDoc = K(0, "doctor");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [60, 60, 1740])}>
        <Etiket t={t} bas={K(0, "banana")} capa={[560, 400]} konum={[760, 170]} metin="BANANA" renk={RENK.altin} />
        <Etiket t={t} bas={tDoc} capa={[1533, 725]} konum={[1450, 590]} metin="ASK A DOCTOR" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tEnd - 0.1} metin="BY THE END" x={1160} y={210} boyut={96} renk={RENK.koyuYesil} />
      <Liste t={t} x={1110} y={310} boyut={34} aralik={92} genislik={780} ogeler={[
        { bas: tWhat, metin: "WHAT A BANANA GIVES", renk: RENK.altin },
        { bas: tWho, metin: "WHO ASKS A DOCTOR FIRST", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S03;
