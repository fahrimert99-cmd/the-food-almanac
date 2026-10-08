// Sahne 38 — normal kan şekeri: sivri artışlar küçük; yükseliş normal, sağlıklı bir yanıt.
import React from "react";
import { BaslikBlok, Hap, INTER, Kamera, Liste, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNorm = K(0, "normal"), tLow = K(0, "lower"), tSmall = K(0, "small"), tNormal2 = K(1, "normal,"), tNot = K(1, "not");
  const son = tNormal2 - 0.35;
  const aS1 = sol(t, son);
  const CX = 1120, CB = 640, CW = 700;
  const yol = (k: number) => {
    const p: string[] = [];
    for (let i = 0; i <= 40; i++) {
      const u = i / 40;
      const g = Math.exp(-Math.pow((u - 0.35) / 0.2, 2));
      p.push(`${(CX + CW * u).toFixed(1)},${(CB - 40 - k * g * 200).toFixed(1)}`);
    }
    return p.join(" ");
  };
  const pc = eout(ilerle(t, tLow, 1.6));
  const [sc, al] = pop(t, tSmall, 0.5);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1750], [120, 50, 1580])}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1680, top: 960, width: 240, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <div style={{ opacity: aS1 }}>
        <BaslikBlok t={t} bas={tNorm} satirlar={["NORMAL", "BLOOD SUGAR"]} x={1860} y={170} boyut={82} hiza="sag"
          renkler={[RENK.lacivert, RENK.koyuYesil]} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: eout(ilerle(t, tLow - 0.2, 0.4)) }}>
          <line x1={CX - 20} x2={CX + CW + 20} y1={CB} y2={CB} stroke={RENK.murekkep} strokeWidth={4} />
          <line x1={CX - 20} x2={CX + CW + 20} y1={CB - 40} y2={CB - 40} stroke="#787882" strokeWidth={2.5} strokeDasharray="10 10" />
          <polyline points={yol(1)} fill="none" stroke={RENK.yesil} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round"
            pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pc} />
        </svg>
        <div style={{ position: "absolute", left: CX, top: CB - 290, fontFamily: INTER, fontWeight: 700, fontSize: 22, letterSpacing: 3,
          color: RENK.gri, opacity: eout(ilerle(t, tLow, 0.4)) }}>ILLUSTRATIVE</div>
        <div style={{ position: "absolute", left: CX + 380, top: CB - 300, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <Hap metin="SMALL SPIKES" renk={RENK.yesil} boyut={30} />
        </div>
      </div>
      <Liste t={t} x={1000} y={230} boyut={38} genislik={850} isaret="onay" ogeler={[{ bas: tNormal2, metin: "NORMAL, HEALTHY RESPONSE" }]} />
      <Liste t={t} x={1000} y={340} boyut={38} genislik={850} isaret="carpi" ogeler={[{ bas: tNot, metin: "NOT A PROBLEM TO FIX", renk: RENK.mercan }]} />
    </>
  );
};

export default S38;
