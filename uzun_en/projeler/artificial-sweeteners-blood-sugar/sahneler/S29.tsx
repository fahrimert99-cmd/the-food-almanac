// Sahne 29 — farklı sorular: kısa pencere vs iki hafta (şematik)
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};
const Cubuk: React.FC<{ t: number; bas: number; y: number; w: number; renk: string; ad: string }> = ({ t, bas, y, w, renk, ad }) => {
  const p = eout(ilerle(t, bas, 0.9)), a = eout(ilerle(t, bas, 0.4));
  return (
    <>
      <Gel t={t} bas={bas} style={{ left: 1040, top: y - 60 }}><div style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 32, color: RENK.lacivert, letterSpacing: 1 }}>{ad}</div></Gel>
      <div style={{ position: "absolute", left: 1040, top: y, width: 820, height: 26, borderRadius: 13, background: "rgba(27,42,65,0.10)", opacity: a }} />
      <div style={{ position: "absolute", left: 1040, top: y, width: w * p, height: 26, borderRadius: 13, background: renk, opacity: a }} />
    </>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t3 = c[3].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1760])} />
      <Gel t={t} bas={K(0, "pooled")} bitis={t3} style={{ left: 1040, top: 170 }}><Hap metin="POOLED REVIEW: NO RISE" renk={RENK.yesil} boyut={32} /></Gel>
      <Gel t={t} bas={K(0, "careful trial")} bitis={t3} style={{ left: 1040, top: 260 }}><Hap metin="CAREFUL TRIAL: SMALL RISE" renk={RENK.mercan} boyut={32} /></Gel>
      <Cubuk t={t} bas={K(1, "first hours")} y={500} w={110} renk={RENK.altin} ad="FIRST HOURS AFTER A DOSE" />
      <Cubuk t={t} bas={K(2, "two weeks")} y={680} w={820} renk={RENK.koyuYesil} ad="TWO WEEKS OF DAILY USE" />
      <Gel t={t} bas={K(1, "first hours")} style={{ left: 1040, top: 790 }}><Hap metin="ILLUSTRATIVE · NOT TO SCALE" renk={RENK.altin} boyut={22} /></Gel>
      <BaslikBlok t={t} bas={c[3].bas} satirlar={["DIFFERENT", "QUESTIONS"]} x={1040} y={190} boyut={104} adim={0.35} />
    </>
  );
};

export default S29;
