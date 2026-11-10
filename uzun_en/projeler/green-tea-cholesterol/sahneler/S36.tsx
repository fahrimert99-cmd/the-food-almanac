// Sahne 36 — Yu 2017: 26 kadın, ~1/20; bırakınca normale, yeniden başlayınca yükselme (ILLUSTRATIVE şema)
import React from "react";
import { BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// zaman-anahtarlı çizgi noktaları [x, y, t]
const AnimHap: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={26} /></div>;
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(0, "liver test"), t26 = K(0, "26"), t20 = K(0, "one in twenty");
  const tRet = K(1, "returned"), tStop = K(1, "stopped"), tRose = K(1, "rose again"), tRest = K(1, "restarted");
  const tFade = K(1, "Their") - 0.1;
  const P: [number, number, number][] = [[1130, 600, tRet - 0.9], [1300, 600, tRet - 0.2], [1420, 770, tRet + 0.8], [1590, 770, tRose - 0.1], [1710, 600, tRose + 0.8], [1840, 600, tRest + 0.3]];
  let pts = "", ux = P[0][0], uy = P[0][1];
  if (t >= P[0][2]) {
    pts = `${P[0][0]},${P[0][1]}`;
    for (let i = 1; i < P.length; i++) {
      const f = Math.min(1, Math.max(0, (t - P[i - 1][2]) / (P[i][2] - P[i - 1][2])));
      if (f <= 0) break;
      ux = P[i - 1][0] + (P[i][0] - P[i - 1][0]) * f; uy = P[i - 1][1] + (P[i][1] - P[i - 1][1]) * f;
      pts += ` ${ux},${uy}`;
    }
  }
  const aD = eout(ilerle(t, tFade, 0.5));
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1760])}>
        <Etiket t={t} bas={tTest} bitis={tFade} capa={[640, 690]} konum={[1330, 600]} metin="LIVER TESTS" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, tTest, 0.6))} taraf="sag" genislik={860} />
      <VurguRozet t={t} bas={t26} bitis={tFade} vurgu="26" not="WOMEN ON EXTRACT" x={1360} y={330} genislik={380} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t20} bitis={tFade} vurgu="≈ 1 IN 20" not="" x={1700} y={330} genislik={380} boyut={80} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tRet} satirlar={["STOPPED:", "BACK TO NORMAL"]} x={1860} y={210} boyut={84} hiza="sag" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aD }}>
        <line x1={1110} y1={770} x2={1860} y2={770} stroke={RENK.yesil} strokeWidth={3} strokeDasharray="12 10" />
        <text x={1860} y={812} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, fill: RENK.yesil }}>NORMAL</text>
        {pts && <polyline points={pts} fill="none" stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />}
        {pts && <circle cx={ux} cy={uy} r={11} fill={RENK.mercan} stroke="#fff" strokeWidth={3} />}
      </svg>
      <div style={{ position: "absolute", left: 1130, top: 520, opacity: aD, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2,
        color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "4px 16px" }}>ILLUSTRATIVE</div>
      <AnimHap t={t} bas={tStop} metin="STOPPED" renk={RENK.yesil} x={1400} y={880} />
      <AnimHap t={t} bas={tRest} metin="RESTARTED" renk={RENK.mercan} x={1720} y={880} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S36;
