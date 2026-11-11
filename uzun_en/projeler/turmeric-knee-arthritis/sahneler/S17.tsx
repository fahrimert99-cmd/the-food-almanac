// Sahne 17 — Tasmanya denemesi: 70 yetişkin, 12 hafta.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,0) scale(${sc})`, opacity: al, background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5,
      color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son = 11.4;
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1750])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} y={30} />
      <VurguRozet t={t} bas={K(0, "70")} bitis={son} vurgu="70" not="ADULTS" x={1640} y={160} genislik={340} />
      <Etiket t={t} bas={K(0, "turmeric")} bitis={son} capa={[710, 470]} konum={[1000, 160]} metin="TURMERIC EXTRACT" renk={RENK.altin} />
      <Not t={t} bas={K(0, "visible swelling")} bitis={son} metin="KNEE OSTEOARTHRITIS, VISIBLE SWELLING INSIDE THE JOINT"
        x={1640} y={470} hiza="orta" genislik={440} boyut={30} agirlik={800} />
      <BaslikBlok t={t} bas={K(1, "twelve")} satirlar={["12 WEEKS"]} x={1860} y={200} boyut={130} hiza="sag" />
      <Etiket t={t} bas={K(1, "two capsules")} capa={[710, 470]} konum={[1000, 160]} metin="2 CAPSULES A DAY" renk={RENK.altin} />
      <Hap t={t} bas={K(1, "either")} metin="TURMERIC EXTRACT" x={1600} y={560} renk={RENK.altin} />
      <Hap t={t} bas={K(1, "or placebo")} metin="OR PLACEBO" x={1600} y={650} renk={RENK.lacivert} />
    </>
  );
};

export default S17;
