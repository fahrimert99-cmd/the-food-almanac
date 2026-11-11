// Sahne 25 — kahve, çay, kola, portakal suyu: sudan farklı değil.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sh, ah] = pop(t, K(1, "sparkling"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={0.2} bitis={7.6} capa={[500, 470]} konum={[300, 220]} metin="COFFEE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "tea")} bitis={7.6} capa={[880, 700]} konum={[1060, 860]} metin="HOT TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "cola")} bitis={7.6} capa={[700, 300]} konum={[960, 110]} metin="COLA" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "orange")} bitis={7.6} capa={[1150, 470]} konum={[1420, 470]} metin="ORANGE JUICE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={s.meta.baslik!.satirlar} x={1840} y={200} boyut={110} hiza="sag" />
      <div style={{ position: "absolute", left: 1550, top: 640, transform: `translate(-50%, -50%) scale(${sh})`, opacity: ah }}>
        <Hap metin="SPARKLING WATER" renk={RENK.yesil} />
      </div>
      <Not t={t} bas={K(2, "urine")} metin="Four-hour urine output: not significantly different from water's" x={1380} y={720} genislik={470} boyut={34} />
    </>
  );
};

export default S25;
