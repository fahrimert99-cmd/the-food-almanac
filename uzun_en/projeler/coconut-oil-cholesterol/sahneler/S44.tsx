// Sahne 44 — BÖLÜM 5 kartı: pişirmede ne kullanmalı. Altyazının altında beş adım noktası.
import React from "react";
import { BolumKarti, ANTON, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 45 yağ şişeleri + tava, 46 kavanoz + kaşık, 47 el ve hindistancevizi (kusursuz 4:3 kırpımlar)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/45", kirp: [180, 40, 1280, 865] },
  { gorsel: "tam/46", kirp: [400, 200, 1500, 1025] },
  { gorsel: "tam/47", kirp: [100, 200, 900, 800] },
];

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bas = K(1, "five");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4, 5].map((n) => {
          const [sc, al] = pop(t, bas + (n - 1) * 0.16, 0.45);
          return (
            <div key={n} style={{ width: 72, height: 72, borderRadius: "50%", background: n === 1 ? RENK.altin : RENK.lacivert, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 40, opacity: al, transform: `scale(${sc})`,
              boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S44;
