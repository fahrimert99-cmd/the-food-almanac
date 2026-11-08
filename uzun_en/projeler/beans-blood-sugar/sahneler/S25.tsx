// Sahne 25 — Dürüst özet: yön tutarlı, büyüklük mütevazı, tam boyut belirsiz; fasulye kötü bahis değil.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // defter sayfasında liste gibi duran etiketler
  const SATIRLAR = [
    { bas: K(0, "consistent"), metin: "CONSISTENT DIRECTION", renk: RENK.yesil, y: 350, boyut: 32 },
    { bas: K(0, "modest"), metin: "MODEST SIZE", renk: RENK.altin, y: 435, boyut: 32 },
    { bas: K(1, "exactly"), metin: "EXACT SIZE UNKNOWN", renk: RENK.lacivert, y: 520, boyut: 32 },
  ];
  const [sh, ah] = pop(t, K(3, "honest"), 0.6);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [30, 20, 1860], [100, 60, 1700])} />
      {SATIRLAR.map((r) => {
        const [sc, al] = pop(t, r.bas, 0.5);
        return (
          <div key={r.metin} style={{ position: "absolute", left: 1270, top: r.y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
            <Hap metin={r.metin} renk={r.renk} boyut={r.boyut} />
          </div>
        );
      })}
      <Etiket t={t} bas={K(2, "bad")} capa={[560, 390]} konum={[330, 170]} metin="NOT A BAD BET" renk={RENK.yesil} boyut={32} />
      <div style={{ position: "absolute", left: 1270, top: 640, transform: `translate(-50%,-50%) scale(${sh})`, opacity: ah }}>
        <Hap metin="HONEST CLAIM" renk={RENK.koyuYesil} boyut={44} />
      </div>
    </>
  );
};

export default S25;
