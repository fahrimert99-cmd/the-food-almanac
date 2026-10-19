// Sahne 53 — özet: yüksek tansiyonda 8–9 puan; kanıt tek gruptan ve takviyelerden.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, eout, einout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

// Manometre kadranı: bozuk rakamları örten temiz kadran (görsel koordinatı), ibre yüksekten düşer
const Kadran: React.FC<{ t: number; bas: number; dus: number }> = ({ t, bas, dus }) => {
  const p = eout(ilerle(t, bas, 0.5));
  const q = einout(ilerle(t, dus, 1.2));
  const aci = (-35 - 40 * q) * (Math.PI / 180); // yüksek -> bir miktar düşük
  const ticks = Array.from({ length: 11 }, (_, i) => -200 + i * 22);
  return (
    <g transform="translate(1380 657) scale(1 0.56)" opacity={p}>
      <circle r={232} fill="#F3EEDF" stroke={RENK.murekkep} strokeWidth={5} />
      {ticks.map((d, i) => {
        const r = (d * Math.PI) / 180;
        return <line key={i} x1={Math.cos(r) * 190} y1={Math.sin(r) * 190} x2={Math.cos(r) * 215} y2={Math.sin(r) * 215} stroke={RENK.murekkep} strokeWidth={5} />;
      })}
      <line x1={0} y1={0} x2={Math.cos(aci) * 175} y2={Math.sin(aci) * 175} stroke={RENK.mercan} strokeWidth={9} strokeLinecap="round" />
      <circle r={16} fill={RENK.murekkep} />
    </g>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "randomized"), tHigh = K(0, "high"), tNum = K(0, "eight");
  const tGrup = K(1, "one research"), tSup = K(1, "supplements");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <Kadran t={t} bas={0.05} dus={tNum} />
        </svg>
        <Etiket t={t} bas={tHigh} bitis={tNum} capa={[1440, 600]} konum={[1580, 880]} metin="HIGH READINGS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tTrial} bitis={tGrup - 0.1} metin="RANDOMIZED TRIALS" x={1440} y={170} boyut={80} hiza="orta" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tNum} vurgu="–8 TO –9" not="points systolic, pooled" x={1480} y={290} genislik={420} boyut={84} renk={RENK.koyuYesil} />
      <Liste t={t} x={1000} y={90} boyut={34} genislik={820} aralik={76} isaret="nokta" ogeler={[
        { bas: tGrup, metin: "ONE RESEARCH GROUP", renk: RENK.altin },
        { bas: tSup, metin: "SUPPLEMENTS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S53;
