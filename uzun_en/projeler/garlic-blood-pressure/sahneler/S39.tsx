// Sahne 39 — yaygın iddialar çarpılır, kanıt cümlesi gelir.
import React from "react";
import { Baslik, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHear = K(0, "hear"), tClove = K(0, "clove a day"), tWorks = K(0, "garlic works"), tEv = K(1, "evidence");
  // kavanozun yalnızca kapak ve boyun kısmı: camdaki sahte yazılar kadraj dışında
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [520, 10, 900], [560, 20, 820])} />
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={1120} />
      <Not t={t} bas={tHear} metin="WHAT YOU'LL SOMETIMES HEAR" x={1150} y={250} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="carpi" x={1150} y={330} aralik={130} boyut={36} genislik={740}
        ogeler={[
          { bas: tClove, metin: "A CLOVE A DAY REPLACES PILLS", renk: RENK.mercan },
          { bas: tWorks, metin: "WORKS AS WELL AS MEDICINE", renk: RENK.mercan },
        ]} />
      <Baslik t={t} bas={tEv} metin="THE EVIDENCE" x={1150} y={680} boyut={96} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tEv + 0.2} metin="DOESN'T SAY THAT" x={1150} y={790} boyut={96} renk={RENK.lacivert} />
    </>
  );
};

export default S39;
