// Sahne 55 — güvenlik notu: doktora danışın. Solda görsel, sağda başlık ve kısa maddeler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIlac = K(2, "and");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(1, "ask")} bitis={tIlac - 0.1} capa={[590, 665]} konum={[1250, 800]} metin="ASK YOUR DOCTOR" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "doctor")} capa={[590, 665]} konum={[1300, 800]} metin="DOCTOR OR PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} satirlar={["SAFETY", "FIRST"]} x={1860} y={250} boyut={100} hiza="sag" />
      <Liste t={t} x={1070} y={500} aralik={90} boyut={34} isaret="nokta" genislik={800} ogeler={[
        { bas: K(1, "immune"), metin: "WEAKENED IMMUNE SYSTEM", renk: RENK.altin, bitis: tIlac - 0.1 },
        { bas: K(1, "serious"), metin: "SERIOUS ILLNESS", renk: RENK.altin, bitis: tIlac - 0.1 },
      ]} />
      <Liste t={t} x={1070} y={500} aralik={90} boyut={34} isaret="nokta" genislik={800} ogeler={[
        { bas: K(2, "medication"), metin: "TAKING MEDICATION", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S55;
