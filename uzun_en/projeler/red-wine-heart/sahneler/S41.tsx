// Sahne 41 — desteklenmeyenler: çatlak kaide; solda başlık, sağda çarpılı iki madde.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1800])}>
        <Etiket t={t} bas={K(1, "wine")} capa={[935, 330]} konum={[300, 640]} metin="RED WINE" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "not")} satirlar={["NOT", "SUPPORTED"]} x={70} y={230} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} isaret="carpi" x={1370} y={300} aralik={170} boyut={30} genislik={500} ogeler={[
        { bas: K(1, "proven"), metin: "RED WINE AS A PROVEN HEART PROTECTOR", renk: RENK.mercan },
        { bas: K(2, "start"), metin: "NON-DRINKERS STARTING FOR HEALTH", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S41;
