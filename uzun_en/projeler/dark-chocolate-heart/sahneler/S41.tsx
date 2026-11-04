// Sahne 41 — düşük metalli beş çikolata, markalar
import React from "react";
import { Baslik, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const MARKALAR = ["MAST", "TAZA", "VALRHONA", "GHIRARDELLI"];

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(0, "five"), tMarka = K(1, "They"), tSec = K(2, "choice");
  const tm = [K(1, "Mast"), K(1, "Taza"), K(1, "Valrhona"), K(1, "Ghirardelli")];
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [60, 100, 1600], [100, 130, 1500])}>
      </Kamera>
      <Baslik t={t} bas={0.25} bitis={tBes - 0.05} metin="GOOD NEWS" x={960} y={100} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tBes} bitis={tMarka - 0.1} metin="5 BARS, LOW IN BOTH" x={960} y={100} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 0, right: 0, top: 62, display: "flex", justifyContent: "center", gap: 22,
        opacity: sol(t, tSec - 0.1, 0.4) }}>
        {MARKALAR.map((m, i) => {
          const [sc, al] = pop(t, tm[i], 0.5);
          return <div key={m} style={{ transform: `scale(${sc})`, opacity: al }}><Hap metin={m} renk={RENK.yesil} boyut={38} /></div>;
        })}
      </div>
      <Baslik t={t} bas={tSec} metin="THE CHOICE MATTERS" x={960} y={100} boyut={96} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S41;
