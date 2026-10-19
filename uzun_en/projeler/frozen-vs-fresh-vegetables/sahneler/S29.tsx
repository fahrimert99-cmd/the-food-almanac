// Sahne 29 — bölüm kartı: Where frozen falls short
import React from "react";
import { BolumKarti, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/30", kirp: [320, 120, 1320, 870] },
        { gorsel: "tam/31", kirp: [540, 120, 1440, 795] },
        { gorsel: "tam/33", kirp: [80, 180, 1080, 930] },
      ]} />
      <Not t={t} bas={K(1, "honest")} metin="AN HONEST LOOK" x={140} y={790} boyut={30} renk={RENK.altin} agirlik={800} />
    </>
  );
};

export default S29;
