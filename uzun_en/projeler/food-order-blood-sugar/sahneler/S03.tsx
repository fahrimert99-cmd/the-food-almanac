// Sahne 3 — 1 dakikalık onaylı demodan uyarlandı.
import React from "react";
import { AbsoluteFill, AltSis, ANTON, Baslik, Etiket, GorselKart, Img, INTER, Kamera, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, kis, pop, random, staticFile } from "../kutuphane";

// --- 3. Kan şekeri eğrileri -------------------------------------------------------
// Temsili kan şekeri DÜZEYİ (100 = yemek öncesi). Yeşil eğri çalışmadaki mutlak düzey
// farklarını taşır: 30. dk %29, 60. dk %37, 120. dk %17 daha düşük (demo.py ile aynı).
const EGRI: Record<string, [number, number][]> = {
  karb: [[0, 100], [15, 160], [30, 212], [45, 236], [60, 232], [75, 214], [90, 192], [105, 172], [120, 158]],
  sebze: [[0, 100], [15, 124], [30, 150.5], [45, 152], [60, 146.2], [75, 143], [90, 140.2], [105, 135], [120, 131.1]],
};
const glukoz = (tdk: number, sira: string) => {
  const pts = EGRI[sira], n = pts.length;
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const d = xs.slice(0, -1).map((_, i) => (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]));
  const m = [d[0], ...d.slice(1).map((di, i) => (d[i] * di > 0 ? (d[i] + di) / 2 : 0)), d[n - 2]];
  const x = kis(tdk, 0, 120);
  const i = Math.min(n - 2, Math.floor(x / 15));
  const h = xs[i + 1] - xs[i], u = (x - xs[i]) / h;
  return (2 * u ** 3 - 3 * u ** 2 + 1) * ys[i] + (u ** 3 - 2 * u ** 2 + u) * h * m[i] +
    (-2 * u ** 3 + 3 * u ** 2) * ys[i + 1] + (u ** 3 - u ** 2) * h * m[i + 1];
};

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const x0 = 340, x1 = 1420, yb = 860, yt = 330;
  const ys = (v: number) => yb - (v / 260) * (yb - yt);
  const xs = (m: number) => x0 + (m / 120) * (x1 - x0);
  const aE = eout(ilerle(t, 0.05, 0.6));
  const pc = eout(ilerle(t, c[0].bas + 0.3, 4.0));
  const cizimSon = c[0].bas + 4.3;
  const egriler = [
    { sira: "karb", renk: RENK.mercan, ad: "CARBS FIRST", gecik: 0, ifade: "bread and juice last", dy: -16 },
    { sira: "sebze", renk: RENK.yesil, ad: "VEG + PROTEIN FIRST", gecik: 0.12, ifade: "vegetables and protein first", dy: 40 },
  ];
  const nokta = (sira: string, son: number) => {
    const out: string[] = [];
    for (let i = 0; i <= 120; i++) {
      const m = Math.min(son, (120 * i) / 120);
      out.push(`${xs(m).toFixed(1)},${ys(glukoz(m, sira)).toFixed(1)}`);
      if (m >= son) break;
    }
    return out.join(" ");
  };
  const tFark = K(0, "kept blood sugar");
  const pAlan = eout(ilerle(t, Math.max(tFark, cizimSon), 0.8));
  const alan = [...Array.from({ length: 121 }, (_, m) => `${xs(m)},${ys(glukoz(m, "karb"))}`),
    ...Array.from({ length: 121 }, (_, k) => 120 - k).map((m) => `${xs(m)},${ys(glukoz(m, "sebze"))}`)].join(" ");
  const t37 = K(0, "37 percent");
  const p37 = eout(ilerle(t, t37, 0.5));
  const [sr, ar] = pop(t, t37 + 0.1, 0.6);
  const yk60 = ys(glukoz(60, "karb")), ys60 = ys(glukoz(60, "sebze"));
  const yazi = (st: React.CSSProperties) => ({ fontFamily: INTER, ...st });
  return (
    <AbsoluteFill style={{ backgroundColor: RENK.kagit }}>
      {/* kaynak etiketi */}
      <div style={{ position: "absolute", left: 56, top: 48, opacity: aE, display: "flex", alignItems: "center", gap: 14,
        background: RENK.lacivert, borderRadius: 999, padding: "12px 28px 12px 20px", color: "#fff",
        fontFamily: INTER, fontWeight: 800, fontSize: 26 }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
        Shukla et al. · Diabetes Care · 2015
      </div>
      <div style={{ position: "absolute", left: x0, top: 150, display: "flex", alignItems: "center", gap: 28, opacity: aE }}>
        <span style={{ fontFamily: ANTON, fontSize: 66, color: RENK.koyuYesil, lineHeight: 1 }}>BLOOD SUGAR AFTER THE SAME MEAL</span>
        <span style={{ ...yazi({ fontWeight: 800, fontSize: 22, letterSpacing: 2 }), color: RENK.altin, border: `3px solid ${RENK.altin}`,
          background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</span>
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <defs>
          <filter id="golge" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#302822" floodOpacity="0.25" />
          </filter>
        </defs>
        <g opacity={aE}>
          {[0, 30, 60, 90, 120].map((m) => (
            <g key={m}>
              <line x1={xs(m)} y1={yb} x2={xs(m)} y2={yt} stroke={RENK.murekkep} strokeOpacity={0.13} strokeWidth={2} />
              <text x={xs(m)} y={yb + 44} textAnchor="middle" style={yazi({ fontWeight: 500, fontSize: 30, fill: RENK.lacivert })}>{m} min</text>
            </g>
          ))}
          <polyline points={`${x0},${yt - 20} ${x0},${yb} ${x1 + 20},${yb}`} fill="none" stroke={RENK.murekkep} strokeWidth={4} />
          <text x={x0 - 30} y={(yb + yt) / 2} transform={`rotate(-90 ${x0 - 30} ${(yb + yt) / 2})`} textAnchor="middle"
            style={yazi({ fontWeight: 700, fontSize: 30, fill: RENK.lacivert })}>blood sugar</text>
          <line x1={x0} y1={ys(100)} x2={x1} y2={ys(100)} stroke="#787882" strokeOpacity={0.8} strokeWidth={2.5} strokeDasharray="10 10" />
          <text x={x1 - 4} y={ys(100) + 34} textAnchor="end" style={yazi({ fontWeight: 500, fontSize: 24, fill: "#6E6E78" })}>before the meal</text>
        </g>
        <polygon points={alan} fill={RENK.altin} opacity={0.16 * pAlan} />
        {egriler.map((e) => {
          const p = kis(pc * 1.12 - e.gecik);
          if (p <= 0) return null;
          const son = 120 * p;
          const ux = xs(son), uy = ys(glukoz(son, e.sira));
          const aL = eout(ilerle(t, Math.max(cizimSon, K(0, e.ifade)), 0.4));
          return (
            <g key={e.sira}>
              <polyline points={nokta(e.sira, son)} fill="none" stroke={e.renk} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" filter="url(#golge)" />
              {p < 1 && <circle cx={ux} cy={uy} r={13} fill={e.renk} stroke="#fff" strokeWidth={4} />}
              <text x={x1 + 30} y={ys(glukoz(120, e.sira)) + e.dy} opacity={aL}
                style={yazi({ fontWeight: 800, fontSize: 32, fill: e.renk })}>{e.ad}</text>
            </g>
          );
        })}
        {p37 > 0 && (
          <g opacity={p37}>
            <line x1={xs(60)} y1={yb} x2={xs(60)} y2={yt - 10} stroke={RENK.lacivert} strokeWidth={4} strokeDasharray="14 10" />
            <line x1={xs(60) + 30} y1={yk60 + 10} x2={xs(60) + 30} y2={yk60 + 10 + (ys60 - 22 - yk60 - 10) * p37}
              stroke={RENK.altin} strokeWidth={7} strokeLinecap="round" />
            <polygon points={`${xs(60) + 16},${ys60 - 26} ${xs(60) + 44},${ys60 - 26} ${xs(60) + 30},${ys60 - 6}`} fill={RENK.altin} opacity={kis(p37 * 2 - 1)} />
          </g>
        )}
      </svg>
      {/* –37% rozeti: yemek öncesi çizginin altındaki boş alanda */}
      <div style={{ position: "absolute", left: 1110, top: 700, transform: `translate(-50%, 0) scale(${sr})`, transformOrigin: "50% 0",
        opacity: ar, width: 330, padding: "6px 0 12px", textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.altin}`,
        borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 96, lineHeight: 1.0, color: RENK.altin }}>–37%</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>blood sugar at 1 hour</div>
      </div>
      <div style={{ position: "absolute", left: x0, top: yb + 64, opacity: aE, fontFamily: INTER, fontWeight: 500, fontSize: 23, color: "#585862" }}>
        Illustrative curves based on Shukla et al., Diabetes Care 2015 · 11 adults with type 2 diabetes · same meal, two eating orders
      </div>
    </AbsoluteFill>
  );
};

export default S03;
