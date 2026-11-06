// Sahne 5 — "Kahvaltı günün en önemli öğünüdür": bir söz, çalışma değil.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 120, 1760])}>
        <Etiket t={t} bas={K(1, "saying,")} capa={[330, 640]} konum={[260, 400]} metin="A SAYING" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "study.") - 0.2} capa={[1200, 800]} konum={[1640, 440]} metin="NOT A STUDY" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "breakfast")} metin="“BREAKFAST IS THE MOST" x={960} y={118} boyut={84} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "most")} metin="IMPORTANT MEAL OF THE DAY”" x={960} y={212} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S05;
