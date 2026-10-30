// Sahne 17 — 12 hasta, 2 diyet; 1–2 hafta arayla, her biri 4 gün.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pop: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sa, aa] = pop(t, K(1, "ate"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(1, "hospital")} capa={[480, 730]} konum={[930, 520]} metin="HOSPITAL DIET" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "Twelve")} satirlar={["12 PATIENTS", "2 DIETS"]} x={1860} y={200} boyut={100} hiza="sag" />
      <Pop t={t} bas={K(1, "two")} x={1280} y={580} metin="DIET 1" renk={RENK.mercan} />
      <span style={{ position: "absolute", left: 1410, top: 548, opacity: aa, transform: `scale(${sa})`, fontFamily: "Anton, sans-serif", fontSize: 52, color: RENK.altin }}>→</span>
      <Pop t={t} bas={K(1, "diets,")} x={1580} y={580} metin="DIET 2" renk={RENK.yesil} />
      <Pop t={t} bas={K(1, "one to two")} x={1480} y={700} metin="1–2 WEEKS APART" renk={RENK.lacivert} />
      <Pop t={t} bas={K(1, "each")} x={1480} y={810} metin="EACH FOR 4 DAYS" renk={RENK.altin} />
    </>
  );
};

export default S17;
