// Sahne 12 — karşılaştırma ve dört form: nesnelere etiketler
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "People") - 0.2;
  const [sc, al] = pop(t, K(1, "four"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [70, 130, 1780])}>
        <Etiket t={t} bas={K(1, "juice")} capa={[400, 450]} konum={[400, 250]} metin="JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "capsules")} capa={[745, 440]} konum={[745, 250]} metin="CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "tablets")} capa={[1140, 540]} konum={[1140, 250]} metin="TABLETS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "powder")} capa={[1500, 640]} konum={[1500, 250]} metin="POWDER" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle: karşılaştırma */}
      <Not t={t} bas={K(0, "compared")} bitis={cik} metin="CRANBERRY COMPARED WITH" x={960} y={85} boyut={32} agirlik={800} hiza="orta" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "placebo")} bitis={cik} metin="PLACEBO" x={960} y={170} boyut={100} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "no")} bitis={cik} metin="OR NO TREATMENT" x={960} y={255} boyut={64} hiza="orta" renk={RENK.koyuYesil} />
      {/* 2. cümle: süre */}
      <div style={{ position: "absolute", left: 960, top: 840, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "12px 34px 12px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, whiteSpace: "nowrap" }}>
        <IkonYol ad="saat" boyut={40} renk="#fff" />
        EACH TRIAL: AT LEAST 4 WEEKS
      </div>
    </>
  );
};
export default S12;
