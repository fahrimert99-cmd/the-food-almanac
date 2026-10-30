// Sahne 14 — kalça taramaları: başlangıçta ve her 6 ayda bir.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const NOKTALAR = [{ x: 1300, ad: "START", ifade: "start" }, { x: 1560, ad: "6 MO", ifade: "six months" }, { x: 1820, ad: "12 MO", ifade: "months" }];

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHip = K(0, "hip"), tSc = K(0, "scanned");
  const tStart = K(0, "start"), tEvery = K(0, "every six");
  const p = eout(ilerle(t, tStart, 1.4));
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1800])} />
      <BaslikBlok t={t} bas={tHip - 0.4} satirlar={["HIP SCANS", "EVERY 6 MONTHS"]} x={1860} y={200} boyut={96} hiza="sag" />
      <Etiket t={t} bas={tSc} capa={[720, 450]} konum={[560, 250]} metin="BONE DENSITY SCAN" renk={RENK.lacivert} />
      {/* zaman çizgisi: başlangıç ve 6 aylık taramalar */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {p > 0 && <line x1={1300} y1={700} x2={1300 + 520 * p} y2={700} stroke={RENK.lacivert} strokeWidth={6} strokeLinecap="round" />}
        {NOKTALAR.map((n, i) => {
          const [sc, al] = pop(t, i === 0 ? tStart : tEvery + (i - 1) * 0.3, 0.5);
          return (
            <g key={n.ad} transform={`translate(${n.x} 700) scale(${sc})`} opacity={al}>
              <circle r={20} fill={i === 0 ? RENK.altin : RENK.mercan} stroke={RENK.kagitAcik} strokeWidth={5} />
              <text y={64} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, fill: RENK.lacivert, letterSpacing: 1.5 }}>{n.ad}</text>
            </g>
          );
        })}
      </svg>
    </>
  );
};

export default S14;
