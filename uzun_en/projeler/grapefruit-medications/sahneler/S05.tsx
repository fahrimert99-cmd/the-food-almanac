// Sahne 5 — greyfurt ve furanokumarinler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// halka molekül taslağı (altıgen): merkez ve boyut
const Halka: React.FC<{ cx: number; cy: number; r: number; a: number }> = ({ cx, cy, r, a }) => {
  const p = Array.from({ length: 6 }, (_, k) => `${cx + r * Math.cos((Math.PI / 3) * k + Math.PI / 6)},${cy + r * Math.sin((Math.PI / 3) * k + Math.PI / 6)}`).join(" ");
  return <polygon points={p} fill="none" stroke={RENK.lacivert} strokeWidth={5} strokeLinejoin="round" opacity={a} />;
};

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tMol = K(1, "compounds");
  const bit0 = K(1, "Its") - 0.1;
  const bit1 = K(1, "natural") - 0.2;
  const halkalar: [number, number, number][] = [[930, 230, 52], [1021, 283, 52], [1021, 388, 52], [900, 345, 38], [1060, 190, 30]];
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 50, 1780])}>
        {/* gövdede sahte harfli kutu: kâğıt zeminli kendi halkalı pencerem örter */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <circle cx={978} cy={284} r={194} fill="#FBF6DF" stroke={RENK.lacivert} strokeWidth={6} />
          {halkalar.map(([x, y, r], i) => {
            const [sc, al] = pop(t, tMol + i * 0.18, 0.5);
            return <g key={i} style={{ transformOrigin: `${x}px ${y}px`, transform: `scale(${sc})` }}><Halka cx={x} cy={y} r={r} a={al} /></g>;
          })}
        </svg>
        <Etiket t={t} bas={K(0, "grapefruit")} bitis={bit0} capa={[400, 520]} konum={[420, 100]} metin="GRAPEFRUIT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "vitamin")} bitis={bit0} capa={[330, 760]} konum={[215, 900]} metin="VITAMIN C" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "bitter")} bitis={bit0} capa={[740, 880]} konum={[1080, 900]} metin="BITTER TANG" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "pulp")} bitis={bit1 + 1.2} capa={[800, 700]} konum={[1330, 700]} metin="PULP & JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "bergamottin.")} capa={[1100, 400]} konum={[1450, 620]} metin="BERGAMOTTIN" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "furanocoumarins,")} satirlar={b.satirlar} x={1860} y={230} boyut={112} hiza="sag" />
      <Not t={t} bas={K(1, "furanocoumarins,") + 0.5} metin={b.not!} x={1860} y={430} hiza="sag" genislik={560} />
    </>
  );
};

export default S05;
