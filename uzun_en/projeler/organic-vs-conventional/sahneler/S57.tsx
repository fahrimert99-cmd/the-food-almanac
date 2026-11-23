// Sahne 57 — Fransız kanser bağı: sinyal, kanıt değil (çalışma masası).
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFr = K(0, "French"), tSig = K(0, "signal"), tNot = K(0, "not proof");
  const tDiff = K(1, "differed"), tMeas = K(1, "never measured");
  const [s1, a1] = pop(t, tDiff, 0.5);
  const [s2, a2] = pop(t, tMeas, 0.5);
  const yz = 870;
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [60, 100, 1760])}>
        <></>
      </Kamera>
      <Etiket t={t} bas={tFr} bitis={tDiff} capa={[600, 430]} konum={[620, 230]} metin="FRENCH CANCER LINK" renk={RENK.lacivert} />
      <Baslik t={t} bas={tSig} bitis={tDiff} metin="A SIGNAL" x={1860} y={160} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={tNot} bitis={tDiff} metin="NOT PROOF" x={1860} y={240} boyut={80} renk={RENK.mercan} hiza="sag" />
      <div style={{ position: "absolute", left: 120, top: yz, opacity: a1, transform: `scale(${s1})`, transformOrigin: "0 50%" }}>
        <Hap metin="DIFFERED IN MANY WAYS" renk={RENK.altin} />
      </div>
      <div style={{ position: "absolute", left: 960, top: yz, opacity: a2, transform: `scale(${s2})`, transformOrigin: "0 50%" }}>
        <Hap metin="PESTICIDES NEVER MEASURED" renk={RENK.mercan} />
      </div>
      <Ikon t={t} bas={tMeas + 0.1} ad="carpi" x={915} y={yz + 30} boyut={64} zemin={RENK.mercan} />
    </>
  );
};

export default S57;
