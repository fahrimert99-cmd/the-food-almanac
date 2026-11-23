// Sahne 9 — videonun yol haritası: kesikli patikada dört durak.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  return (
    <Kamera gorsel="tam/09" pencere={p}>
      <Etiket t={t} bas={K(0, "biggest review")} capa={[629, 520]} konum={[900, 330]} metin="BIGGEST REVIEW" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "start only")} capa={[800, 650]} konum={[1090, 905]} metin="START AFTER SYMPTOMS" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "meet one group")} capa={[1335, 310]} konum={[1000, 120]} metin="ONE GROUP BENEFITED" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "safety catch")} capa={[1515, 450]} konum={[1620, 720]} metin="SAFETY CATCH" renk={RENK.lacivert} />
    </Kamera>
  );
};

export default S09;
