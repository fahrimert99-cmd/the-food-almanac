// Sahne 61 — özet: magnezyum ve germe.
import React from "react";
import { Etiket, Hap, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kam}>
        <Etiket t={t} bas={K(0, "Magnesium")} bitis={2.8} capa={[380, 560]} konum={[380, 100]} metin="MAGNESIUM" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Stretching")} capa={[1450, 520]} konum={[1380, 175]} metin="STRETCHING" renk={RENK.yesil} />
      </Kamera>
      <Pill t={t} bas={K(0, "beat a placebo")} bitis={4.1} x={1000} y={100} metin="NOT CLEARLY BETTER THAN PLACEBO" renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin="Garrison et al. · Cochrane · 2020" bas={K(0, "Cochrane")} bitis={4.1} y={48} />
      <Pill t={t} bas={K(1, "low-certainty")} x={1380} y={255} metin="LOW-CERTAINTY EVIDENCE" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "55")} vurgu="55+" not="people 55 and older" x={960} y={90} genislik={320} boyut={90} renk={RENK.koyuYesil} />
    </>
  );
};

export default S61;
