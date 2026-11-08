// Sahne 9 — Campylobacter ve sıçrama yolları: etiketler gerçek nesneler üzerinde.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCamp = K(0, "Campylobacter"), tFsa = K(1, "Food"), tSpl = K(1, "splashing");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "chicken")} bitis={tSpl - 0.2} capa={[853, 570]} konum={[560, 220]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "hands,")} bitis={K(1, "clothing,") - 0.1} capa={[640, 460]} konum={[560, 220]} metin="HANDS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "surfaces,")} capa={[400, 813]} konum={[330, 900]} metin="WORK SURFACES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "clothing,")} capa={[1707, 307]} konum={[1480, 130]} metin="CLOTHING" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "equipment.") - 0.5} capa={[1667, 747]} konum={[1640, 900]} metin="COOKING EQUIPMENT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tCamp} bitis={tFsa - 0.4} metin="CAMPYLOBACTER" x={60} y={90} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tFsa} metin="FOOD STANDARDS AGENCY" x={60} y={90} boyut={64} renk={RENK.lacivert} />
    </>
  );
};

export default S09;
