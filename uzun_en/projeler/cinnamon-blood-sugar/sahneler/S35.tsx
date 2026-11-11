// Sahne 35 — Avrupa TDI: 0,1 mg/kg × 60 kg = 6 mg/gün. Görsel solda, hesap sağda.
import React from "react";
import { AbsoluteFill, ANTON, AltSis, BaslikBlok, INTER, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Isaret: React.FC<{ t: number; bas: number; x: number; y: number; m: string }> = ({ t, bas, x, y, m }) => {
  const [sc, al] = pop(t, bas, 0.45);
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
    fontFamily: ANTON, fontSize: 80, color: RENK.lacivert }}>{m}</div>;
};

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const t60 = K(1, "60"), tEs = K(1, "that's"), t6 = K(1, "6 milligrams");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])} />
      <AltSis a={0.4} />
      <Not t={t} bas={K(0, "European")} x={1100} y={100} metin="TOLERABLE DAILY INTAKE" boyut={28} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "0.1")} vurgu="0.1 MG" not="coumarin per kg body weight" x={1270} y={170} genislik={400} boyut={84} />
      <Isaret t={t} bas={t60 - 0.1} x={1500} y={225} m="×" />
      <VurguRozet t={t} bas={t60} vurgu="60 KG" not="adult" x={1680} y={170} genislik={280} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "132")} x={1680} y={370} hiza="orta" metin="about 132 lb" boyut={28} agirlik={800} renk={RENK.gri} />
      <Isaret t={t} bas={tEs} x={1130} y={400} m="=" />
      <BaslikBlok t={t} bas={t6} satirlar={b.satirlar} x={1100} y={640} boyut={150} renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <Not t={t} bas={K(1, "a day")} x={1104} y={880} genislik={700} metin={b.not ?? ""} boyut={30} />
    </AbsoluteFill>
  );
};

export default S35;
