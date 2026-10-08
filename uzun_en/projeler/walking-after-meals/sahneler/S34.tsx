// Sahne 34 — iki yürüyüş zaman çizelgesi (şematik): hemen 10 dk vs 30 dk sonra 30 dk
import React from "react";
import { ANTON, Baslik, INTER, Kamera, Ortu, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const X0 = 360, U = 16, YA = 400, YB = 500, YE = 600; // 16 px / dk

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(0, "thirty"), tB = K(0, "starting half"), tNo = K(0, "did not lower");
  const tSm = K(1, "small study"), tYg = K(1, "young people"), tSg = K(1, "sugar drink"), tSoon = K(1, "start soon");
  const ort = eout(ilerle(t, 0.2, 0.9));
  const bar = (bas: number, bas0: number, sure: number, y: number, renk: string, metin: string) => {
    const p = eout(ilerle(t, bas, 0.8));
    return (
      <div style={{ position: "absolute", left: X0 + bas0 * U, top: y, width: sure * U * p, height: 72, background: renk, borderRadius: 12,
        overflow: "hidden", whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800, fontSize: 30, color: "#fff", letterSpacing: 2,
        display: "flex", alignItems: "center", paddingLeft: 18 }}>{metin}</div>
    );
  };
  const pill = (bas: number, metin: string, renk: string, x: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: 690, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 24px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
    );
  };
  const [sS, aS] = pop(t, tSoon, 0.55);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={[0, 0, 1920]} />
      <Ortu a={ort} />
      <Baslik t={t} bas={0.3} metin="START NOW VS. START LATER" x={X0} y={200} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: X0 + 1000, top: 168, opacity: ort, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2,
        color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</div>
      {/* zaman ekseni: yemek sonrası */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: ort }}>
        <line x1={X0} y1={YE} x2={X0 + 70 * U} y2={YE} stroke={RENK.murekkep} strokeWidth={4} />
        {[0, 30, 60].map((m) => (
          <g key={m}>
            <line x1={X0 + m * U} y1={YE - 8} x2={X0 + m * U} y2={YE + 10} stroke={RENK.murekkep} strokeWidth={4} />
            <text x={X0 + m * U} y={YE + 46} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 28, fill: RENK.lacivert }}>
              {m === 0 ? "MEAL ENDS" : `${m} MIN`}</text>
          </g>
        ))}
      </svg>
      {bar(tA, 0, 10, YA, RENK.yesil, "10 MIN")}
      {bar(tB, 30, 30, YB, RENK.altin, "30 MIN WALK")}
      <div style={{ position: "absolute", left: X0 + 10 * U + 22, top: YA + 16, opacity: eout(ilerle(t, 1.2, 0.5)), fontFamily: INTER, fontWeight: 800,
        fontSize: 28, color: RENK.koyuYesil, letterSpacing: 1.5 }}>STARTS RIGHT AWAY</div>
      <div style={{ position: "absolute", left: X0 + 60 * U + 24, top: YB + 8, opacity: eout(ilerle(t, tNo, 0.5)), fontFamily: INTER, fontWeight: 800,
        fontSize: 28, color: RENK.mercan, lineHeight: 1.2, letterSpacing: 1.5 }}>NO CLEAR<br />PEAK DROP</div>
      <div style={{ position: "absolute", left: X0 + 30 * U, top: YB - 40, opacity: eout(ilerle(t, tB, 0.5)), fontFamily: INTER, fontWeight: 700,
        fontSize: 26, color: RENK.lacivert }}>half an hour later</div>
      {pill(tSm, "SMALL STUDY", RENK.altin, X0)}
      {pill(tYg, "YOUNG ADULTS", RENK.altin, X0 + 290)}
      {pill(tSg, "SUGAR DRINK, NOT A MEAL", RENK.altin, X0 + 610)}
      <div style={{ position: "absolute", left: 960, top: 800, transform: `translate(-50%, 0) scale(${sS})`, opacity: aS, display: "flex", alignItems: "center", gap: 16,
        background: RENK.koyuYesil, color: "#fff", borderRadius: 999, padding: "12px 36px 12px 14px", whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30 }}>✓</span>
        <span style={{ fontFamily: ANTON, fontSize: 44, letterSpacing: 2 }}>START SOON AFTER EATING</span>
      </div>
    </>
  );
};

export default S34;
