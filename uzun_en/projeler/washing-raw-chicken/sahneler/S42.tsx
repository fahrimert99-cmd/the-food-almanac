// Sahne 42 — susuzluk ve yaş.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "dehydration")} capa={[380, 720]} konum={[230, 900]} metin="DEHYDRATION" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} x={1330} y={140} aralik={96} boyut={38} genislik={540} isaret="nokta" ogeler={[
        { bas: K(0, "diarrhea"), metin: "DIARRHEA", renk: RENK.mercan },
        { bas: K(0, "vomiting"), metin: "VOMITING", renk: RENK.mercan },
        { bas: K(0, "dehydration"), metin: "DEHYDRATION", renk: RENK.mercan },
      ]} />
      <Baslik t={t} bas={K(1, "harder")} metin="HITS HARDER" x={1320} y={620} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "after sixty")} metin="AFTER 60" x={1320} y={740} boyut={104} renk={RENK.koyuYesil} />
    </>
  );
};

export default S42;
