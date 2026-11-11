// Sahne 56 — Ritim örneği: şematik hafta şeridi (ILLUSTRATIVE). Duvar takvimindeki bozuk yazı yamayla örtülü.
import React from "react";
import { Etiket, Hap, Kamera, INTER, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const GUN = ["S", "M", "T", "W", "T", "F", "S"];
const X0 = 697, W = 70, ARA = 6;
const cx = (i: number) => X0 + i * (W + ARA);

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSal = K(1, "spinach salad"), tSun = K(1, "Sundays"), tWed = K(1, "Wednesdays"), tRit = K(1, "rhythm");
  const tSkip = K(2, "skipping"), tUc = K(2, "three nights");
  const c = s.cumleler;
  const aSkip = eout(ilerle(t, tSkip, 0.6));
  const aEtk = eout(ilerle(t, c[1].bas, 0.5)) * sol(t, tSkip - 0.1);
  const [sr, ar] = pop(t, tRit, 0.55);
  const [su, au] = pop(t, tUc + 0.9, 0.55);
  const hucre = (i: number, y: number, dolgu: string, op: number) => (
    <div key={i} style={{ position: "absolute", left: cx(i), top: y, width: W, height: 64, boxSizing: "border-box",
      border: `3px solid ${RENK.murekkep}`, background: dolgu, opacity: op, borderRadius: 8 }} />
  );
  const [sA] = pop(t, tSun, 0.45), [sB] = pop(t, tWed, 0.45);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        {/* takvim yaması */}
        <div style={{ position: "absolute", left: 740, top: 0, width: 480, height: 470, background: kagit(1),
          boxShadow: `0 0 40px 30px ${kagit(1)}` }} />
        <div style={{ position: "absolute", left: 697, top: 82, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 4, color: RENK.gri }}>ILLUSTRATIVE WEEK</div>
        {GUN.map((g, i) => (
          <div key={"g" + i} style={{ position: "absolute", left: cx(i), top: 130, width: W, textAlign: "center",
            fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert }}>{g}</div>
        ))}
        {/* 1. satır: pazar ve çarşamba */}
        {GUN.map((_, i) => hucre(i, 175, RENK.kagitAcik, 1 - 0.6 * aSkip))}
        {[[0, sA, tSun], [3, sB, tWed]].map(([i, sc, tb]) => t >= (tb as number) && (
          <div key={"o" + i} style={{ position: "absolute", left: cx(i as number) - 8, top: 167, width: W + 16, height: 80, borderRadius: 14,
            border: `6px solid ${RENK.yesil}`, boxSizing: "border-box", transform: `scale(${sc})`, opacity: 1 - 0.6 * aSkip }} />
        ))}
        {/* 2. satır: üst üste üç gece */}
        {GUN.map((_, i) => hucre(i, 285, i >= 4 && t >= tUc + 0.3 * (i - 4) + 0.1 ? RENK.mercan : "transparent", aSkip))}
        <div style={{ position: "absolute", left: 960, top: 400, transform: `translate(-50%, -50%) scale(${sr})`, opacity: ar * sol(t, tSkip - 0.1) }}>
          <Hap metin="KEEP THAT RHYTHM" renk={RENK.yesil} boyut={26} />
        </div>
        <div style={{ position: "absolute", left: 960, top: 400, transform: `translate(-50%, -50%) scale(${su})`, opacity: au }}>
          <Hap metin="3 NIGHTS IN A ROW" renk={RENK.mercan} boyut={26} />
        </div>
        <Etiket t={t} bas={tSal} bitis={tSkip - 0.1} capa={[800, 570]} konum={[330, 540]} metin="SPINACH SALAD" renk={RENK.yesil} boyut={30} />
      </Kamera>
    </>
  );
};

export default S56;
