// Sahne 51 — güvenlik notu: kontrol listesi sağ sütunda.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";


const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 80, 1800])}>
        <Etiket t={t} bas={K(1, "in your pill")} capa={[790, 400]} konum={[800, 170]} metin="PILL ORGANIZER" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["SAFETY", "FIRST"]} x={1610} y={210} boyut={104} hiza="orta" />
      <Liste t={t} x={1350} y={430} aralik={90} boyut={28} isaret="nokta" genislik={530} ogeler={[
        { bas: K(1, "warfarin"), metin: "WARFARIN", renk: RENK.mercan },
        { bas: K(1, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.mercan },
        { bas: K(1, "many"), metin: "MANY MEDICINES", renk: RENK.mercan },
        { bas: K(1, "aren't"), metin: "NOT SURE WHAT'S IN YOUR PILL", renk: RENK.mercan },
        { bas: K(1, "check"), metin: "CHECK WITH YOUR DOCTOR OR PHARMACIST", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S51;
