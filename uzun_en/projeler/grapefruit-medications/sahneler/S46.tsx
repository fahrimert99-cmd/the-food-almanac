// Sahne 46 — limon ve misket limonu: düşük içerik, ama kanıt ince; kabuk/rendede dikkat.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [s1, a1] = pop(t, K(1, "thinner"), 0.5);
  const [s2, a2] = pop(t, K(2, "ask"), 0.5);
  const g1 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1740])}>
        <Etiket t={t} bas={K(0, "Lemons")} bitis={g1} capa={[1040, 533]} konum={[1040, 130]} metin="LEMON" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "limes")} bitis={g1} capa={[733, 400]} konum={[400, 160]} metin="LIME" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "peel")} bitis={c[2].bas - 0.1} capa={[640, 520]} konum={[300, 330]} metin="PEEL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "zest,")} capa={[720, 655]} konum={[300, 880]} metin="ZEST" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 70, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 * (t < c[2].bas - 0.1 ? 1 : 0) }}>
        <Hap metin="EVIDENCE IS THINNER" renk={RENK.mercan} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1500, top: 120, transform: `translate(-50%,0) scale(${s2})`, transformOrigin: "50% 50%", opacity: a2 }}>
        <Hap metin="ASK YOUR PHARMACIST" renk={RENK.koyuYesil} boyut={28} />
      </div>
    </>
  );
};

export default S46;
