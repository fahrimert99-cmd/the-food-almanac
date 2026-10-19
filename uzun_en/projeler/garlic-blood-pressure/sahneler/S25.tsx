// Sahne 25 — ezilince hücreler açılır; enzim ve bileşik buluşur
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, ANTON, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; x: number; y: number; ad: string; alt: string; renk: string; dx?: number }> = ({ t, bas, x, y, ad, alt, renk, dx = 0 }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x + dx, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, textAlign: "center",
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 24, padding: "10px 22px 12px", boxShadow: "0 10px 24px rgba(48,40,34,0.18)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 48, color: renk, lineHeight: 1.1, letterSpacing: 1 }}>{ad}</div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, color: RENK.lacivert, letterSpacing: 2 }}>{alt}</div>
    </div>
  );
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEnz = K(1, "alliinase"), tBil = K(1, "alliin."), tMeet = K(1, "meet");
  const yak = eout(ilerle(t, tMeet, 0.9));
  const dx = 150 * (1 - yak);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(0, "clove")} bitis={K(1, "crush") - 0.1} capa={[470, 440]} konum={[500, 150]} metin="WHOLE CLOVE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "crush")} bitis={K(1, "breaks") + 1.2} capa={[760, 520]} konum={[760, 800]} metin="CRUSH OR CHOP" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cells")} capa={[1150, 270]} konum={[1290, 340]} metin="CELLS OPEN" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} satirlar={["CRUSH", "GARLIC"]} x={1860} y={170} boyut={96} hiza="sag" />
      <Not t={t} bas={K(1, "smell")} metin="ALLIINASE MEETS ALLIIN" x={1860} y={380} hiza="sag" genislik={560} boyut={32} agirlik={800} renk={RENK.altin} />
      <Hap2 t={t} bas={tEnz} x={1490} y={560} dx={-dx} ad="ALLIINASE" alt="ENZYME" renk={RENK.koyuYesil} />
      <Hap2 t={t} bas={tBil} x={1700} y={560} dx={dx} ad="ALLIIN" alt="COMPOUND" renk={RENK.mercan} />
    </>
  );
};

export default S25;
