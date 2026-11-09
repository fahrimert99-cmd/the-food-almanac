// Sahne 34 — Azaltılmış sodyumlu çorba hâlâ yüksek olabilir: şematik çubuklar (örnek, sayı yok) + "CHECK THE MILLIGRAMS".
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const BAZ = 840;

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRed = K(0, "reduced"), tStart = K(0, "started"), tCan = K(0, "can still"), tHigh = K(0, "a high"), tChk = K(1, "Check"), tMg = K(1, "milligrams");
  const h1 = 380 * einout(ilerle(t, tStart, 0.9));
  const h2 = 230 * einout(ilerle(t, tCan, 0.9));
  const pL = eout(ilerle(t, tHigh, 0.6));
  const [sT, aT] = pop(t, tHigh + 0.2, 0.5);
  const yL = BAZ - 150;
  const etk: React.CSSProperties = { position: "absolute", top: BAZ + 20, width: 340, textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.murekkep };
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 20, 1800])}>
      <div style={{ position: "absolute", left: 900, top: 0, width: 1020, height: 1080, opacity: eout(ilerle(t, tStart - 0.2, 0.6)) * 0.9,
        background: `linear-gradient(to right, ${"rgba(246,243,236,0)"} 0%, rgba(246,243,236,1) 12%)` }} />
        <Etiket t={t} bas={tRed} bitis={tChk - 0.1} capa={[600, 470]} konum={[1080, 250]} metin="REDUCED SODIUM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tChk} metin="CHECK THE" x={1860} y={130} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tMg} metin="MILLIGRAMS" x={1860} y={236} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={960} y1={BAZ} x2={1780} y2={BAZ} stroke={RENK.murekkep} strokeWidth={4} opacity={0.6} />
        <rect x={1000} y={BAZ - h1} width={200} height={h1} rx={8} fill={RENK.mercan} />
        <rect x={1340} y={BAZ - h2} width={200} height={h2} rx={8} fill={RENK.altin} />
        <line x1={960} y1={yL} x2={960 + 820 * pL} y2={yL} stroke={RENK.murekkep} strokeWidth={4} strokeDasharray="14 10" />
      </svg>
      {h1 > 20 && <div style={{ ...etk, left: 930, opacity: eout(ilerle(t, tStart + 0.5, 0.4)) }}>STARTED VERY HIGH</div>}
      {h2 > 20 && <div style={{ ...etk, left: 1270, opacity: eout(ilerle(t, tCan + 0.5, 0.4)) }}>REDUCED SODIUM</div>}
      <div style={{ position: "absolute", left: 1770, top: yL - 62, transform: `scale(${sT})`, transformOrigin: "100% 50%", opacity: aT,
        fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.mercan, textAlign: "right", transform2: "" } as React.CSSProperties}>
        <div style={{ position: "absolute", right: 0, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "6px 20px" }}>
          STILL HIGH
        </div>
      </div>
      <div style={{ position: "absolute", left: 960, top: 340, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.gri, opacity: eout(ilerle(t, tStart, 0.5)) }}>ILLUSTRATIVE</div>
    </>
  );
};
export default S34;
