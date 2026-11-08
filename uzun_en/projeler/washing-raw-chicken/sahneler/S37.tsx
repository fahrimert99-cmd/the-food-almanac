// Sahne 37 — tek gerekli alet: gıda termometresi.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTermo = K(0, "food thermometer");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [120, 60, 1700])}>
        <Etiket t={t} bas={tTermo} capa={[623, 400]} konum={[400, 330]} metin="FOOD THERMOMETER" renk={RENK.yesil} />
      </Kamera>
      <Liste t={t} x={1000} y={130} aralik={92} boyut={40} genislik={800} isaret="carpi" ogeler={[
        { bas: K(1, "a rinse"), metin: "NOT A RINSE", renk: RENK.mercan },
        { bas: K(1, "special cleaner"), metin: "NOT A SPECIAL CLEANER", renk: RENK.mercan },
      ]} />
      <Liste t={t} x={1000} y={314} boyut={40} genislik={800} isaret="onay" ogeler={[
        { bas: K(1, "just a"), metin: "JUST A THERMOMETER", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S37;
