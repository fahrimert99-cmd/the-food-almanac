// Sahne 9 — tabak, süt, yumurta ve mide: sorun yemek değil, emilim; sonra hap.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Kapsül (hap) simgesi
const Kapsul: React.FC<{ x: number; y: number; sc: number; al: number }> = ({ x, y, sc, al }) => (
  <svg width={240} height={110} viewBox="0 0 240 110" style={{ position: "absolute", left: x - 120, top: y - 55, opacity: al,
    transform: `scale(${sc}) rotate(-14deg)`, filter: "drop-shadow(0 8px 10px rgba(48,40,34,0.28))" }}>
    <rect x={8} y={15} width={224} height={80} rx={40} fill={RENK.kagitAcik} stroke={RENK.murekkep} strokeWidth={4} />
    <path d="M120 15 H48 A40 40 0 0 0 48 95 H120 Z" fill={RENK.altin} stroke={RENK.murekkep} strokeWidth={4} />
    <rect x={30} y={28} width={90} height={9} rx={4} fill="#fff" opacity={0.35} />
  </svg>
);

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tB12 = K(0, "B12"), tAbs = K(1, "absorbing"), tSt = K(2, "stomach");
  const tPill = K(3, "pill"), tWork = K(3, "work"), tFood = K(3, "food");
  const [sp, ap] = pop(t, tPill, 0.55);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={pencere}>
        <Etiket t={t} bas={tB12} bitis={tAbs - 0.1} capa={[800, 775]} konum={[560, 540]} metin="B12 IN FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tSt} bitis={tPill - 0.2} capa={[1620, 390]} konum={[1250, 200]} metin="STOMACH" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tAbs} bitis={c[3].bas - 0.1} metin="ABSORBING IT" x={110} y={190} boyut={130} renk={RENK.koyuYesil} />
      <Kapsul x={250} y={225} sc={sp} al={ap} />
      <Ikon t={t} bas={tWork} ad="onay" x={430} y={190} boyut={80} />
      <div style={{ position: "absolute", left: 560, top: 190, transform: "translateY(-50%)" }}>
        {t >= tFood && <Hap metin="B12 IN FOOD" renk={RENK.mercan} boyut={30} style={{ transform: `scale(${pop(t, tFood, 0.5)[0]})`, transformOrigin: "0 50%" }} />}
      </div>
      <Ikon t={t} bas={tFood + 0.2} ad="carpi" x={880} y={190} boyut={80} zemin={RENK.mercan} />
    </>
  );
};

export default S09;
