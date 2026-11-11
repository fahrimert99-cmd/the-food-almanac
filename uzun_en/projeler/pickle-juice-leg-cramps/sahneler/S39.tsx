// Sahne 39 — panik gerekmez; en iyi çalışmalar çoğu yaşlıda fayda göstermiyor; eczacıya danış.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNeed = K(0, "no need"), tMag = K(0, "magnesium,");
  const tBest = K(1, "best"), tBen = K(1, "benefit"), tOld = K(1, "older"), tPh = K(1, "pharmacist"), tCost = K(1, "worth");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720]);
  const gec = tPh - 0.2;
  const satir = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: 1620, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al * sol(t, gec) }}>
        <Hap metin={metin} renk={renk} boyut={26} />
      </div>
    );
  };
  const [sC, aC] = pop(t, tCost, 0.5);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={p} />
      <Baslik t={t} bas={tNeed} bitis={3.6} metin="NO NEED TO PANIC" x={960} y={100} boyut={90} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={tMag} capa={[1020, 560]} konum={[1520, 200]} metin="MAGNESIUM" renk={RENK.koyuYesil} boyut={28} />
      {satir(tBest, "THE BEST TRIALS", RENK.altin, 480)}
      {satir(tBen, "NO BENEFIT SHOWN", RENK.mercan, 570)}
      {satir(tOld, "MOST OLDER ADULTS", RENK.lacivert, 660)}
      <Etiket t={t} bas={tPh} capa={[560, 440]} konum={[520, 90]} metin="ASK YOUR PHARMACIST" renk={RENK.yesil} boyut={30} />
      <div style={{ position: "absolute", left: 1620, top: 480, transform: `translate(-50%,-50%) scale(${sC})`, opacity: aC }}>
        <Hap metin="WORTH THE COST?" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S39;
