// Sahne 6 — sakaroz = glikoz + früktoz; bağlı ve ayrık altıgenler
import React from "react";
import { Baslik, Etiket, Kamera, INTER, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Altigen: React.FC<{ x: number; y: number; r: number; renk: string; sc: number; al: number }> = ({ x, y, r, renk, sc, al }) => {
  const p = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i + Math.PI / 6;
    return `${(x + r * Math.cos(a)).toFixed(1)},${(y + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  return <polygon points={p} fill={renk} stroke={RENK.murekkep} strokeWidth={4} opacity={al}
    style={{ transformOrigin: `${x}px ${y}px`, transform: `scale(${sc})` }} />;
};

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tBag = K(0, "joins"), tAyir = K(1, "splits");
  const ayr = eout(ilerle(t, tAyir, 0.9));
  const r = 66, yH = 740, cx = 1480;
  const d = 61 + (r * 1.732 * 0.5 + 18) * ayr; // bağlıyken değer, ayrılınca açılır
  const [sc1, a1] = pop(t, tBag, 0.5), [sc2, a2] = pop(t, tBag + 0.15, 0.5);
  const aE = eout(ilerle(t, K(0, "glucose"), 0.4)), aF = eout(ilerle(t, K(0, "fructose"), 0.4));
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(1, "honey")} capa={[400, 520]} konum={[830, 330]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "Table")} bitis={5.9} capa={[560, 760]} konum={[850, 620]} metin="TABLE SUGAR" renk={RENK.mercan} />
      </Kamera>
      {[["sucrose,", RENK.lacivert], ["glucose", RENK.lacivert], ["fructose", RENK.koyuYesil]].map(([w, c], k) => (
        <Baslik key={k} t={t} bas={K(0, w)} metin={b.satirlar[k]} x={1860} y={150 + k * 112} boyut={100} hiza="sag" renk={c} />
      ))}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <Altigen x={cx - d} y={yH} r={r} renk={RENK.altin} sc={sc1} al={a1} />
        <Altigen x={cx + d} y={yH} r={r} renk={RENK.mercan} sc={sc2} al={a2} />
        <text x={cx - d - 40 * (1 - ayr)} y={yH + 118} textAnchor="middle" opacity={aE * a1} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, fill: RENK.altin }}>GLUCOSE</text>
        <text x={cx + d + 40 * (1 - ayr)} y={yH + 118} textAnchor="middle" opacity={aF * a2} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, fill: RENK.mercan }}>FRUCTOSE</text>
      </svg>
      <Not t={t} bas={tAyir} metin="YOUR GUT SPLITS IT" x={cx} y={560} hiza="orta" boyut={40} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={K(1, "same two")} metin="SAME TWO SUGARS" x={cx} y={900} hiza="orta" boyut={34} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S06;
