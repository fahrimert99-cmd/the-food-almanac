// Sahne 15 — geniş güven aralığı: 24%–74% aralık çubuğu, 53% işareti; solda cetvel ve yaban mersini.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X0 = 1290, W = 520, Y = 640;
const px = (v: number) => X0 + (v / 100) * W;

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t53 = K(0, "53"), t24 = K(1, "24"), t74 = K(1, "74");
  const pEks = eout(ilerle(t, t53 - 0.2, 0.6));
  const [s53, a53] = pop(t, t53 + 0.1, 0.55);
  const pBar = eout(ilerle(t, t24, Math.max(0.5, t74 - t24)));
  const [s24, a24] = pop(t, t24, 0.5);
  const [s74, a74] = pop(t, t74, 0.5);
  const [sm, am] = pop(t, K(2, "modest"), 0.55);
  const lab = (v: number, y: number, m: string, a: number, sc: number, renk: string) => (
    <div style={{ position: "absolute", left: px(v), top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: a, fontFamily: ANTON, fontSize: 46,
      color: renk, whiteSpace: "nowrap" }}>{m}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [80, 80, 1740])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={760} />
      <Baslik t={t} bas={K(0, "wide")} metin="WIDE" x={1850} y={180} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "wide") + 0.18} metin="RANGE" x={1850} y={290} boyut={96} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={K(0, "margin")} x={1850} y={390} hiza="sag" boyut={30} genislik={520} metin="from about 24% to 74% lower" />
      {/* eksen */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pEks}>
          <line x1={X0} x2={X0 + W} y1={Y + 18} y2={Y + 18} stroke={RENK.murekkep} strokeWidth={4} />
          {[0, 50, 100].map((v) => <line key={v} x1={px(v)} x2={px(v)} y1={Y + 10} y2={Y + 30} stroke={RENK.murekkep} strokeWidth={3} />)}
        </g>
        <rect x={px(24)} y={Y} width={(px(74) - px(24)) * pBar} height={36} rx={18} fill={RENK.altin} opacity={0.85} />
        <g opacity={a53} transform={`translate(${px(53)} ${Y + 18}) scale(${s53})`}>
          <circle r={22} fill={RENK.mercan} stroke={RENK.kagitAcik} strokeWidth={5} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: X0, top: Y + 40, opacity: pEks, fontFamily: INTER, fontWeight: 700, fontSize: 24, color: RENK.gri, transform: "translateX(-50%)" }}>0%</div>
      <div style={{ position: "absolute", left: X0 + W, top: Y + 40, opacity: pEks, fontFamily: INTER, fontWeight: 700, fontSize: 24, color: RENK.gri, transform: "translateX(-50%)" }}>100%</div>
      <div style={{ position: "absolute", left: X0, top: Y + 84, opacity: pEks, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.lacivert }}>LOWER RATE</div>
      {lab(53, Y - 175, "53%", a53, s53, RENK.mercan)}
      {lab(24, Y - 100, "24%", a24, s24, RENK.altin)}
      {lab(74, Y - 100, "74%", a74, s74, RENK.altin)}
      <div style={{ position: "absolute", left: 1850, top: 830, transform: `scale(${sm})`, transformOrigin: "100% 50%", opacity: am, translate: "-100% 0",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800,
        fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        MODEST NUMBER OF CASES
      </div>
    </>
  );
};

export default S15;
