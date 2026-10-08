// Sahne 2 — 1 dakikalık onaylı demodan uyarlandı.
import React from "react";
import { AbsoluteFill, AltSis, ANTON, Baslik, Etiket, GorselKart, Img, INTER, Kamera, RENK, SP, einout, eout, ilerle, kagit,
  kelimeZamani, kis, pop, random, staticFile } from "../kutuphane";

// --- 2. İki gün, iki sıra -----------------------------------------------------------
const GUNLER = [
  { gx: 487, ad: "DAY 1", etiket: "CARBS FIRST", renk: RENK.mercan, gecik: 0,
    sira: ["BREAD", "JUICE", "CHICKEN", "SALAD", "BROCCOLI"], yuk: 330, tepe: "BIG SPIKE" },
  { gx: 1407, ad: "DAY 2", etiket: "VEG + PROTEIN FIRST", renk: RENK.yesil, gecik: 0.22,
    sira: ["SALAD", "BROCCOLI", "CHICKEN", "BREAD", "JUICE"], yuk: 140, tepe: "SMALLER RISE" },
];

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const zoom = ilerle(t, 0, s.sure);
  const tSira = K(0, "the order");
  const pGrafik = eout(ilerle(t, c[1].bas + 0.05, 0.6));
  const tFark = K(1, "surprisingly different");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={[20 + 30 * zoom, 30 + 30 * zoom, 1880 - 60 * zoom]} />
      <AbsoluteFill style={{ backgroundColor: RENK.kagit, opacity: 0.9 * pGrafik }} />
      {GUNLER.map((g) => {
        const [sd, ad] = pop(t, 0.05 + g.gecik, 0.55);
        const [se, ae] = pop(t, c[0].bas + c[0].sure * 0.92 + g.gecik, 0.5);
        return (
          <React.Fragment key={g.ad}>
            <div style={{ position: "absolute", left: g.gx, top: 64, transform: "translate(-50%, -50%)", display: "flex", gap: 14, alignItems: "center" }}>
              <div style={{ transform: `scale(${sd})`, opacity: ad, background: RENK.lacivert, color: "#fff", borderRadius: 12,
                padding: "6px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 6, whiteSpace: "nowrap" }}>{g.ad}</div>
              <div style={{ transform: `scale(${se})`, opacity: ae, background: g.renk, color: "#fff", borderRadius: 999,
                padding: "8px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, whiteSpace: "nowrap" }}>{g.etiket}</div>
            </div>
            <div style={{ position: "absolute", left: g.gx, top: 134, transform: "translate(-50%, -50%)", display: "flex", gap: 6, alignItems: "center" }}>
              {g.sira.map((ad_, k) => {
                const [sc, al] = pop(t, tSira + 0.08 + 0.13 * k + g.gecik, 0.45);
                return (
                  <React.Fragment key={ad_}>
                    <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 8,
                      background: RENK.kagitAcik, border: `2.5px solid ${RENK.murekkep}`, borderRadius: 999, padding: "5px 14px 5px 6px",
                      fontFamily: INTER, fontWeight: 800, fontSize: 21, letterSpacing: 1, color: RENK.murekkep, whiteSpace: "nowrap",
                      boxShadow: "0 5px 14px rgba(48,40,34,0.18)" }}>
                      <span style={{ width: 30, height: 30, borderRadius: "50%", background: g.renk, color: "#fff", display: "flex",
                        alignItems: "center", justifyContent: "center", fontSize: 18 }}>{k + 1}</span>
                      {ad_}
                    </div>
                    {k < 4 && <span style={{ opacity: al * 0.6, fontFamily: INTER, fontWeight: 800, fontSize: 22, color: RENK.murekkep }}>›</span>}
                  </React.Fragment>
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
      {/* 2. cümle: aynı eksende yüksek / alçak eğri */}
      {pGrafik > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {GUNLER.map((g) => {
            const p = einout(ilerle(t, c[1].bas + 0.4 + g.gecik, 2.0));
            const x0 = g.gx - 300, y0 = 720;
            const d = `M ${x0} ${y0} C ${x0 + 150} ${y0}, ${x0 + 170} ${y0 - g.yuk}, ${x0 + 280} ${y0 - g.yuk} ` +
              `C ${x0 + 410} ${y0 - g.yuk}, ${x0 + 470} ${y0 - 40}, ${x0 + 600} ${y0 - 22}`;
            const [st, at] = pop(t, Math.max(tFark - 0.1, c[1].bas + 1.6 + g.gecik), 0.5);
            return (
              <g key={g.ad} opacity={pGrafik}>
                <line x1={x0 - 10} y1={y0 + 8} x2={x0 + 610} y2={y0 + 8} stroke={RENK.murekkep} strokeWidth={3} opacity={0.55} />
                <line x1={x0 - 10} y1={y0 + 8} x2={x0 - 10} y2={y0 - 360} stroke={RENK.murekkep} strokeWidth={3} opacity={0.55} />
                <text x={x0 - 26} y={y0 - 170} transform={`rotate(-90 ${x0 - 26} ${y0 - 170})`} textAnchor="middle"
                  style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri }}>blood sugar</text>
                <text x={x0 + 610} y={y0 + 44} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.gri }}>time →</text>
                <path d={d} fill="none" stroke={g.renk} strokeWidth={13} strokeLinecap="round" pathLength={1}
                  strokeDasharray={1} strokeDashoffset={1 - p} />
                <g transform={`translate(${x0 + 280} ${y0 - g.yuk - 46}) scale(${st})`} opacity={at}>
                  <text textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 46, fill: g.renk, letterSpacing: 1 }}>{g.tepe}</text>
                </g>
              </g>
            );
          })}
        </svg>
      )}
    </>
  );
};

// açılış başlığı sağ üstte: filigran bu sahnede gizlenir
export const ayar = { filigran: false };

export default S02;
