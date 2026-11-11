// S03 — defter: ne eşleştirilecek, ne sınırlanacak, neye bağlı
import React from "react";
import { Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPair = K(0, "pair,"), tLimit = K(0, "limit,"), tDep = K(0, "depends");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={w} />
      <Liste t={t} x={90} y={90} aralik={92} boyut={40} isaret="sayi" genislik={900}
        ogeler={[
          { bas: tPair - 0.1, metin: "WHAT TO PAIR", renk: RENK.yesil },
          { bas: tLimit - 0.1, metin: "WHAT TO LIMIT", renk: RENK.mercan },
          { bas: tDep - 0.1, metin: "WHAT DEPENDS ON YOUR STONE", renk: RENK.lacivert },
        ]} />
    </>
  );
};

export default S03;
