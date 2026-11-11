// Sahne 32 — bölüm kartı: "The absorption catch" (PART 4).
import React from "react";
import { BolumKarti, Not, SP, kelimeZamani } from "../kutuphane";

// Kart görselleri: 33, 34 ve 35'ten kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/33", kirp: [80, 190, 1040, 910] },
  { gorsel: "tam/34", kirp: [100, 130, 1180, 940] },
  { gorsel: "tam/35", kirp: [480, 150, 1680, 1050] },
];

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <Not t={t} bas={K(0, "catch")} metin="FROM THE OPENING: HARD TO ABSORB" x={140} y={780} boyut={30} agirlik={800} />
    </>
  );
};

export default S32;
