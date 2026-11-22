// Sahne 52 — ek not: soğukta zorlu etkinlik varsa doktora sor.
import React from "react";
import { Baslik, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "long race"), 0.5);
  const [s2, a2] = pop(t, K(1, "ski trip"), 0.5);
  const tDoktor = K(1, "ask your doctor");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])} />
      <Baslik t={t} bas={0.1} bitis={tDoktor - 0.1} metin="ONE MORE NOTE" x={80} y={110} boyut={40} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(1, "hard event")} bitis={tDoktor - 0.1} metin="HARD EVENT" x={80} y={190} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "in the cold") - 0.1} bitis={tDoktor - 0.1} metin="IN THE COLD" x={80} y={296} boyut={96} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tDoktor} metin="ASK YOUR" x={80} y={190} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDoktor + 0.15} metin="DOCTOR" x={80} y={296} boyut={96} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tDoktor + 0.4} ad="soru" x={520} y={300} boyut={88} zemin={RENK.altin} />
      <div style={{ position: "absolute", left: 80, top: 370, display: "flex", gap: 16 }}>
        <div style={{ opacity: a1, transform: `scale(${s1})`, transformOrigin: "0 50%" }}><Hap metin="LONG RACE" renk={RENK.altin} boyut={28} /></div>
        <div style={{ opacity: a2, transform: `scale(${s2})`, transformOrigin: "0 50%" }}><Hap metin="SKI TRIP" renk={RENK.altin} boyut={28} /></div>
      </div>
    </>
  );
};

export default S52;
