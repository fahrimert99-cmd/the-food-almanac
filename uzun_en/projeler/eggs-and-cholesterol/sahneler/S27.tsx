// Sahne 27 — bölüm kartı: uzun dönem çalışmaları.
import React from "react";
import { BolumKarti, Not, SP, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={[
        { gorsel: "tam/28", kirp: [1320, 400, 1920, 850] },
        { gorsel: "tam/29", kirp: [0, 0, 880, 660] },
        { gorsel: "tam/32", kirp: [440, 200, 1480, 980] },
      ]} />
      <Not t={t} bas={K(2, "followed")} metin="Followed for years" x={140} y={800} boyut={38} agirlik={800} />
    </>
  );
};

export default S27;
