// Sahne 3 — videonun üç sözü: üstte numaralı liste, kitap ve şişe etiketli.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1880], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "evidence")} capa={[1000, 880]} konum={[1180, 620]} metin="THE EVIDENCE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "vinegar")} capa={[320, 620]} konum={[760, 560]} metin="APPLE CIDER VINEGAR" renk={RENK.altin} />
      </Kamera>
      <Liste t={t} x={640} y={110} aralik={128} boyut={44} genislik={1150} ogeler={[
        { bas: K(0, "how big"), metin: "HOW BIG THE EFFECT IS", renk: RENK.altin },
        { bas: K(0, "why"), metin: "WHY EVIDENCE IS THIN", renk: RENK.mercan },
        { bas: K(0, "how to try"), metin: "HOW TO TRY IT SAFELY", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S03;
