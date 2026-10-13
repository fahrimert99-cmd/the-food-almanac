// Sahne 4 — Videonun üç sözü: kaç yumurta, kim dikkatli olmalı, tabağın geri kalanı.
import React from "react";
import { Etiket, Hap, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, 0.1, 0.6));
  const aP = eout(ilerle(t, K(1, "practical") - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [60, 20, 1780], [110, 40, 1700])}>
        <Etiket t={t} bas={K(0, "eggs")} bitis={K(0, "who should")} capa={[960, 700]} konum={[1400, 180]} metin="EGGS" renk={RENK.altin} />
      </Kamera>
      <Panel a={a} taraf="sol" genislik={860} opak={0.97} />
      <Liste t={t} x={70} y={290} aralik={120} boyut={40} genislik={760} ogeler={[
        { bas: K(0, "how many"), metin: "HOW MANY EGGS", renk: RENK.altin },
        { bas: K(0, "who should"), metin: "WHO SHOULD BE CAREFUL", renk: RENK.mercan },
        { bas: K(0, "the rest of the plate"), metin: "THE REST OF THE PLATE", renk: RENK.yesil },
      ]} />
      <div style={{ position: "absolute", left: 70, top: 700, opacity: aP, transform: `translateY(${(1 - aP) * 12}px)` }}>
        <Hap metin="PRACTICAL PART" renk={RENK.koyuYesil} boyut={32} />
      </div>
    </>
  );
};

export default S04;
