// Sahne 18 — Terazi: düzeltme sonrası HR 0.95, fark neredeyse yok.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const [p0, p1] = [K(1, "After adjusting"), K(1, "1.0")];
  const hapSabit = (bas: number, bitis: number, x: number, y: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={26} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        <Etiket t={t} bas={K(1, "almost nothing")} capa={[960, 262]} konum={[1290, 120]} metin="ALMOST NOTHING" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "no effect")} capa={[1280, 640]} konum={[1640, 760]} metin="NO EFFECT INCLUDED" renk={RENK.yesil} />
      </Kamera>
      {hapSabit(K(0, "how those groups lived"), p0 - 0.1, 330, 150, "HOW GROUPS LIVED", RENK.lacivert)}
      <Baslik t={t} bas={p0} metin={b.satirlar[0]} x={60} y={160} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={p0 + 0.2} metin={b.satirlar[1]} x={60 + 8 + b.satirlar[0].length * 40} y={160} boyut={88} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "0.95")} vurgu={b.vurgu!} not={b.not} x={1700} y={330} genislik={340} />
      {hapSabit(p1, 1e9, 1700, 640, "1.0 = NO DIFFERENCE", RENK.altin)}
    </>
  );
};

export default S18;
