// Sahne 58 — özet: kemik. Kase solda, kalça kemiği sağda; iki rozet yan yana.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "12 month"), tGram = K(0, "50"), tHip = K(0, "hip"), t03 = K(0, "0.3"), t11 = K(0, "1.1"), tDbl = K(1, "Double");
  const [sc, al] = pop(t, tDbl, 0.5);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tGram} bitis={t03 - 0.1} capa={[800, 440]} konum={[800, 200]} metin="50 G A DAY" renk={RENK.yesil} />
        <Etiket t={t} bas={tHip} capa={[1460, 560]} konum={[1500, 420]} metin="HIP BONE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tTrial} bitis={tGram - 0.1} metin="235 WOMEN" x={140} y={150} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tTrial + 0.2} bitis={tGram - 0.1} metin="12 MONTHS" x={140} y={250} boyut={90} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t03} vurgu="–0.3%" not="50 G PRUNES" x={1180} y={120} genislik={330} boyut={88} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t11} vurgu="–1.1%" not="NO PRUNES" x={1560} y={120} genislik={330} boyut={88} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 800, top: 905, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol(t, 1e9) }}>
        <Hap metin="DOUBLE DOSE · NO BETTER" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S58;
