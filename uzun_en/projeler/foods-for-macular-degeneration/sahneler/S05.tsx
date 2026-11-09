// Sahne 5 — bölüm kartı: "The macula" (PART 1).
import React from "react";
import { ANTON, BolumKarti, Ikon, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

// 06: göz + ıspanak; 07: kitap + kase; 08: alet + şişe (kusursuz 4:3 kırpımlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/06", kirp: [120, 110, 1120, 860] },
  { gorsel: "tam/07", kirp: [150, 90, 1450, 1065] },
  { gorsel: "tam/08", kirp: [250, 130, 1250, 880] },
];

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "11 million"), 0.55);
  const aKaynak = eout(ilerle(t, K(0, "National"), 0.5));
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 730, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: al }}>
        <div style={{ fontFamily: ANTON, fontSize: 92, lineHeight: 1.1, color: RENK.altin }}>ABOUT 11 MILLION</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert, opacity: aKaynak, marginTop: 4 }}>
          PEOPLE IN THE U.S. · NATIONAL EYE INSTITUTE
        </div>
      </div>
      <Ikon t={t} bas={K(1, "what is it")} ad="soru" x={900} y={790} boyut={84} zemin={RENK.lacivert} />
    </>
  );
};

export default S05;
