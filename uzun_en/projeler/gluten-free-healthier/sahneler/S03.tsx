// Sahne 3: mutfak tezgâhı + sağ panelde üç numaralı söz
import React from "react";
import { AbsoluteFill, ANTON, Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Liste, Not, Panel, Parcaciklar, RENK, SP,
  VurguRozet, BolumKarti, Ikon, MARKA, eout, ilerle, ikiSatir, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <Panel a={pPanel} taraf="sag" genislik={640} opak={0.97} />
      <Baslik t={t} bas={0.3} metin="BY THE END, YOU'LL KNOW" x={1340} y={300} boyut={28} renk={RENK.altin} font="inter" aralik={4} />
      <Liste t={t} x={1335} y={380} aralik={140} boyut={33} genislik={560} ogeler={[
        { bas: K(0, "who truly"), metin: "WHO TRULY NEEDS IT" },
        { bas: K(0, "what labels"), metin: "WHAT LABELS HIDE", renk: RENK.altin },
        { bas: K(0, "what to do"), metin: "BEFORE CUTTING GLUTEN", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};
export default S03;
