// Sahne 9 — doktor masası: bağlı durumlar listesi, sonra "ne zaman doktora sorulmalı".
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(0, "conditions,");
  const tSon = K(1, "So");
  const [s1, a1] = pop(t, K(1, "frequent"), 0.5);
  const [s2, a2] = pop(t, K(1, "severe"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        {/* masa üstündeki küçük işaret kusurunu ahşap tonunda yamayla gizle */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <radialGradient id="odun9"><stop offset="0%" stopColor="#9C6444" stopOpacity="1" /><stop offset="60%" stopColor="#9C6444" stopOpacity="1" /><stop offset="100%" stopColor="#9C6444" stopOpacity="0" /></radialGradient>
          </defs>
          <ellipse cx={1070} cy={632} rx={58} ry={30} fill="url(#odun9)" transform="rotate(-14 1070 632)" />
          {[-12, 0, 11].map((d) => (
            <line key={d} x1={1030} y1={640 + d + 8} x2={1112} y2={618 + d + 4} stroke="#4A2A18" strokeOpacity={0.5} strokeWidth={2} />
          ))}
        </svg>
        <Etiket t={t} bas={K(0, "circulation")} bitis={tSon - 0.2} capa={[733, 600]} konum={[520, 240]} metin="VESSEL MODEL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[647, 637]} konum={[330, 400]} metin="YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "other")} bitis={tSon - 0.2} metin="OTHER CONDITIONS" x={1180} y={200} boyut={80} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={1180} y={320} aralik={96} boyut={36} genislik={700} ogeler={[
        { bas: K(0, "poor circulation"), metin: "POOR CIRCULATION", renk: RENK.altin, bitis: tSon - 0.2 },
        { bas: K(0, "vein problems,"), metin: "VEIN PROBLEMS", renk: RENK.altin, bitis: tSon - 0.2 },
        { bas: K(0, "nerve damage"), metin: "NERVE DAMAGE (NEUROPATHY)", renk: RENK.altin, bitis: tSon - 0.2 },
      ]} />
      <BaslikBlok t={t} bas={tSon + 0.05} satirlar={["WHEN TO", "ASK A DOCTOR"]} x={1180} y={230} boyut={110} />
      <div style={{ position: "absolute", left: 1180, top: 520, display: "flex", gap: 20 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1, transformOrigin: "0 50%" }}><Hap metin="FREQUENT" renk={RENK.mercan} boyut={34} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2, transformOrigin: "0 50%" }}><Hap metin="SEVERE" renk={RENK.mercan} boyut={34} /></div>
      </div>
    </>
  );
};

export default S09;
