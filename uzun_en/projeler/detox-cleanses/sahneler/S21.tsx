// Sahne 21 — bağırsak bakterileri kaydı, idrar belirteci ve iyilik hali puanları.
import React from "react";
import { Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "urine") - 0.1;
  const [sa, aa] = pop(t, K(0, "day four"), 0.5);
  const [sb, ab] = pop(t, K(0, "day 17"), 0.5);
  const f = sol(t, bit);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "bacteria")} capa={[800, 590]} konum={[560, 960 - 80]} metin="GUT BACTERIA" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 1660, top: 150, transform: `translate(-50%,-50%) scale(${sa})`, opacity: aa * f }}>
        <Hap metin="DAY 4 · SHIFTED" renk={RENK.mercan} boyut={30} /></div>
      <div style={{ position: "absolute", left: 1660, top: 260, transform: `translate(-50%,-50%) scale(${sb})`, opacity: ab * f }}>
        <Hap metin="DAY 17 · PARTLY BACK" renk={RENK.yesil} boyut={30} /></div>
      <Liste t={t} x={1450} y={120} aralik={190} boyut={30} isaret="onay" genislik={430}
        ogeler={[{ bas: K(1, "urine"), metin: "URINE MARKER OF FAT DAMAGE: DOWN", renk: RENK.yesil },
          { bas: K(1, "well-being"), metin: "WELL-BEING SCORES: UP", renk: RENK.yesil }]} />
    </>
  );
};

export default S21;
