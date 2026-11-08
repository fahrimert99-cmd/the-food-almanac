// Sahne 13 — 20 yetişkin (10 erkek, 10 kadın), ortalama yaş ~31, 4 hafta.
import React from "react";
import { Baslik, INTER, ANTON, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Kamera } from "../kutuphane";

// Basit kişi simgesi (kafa + gövde)
const Kisi: React.FC<{ x: number; y: number; renk: string; t: number; bas: number }> = ({ x, y, renk, t, bas }) => {
  const [sc, al] = pop(t, bas, 0.45);
  if (al <= 0) return null;
  return (
    <g transform={`translate(${x} ${y}) scale(${sc})`} opacity={al}>
      <circle cx={0} cy={14} r={14} fill={renk} />
      <path d="M -22 70 L -22 46 Q -22 32 -8 32 L 8 32 Q 22 32 22 46 L 22 70 Z" fill={renk} />
    </g>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMen = K(0, "10 men"), tWomen = K(0, "10 women");
  const tAge = K(0, "31"), tW = K(0, "weight");
  const tWeeks = K(1, "four");
  const pAge = pop(t, tAge, 0.5), pW = pop(t, tW, 0.5);
  const sat = (m: string, x: number, y: number, tt: number) => {
    const a = eout(ilerle(t, tt, 0.5));
    return <div style={{ position: "absolute", left: x, top: y, opacity: a, fontFamily: ANTON, fontSize: 46, color: RENK.lacivert, whiteSpace: "nowrap" }}>{m}</div>;
  };
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])} />
      <Baslik t={t} bas={K(0, "20")} metin="20 ADULTS" x={150} y={190} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tWeeks} metin="4 WEEKS" x={150} y={330} boyut={120} renk={RENK.koyuYesil} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 10 }, (_, i) => <Kisi key={`m${i}`} t={t} bas={tMen + i * 0.05} x={1010 + i * 68} y={150} renk={RENK.lacivert} />)}
        {Array.from({ length: 10 }, (_, i) => <Kisi key={`w${i}`} t={t} bas={tWomen + i * 0.05} x={1010 + i * 68} y={290} renk={RENK.mercan} />)}
      </svg>
      {sat("10 MEN", 1710, 158, tMen)}
      {sat("10 WOMEN", 1710, 298, tWomen)}
      {/* ortalama yaş ve kilo kartları */}
      <div style={{ position: "absolute", left: 1000, top: 440, transform: `scale(${pAge[0]})`, transformOrigin: "0% 50%", opacity: pAge[1],
        background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26, padding: "8px 26px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert, display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap" }}>
        AVERAGE AGE <span style={{ fontFamily: ANTON, fontSize: 64, color: RENK.altin, lineHeight: 1.1 }}>≈ 31</span>
      </div>
      <div style={{ position: "absolute", left: 1000, top: 560, transform: `scale(${pW[0]})`, transformOrigin: "0% 50%", opacity: pW[1],
        background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, borderRadius: 26, padding: "10px 26px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
        fontFamily: INTER, fontWeight: 800, fontSize: 28, lineHeight: 1.3, color: RENK.lacivert, whiteSpace: "nowrap" }}>
        WEIGHT: A LITTLE ABOVE<br />THE HEALTHY RANGE
      </div>
    </>
  );
};

export default S13;
