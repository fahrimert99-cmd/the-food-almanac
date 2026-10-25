// Sahne 23 — özet: "küçük–orta kazanç, kısa denemeler, bazı testler değişmedi; umut verici işaret, tedavi değil".
import React from "react";
import { Baslik, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrt = 7.2;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 60, 1760])} />
      <Baslik t={t} bas={K(0, "pattern") - 0.3} bitis={tOrt} metin="THE PATTERN" x={140} y={110} boyut={100} renk={RENK.koyuYesil} />
      <Liste t={t} x={140} y={215} aralik={80} boyut={34} isaret="nokta" genislik={800} ogeler={[
        { bas: K(1, "Small"), metin: "SMALL TO MODERATE GAINS", renk: RENK.altin, bitis: tOrt },
        { bas: K(1, "short"), metin: "SHORT TRIALS", renk: RENK.altin, bitis: tOrt },
        { bas: K(1, "physical"), metin: "SOME TESTS UNCHANGED", renk: RENK.altin, bitis: tOrt },
      ]} />
      <Baslik t={t} bas={K(2, "promising") - 0.2} bitis={11.6} metin="PROMISING SIGNAL" x={140} y={110} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "not") - 0.1} bitis={11.6} metin="NOT A CURE" x={140} y={230} boyut={100} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(3, "three")} vurgu="3" not="SAFETY CHECKS" x={330} y={90} genislik={380} />
    </>
  );
};

export default S23;
