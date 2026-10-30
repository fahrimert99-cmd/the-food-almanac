// Sahne 46 — üç mit
import React from "react";
import { Baslik, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <Baslik t={t} bas={K(0, "here's")} metin="THREE MYTHS" x={1860} y={230} boyut={104} hiza="sag" renk={RENK.mercan} />
      <Liste t={t} isaret="carpi" x={1400} y={400} aralik={100} boyut={30} genislik={480} ogeler={[
        { bas: K(1, "avoid"), metin: "AVOID ALL GREENS", renk: RENK.mercan },
        { bas: K(2, "greens"), metin: "GREENS STOP WARFARIN", renk: RENK.mercan },
        { bas: K(3, "change"), metin: "CHANGE DRUGS FOR FOOD", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S46;
