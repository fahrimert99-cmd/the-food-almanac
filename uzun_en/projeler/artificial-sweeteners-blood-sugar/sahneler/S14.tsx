// Sahne 14 — Nichol sonucu: kan şekeri yükselmedi, başlangıca göre yavaşça geriledi (temsili çizim).
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Panel, RENK, SP, eout, einout, ilerle, kagit, kameraYolu, kelimeZamani, KaynakEtiketi } from "../kutuphane";

// Temsili eğri alanı (ekran koordinatı)
const X0 = 1130, X1 = 1790, YB = 560;

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tConc = K(0, "conclusion"), tNot = K(1, "not"), tBlood = K(1, "blood"), tDrift = K(2, "drifted");
  const tObs = K(2, "observation"), tBase = K(2, "baseline");
  const pc = einout(ilerle(t, tDrift, 3.0));
  const pAx = eout(ilerle(t, tDrift - 0.5, 0.6));
  const yS = YB + 80 * pc, xS = X0 + (X1 - X0) * pc;
  const yol = `M ${X0} ${YB} C ${X0 + 220} ${YB + 4}, ${X0 + 440} ${YB + 40}, ${X1} ${YB + 80}`;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [60, 10, 1680], [90, 30, 1620])}>
        {/* görseldeki ince kurşun çizgileri örtülür */}
        <div style={{ position: "absolute", left: 915, top: 560, width: 560, height: 280,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <div style={{ position: "absolute", left: 520, top: 880, width: 300, height: 100,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={1000} opak={1} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tConc} metin="THE CONCLUSION" x={1860} y={200} boyut={64} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={tNot} metin="NO RISE" x={1860} y={310} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <Etiket t={t} bas={tBlood} capa={[250, 560]} konum={[300, 330]} metin="BLOOD GLUCOSE" renk={RENK.mercan} />
      {/* temsili grafik */}
      {pAx > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <g opacity={pAx}>
            <polyline points={`${X0 - 20},${YB - 80} ${X0 - 20},${YB + 150} ${X1 + 30},${YB + 150}`} fill="none" stroke={RENK.lacivert} strokeWidth={4} />
            <text x={X0 - 40} y={YB + 35} transform={`rotate(-90 ${X0 - 40} ${YB + 35})`} textAnchor="middle"
              style={{ fontFamily: INTER, fontWeight: 700, fontSize: 24, fill: RENK.lacivert }}>blood glucose</text>
          </g>
          <line x1={X0} x2={X1} y1={YB} y2={YB} stroke={RENK.gri} strokeWidth={3} strokeDasharray="12 10"
            opacity={eout(ilerle(t, tBase - 0.2, 0.5))} />
          <path d={yol} fill="none" stroke={RENK.koyuYesil} strokeWidth={11} strokeLinecap="round" pathLength={1}
            strokeDasharray={1} strokeDashoffset={1 - pc} />
          {pc > 0 && pc < 1 && <circle cx={xS} cy={yS} r={13} fill={RENK.koyuYesil} stroke="#fff" strokeWidth={4} />}
        </svg>
      )}
      {pAx > 0 && (
        <>
          <div style={{ position: "absolute", left: X0, top: YB - 70, opacity: eout(ilerle(t, tBase - 0.2, 0.5)), fontFamily: INTER, fontWeight: 800,
            fontSize: 26, letterSpacing: 2, color: RENK.gri }}>BASELINE</div>
          <div style={{ position: "absolute", left: X0, top: YB + 168, opacity: eout(ilerle(t, tObs, 0.5)), fontFamily: INTER, fontWeight: 800,
            fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>OBSERVATION PERIOD →</div>
          <div style={{ position: "absolute", left: X1 - 190, top: YB - 70, opacity: pAx, fontFamily: INTER, fontWeight: 700, fontSize: 22,
            letterSpacing: 2, color: RENK.gri }}>ILLUSTRATIVE</div>
          <div style={{ position: "absolute", left: X0 + 30, top: YB + 85, opacity: eout(ilerle(t, tDrift + 2.2, 0.5)) }}>
            <Hap metin="DRIFTED DOWN" renk={RENK.koyuYesil} boyut={26} />
          </div>
        </>
      )}
    </>
  );
};

export default S14;
