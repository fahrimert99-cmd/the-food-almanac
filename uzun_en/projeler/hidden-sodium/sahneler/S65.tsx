// Sahne 65 — kapanış kartı: abone ol, sadece eğitim amaçlı, görüşmek üzere.
import React from "react";
import { BolumKarti, Hap, RENK, SP, eout, ilerle, kelimeZamani, sol } from "../kutuphane";

const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/63", kirp: [700, 200, 1840, 1055] },
  { gorsel: "tam/64", kirp: [380, 60, 1380, 810] },
];

// altyazı altındaki tek senkron öğe sırayla değişir
const S65: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const adim = [
    { bas: K(0, "subscribe"), bit: K(1, "This") - 0.1, m: "SUBSCRIBE", r: RENK.mercan },
    { bas: K(1, "education"), bit: K(2, "See") - 0.1, m: "EDUCATION ONLY", r: RENK.altin },
    { bas: K(2, "See"), bit: 1e9, m: "SEE YOU IN THE NEXT ONE", r: RENK.yesil },
  ];
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800 }}>
        {adim.map((a) => {
          const o = eout(ilerle(t, a.bas, 0.4)) * sol(t, a.bit, 0.3);
          return o > 0 ? (
            <div key={a.m} style={{ position: "absolute", left: 0, top: 0, opacity: o, transform: `translateY(${(1 - o) * 12}px)`, whiteSpace: "nowrap" }}>
              <Hap metin={a.m} renk={a.r} boyut={34} />
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};

export default S65;
