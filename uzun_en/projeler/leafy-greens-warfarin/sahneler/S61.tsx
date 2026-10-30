// Sahne 61 — düzenli K vitamini: "steady, not zero"
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, sol, kelimeZamani } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 80, 1640])}>
        <Etiket t={t} bas={K(1, "vitamin")} capa={[500, 380]} konum={[330, 800]} metin="VITAMIN K FOODS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "amounts")} capa={[1040, 450]} konum={[1120, 880]} metin="CONSISTENT AMOUNTS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "week")} capa={[1250, 330]} konum={[1000, 140]} metin="WEEK TO WEEK" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "tell")} capa={[1380, 700]} konum={[1500, 880]} metin="TELL YOUR CLINIC" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 50, top: 32, width: 560, height: 210, borderRadius: 26, background: kagit(0.94),
        opacity: eout(ilerle(t, K(0, "steady,") - 0.1, 0.4)) * sol(t, K(1, "eat") + 0.4) }} />
      <Baslik t={t} bas={K(0, "steady,")} bitis={K(1, "eat") + 0.4} metin="STEADY," x={80} y={100} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "not")} bitis={K(1, "eat") + 0.4} metin="NOT ZERO" x={80} y={190} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S61;
