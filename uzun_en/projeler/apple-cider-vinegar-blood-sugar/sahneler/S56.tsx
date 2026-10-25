// Sahne 56 — kapanış önerileri: seyreltin, nişastalı öğünle, tablet değil, doktora söyleyin.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])} />
      <Liste t={t} x={140} y={130} aralik={84} boyut={42} isaret="onay" genislik={900} ogeler={[
        { bas: K(0, "dilute it"), metin: "DILUTE IT" },
        { bas: K(0, "pair it"), metin: "PAIR WITH A STARCHY MEAL" },
        { bas: K(0, "skip the tablets"), metin: "SKIP THE TABLETS" },
        { bas: K(0, "let your doctor know"), metin: "TELL YOUR DOCTOR", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={K(1, "small habit")} metin="SMALL HABIT" x={140} y={520} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "honest expectations")} metin="Small, honest expectations" x={144} y={650} boyut={36} />
    </>
  );
};

export default S56;
