// Sahne 17 — terazi: pancar suyu ve ilaç; sınırlılık listesi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "modest");
  const tIlac = K(0, "replacement");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [100, 40, 1720], [160, 80, 1600])} />
      <BaslikBlok t={t} bas={tBas} satirlar={["MODEST,", "NOT MAGIC"]} x={140} y={150} boyut={88} />
      <Etiket t={t} bas={tIlac} bitis={K(1, "authors") - 0.2} capa={[720, 480]} konum={[930, 330]} metin="BEET JUICE" renk={RENK.mercan} />
      <Etiket t={t} bas={tIlac + 0.5} bitis={K(1, "authors") - 0.2} capa={[1300, 560]} konum={[1500, 400]} metin="MEDICINE" renk={RENK.lacivert} />
      <Liste t={t} x={1330} y={150} aralik={84} boyut={34} isaret="nokta" genislik={560}
        ogeler={[
          { bas: K(1, "varied widely"), metin: "VARIED WIDELY", renk: RENK.altin },
          { bas: K(1, "many were short"), metin: "MANY WERE SHORT", renk: RENK.altin },
          { bas: K(1, "designed to study"), metin: "BUILT FOR EXERCISE", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S17;
