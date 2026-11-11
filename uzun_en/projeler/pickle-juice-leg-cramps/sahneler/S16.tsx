// Sahne 16 — kronometre: ikinci kramp ve içme anı; kadran çizimi sahne içinde yenilenir.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

// Kronometre kadranı: görseldeki anlamsız harfleri örten kâğıt zemin + kendi çizdiğimiz çentik ve ibre
const CX = 712, CY = 606, RX = 192, RY = 168;
const Kadran: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const don = t < bas ? -35 : -35 + (t - bas) * 150;
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
      <ellipse cx={CX} cy={CY} rx={RX} ry={RY} fill="#F3EEDF" stroke="#2B2B2B" strokeWidth={3} />
      {Array.from({ length: 60 }, (_, i) => {
        const a = (i / 60) * Math.PI * 2, b = i % 5 === 0;
        const k = b ? 0.84 : 0.92;
        return <line key={i} x1={CX + Math.sin(a) * RX * k} y1={CY - Math.cos(a) * RY * k} x2={CX + Math.sin(a) * RX * 0.97}
          y2={CY - Math.cos(a) * RY * 0.97} stroke="#2B2B2B" strokeWidth={b ? 4 : 2} />;
      })}
      <line x1={CX} y1={CY} x2={CX + Math.sin((don * Math.PI) / 180) * RX * 0.78} y2={CY - Math.cos((don * Math.PI) / 180) * RY * 0.78}
        stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" />
      <circle cx={CX} cy={CY} r={11} fill="#2B2B2B" />
    </svg>
  );
};

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIc = K(0, "drank");
  const tZaman = K(0, "timed");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Kadran t={t} bas={tZaman} />
        <Etiket t={t} bas={tIc} bitis={tZaman - 0.2} capa={[1107, 640]} konum={[1130, 130]} metin="DRANK AS IT BEGAN" renk={RENK.yesil} />
        <Etiket t={t} bas={tZaman} capa={[712, 700]} konum={[700, 900]} metin="TIMED AGAIN" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Thirty")} bitis={tIc - 0.2} metin="30 MINUTES LATER" x={140} y={80} boyut={80} renk={RENK.koyuYesil} />
    </>
  );
};

export default S16;
