// Sahne 19 — dozlar: 0.5 / 1 / 1.5 g veya plasebo; yaş ve cinsiyet.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, bitis = 1e9, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son = K(1, "Average") - 0.25;
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 80, 1700])}>
        <Etiket t={t} bas={K(0, "capsules")} capa={[250, 380]} konum={[1000, 300]} metin="CAPSULES" renk={RENK.altin} bitis={son} />
      </Kamera>
      <Hap2 t={t} bas={K(0, "six days")} bitis={K(0, "ginger") - 0.2} metin="6 DAYS" x={1860} y={140} renk={RENK.koyuYesil} />
      <Hap2 t={t} bas={K(0, "three days")} bitis={K(0, "ginger") - 0.2} metin="STARTS 3 DAYS BEFORE" x={1860} y={240} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "half a gram")} bitis={son} satirlar={b.satirlar} x={1860} y={230} boyut={100} hiza="sag" />
      <Hap2 t={t} bas={K(0, "half a gram")} bitis={son} metin="0.5 G A DAY" x={1860} y={500} renk={RENK.yesil} />
      <Hap2 t={t} bas={K(0, "one gram")} bitis={son} metin="1 G A DAY" x={1860} y={590} renk={RENK.yesil} />
      <Hap2 t={t} bas={K(0, "one and a half")} bitis={son} metin="1.5 G A DAY" x={1860} y={680} renk={RENK.yesil} />
      <Hap2 t={t} bas={K(0, "placebo")} bitis={son} metin="OR PLACEBO" x={1860} y={770} renk={RENK.gri} />
      <VurguRozet t={t} bas={K(1, "53")} vurgu="53" not="AVERAGE AGE" x={1380} y={300} genislik={320} />
      <VurguRozet t={t} bas={K(1, "91")} vurgu="91%" not="WERE WOMEN" x={1730} y={300} genislik={320} renk={RENK.koyuYesil} />
    </>
  );
};

export default S19;
