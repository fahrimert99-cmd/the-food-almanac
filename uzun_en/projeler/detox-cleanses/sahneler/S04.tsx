// Sahne 4 — marka + "toxins" kelimesi
import React from "react";
import { Baslik, Etiket, Hap, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pw = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800]);
  const [sc, al] = pop(t, K(0, "This"), 0.5);
  const cik = K(1, "Let's") - 0.1;
  const tTox = K(1, "toxins.");
  return (
    <>
      <Kamera gorsel="tam/04" pencere={pw}>
        <Etiket t={t} bas={K(1, "sells")} capa={[560, 520]} konum={[1250, 720]} metin="JUICE CLEANSE" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1080, top: 120, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * sol(t, cik) }}>
        <Hap metin={MARKA.ad.toUpperCase()} renk={RENK.altin} boyut={34} />
      </div>
      <Baslik t={t} bas={K(1, "word")} metin="THE WORD THAT SELLS" x={1400} y={260} boyut={44} renk={RENK.lacivert} font="inter" agirlik={800} aralik={4} hiza="orta" />
      <Baslik t={t} bas={tTox} metin="TOXINS" x={1400} y={420} boyut={210} renk={RENK.mercan} hiza="orta" />
    </>
  );
};
export default S04;
