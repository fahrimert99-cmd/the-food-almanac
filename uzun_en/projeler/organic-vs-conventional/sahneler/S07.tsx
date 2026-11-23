// Sahne 7 — üç soru birbirine karışır, sonra ayrılır; iki çalışma artık çelişmez.
import React from "react";
import { Hap, Ikon, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, einout } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBlur = K(0, "blur"), tApart = K(1, "apart"), tTwo = K(1, "two studies"), tStop = K(1, "stop");
  const ayr = einout(ilerle(t, tApart, 0.9));
  const ch = [
    { m: "NUTRIENTS", r: RENK.yesil, bx: 1420, by: 230, ax: 1190, ay: 190, aci: -7 },
    { m: "RESIDUE", r: RENK.mercan, bx: 1440, by: 250, ax: 1470, ay: 190, aci: 5 },
    { m: "HEALTH", r: RENK.altin, bx: 1410, by: 215, ax: 1710, ay: 190, aci: -3 },
  ];
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])} />
      {ch.map((c, i) => {
        const [sc, al] = pop(t, tBlur + i * 0.12, 0.5);
        const x = c.bx + (c.ax - c.bx) * ayr, y = c.by + (c.ay - c.by) * ayr, a = c.aci * (1 - ayr);
        return (
          <div key={i} style={{ position: "absolute", left: x, top: y, opacity: al,
            transform: `translate(-50%, -50%) scale(${sc}) rotate(${a}deg)` }}>
            <Hap metin={c.m} renk={c.r} boyut={30} />
          </div>
        );
      })}
      {[{ m: "FRENCH STUDY", y: 340, x: 1400, r: RENK.mercan, b: tTwo }, { m: "STANFORD REVIEW", y: 430, x: 1400, r: RENK.yesil, b: tTwo + 0.35 }].map((c) => {
        const [sc, al] = pop(t, c.b, 0.5);
        return (
          <div key={c.m} style={{ position: "absolute", left: c.x, top: c.y, opacity: al, transform: `translate(-50%, -50%) scale(${sc})` }}>
            <Hap metin={c.m} renk={c.r} boyut={30} />
          </div>
        );
      })}
      <Ikon t={t} bas={tStop} ad="onay" x={1730} y={385} boyut={72} />
    </>
  );
};

export default S07;
