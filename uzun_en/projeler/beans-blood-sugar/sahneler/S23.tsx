// Sahne 23 — A1C –0.17: anlamlılık sınırında; gerçek olabilir ya da kaybolabilir.
import React from "react";
import { Hap, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRozet = K(0, "0.17");
  const tKaydir = K(0, "edge");
  const tSon = s.cumleler[1].bas - 0.1;
  const aKaydirici = eout(ilerle(t, K(0, "sits"), 0.5)) * sol(t, tSon, 0.4);
  const mx = 700 + 480 * eout(ilerle(t, K(0, "right"), tKaydir + 0.9 - K(0, "right")));
  const [sg, ag] = pop(t, tKaydir, 0.5);
  const [s1, a1] = pop(t, K(1, "real"), 0.5);
  const [s2, a2] = pop(t, K(1, "disappear"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      {/* 1. cümle: değer rozeti */}
      <VurguRozet t={t} bas={tRozet - 0.1} vurgu="–0.17" not="A1C points lower" x={470} y={90} genislik={400} />
      {/* şematik kaydırıcı (yalnızca örnek, sayı yok) */}
      {aKaydirici > 0 && (
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, opacity: aKaydirici }}>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={700} x2={1300} y1={770} y2={770} stroke={RENK.lacivert} strokeWidth={5} strokeLinecap="round" opacity={0.7} />
            <line x1={1180} x2={1180} y1={715} y2={825} stroke={RENK.mercan} strokeWidth={5} strokeDasharray="12 9" />
            <circle cx={mx} cy={770} r={20} fill={RENK.altin} stroke={RENK.lacivert} strokeWidth={4} />
          </svg>
          <div style={{ position: "absolute", left: 1180, top: 660, transform: `translate(-50%, 0) scale(${sg})`, opacity: ag }}>
            <Hap metin="EDGE OF SIGNIFICANCE" renk={RENK.mercan} boyut={24} />
          </div>
          <div style={{ position: "absolute", left: 700, top: 800, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
        </div>
      )}
      {/* 2. cümle: iki olasılık */}
      <div style={{ position: "absolute", left: 900, top: 690, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="MIGHT BE REAL" renk={RENK.yesil} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 900, top: 790, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="COULD DISAPPEAR" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S23;
