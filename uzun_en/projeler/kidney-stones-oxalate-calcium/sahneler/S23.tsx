// Sahne 23 — zamanlama: cep saati kadranı sahte rakamlar yüzünden kendi çizimimizle örtülür.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const CX = 787, CY = 625, R = 180;

// Kadran yaması: sade tik çizgileri + akrep/yelkovan (rakam yok)
const Kadran: React.FC<{ t: number }> = ({ t }) => {
  const dk = t * 36, sa = t * 3;
  const el = (a: number, u: number, k: number, w: number) => (
    <line x1={CX} y1={CY} x2={CX + u * Math.sin((a * Math.PI) / 180)} y2={CY - u * Math.cos((a * Math.PI) / 180)}
      stroke={RENK.murekkep} strokeWidth={w} strokeLinecap="round" opacity={k} />
  );
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
      <circle cx={CX} cy={CY} r={R} fill="#F8F4E6" stroke={RENK.altin} strokeWidth={8} />
      <circle cx={CX} cy={CY} r={R - 14} fill="none" stroke={RENK.murekkep} strokeOpacity={0.25} strokeWidth={2} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180, ch = i % 3 === 0;
        return <line key={i} x1={CX + (R - 22) * Math.sin(a)} y1={CY - (R - 22) * Math.cos(a)}
          x2={CX + (R - (ch ? 52 : 38)) * Math.sin(a)} y2={CY - (R - (ch ? 52 : 38)) * Math.cos(a)}
          stroke={RENK.murekkep} strokeWidth={ch ? 7 : 4} strokeLinecap="round" />;
      })}
      {el(sa, 80, 1, 10)}
      {el(dk, 125, 1, 6)}
      <circle cx={CX} cy={CY} r={10} fill={RENK.altin} stroke={RENK.murekkep} strokeWidth={3} />
    </svg>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Kadran t={t} />
        <Etiket t={t} bas={K(0, "without a meal")} capa={[300, 430]} konum={[300, 130]} metin="WITHOUT A MEAL" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.8} />
      <VurguRozet t={t} bas={K(0, "two thirds")} vurgu={b.vurgu!} not={b.not} x={330} y={730} genislik={470} renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "timing")} metin={b.satirlar[0]} x={1850} y={190} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "timing") + 0.2} metin={b.satirlar[1]} x={1850} y={310} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S23;
