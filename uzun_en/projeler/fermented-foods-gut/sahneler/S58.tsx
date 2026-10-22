// Sahne 58 — özet: kefir ve yoğurt, dengede duran terazi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk?: string; bitis?: number }> = ({ t, bas, metin, x, y, renk = RENK.altin, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * sol(t, bitis), display: "flex", alignItems: "center", gap: 14 }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYog = K(0, "yogurt"), tBitis = K(0, "plain") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [170, 80, 1580])}>
        <Etiket t={t} bas={K(0, "Kefir")} bitis={K(1, "Neither")} capa={[1340, 420]} konum={[1640, 560]} metin="KEFIR" renk={RENK.altin} />
        <Etiket t={t} bas={tYog} bitis={K(1, "Neither")} capa={[440, 520]} konum={[390, 330]} metin="PLAIN YOGURT" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "modest,")} bitis={tBitis + 0.2} satirlar={["MODEST,", "MIXED CHANGES"]} x={80} y={150} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Pill t={t} bas={K(0, "fewer")} metin="FEWER DIRECT TESTS" x={520} y={90} renk={RENK.yesil} bitis={K(1, "Neither") - 0.1} />
      <Pill t={t} bas={K(1, "proven")} metin="NOT PROVEN BETTER" x={520} y={90} />
      <Pill t={t} bas={K(1, "prevent")} metin="NOT PROVEN TO PREVENT DISEASE" x={520} y={170} renk={RENK.mercan} />
    </>
  );
};

export default S58;
