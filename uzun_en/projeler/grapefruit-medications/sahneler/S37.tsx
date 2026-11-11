// Sahne 37 — bölüm kartı: "The honest part" (PART 4).
import React from "react";
import { BolumKarti, Ikon, Not, RENK, SP, kelimeZamani } from "../kutuphane";

// Kart görselleri: bölümün sahnelerinden kusursuz 4:3 kırpımlar
// (38: masa, tepsi, meyve ve bardak; 39: defter sayfası; 40: terazi kefesi, alttaki imza dışarıda).
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/38", kirp: [560, 420, 1360, 1020] },
  { gorsel: "tam/39", kirp: [330, 90, 1530, 990] },
  { gorsel: "tam/40", kirp: [1100, 160, 1740, 640] },
];

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tq = K(1, "worried");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <Ikon t={t} bas={tq} ad="soru" x={190} y={800} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={tq + 0.1} metin="HOW WORRIED SHOULD YOU BE?" x={260} y={772} boyut={38} agirlik={800} />
    </>
  );
};

export default S37;
