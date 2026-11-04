// Sahne 59 — özet: ekşi mayalı ekmek, küçük çalışmalarda daha küçük glukoz artışı.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, Baslik, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(0, "sourdough")} bitis={K(0, "than yeast") - 0.2} capa={[640, 420]} konum={[420, 170]} metin="SOURDOUGH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "glucose")} capa={[1590, 500]} konum={[1600, 250]} metin="GLUCOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "yeast bread")} capa={[1100, 650]} konum={[1180, 330]} metin="YEAST BREAD" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.3} bitis={2.1} metin="SMALL CROSSOVER TRIALS" x={140} y={110} boyut={64} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "eighteen studies")} vurgu="18 STUDIES" not="POOLED ANALYSIS · LOW CERTAINTY" x={420} y={60} genislik={520} boyut={84} />
    </>
  );
};

export default S59;
