// Sahne 11 — 2020 meta-analizi: 31 çalışma, 3.000+ yetişkin, çay vs kapsül, süre aralığı.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tSure = K(3, "three");
  const [sa, aa] = pop(t, K(0, "3,000"), 0.6);
  const aSure = sol(t, tSure - 0.2);
  const pCizgi = eout(ilerle(t, tSure + 0.3, 1.1));
  const [s1, a1] = pop(t, tSure, 0.5);
  const [s2, a2] = pop(t, K(3, "twelve"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1800])}>
        <Etiket t={t} bas={K(0, "31")} bitis={K(1, "Some") - 0.1} capa={[940, 440]} konum={[940, 230]} metin="31 RANDOMIZED TRIALS" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(1, "green")} bitis={K(2, "Most") + 0.2} capa={[350, 520]} konum={[350, 300]} metin="GREEN TEA DRINK" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={K(2, "extract")} bitis={K(3, "The") - 0.1} capa={[1550, 520]} konum={[1550, 300]} metin="EXTRACT CAPSULES" renk={RENK.mercan} boyut={28} />
      </Kamera>
      {/* 3.000+ yetişkin */}
      <div style={{ position: "absolute", left: 960, top: 800, transform: `translate(-50%, 0) scale(${sa})`, opacity: aa * aSure,
        display: "flex", alignItems: "baseline", gap: 18, whiteSpace: "nowrap" }}>
        <span style={{ fontFamily: ANTON, fontSize: 96, color: RENK.koyuYesil }}>3,000+</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 3, color: RENK.lacivert }}>ADULTS</span>
      </div>
      {/* süre aralığı */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={640} y1={850} x2={640 + 640 * pCizgi} y2={850} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="14 10" />
      </svg>
      <div style={{ position: "absolute", left: 560, top: 850, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="3 WEEKS" renk={RENK.altin} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1360, top: 850, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="12 MONTHS" renk={RENK.altin} boyut={32} />
      </div>
      <Baslik t={t} bas={tSure} metin="TRIAL LENGTH" x={960} y={775} boyut={36} renk={RENK.altin} hiza="orta" font="inter" aralik={6} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};

export default S11;
