// Sahne 23 — iki bulgu birleşince: sessiz bir kayma (sıcak havada, aktif günlerde).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1600, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760]);
  const gec = K(2, "slide") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={p}>
        <Etiket t={t} bas={K(2, "hot")} capa={[1150, 920]} konum={[1580, 830]} metin="HOT WEATHER" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "active")} capa={[1050, 780]} konum={[1580, 680]} metin="ACTIVE DAYS" renk={RENK.altin} />
      </Kamera>
      <Pil t={t} bas={K(1, "kidney")} bitis={gec} y={170} metin="KIDNEYS SAVE LESS" renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "thirst")} bitis={gec} y={290} metin="THIRST NUDGES LESS" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "slide") - 0.1} satirlar={["A QUIET", "SLIDE"]} x={1360} y={230} boyut={130} />
    </>
  );
};

export default S23;
