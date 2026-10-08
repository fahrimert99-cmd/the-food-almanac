// Sahne 20 — 11 kişi ve tek öğün: çok küçük bir deney; aynı ekip denemeye devam etti.
// Defter sayfalarına "yazılır": solda 11 kişi simgesi, sağda 1 öğün; altta damga; sağda devam başlığı.
import React from "react";
import { ANTON, Baslik, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Kusur örtüleri (görsel koordinatı): defter başlıklarındaki sahte yazılar, ölçüm cihazı düğmelerindeki sahte işaretler
const SAYFA_YAMA = [
  { x: 558, y: 287, w: 104, h: 36, renk: "248,239,202" },
  { x: 826, y: 305, w: 40, h: 34, renk: "246,236,199" },
  { x: 894, y: 293, w: 82, h: 30, renk: "244,234,198" },
  { x: 1164, y: 286, w: 50, h: 32, renk: "250,245,211" },
];
const DUGME = [
  { x: 177, y: 312, r: 15 }, { x: 227, y: 306, r: 11 }, { x: 190, y: 366, r: 13 }, { x: 242, y: 354, r: 14 },
];

// Kişi simgesi: baş + omuzlar. x,y = gövde ortası
const kisi = (x: number, y: number) =>
  `M ${x - 16} ${y + 18} Q ${x - 16} ${y - 4} ${x} ${y - 4} Q ${x + 16} ${y - 4} ${x + 16} ${y + 18} Z`;

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOn1 = K(0, "eleven"), tOgun = K(0, "single meal"), tKucuk = K(0, "very small");
  const tEkip = K(1, "same team"), tKept = K(1, "kept testing"), tTest = K(1, "testing");
  const kisiler = Array.from({ length: 11 }, (_, k) => {
    const ust = k < 6;
    const j = ust ? k : k - 6;
    return { x: 690 + (j - (ust ? 2.5 : 2)) * 44, y: ust ? 568 : 652, bas: tOn1 + 0.2 + k * 0.05 };
  });
  const a11 = eout(ilerle(t, tOn1 + 0.1, 0.5));
  const a1 = eout(ilerle(t, tOgun + 0.2, 0.5));
  const [sT, aT] = pop(t, tOgun + 0.35, 0.5);
  // damga: büyükten küçülerek "basılır"
  const pD = eout(ilerle(t, tKucuk - 0.05, 0.35));
  const [sOk, aOk] = pop(t, tTest, 0.5);
  const sayiStil = (a: number): React.CSSProperties => ({ position: "absolute", transform: `translate(-50%, -50%) translateY(${(1 - a) * 14}px)`,
    opacity: a, fontFamily: ANTON, fontSize: 150, lineHeight: 1, color: RENK.lacivert });
  const altStil = (a: number): React.CSSProperties => ({ position: "absolute", transform: "translate(-50%, -50%)", opacity: a,
    fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 5, color: RENK.koyuYesil, whiteSpace: "nowrap" });
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [110, 70, 1720])}>
        {SAYFA_YAMA.map((p, i) => (
          <div key={i} style={{ position: "absolute", left: p.x - p.w / 2, top: p.y - p.h / 2, width: p.w, height: p.h,
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(${p.renk},1) 0%, rgba(${p.renk},1) 62%, rgba(${p.renk},0) 100%)` }} />
        ))}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {DUGME.map((d, i) => (
            <g key={i}>
              <circle cx={d.x} cy={d.y} r={d.r} fill="#5D6F7A" />
              <circle cx={d.x - d.r * 0.3} cy={d.y - d.r * 0.3} r={d.r * 0.45} fill="#fff" opacity={0.12} />
            </g>
          ))}
          {/* sol sayfa: 11 kişi */}
          {kisiler.map((k, i) => {
            const [sc, al] = pop(t, k.bas, 0.4);
            if (al <= 0) return null;
            return (
              <g key={i} opacity={al} transform={`translate(${k.x} ${k.y}) scale(${sc}) translate(${-k.x} ${-k.y})`}>
                <circle cx={k.x} cy={k.y - 16} r={10} fill={RENK.lacivert} />
                <path d={kisi(k.x, k.y)} fill={RENK.lacivert} />
              </g>
            );
          })}
          {/* sağ sayfa: tek tabak */}
          <g opacity={aT} transform={`translate(990 598) scale(${sT}) translate(-990 -598)`}>
            <circle cx={990} cy={598} r={34} fill="none" stroke={RENK.lacivert} strokeWidth={5} />
            <circle cx={990} cy={598} r={20} fill="none" stroke={RENK.lacivert} strokeWidth={3} opacity={0.6} />
            <line x1={940} y1={572} x2={940} y2={624} stroke={RENK.lacivert} strokeWidth={5} strokeLinecap="round" />
            <line x1={1040} y1={572} x2={1040} y2={624} stroke={RENK.lacivert} strokeWidth={5} strokeLinecap="round" />
          </g>
        </svg>
        <div style={{ ...sayiStil(a11), left: 690, top: 392 }}>11</div>
        <div style={{ ...altStil(a11), left: 690, top: 488 }}>PEOPLE</div>
        <div style={{ ...sayiStil(a1), left: 990, top: 392 }}>1</div>
        <div style={{ ...altStil(a1), left: 990, top: 488 }}>MEAL</div>
        {/* damga: çok küçük bir deney */}
        {pD > 0 && (
          <div style={{ position: "absolute", left: 872, top: 790, transform: `translate(-50%, -50%) rotate(-4deg) scale(${1.5 - 0.5 * pD})`,
            opacity: pD, padding: "6px 28px 4px", border: `5px solid ${RENK.altin}`, borderRadius: 14, background: "rgba(251,248,241,0.94)",
            fontFamily: ANTON, fontSize: 54, lineHeight: 1.15, letterSpacing: 1.5, color: RENK.altin, whiteSpace: "nowrap",
            boxShadow: "0 8px 20px rgba(48,40,34,0.16)" }}>VERY SMALL EXPERIMENT</div>
        )}
      </Kamera>
      {/* sağ boş kâğıtta: aynı ekip denemeye devam etti */}
      <Baslik t={t} bas={tEkip - 0.05} metin="THE SAME TEAM" x={1856} y={648} boyut={28} renk={RENK.altin} hiza="sag" font="inter" aralik={5} />
      <Baslik t={t} bas={tKept - 0.05} metin="KEPT" x={1860} y={718} boyut={90} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tTest - 0.1} metin="TESTING" x={1860} y={812} boyut={90} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", left: 1640 - 38, top: 718 - 38, width: 76, height: 76, borderRadius: "50%", background: RENK.koyuYesil,
        display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${sOk}) translateX(${(1 - aOk) * -20}px)`, opacity: aOk,
        boxShadow: "0 8px 22px rgba(48,40,34,0.22)", border: `4px solid ${RENK.kagitAcik}` }}>
        <IkonYol ad="ok" boyut={46} renk="#fff" kalinlik={6.5} />
      </div>
    </>
  );
};

export default S20;
