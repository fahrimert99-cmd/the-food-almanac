// Sahne 36 — NHS: 80 g taze, konserve ya da dondurulmuş = 1 porsiyon. Terazi kadranı yeniden çizildi (bozuk rakamlar örtülü).
import React from "react";
import { ANTON, Baslik, Hap, INTER, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const CX = 1133, CY = 736, R = 158;

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNhs = K(0, "NHS"), tGram = K(1, "eighty grams"), tFresh = K(1, "fresh,"), tCanned = K(1, "canned"),
    tFrozen = K(1, "frozen"), tCounts = K(1, "counts as"), tFive = K(1, "five a day");
  const ibre = eout(ilerle(t, tGram, 1.0));
  const aci = -100 + ibre * 160;
  const aDial = 1;
  const pills = [
    { ad: "FRESH", bas: tFresh, renk: RENK.yesil },
    { ad: "CANNED", bas: tCanned, renk: RENK.altin },
    { ad: "FROZEN", bas: tFrozen, renk: RENK.lacivert },
  ];
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        {/* bozuk kadran yazıları: kadran yüzü yeniden çizilir */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aDial }}>
          <circle cx={CX} cy={CY} r={R} fill="#F7F3E6" />
          <circle cx={CX} cy={CY} r={R - 6} fill="none" stroke="#8A6A4A" strokeWidth={3} opacity={0.6} />
          {Array.from({ length: 40 }, (_, i) => {
            const a = ((i / 40) * 300 - 150 - 90) * (Math.PI / 180);
            const u = i % 5 === 0 ? 24 : 12;
            return <line key={i} x1={CX + Math.cos(a) * (R - 16)} y1={CY + Math.sin(a) * (R - 16)}
              x2={CX + Math.cos(a) * (R - 16 - u)} y2={CY + Math.sin(a) * (R - 16 - u)} stroke={RENK.murekkep} strokeWidth={i % 5 === 0 ? 4 : 2} />;
          })}
          <text x={CX} y={CY + 78} textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 44, fill: RENK.lacivert }}>80 g</text>
          <g transform={`rotate(${aci} ${CX} ${CY})`}>
            <polygon points={`${CX - 7},${CY} ${CX + 7},${CY} ${CX},${CY - R + 34}`} fill="#9E2A2B" />
          </g>
          <circle cx={CX} cy={CY} r={12} fill="#9E2A2B" />
        </svg>
      </Kamera>

      {/* 1: NHS */}
      <Baslik t={t} bas={tNhs} bitis={tGram + 0.3} metin="NHS" x={80} y={230} boyut={150} renk={RENK.altin} />
      <Not t={t} bas={tNhs + 0.5} bitis={tGram + 0.3} metin="treats them alike" x={84} y={330} boyut={36} />

      {/* 2: 80 g */}
      <VurguRozet t={t} bas={tGram} vurgu="80 g" not="fresh, canned or frozen (NHS)" x={330} y={140} genislik={440} />

      {/* 3: üç biçim */}
      <div style={{ position: "absolute", left: 1000, top: 160, display: "flex", gap: 18 }}>
        {pills.map((p) => {
          const [sc, al] = pop(t, p.bas, 0.5);
          return <div key={p.ad} style={{ transform: `scale(${sc})`, opacity: al }}><Hap metin={p.ad} renk={p.renk} boyut={34} /></div>;
        })}
      </div>

      {/* 4: başlık */}
      <Baslik t={t} bas={tCounts} metin="COUNTS AS" x={80} y={560} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tCounts + 0.18} metin="ONE PORTION" x={80} y={670} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={tFive} metin="of your 5 a day" x={84} y={760} boyut={38} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S36;
