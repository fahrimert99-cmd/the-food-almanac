// Sahne 8 — ALA ile EPA/DHA farkı: ceviz ve somon etiketleri, "aynı şey değil" başlığı.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKucuk = K(1, "only a small");
  const tAla = K(1, "ALA");
  const tBalik = K(1, "found in fish");
  const tEpa = K(1, "EPA");
  const tDha = K(1, "DHA");
  const tAyni = K(2, "walnuts");
  const tDegil = K(2, "not");
  const [s1, a1] = pop(t, tEpa, 0.45);
  const [s2, a2] = pop(t, tDha, 0.45);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tAla} capa={[480, 440]} konum={[480, 215]} metin="WALNUTS: ALA" renk={RENK.altin} />
        <Etiket t={t} bas={tBalik} capa={[1400, 520]} konum={[1413, 215]} metin="OMEGA-3 IN FISH" renk={RENK.mercan} />
        <Ikon t={t} bas={tDegil} ad="carpi" x={933} y={507} boyut={96} zemin={RENK.mercan} />
      </Kamera>
      {/* 1. cümle başlığı, 2. cümlede "aynı şey değil" ile yer değiştirir */}
      <Baslik t={t} bas={tKucuk} bitis={tAyni - 0.1} metin="ONLY A SMALL AMOUNT" x={960} y={112} boyut={72} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={tAyni} metin="NOT THE SAME THING" x={960} y={112} boyut={72} hiza="orta" renk={RENK.mercan} />
      {/* EPA ve DHA hapları */}
      <div style={{ position: "absolute", left: 1413, top: 905, transform: "translate(-50%, -50%)", display: "flex", gap: 24 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="EPA" renk={RENK.mercan} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="DHA" renk={RENK.mercan} /></div>
      </div>
    </>
  );
};

export default S08;
