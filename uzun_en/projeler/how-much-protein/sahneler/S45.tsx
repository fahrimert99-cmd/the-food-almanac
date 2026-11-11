// Sahne 45 — kanıtın sınırları: gözlemsel, küçük denemeler, 8 kişilik çalışma.
import React from "react";
import { BaslikBlok, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])} />
      <Not t={t} bas={K(0, "limits")} metin="THE LIMITS" x={1160} y={150} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="nokta" x={1160} y={215} boyut={32} aralik={110} genislik={700} ogeler={[
        { bas: K(1, "observational"), metin: "HEALTH ABC: OBSERVATIONAL", renk: RENK.altin },
        { bas: K(2, "small"), metin: "DUTCH TRIALS: SMALL, FRAIL ADULTS", renk: RENK.altin },
        { bas: K(3, "eight"), metin: "MEAL-SPREADING STUDY: 8 PEOPLE", renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(4, "No")} satirlar={["NO SINGLE", "STUDY SETTLES IT"]} x={1860} y={700} boyut={92} hiza="sag" />
    </>
  );
};

export default S45;
