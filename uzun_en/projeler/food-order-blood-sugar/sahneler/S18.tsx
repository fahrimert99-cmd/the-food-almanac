// Sahne 18 — insülin de daha düşüktü: aynı yemek için vücut daha az insüline ihtiyaç duydu.
// Görsel: pankreastan çıkan damar/tüp; altın küreler glukoz (S06 ile aynı), yeşil parçacıklar insülin.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Tüpteki insülin parçacıkları (görsel koordinatı). kal = "lower" sonrası kalanlar; diğerleri söner.
const INSULIN: { x: number; y: number; r: number; kal?: boolean }[] = [
  { x: 1200, y: 604, r: 11, kal: true }, { x: 1352, y: 506, r: 10, kal: true }, { x: 1588, y: 562, r: 11, kal: true },
  { x: 1690, y: 522, r: 10, kal: true },
  { x: 1108, y: 498, r: 10 }, { x: 1170, y: 572, r: 9 }, { x: 1214, y: 492, r: 10 }, { x: 1292, y: 552, r: 11 },
  { x: 1302, y: 492, r: 9 }, { x: 1362, y: 594, r: 10 }, { x: 1424, y: 602, r: 11 }, { x: 1474, y: 574, r: 9 },
  { x: 1546, y: 498, r: 10 }, { x: 1574, y: 604, r: 9 }, { x: 1648, y: 486, r: 10 }, { x: 1704, y: 592, r: 11 },
  { x: 1112, y: 612, r: 9 }, { x: 1456, y: 540, r: 9 }, { x: 1395, y: 490, r: 9 }, { x: 1508, y: 566, r: 10 },
  { x: 1720, y: 555, r: 9 }, { x: 1170, y: 486, r: 9 },
];

// Tabak simgesi (SAME FOOD hapı için)
const Tabak: React.FC<{ boyut: number }> = ({ boyut }) => (
  <svg width={boyut} height={boyut} viewBox="0 0 48 48" fill="none" stroke="#fff" strokeWidth={3.4} strokeLinecap="round">
    <circle cx="24" cy="24" r="15" />
    <circle cx="24" cy="24" r="9" strokeOpacity={0.7} />
    <line x1="6" y1="10" x2="6" y2="38" />
    <line x1="42" y1="10" x2="42" y2="38" />
  </svg>
);

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIns = 0.05, tLow = K(0, "lower"), tLess = K(1, "less insulin"), tFood = K(1, "very same food");
  const [sOk, aOk] = pop(t, tLow + 0.15, 0.5);
  // "less insulin": LESS satırı ve ok hafifçe nabız atar
  const nabiz = Math.sin(Math.PI * ilerle(t, tLess, 0.55)) * 0.07;
  const okKay = Math.sin(Math.PI * ilerle(t, tLess, 0.55)) * 10;
  const [sF, aF] = pop(t, tFood - 0.1, 0.55);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [20, 0, 1880], [110, 10, 1720])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {INSULIN.map((p, j) => {
            const a0 = eout(ilerle(t, tIns + 0.05 + j * 0.035, 0.45));
            // "lower": kalmayanlar sırayla küçülüp söner
            const sonus = p.kal ? 1 : 1 - eout(ilerle(t, tLow + 0.1 + (j % 14) * 0.09, 0.45));
            const a = a0 * sonus;
            if (a <= 0) return null;
            const x = p.x + Math.sin(t * 0.9 + j * 1.7) * 6, y = p.y + Math.cos(t * 0.75 + j * 2.3) * 5;
            const r = (p.r + 3) * (0.6 + 0.4 * a);
            return (
              <g key={j} opacity={a}>
                <circle cx={x} cy={y} r={r + 3} fill={RENK.kagitAcik} opacity={0.55} />
                <circle cx={x} cy={y} r={r} fill={RENK.yesil} stroke={RENK.koyuYesil} strokeWidth={2} />
                <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.32} fill="#fff" opacity={0.55} />
              </g>
            );
          })}
        </svg>
        <Etiket t={t} bas={tIns + 0.3} bitis={tLess - 0.3} capa={[1455, 497]} konum={[1560, 330]} metin="INSULIN" renk={RENK.yesil} />
      </Kamera>
      {/* başlık: INSULIN önce, "lower" anında LESS + aşağı ok */}
      <div style={{ position: "absolute", left: 0, top: 0, transform: `scale(${1 + nabiz})`, transformOrigin: "110px 170px" }}>
        <Baslik t={t} bas={tLow - 0.05} metin="LESS" x={110} y={170} boyut={120} renk={RENK.koyuYesil} />
      </div>
      <Baslik t={t} bas={tIns} metin="INSULIN" x={110} y={300} boyut={120} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 368 - 46, top: 170 - 46 + okKay, width: 92, height: 92, borderRadius: "50%", background: RENK.yesil,
        display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${sOk})`, opacity: aOk,
        boxShadow: "0 8px 22px rgba(48,40,34,0.22)", border: `4px solid ${RENK.kagitAcik}` }}>
        <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={56} renk="#fff" kalinlik={6.5} /></span>
      </div>
      {/* "very same food": tüpün altında AYNI YEMEK hapı */}
      <div style={{ position: "absolute", left: 960, top: 835, transform: `translate(-50%, -50%) scale(${sF})`, opacity: aF * sol(t, 1e9),
        display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`,
        borderRadius: 999, padding: "10px 38px 10px 11px", fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 2,
        color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: RENK.lacivert, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Tabak boyut={46} />
        </span>
        SAME FOOD
      </div>
    </>
  );
};

export default S18;
