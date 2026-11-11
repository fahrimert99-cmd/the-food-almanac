// Sahne 15 — Whitehead 2014 meta-analizi: 28 RCT, ≥3 g/gün beta-glukan, 2–12 hafta, kontrol diyetleri.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tPool = K(0, "pooled"), t28 = K(0, "28"), tRand = K(0, "randomized");
  const tBg = K(1, "beta-glucan"), tThree = K(1, "three"), tWeeks = K(1, "two"), tCtl = K(1, "control");
  const bitisBas = c[1].bas - 0.1;
  const [sA, aA] = pop(t, tThree, 0.5);
  const [sB, aB] = pop(t, tWeeks, 0.5);
  const kutu = (a: number, sc: number, bit: number, ic: React.ReactNode) => (
    <div style={{ position: "absolute", left: 1500, top: 120, transform: `translate(-50%, 0) scale(${sc})`, opacity: a * sol(t, bit) }}>{ic}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tPool} bitis={bitisBas} capa={[650, 400]} konum={[800, 110]} metin="POOLED TRIALS" renk={RENK.altin} />
        <Etiket t={t} bas={tBg} capa={[1440, 440]} konum={[1100, 150]} metin="OAT BETA-GLUCAN" renk={RENK.yesil} />
        <Etiket t={t} bas={tCtl} capa={[1000, 700]} konum={[1000, 900]} metin="CONTROL DIETS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={t28} bitis={bitisBas} metin="28 TRIALS" x={96} y={200} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tRand} bitis={bitisBas} metin="randomized · controlled" x={100} y={262} boyut={32} />
      {kutu(aA, sA, tWeeks - 0.1, <Hap metin="≥ 3 G / DAY" renk={RENK.yesil} boyut={44} />)}
      {kutu(aB, sB, 1e9, <Hap metin="2–12 WEEKS" renk={RENK.altin} boyut={44} />)}
    </>
  );
};

export default S15;
