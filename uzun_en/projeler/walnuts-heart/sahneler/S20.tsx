// Sahne 20 — katılımcı sayıları (708 → 636 → 628) ve temel özellikler.
import React from "react";
import { AltSis, Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; bitis: number; metin: string; x: number; renk: string }> = ({ t, bas, bitis, metin, x, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: 770, transform: `translate(-50%,0) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "708"), t2 = K(0, "636"), t3 = K(0, "628"), tO = K(0, "measurements.");
  const tYas = K(1, "69"), tKad = K(1, "two thirds"), tSta = K(1, "about one"), tSans = K(2, "assigned");
  const e1 = K(1, "The") - 0.15, e2 = K(2, "Because") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1800])} />
      <AltSis a={0.5} />
      <VurguRozet t={t} bas={t1} vurgu="708" not="JOINED" x={500} y={700} genislik={340} bitis={e1} />
      <VurguRozet t={t} bas={t2} vurgu="636" not="FINISHED" x={960} y={700} genislik={340} bitis={e1} />
      <VurguRozet t={t} bas={t3} vurgu="628" not="FULL CHOLESTEROL DATA" x={1420} y={700} genislik={440} bitis={e1} />
      <Etiket t={t} bas={K(0, "cholesterol")} bitis={e1} capa={[680, 400]} konum={[760, 170]} metin="CHOLESTEROL TESTS" renk={RENK.altin} />
      <Cip t={t} bas={tYas} bitis={e2} metin="AVERAGE AGE 69" x={400} renk={RENK.lacivert} />
      <Cip t={t} bas={tKad} bitis={e2} metin="TWO THIRDS WOMEN" x={960} renk={RENK.yesil} />
      <Cip t={t} bas={tSta} bitis={e2} metin="1 IN 3 TOOK A STATIN" x={1530} renk={RENK.altin} />
      <Baslik t={t} bas={tSans} metin="ASSIGNED BY CHANCE" x={960} y={150} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Cip t={t} bas={K(2, "two")} bitis={1e9} metin="WALNUT GROUP" x={600} renk={RENK.yesil} />
      <Cip t={t} bas={K(2, "groups")} bitis={1e9} metin="WALNUT-FREE GROUP" x={1320} renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "similar")} metin="≈" x={960} y={800} boyut={90} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};
export default S20;
