// Sahne 3 — videonun vaadi: ne işe yarar, ne yaramaz, neyi atlamalı
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1790])}>
        <Etiket t={t} bas={K(0, "common")} capa={[640, 330]} konum={[650, 110]} metin="PICKLE JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "remedies")} capa={[1190, 330]} konum={[1520, 190]} metin="MAGNESIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.1} metin="BY THE END" x={56} y={190} boyut={30} renk={RENK.altin} font="inter" aralik={5} />
      <Liste t={t} x={56} y={250} boyut={30} aralik={84} genislik={440} isaret="nokta" ogeler={[
        { bas: K(0, "helps,"), metin: "WHAT HELPS", renk: RENK.yesil },
        { bas: K(0, "doesn't,"), metin: "WHAT DOESN'T", renk: RENK.altin },
        { bas: K(0, "skip."), metin: "WHAT TO SKIP", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S03;
