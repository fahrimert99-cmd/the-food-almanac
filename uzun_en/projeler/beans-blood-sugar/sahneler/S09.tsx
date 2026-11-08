// Sahne 9 — fikir makul; asıl soru gerçek insanlarda, aylar boyunca, gerçek laboratuvar testlerinde.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Soru: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIdea = K(0, "idea"), tQ = K(1, "question");
  const tPeople = K(1, "real people,"), tMonths = K(1, "months,"), tLab = K(1, "lab");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      <Baslik t={t} bas={tIdea} bitis={tQ - 0.15} metin="A SENSIBLE IDEA" x={160} y={130} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tQ} metin="THE REAL QUESTION" x={160} y={110} boyut={80} renk={RENK.lacivert} />
      <Soru t={t} bas={tPeople} metin="REAL PEOPLE" x={215} y={270} renk={RENK.yesil} />
      <Soru t={t} bas={tMonths} metin="OVER MONTHS" x={215} y={350} renk={RENK.altin} />
      <Etiket t={t} bas={tLab} capa={[470, 400]} konum={[215, 430]} metin="REAL LAB TESTS" renk={RENK.mercan} />
    </>
  );
};

export default S09;
