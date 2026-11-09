// Sahne 36 — 5 çalışma, 271 kişi; magnezyum plaseboyu anlamlı şekilde geçemedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(0, "Five"), t271 = K(0, "271");
  const tMag = K(1, "Magnesium"), tSig = K(1, "significantly"), tPla = K(1, "placebo,");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1740]);
  const b = s.meta.baslik ?? { satirlar: ["MAGNESIUM", "VS PLACEBO"], not: "" };
  return (
    <>
      <Kamera gorsel="tam/36" pencere={p} />
      <VurguRozet t={t} bas={t271} bitis={tMag - 0.2} vurgu="271" not="people · cramps with no known cause" x={470} y={90} genislik={560} renk={RENK.altin} />
      <Not t={t} bas={tFive} bitis={tMag - 0.2} metin="5 OF THOSE TRIALS" x={470} y={330} hiza="orta" boyut={28} agirlik={800} />
      <BaslikBlok t={t} bas={tMag} satirlar={b.satirlar} x={100} y={140} boyut={110} renkler={[RENK.koyuYesil, RENK.mercan]} />
      <Not t={t} bas={tSig} metin={b.not ?? ""} x={104} y={360} boyut={34} />
      <Etiket t={t} bas={tMag + 0.3} capa={[1120, 700]} konum={[1560, 440]} metin="MAGNESIUM" renk={RENK.koyuYesil} boyut={28} />
      <Etiket t={t} bas={tPla} capa={[470, 650]} konum={[760, 470]} metin="PLACEBO" renk={RENK.altin} boyut={28} />
    </>
  );
};

export default S36;
