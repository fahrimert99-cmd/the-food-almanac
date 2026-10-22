// Sahne 48 — güvenlik notu: doktora danış. Koşullar listesi, sonda "yemek, reçete değil".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, Baslik } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(2, "Oats are food");
  const tDoktor = K(1, "ask your doctor");
  const bit = tSon - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 100, 1920], [30, 120, 1800])}>
        <Etiket t={t} bas={tDoktor} capa={[547, 590]} konum={[330, 360]} metin="ASK YOUR DOCTOR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "oats fit") - 0.1} capa={[687, 410]} konum={[900, 330]} metin="OATS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["TALK TO", "YOUR DOCTOR"]} x={1860} y={230} boyut={100} hiza="sag" adim={0.2} />
      <Liste t={t} x={1150} y={500} boyut={34} aralik={80} genislik={720} isaret="nokta"
        ogeler={[
          { bas: K(1, "high cholesterol"), metin: "HIGH CHOLESTEROL", renk: RENK.altin, bitis: bit },
          { bas: K(1, "cholesterol medicine"), metin: "CHOLESTEROL MEDICINE", renk: RENK.altin, bitis: bit },
          { bas: K(1, "heart condition"), metin: "HEART CONDITION", renk: RENK.altin, bitis: bit },
          { bas: K(1, "keep taking"), metin: "KEEP TAKING TREATMENT", renk: RENK.yesil, bitis: bit },
        ]} />
      <Baslik t={t} bas={tSon} metin="OATS ARE FOOD," x={1860} y={560} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tSon + 0.4} metin="NOT A PRESCRIPTION" x={1860} y={650} boyut={72} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S48;
