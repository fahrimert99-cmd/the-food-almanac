// Sahne 7 — üç soru: kalp, kanser, beyin. Alt soldaki yinelenen mikroskop kâğıt yamayla örtülü.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const q4 = K(4, "Big") - 0.1;
  const E = (cumle: number, kelime: string, capa: [number, number], konum: [number, number], metin: string, renk: string) => (
    <Etiket t={t} bas={K(cumle, kelime)} bitis={q4} capa={capa} konum={konum} metin={metin} renk={renk} />
  );
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840])}>
        {/* yinelenen mikroskop ve okunu örter */}
        <div style={{ position: "absolute", left: 170, top: 520, width: 700, height: 440,
          background: `radial-gradient(ellipse closest-side, rgba(245,246,230,1) 84%, rgba(245,246,230,0) 100%)` }} />
        {E(1, "heart", [500, 330], [480, 130], "HEART", RENK.mercan)}
        {E(2, "cancer", [1420, 300], [1470, 150], "CANCER", RENK.altin)}
        {E(3, "brain", [1450, 760], [1730, 560], "BRAIN", RENK.koyuYesil)}
        <Ikon t={t} bas={K(4, "for")} ad="onay" x={670} y={250} boyut={80} />
        <Ikon t={t} bas={K(4, "all")} ad="onay" x={1580} y={250} boyut={80} />
        <Ikon t={t} bas={K(4, "three")} ad="onay" x={1640} y={720} boyut={80} />
      </Kamera>
      <Baslik t={t} bas={K(0, "three")} bitis={q4} metin="THREE QUESTIONS" x={960} y={115} boyut={80} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(4, "randomized")} metin="RANDOMIZED TRIALS" x={960} y={115} boyut={80} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(4, "all")} metin="FOR ALL THREE" x={960} y={175} hiza="orta" boyut={36} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S07;
