// Sahne 42 — Pişirme sadece kayıp değildir; en iyi yöntem sebzeye ve besine bağlıdır. Sol alttaki imza kamerayla dışarıda.
import React from "react";
import { Baslik, Hap, Kamera, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCook = K(0, "cooking"), tLost = K(1, "lost"), tOthers = K(1, "others"), tBest = K(1, "the best method"),
    tVeg = K(1, "vegetable"), tNut = K(1, "nutrient you");
  const pL = pop(t, tLost, 0.5), pO = pop(t, tOthers, 0.5), pV = pop(t, tVeg, 0.55), pN = pop(t, tNut, 0.55);
  const aOrtu = 0.9 * eout(ilerle(t, tBest - 0.1, 0.7));
  const hap = (p: number[], m: string, renk: string, x: number, y: number, b: number, o = "0 50%") => p[1] > 0 && (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${p[0]})`, transformOrigin: o, opacity: p[1] }}>
      <Hap metin={m} renk={renk} boyut={b} />
    </div>
  );
  return (
    <>
      {/* pencere x >= 280: imza (x<270) görünmez */}
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [300, 40, 1560], [360, 90, 1480])} />
      <Baslik t={t} bas={tCook} metin="COOKING ISN'T" x={70} y={115} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tCook + 0.4} metin="SIMPLY A LOSS" x={70} y={200} boyut={80} renk={RENK.koyuYesil} />
      {hap(pL, "SOME NUTRIENTS LOST", RENK.mercan, 70, 270, 26)}
      {hap(pO, "OTHERS: EASIER TO EXTRACT", RENK.yesil, 70, 330, 26)}
      <Ortu a={aOrtu} />
      <Baslik t={t} bas={tBest + 0.1} metin="THE BEST METHOD DEPENDS ON" x={960} y={330} boyut={72} hiza="orta" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 480, display: "flex", justifyContent: "center", alignItems: "center", gap: 40 }}>
        <div style={{ transform: `scale(${pV[0]})`, opacity: pV[1] }}><Hap metin="THE VEGETABLE" renk={RENK.yesil} boyut={54} /></div>
        <span style={{ fontFamily: "Anton", fontSize: 70, color: RENK.altin, opacity: pN[1] * (t >= tNut ? 1 : 0) }}>+</span>
        <div style={{ transform: `scale(${pN[0]})`, opacity: pN[1] }}><Hap metin="THE NUTRIENT" renk={RENK.altin} boyut={54} /></div>
      </div>
    </>
  );
};

export default S42;
