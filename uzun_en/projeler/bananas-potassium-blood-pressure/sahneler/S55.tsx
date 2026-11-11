// Sahne 55 — Kapanış mesajı: nazik alışkanlıklar. Kahvaltı masası; üstte başlık, muz dilimi etiketi, "tüm plan değil" hapı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMed = K(0, "medicines"), tGentle = K(0, "gentle"), tBan = K(0, "banana"), tNot = K(1, "Just not");
  const [s1, a1] = pop(t, tMed, 0.5);
  const [s2, a2] = pop(t, tNot, 0.55);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={tBan} capa={[930, 715]} konum={[900, 500]} metin="BANANA" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 960, top: 190, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="WITH YOUR DOCTOR'S MEDICINES" renk={RENK.lacivert} boyut={32} />
      </div>
      <Baslik t={t} bas={tGentle} metin="GENTLE HABITS" x={960} y={310} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 1560, top: 440, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="NOT THE WHOLE PLAN" renk={RENK.mercan} boyut={38} />
      </div>
    </>
  );
};

export default S55;
