// Sahne 3 — yol haritası: üç söz, sağdaki boş kâğıtta liste.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1760]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={w} sinirla={false}>
        <Etiket t={t} bas={K(0, "resveratrol") + 0.2} capa={[600, 400]} konum={[860, 330]} metin="RED WINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "heart")} capa={[840, 700]} konum={[1080, 880]} metin="HEART" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.1} metin="BY THE END, YOU'LL KNOW" x={1140} y={180} boyut={34} renk={RENK.altin} font="inter" aralik={4} />
      <Liste t={t} x={1140} y={250} aralik={130} boyut={40} genislik={740} ogeler={[
        { bas: K(0, "flaw,") - 0.1, metin: "THE FLAW", renk: RENK.mercan },
        { bas: K(0, "resveratrol") - 0.1, metin: "THE RESVERATROL TRUTH", renk: RENK.altin },
        { bas: K(0, "heart") - 0.1, metin: "WHAT HEART EXPERTS SAY", renk: RENK.koyuYesil },
      ]} />
      <Baslik t={t} bas={K(0, "after")} metin="AFTER SIXTY" x={1140} y={690} boyut={110} renk={RENK.lacivert} />
    </>
  );
};

export default S03;
