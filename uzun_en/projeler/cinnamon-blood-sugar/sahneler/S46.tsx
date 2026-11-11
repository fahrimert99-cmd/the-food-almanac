// Sahne 46 — doktor masası: ilacı bırakma/atlama/azaltma; değişiklik doktordan gelir.
// Görselin sol yarısındaki bozuk el yazısı (defter) kamera penceresiyle dışarıda tutulur (x >= 690).
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tStop = K(0, "stop,"), tSkip = K(0, "skip"), tLow = K(0, "lower"), tCin = K(0, "cinnamon");
  const tDoc = K(1, "doctor,"), tNum = K(1, "based");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [700, 20, 1230], [735, 40, 1180])}>
        <Etiket t={t} bas={tCin} bitis={5.6} capa={[840, 215]} konum={[1130, 110]} metin="CINNAMON" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tStop - 0.1} satirlar={["KEEP YOUR", "MEDICINE"]} x={1860} y={190} boyut={110} hiza="sag" />
      <Liste t={t} isaret="carpi" x={1020} y={500} aralik={86} boyut={38} genislik={800} ogeler={[
        { bas: tStop, metin: "DON'T STOP", renk: RENK.mercan, bitis: 5.4 },
        { bas: tSkip, metin: "DON'T SKIP", renk: RENK.mercan, bitis: 5.4 },
        { bas: tLow, metin: "DON'T LOWER", renk: RENK.mercan, bitis: 5.4 },
      ]} />
      <Liste t={t} isaret="onay" x={1020} y={500} aralik={86} boyut={38} genislik={860} ogeler={[
        { bas: tDoc, metin: "CHANGES COME FROM YOUR DOCTOR" },
        { bas: tNum, metin: "BASED ON YOUR OWN NUMBERS" },
      ]} />
    </>
  );
};

export default S46;
