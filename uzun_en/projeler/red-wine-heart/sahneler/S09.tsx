// Sahne 9 — J eğrisi: önce görsel, sonra örtü üstünde ILLUSTRATIVE J grafiği
import React from "react";
import { AbsoluteFill, ANTON, Baslik, INTER, Kamera, Not, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const x0 = 380, x1 = 1520, yb = 840, yt = 330;
const risk = (u: number) => 0.55 - 0.9 * u + 1.3 * u * u; // temsili J (0.35'te dip)
const px = (u: number) => x0 + u * (x1 - x0);
const py = (u: number) => yb - risk(u) * (yb - yt) * 0.95;

const Nokta: React.FC<{ t: number; bas: number; u: number; metin: string; renk: string; dy: number; dx?: number }> = ({ t, bas, u, metin, renk, dy, dx = 0 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <>
      <div style={{ position: "absolute", left: px(u) - 14, top: py(u) - 14, width: 28, height: 28, borderRadius: "50%", background: renk,
        border: `4px solid #fff`, transform: `scale(${sc})`, opacity: al }} />
      <div style={{ position: "absolute", left: px(u) + dx, top: py(u) + dy, transform: `translate(-50%,0) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: renk, background: "#FCF8EC", padding: "6px 16px", borderRadius: 999,
        border: `3px solid ${renk}` }}>{metin}</div>
    </>
  );
};

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tJ = K(1, "J-shaped");
  const pO = eout(ilerle(t, tJ - 0.2, 0.6));
  const aE = eout(ilerle(t, tJ, 0.6));
  const pc = eout(ilerle(t, K(1, "Many") + 0.1, 2.0));
  const pts = Array.from({ length: 101 }, (_, i) => i / 100).filter((u) => u <= pc).map((u) => `${px(u).toFixed(1)},${py(u).toFixed(1)}`).join(" ");
  const yBase = py(0);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [100, 60, 1720])} />
      <Not t={t} bas={K(0, "individual")} bitis={tJ - 0.3} metin="INDIVIDUAL PEOPLE, FOLLOWED FOR YEARS" x={960} y={120} boyut={44} agirlik={800} hiza="orta" renk={RENK.lacivert} />
      <Ortu a={pO} />
      {pO > 0 && (
        <AbsoluteFill>
          <Baslik t={t} bas={tJ} metin="THE J-CURVE" x={150} y={190} boyut={100} renk={RENK.koyuYesil} />
          <div style={{ position: "absolute", left: 640, top: 150, opacity: aE, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2,
            color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</div>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <g opacity={aE}>
              <polyline points={`${x0},${yt - 20} ${x0},${yb} ${x1 + 20},${yb}`} fill="none" stroke={RENK.murekkep} strokeWidth={4} />
              <line x1={x0} x2={x1} y1={yBase} y2={yBase} stroke="#787882" strokeWidth={2.5} strokeDasharray="10 10" />
              <text x={x0 - 50} y={(yb + yt) / 2} transform={`rotate(-90 ${x0 - 50} ${(yb + yt) / 2})`} textAnchor="middle"
                style={{ fontFamily: INTER, fontWeight: 700, fontSize: 30, fill: RENK.lacivert }}>heart disease risk</text>
              <text x={(x0 + x1) / 2} y={yb + 54} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 30, fill: RENK.lacivert }}>alcohol intake →</text>
            </g>
            {pts && <polyline points={pts} fill="none" stroke={RENK.mercan} strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />}
          </svg>
          <Nokta t={t} bas={K(2, "Light")} u={0.35} metin="LIGHT DRINKERS" renk={RENK.yesil} dy={26} />
          <Nokta t={t} bas={K(2, "non-drinkers")} u={0} metin="NON-DRINKERS" renk={RENK.lacivert} dy={-80} dx={175} />
          <Nokta t={t} bas={K(2, "heavy")} u={1} metin="HEAVY DRINKERS" renk={RENK.mercan} dy={-76} />
        </AbsoluteFill>
      )}
    </>
  );
};
export default S09;
