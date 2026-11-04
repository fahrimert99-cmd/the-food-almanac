// Sahne 17 — zamanlama: ilk saatte fark, 3 saat boyunca değil
import React from "react";
import { AbsoluteFill, Baslik, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKart = K(1, "differences"), tErken = K(1, "early"), tSaat = K(1, "first"), tRather = K(1, "rather"), tWhole = K(1, "whole");
  // zaman çizgisi: 0–3 saat, x 860..1780
  const X0 = 860, W = 920, saat = W / 3, Y = 210;
  const aKart = eout(ilerle(t, tKart, 0.5));
  const p1 = eout(ilerle(t, tErken, 0.8));
  const p2 = eout(ilerle(t, tRather, 0.9));
  const [sc1, al1] = pop(t, tSaat, 0.5);
  const [sc2, al2] = pop(t, tWhole, 0.5);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <Baslik t={t} bas={K(0, "Notice")} bitis={tKart - 0.1} metin="NOTICE" x={70} y={170} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "timing")} bitis={tKart - 0.1} metin="THE TIMING" x={70} y={262} boyut={84} renk={RENK.koyuYesil} />
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 800, top: 104, width: 1040, height: 190, opacity: aKart, borderRadius: 22,
          background: "rgba(252,248,236,0.96)", border: `3px solid ${RENK.lacivert}`, boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }} />
      )}
      {aKart > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aKart }}>
          <rect x={X0 + saat} y={Y - 18} width={2 * saat * p2} height={36} rx={8} fill="none" stroke={RENK.gri} strokeWidth={4} strokeDasharray="12 9" opacity={p2} />
          <rect x={X0} y={Y - 18} width={saat * p1} height={36} rx={8} fill={RENK.altin} />
          {[0, 1, 2, 3].map((h) => (
            <g key={h}>
              <line x1={X0 + h * saat} x2={X0 + h * saat} y1={Y - 28} y2={Y + 28} stroke={RENK.lacivert} strokeWidth={4} />
              <text x={X0 + h * saat} y={Y + 62} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, fill: RENK.lacivert }}>{h === 0 ? "0" : `${h} H`}</text>
            </g>
          ))}
        </svg>
      )}
      <div style={{ position: "absolute", left: X0 + saat / 2, top: 132, transform: `translate(-50%,0) scale(${sc1})`, opacity: al1, fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.altin, whiteSpace: "nowrap" }}>FIRST HOUR</div>
      <div style={{ position: "absolute", left: X0 + 2 * saat, top: 132, transform: `translate(-50%,0) scale(${sc2})`, opacity: al2, fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.gri, whiteSpace: "nowrap" }}>NOT THE WHOLE 3 HOURS</div>
    </>
  );
};
export default S17;
