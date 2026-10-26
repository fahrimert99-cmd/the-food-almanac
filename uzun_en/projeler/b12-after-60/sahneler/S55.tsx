// Sahne 55 — Ne zaman kan testi sorulmalı.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        <Etiket t={t} bas={K(0, "blood test")} capa={[1335, 560]} konum={[1500, 250]} metin="SIMPLE BLOOD TEST" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "ask")} capa={[1130, 800]} konum={[1000, 900]} metin="ASK YOUR DOCTOR" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={760} />
      <Baslik t={t} bas={0.3} metin="ASK ABOUT A TEST IF" x={70} y={190} boyut={34} renk={RENK.altin} font="inter" aralik={4} />
      <Liste t={t} x={70} y={250} aralik={112} boyut={36} isaret="nokta" genislik={640} ogeler={[
        { bas: K(0, "take these"), metin: "YOU TAKE THESE MEDICINES", renk: RENK.altin },
        { bas: K(0, "tingling"), metin: "TINGLING", renk: RENK.mercan },
        { bas: K(0, "balance"), metin: "BALANCE TROUBLE", renk: RENK.mercan },
        { bas: K(0, "memory"), metin: "MEMORY SLIPS THAT STAY", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S55;
