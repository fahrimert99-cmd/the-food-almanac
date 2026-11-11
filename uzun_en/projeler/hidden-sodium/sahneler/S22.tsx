// Sahne 22 — Birinci sıra: ekmek. Başlık sağda, tek dilim etiketi, dilimlerin birikmesi.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Küçük ekmek dilimi simgesi
const Dilim: React.FC<{ x: number; y: number; k: number }> = ({ x, y, k }) => (
  <g transform={`translate(${x} ${y}) scale(${k})`}>
    <path d="M -34 28 L -34 -6 C -52 -10 -48 -42 -22 -42 C -16 -54 16 -54 22 -42 C 48 -42 52 -10 34 -6 L 34 28 Z"
      fill="#D9A55B" stroke={RENK.murekkep} strokeWidth={4} strokeLinejoin="round" />
    <path d="M -24 20 L -24 -4 C -38 -8 -34 -32 -18 -32 C -10 -42 10 -42 18 -32 C 34 -32 38 -8 24 -4 L 24 20 Z" fill="#F2D9A8" />
  </g>
);

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "number one"), tBread = K(1, "Bread"), tDilim = K(2, "One slice"), tSalty = K(2, "salty");
  const tOften = K(2, "eaten so often"), tUp = K(2, "adds up");
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const N = 10;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={pen}>
        <Etiket t={t} bas={tDilim} bitis={tSalty + 1.0} capa={[880, 590]} konum={[1020, 790]} metin="ONE SLICE" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={t1} metin="NUMBER ONE:" x={1340} y={170} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBread} metin="BREAD" x={1340} y={290} boyut={150} renk={RENK.koyuYesil} />
      {/* dilimler tek tek birikir */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: N }, (_, i) => {
          const [sc, al] = pop(t, tOften + i * 0.32, 0.4);
          if (al <= 0) return null;
          const x = 1390 + (i % 5) * 96, y = 560 + Math.floor(i / 5) * 100;
          return <g key={i} opacity={al}><Dilim x={x} y={y} k={sc} /></g>;
        })}
      </svg>
      <Not t={t} bas={tUp} metin="ADDS UP FAST" x={1340} y={720} boyut={44} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S22;
