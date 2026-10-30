// Sahne 53 — 3. adım: doktora sor; kapsanmayan dört durum.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const DURUMLAR = [
  { ifade: "osteoporosis,", metin: "OSTEOPOROSIS", x: 1010, y: 330 },
  { ifade: "past fracture,", metin: "PAST FRACTURE", x: 1490, y: 330 },
  { ifade: "high fall risk", metin: "HIGH FALL RISK", x: 1010, y: 410 },
  { ifade: "low vitamin D", metin: "LOW VITAMIN D", x: 1490, y: 410 },
];

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "Three"), 0.45);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(1, "doctor")} bitis={K(2, "Those")} capa={[800, 500]} konum={[620, 360]} metin="YOUR DOCTOR" renk={RENK.altin} boyut={24} />
      </Kamera>
      <div style={{ position: "absolute", left: 1000, top: 60, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="STEP 3" renk={RENK.altin} boyut={28} />
      </div>
      <Baslik t={t} bas={K(1, "Ask")} metin="ASK YOUR DOCTOR" x={1860} y={170} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      {DURUMLAR.map((d) => {
        const [sc, al] = pop(t, K(1, d.ifade), 0.5);
        return (
          <div key={d.metin} style={{ position: "absolute", left: d.x, top: d.y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
            <Hap metin={d.metin} renk={RENK.mercan} boyut={30} />
          </div>
        );
      })}
      <Not t={t} bas={K(2, "Those")} metin="the people the task force advice doesn't cover" x={1860} y={250} boyut={30} hiza="sag" agirlik={800} />
    </>
  );
};

export default S53;
