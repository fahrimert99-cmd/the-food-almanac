// Sahne 15 — sonucun sınırları: 12 kişi, tek öğün, yalnızca ilk saat.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSinir = K(0, "limits");
  const t12 = K(1, "Twelve");
  const tOgun = K(1, "one meal");
  const tSaat = K(1, "first hour");
  const tGenc = K(1, "young");
  const tYazar = K(2, "authors");
  const [sc, al] = pop(t, tSinir, 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [110, 120, 1700])}>
        <Etiket t={t} bas={tOgun} capa={[830, 800]} konum={[830, 560]} metin="ONE MEAL" renk={RENK.altin} />
        <Etiket t={t} bas={tYazar} capa={[1420, 830]} konum={[1420, 590]} metin="THE AUTHORS' PAPER" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={t12 - 0.1} metin="12 PEOPLE" x={1000} y={170} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSaat - 0.1} metin="ONE HOUR" x={1000} y={300} boyut={120} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 140, top: 100, transform: `scale(${sc})`, opacity: al, transformOrigin: "0% 50%" }}>
        <Hap metin="LOOK AT THE LIMITS" renk={RENK.mercan} boyut={36} />
      </div>
      <div style={{ position: "absolute", left: 1000, top: 410, opacity: pop(t, tGenc, 0.5)[1], transform: `scale(${pop(t, tGenc, 0.5)[0]})`, transformOrigin: "0% 50%" }}>
        <Hap metin="YOUNG, HEALTHY ADULTS" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S15;
