// Sahne 23 — sade dille: aynı öğle yemeği kahvaltısız daha zor; öğleden sonra sıçraması daha büyük.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} /></div>;
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLun = K(0, "same lunch"), tZor = K(0, "harder"), tYok = K(0, "without a breakfast"), tSpike = K(1, "spike");
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 60, 1700], [100, 80, 1600])}>
        <Etiket t={t} bas={tLun} bitis={tYok} capa={[830, 800]} konum={[1500, 900]} metin="THE SAME LUNCH" renk={RENK.altin} />
        <Etiket t={t} bas={tSpike} capa={[700, 285]} konum={[1100, 130]} metin="BIGGER AFTERNOON SPIKE" renk={RENK.mercan} />
      </Kamera>
      <Pil t={t} bas={tZor} bitis={tYok} x={960} y={140} metin="HARDER TO HANDLE" renk={RENK.lacivert} />
      <Pil t={t} bas={tYok} bitis={tSpike - 0.1} x={960} y={140} metin="NO BREAKFAST BEFORE IT" renk={RENK.mercan} />
    </>
  );
};

export default S23;
