// Sahne 19 — öğünde hiçbir şey değişmedi: kalori, karbonhidrat, porsiyon aynı; yalnızca sıra değişti.
// Düzen: tabak solda (kamera), sağda kâğıt panel; sonda yiyeceklerin üstünde sıra hapları (çalışmadaki gibi:
// önce sebze + protein birlikte, karbonhidrat 15 dk sonra).
import React from "react";
import { Baslik, INTER, ANTON, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sıra hapları (görsel koordinatı): 1 sebze ve 1 protein birlikte, 2 karbonhidrat
const SIRA = [
  { no: 1, metin: "VEG", renk: RENK.yesil, x: 905, y: 300 },
  { no: 1, metin: "PROTEIN", renk: RENK.yesil, x: 990, y: 640 },
  { no: 2, metin: "CARBS", renk: RENK.mercan, x: 585, y: 455 },
];
// oklar: her iki "1"den "2"ye
const OKLAR: [number, number, number, number][] = [[0, 2, -40, 0], [1, 2, 120, 40]];

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHic = K(0, "nothing"), tDeg = K(0, "changed"), tMeal = K(0, "the meal");
  const satirlar = [
    { bas: K(1, "calories"), metin: "SAME CALORIES" },
    { bas: K(1, "carbohydrates"), metin: "SAME CARBS" },
    { bas: K(1, "portion size"), metin: "SAME PORTION SIZE" },
  ];
  const tOnly = K(2, "only"), tSeq = K(2, "sequence");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  // "the meal": tabağın çevresine kesikli halka çizilir
  const pHalka = eout(ilerle(t, tMeal - 0.1, 0.9));
  const aHalka = pHalka * (1 - eout(ilerle(t, satirlar[0].bas - 0.2, 0.5)));
  const soluk = 1 - 0.6 * eout(ilerle(t, tOnly, 0.5));
  const pOk = (i: number) => eout(ilerle(t, tSeq - 0.1 + i * 0.2 + 0.12, 0.35));
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [290, 30, 1630], [330, 60, 1570])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {aHalka > 0 && (
            <ellipse cx={920} cy={542} rx={640} ry={430} fill="none" stroke={RENK.altin} strokeWidth={6} strokeDasharray="22 16"
              pathLength={1000} strokeDashoffset={1000 * (1 - pHalka)} opacity={aHalka} transform="rotate(-2 920 542)" />
          )}
          {/* sıra okları: 1 -> 2 -> 3 */}
          {OKLAR.map(([ia, ib, kx, ky], i) => {
            const p = pOk(i);
            if (p <= 0) return null;
            const A = SIRA[ia], B = SIRA[ib];
            const mx = (A.x + B.x) / 2 + kx, my = (A.y + B.y) / 2 + ky;
            return (
              <path key={i} d={`M ${A.x - 40} ${A.y + (i === 0 ? 30 : -30)} Q ${mx} ${my} ${B.x + 70} ${B.y + (i === 0 ? -30 : 30)}`} fill="none"
                stroke={RENK.kagitAcik} strokeWidth={13} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} opacity={0.85} />
            );
          })}
          {OKLAR.map(([ia, ib, kx, ky], i) => {
            const p = pOk(i);
            if (p <= 0) return null;
            const A = SIRA[ia], B = SIRA[ib];
            const mx = (A.x + B.x) / 2 + kx, my = (A.y + B.y) / 2 + ky;
            return (
              <path key={`k${i}`} d={`M ${A.x - 40} ${A.y + (i === 0 ? 30 : -30)} Q ${mx} ${my} ${B.x + 70} ${B.y + (i === 0 ? -30 : 30)}`} fill="none"
                stroke={RENK.lacivert} strokeWidth={5} strokeLinecap="round" strokeDasharray="12 10" opacity={p} />
            );
          })}
        </svg>
        {SIRA.map((o, i) => {
          const [sc, al] = pop(t, tSeq - 0.15 + (o.no - 1) * 0.35 + i * 0.05, 0.45);
          if (al <= 0) return null;
          return (
            <div key={o.metin} style={{ position: "absolute", left: o.x, top: o.y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
              display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`,
              borderRadius: 999, padding: "6px 24px 6px 7px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.25)" }}>
              <span style={{ width: 46, height: 46, borderRadius: "50%", background: o.renk, color: "#fff", display: "flex", alignItems: "center",
                justifyContent: "center", fontFamily: ANTON, fontSize: 30 }}>{o.no}</span>
              {o.metin}
            </div>
          );
        })}
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={720} opak={0.96} />
      <Baslik t={t} bas={tHic - 0.05} metin="NOTHING" x={1400} y={210} boyut={112} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDeg - 0.05} metin="CHANGED." x={1400} y={334} boyut={112} renk={RENK.koyuYesil} />
      {satirlar.map((r, i) => {
        const p = eout(ilerle(t, r.bas - 0.05, 0.5));
        if (p <= 0) return null;
        return (
          <div key={r.metin} style={{ position: "absolute", left: 1404, top: 440 + i * 84, opacity: p * soluk,
            transform: `translateX(${(1 - p) * -36}px)`, display: "flex", alignItems: "center", gap: 18, whiteSpace: "nowrap" }}>
            <span style={{ width: 50, height: 50, borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 38, lineHeight: 1 }}>=</span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.murekkep }}>{r.metin}</span>
          </div>
        );
      })}
      <Baslik t={t} bas={tOnly - 0.05} metin="ONLY THE" x={1400} y={740} boyut={62} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSeq - 0.15} metin="SEQUENCE" x={1400} y={828} boyut={100} renk={RENK.altin} />
    </>
  );
};

export default S19;
