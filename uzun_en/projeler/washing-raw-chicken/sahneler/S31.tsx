// Sahne 31 — BÖLÜM 3 kartı: "Heat, not water". Altında soru işareti anlatımla gelir.
import React from "react";
import { BolumKarti, Ikon, RENK, SP, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/32", kirp: [40, 160, 1160, 1000] },
        { gorsel: "tam/33", kirp: [60, 150, 1180, 990] },
        { gorsel: "tam/34", kirp: [150, 60, 1250, 885] },
      ]} />
      <Ikon t={t} bas={K(0, "what does")} ad="soru" x={190} y={820} boyut={80} renk="#fff" zemin={RENK.altin} />
    </>
  );
};

export default S31;
