// Sahne 49 — gerçekçi hafta: soldaki gravür tabakta yiyecekler vurgulanır, sağda liste söylendikçe dolar.
import React from "react";
import { BaslikBlok, Kamera, Liste, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// sahte rakamlı köşeler (görsel koordinatı) — kâğıt yamayla örtülür
const YAMA: [number, number][] = [[127, 133], [404, 133], [756, 133], [127, 417], [407, 417], [764, 417], [129, 708], [409, 708], [764, 708]];
// vurgulanan gözeler: [x, y, w, h]
const GOZE: [number, number, number, number][] = [[110, 120, 273, 268], [393, 400, 343, 277], [747, 400, 270, 277], [393, 690, 343, 273]];

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tl = [K(1, "spinach"), K(2, "berries"), K(3, "walnuts"), K(4, "salmon"), K(5, "olive")];
  const tBas = K(0, "realistic");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 17, 1860])}>
        {YAMA.map(([x, y], i) => (
          <div key={i} style={{ position: "absolute", left: x - 46, top: y - 40, width: 92, height: 80,
            background: `radial-gradient(ellipse at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        ))}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {GOZE.map(([x, y, w, h], i) => {
            const a = eout(ilerle(t, tl[i], 0.4)) * (i === 3 ? 1 : 1);
            const son = i < 3 ? tl[i + 1] : 1e9;
            const af = a * Math.max(0.25, sol(t, son + 0.6, 0.5));
            return a > 0 ? <rect key={i} x={x - 8} y={y - 8} width={w + 16} height={h + 16} rx={10} fill="none" stroke={RENK.altin}
              strokeWidth={6} strokeDasharray="18 12" opacity={af} /> : null;
          })}
        </svg>
      </Kamera>
      <div style={{ position: "absolute", left: 1080, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 6%, ${kagit(1)} 100%)` }} />
      <BaslikBlok t={t} bas={tBas} satirlar={["A REALISTIC", "WEEK"]} x={1150} y={150} boyut={92} />
      <Liste t={t} isaret="onay" boyut={38} aralik={104} x={1150} y={340} genislik={720}
        ogeler={[
          { bas: tl[0], metin: "SPINACH SALAD · MOST DAYS" },
          { bas: tl[1], metin: "BERRIES ON OATMEAL · TWICE" },
          { bas: tl[2], metin: "WALNUTS · AS A SNACK" },
          { bas: tl[3], metin: "SALMON OR FISH · ONCE" },
          { bas: tl[4], metin: "OLIVE OIL · FOR COOKING", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S49;
