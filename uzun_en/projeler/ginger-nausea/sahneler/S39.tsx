// Sahne 39 — yan etkiler hafif; NCCIH listesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(1, "NIH")} capa={[1000, 600]} konum={[1250, 960 - 140]} metin="NIH CENTER" renk={RENK.yesil} bitis={K(1, "abdominal") + 0.4} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "mild")} satirlar={["MILD,", "MOSTLY DIGESTIVE"]} x={100} y={140} boyut={100} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "lists")} metin="LISTED BY THE NIH CENTER" x={1160} y={130} boyut={30} agirlik={800} />
      <Liste t={t} x={1160} y={190} aralik={76} boyut={34} isaret="nokta" genislik={700} ogeler={[
        { bas: K(1, "abdominal"), metin: "ABDOMINAL DISCOMFORT", renk: RENK.altin },
        { bas: K(1, "heartburn"), metin: "HEARTBURN", renk: RENK.altin },
        { bas: K(1, "diarrhea"), metin: "DIARRHEA", renk: RENK.altin },
        { bas: K(1, "irritation"), metin: "MOUTH & THROAT IRRITATION", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S39;
