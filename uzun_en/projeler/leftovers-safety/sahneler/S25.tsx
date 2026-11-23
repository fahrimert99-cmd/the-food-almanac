// Sahne 25 — Kokuyla karar: B. cereus ile bulaşmış nişastalı yiyecekler (pirinç) normal görünür ve kokar.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "Bacillus"), tS = K(1, "contaminated");
  const [s1, a1] = pop(t, tB, 0.5);
  const [s2, a2] = pop(t, tS, 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "smells")} bitis={K(1, "But") - 0.1} capa={[765, 440]} konum={[1300, 300]} metin="SMELL TEST" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "rice")} capa={[900, 690]} konum={[1380, 820]} metin="RICE" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1500, top: 250, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="BACILLUS CEREUS" renk={RENK.mercan} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1450, top: 350, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="CONTAMINATED STARCHY FOODS" renk={RENK.altin} boyut={28} />
      </div>
      <BaslikBlok t={t} bas={K(1, "look")} satirlar={["LOOKS FINE.", "SMELLS FINE."]} x={1860} y={540} boyut={104} hiza="sag" adim={0.55} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2023")} />
    </>
  );
};

export default S25;
