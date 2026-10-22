// Sahne 54 — alışkanlık 5: lifle eşleştir. Kavanoz etiketindeki bozuk yazı kâğıt yamayla örtülü.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "five"), 0.5);
  const tIki = K(2, "two"), bitisIki = K(3, "plain") - 0.2;
  const [sp, ap] = pop(t, tIki, 0.5);
  const aIki = ap * sol(t, bitisIki, 0.4);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* kavanoz etiketindeki bozuk harfler */}
        <div style={{ position: "absolute", left: 928, top: 736, width: 210, height: 150, borderRadius: 10,
          background: "linear-gradient(#EFEADC, #E6E0D0)" }} />
        <Etiket t={t} bas={K(3, "plain")} capa={[270, 520]} konum={[250, 160]} metin="PLAIN YOGURT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(3, "berries")} capa={[640, 430]} konum={[520, 105]} metin="BERRIES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "oats")} capa={[680, 547]} konum={[1130, 450]} metin="OATS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1220, top: 190, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>5</div>
      <BaslikBlok t={t} bas={K(1, "pair")} satirlar={["FERMENTED", "PLUS FIBER"]} x={1860} y={240} boyut={100} hiza="sag" />
      <div style={{ position: "absolute", left: 1550, top: 590, transform: `translate(-50%, -50%) scale(${sp})`, opacity: aIki,
        display: "flex", alignItems: "center", gap: 18 }}>
        <Hap metin="FERMENTED" renk={RENK.lacivert} boyut={30} />
        <span style={{ fontFamily: ANTON, fontSize: 56, color: RENK.altin }}>+</span>
        <Hap metin="FIBER" renk={RENK.yesil} boyut={30} />
      </div>
      <Not t={t} bas={K(2, "fiber")} bitis={bitisIki} metin="NOT RIVALS" x={1860} y={650} hiza="sag" boyut={36} agirlik={800} />
      <Not t={t} bas={K(3, "easy")} metin="AN EASY COMBINATION" x={1860} y={650} hiza="sag" boyut={36} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S54;
