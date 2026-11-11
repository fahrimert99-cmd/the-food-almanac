// Sahne 48 — Kısa liste iyi işaret, uzun liste daha dikkatli bak: sağda iki aşamalı panel (yeşil → mercan).
import React from "react";
import { Baslik, Ikon, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLong = K(1, "long list");
  const son = tLong - 0.15;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 50, 1740])} />
      {/* 1. aşama: kısa liste */}
      <Baslik t={t} bas={K(0, "short list")} bitis={son} metin="SHORT LIST" x={1080} y={170} boyut={110} renk={RENK.koyuYesil} />
      <Liste t={t} x={1080} y={270} aralik={78} boyut={34} isaret="onay" genislik={760} ogeler={[
        { bas: K(0, "no vinegar"), metin: "NO VINEGAR", bitis: son },
        { bas: K(0, "no added"), metin: "NO ADDED SOUR FLAVORING", bitis: son },
      ]} />
      <Baslik t={t} bas={K(0, "good sign")} bitis={son} metin="GOOD SIGN" x={1160} y={500} boyut={96} renk={RENK.yesil} />
      <Ikon t={t} bas={K(0, "good sign")} bitis={son} ad="onay" x={1100} y={500} boyut={78} />
      {/* 2. aşama: uzun liste */}
      <Baslik t={t} bas={tLong} metin="LONG LIST" x={1080} y={170} boyut={110} renk={RENK.mercan} />
      <Liste t={t} x={1080} y={270} aralik={78} boyut={34} isaret="carpi" genislik={760} ogeler={[
        { bas: K(1, "dough conditioners"), metin: "DOUGH CONDITIONERS", renk: RENK.mercan },
        { bas: K(1, "flavorings"), metin: "FLAVORINGS", renk: RENK.mercan },
      ]} />
      <Baslik t={t} bas={K(1, "look harder")} metin="LOOK HARDER" x={1160} y={500} boyut={96} renk={RENK.altin} />
      <Ikon t={t} bas={K(1, "look harder")} ad="uyari" x={1100} y={500} boyut={78} zemin={RENK.altin} />
    </>
  );
};

export default S48;
