// Sahne 31 — Hekim masası: en fazla ek destek; hekim ve fizyoterapistle konuşun.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780]);
  const tListe = K(1, "doctor");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={pencere}>
        <Etiket t={t} bas={K(0, "turmeric")} capa={[880, 300]} konum={[1080, 120]} metin="TURMERIC" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "add-on") - 0.2} bitis={tListe - 0.1} satirlar={["AT MOST,", "AN ADD-ON"]} x={70} y={130} boyut={84}
        renkler={[RENK.lacivert, RENK.altin]} />
      <Liste t={t} x={60} y={64} aralik={62} boyut={24} genislik={560} isaret="nokta" ogeler={[
        { bas: tListe + 0.3, metin: "DOCTOR", renk: RENK.koyuYesil },
        { bas: K(1, "physiotherapist"), metin: "PHYSIOTHERAPIST", renk: RENK.koyuYesil },
        { bas: K(1, "other options"), metin: "OTHER OPTIONS", renk: RENK.altin },
        { bas: K(1, "medicines"), metin: "YOUR MEDICINES", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S31;
